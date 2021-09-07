import React from "react";

import { GoogleAuthProvider } from "firebase/auth";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { BrowserRouter as Router } from "react-router-dom";

import { CMSAppProps } from "./CMSAppProps";
import { CMSMainView } from "./CMSMainView";
import { CMSAppProvider } from "./CMSAppProvider";
import { CircularProgressCenter, FirebaseLoginView } from "./components";
import { createCMSDefaultTheme } from "./theme";
import { initialiseFirebase } from "./initialiseFirebase";
import { AuthController } from "../contexts";
import { useFirebaseAuthHandler } from "../hooks";
import {
    EntityLinkBuilder,
    useFirebaseStorageSource,
    useFirestoreDataSource
} from "../models";
import { CMSRouterSwitch } from "./CMSRouterSwitch";

const DEFAULT_SIGN_IN_OPTIONS = [
    GoogleAuthProvider.PROVIDER_ID
];


/**
 * Main entry point for FireCMS. You can use this component as a full app,
 * by specifying collections and entity schemas.
 *
 * This component is in charge of initialising Firebase, with the given
 * configuration object.
 *
 * If you are building a larger app and need finer control, you can use
 * {@link CMSAppProvider} and {@link CMSMainView} instead.
 *
 * @param props
 * @constructor
 * @category Core
 */
export function CMSApp({
                           name,
                           logo,
                           toolbarExtraWidget,
                           authentication,
                           schemaResolver,
                           navigation,
                           allowSkipLogin,
                           signInOptions,
                           firebaseConfig,
                           onFirebaseInit,
                           primaryColor,
                           secondaryColor,
                           fontFamily,
                           dateTimeFormat,
                           locale
                       }: CMSAppProps) {

    const {
        firebaseApp,
        firebaseConfigLoading,
        configError,
        firebaseConfigError
    } = initialiseFirebase({ onFirebaseInit, firebaseConfig });

    const authController: AuthController = useFirebaseAuthHandler({
        firebaseApp,
        authentication
    });

    if (configError) {
        return <div> {configError} </div>;
    }

    if (firebaseConfigError) {
        return <div>
            It seems like the provided Firebase config is not correct. If you
            are using the credentials provided automatically by Firebase
            Hosting, make sure you link your Firebase app to Firebase
            Hosting.
        </div>;
    }

    if (firebaseConfigLoading || !firebaseApp) {
        return <CircularProgressCenter/>;
    }

    const dataSource = useFirestoreDataSource({ firebaseApp: firebaseApp! });
    const storageSource = useFirebaseStorageSource({ firebaseApp: firebaseApp! });

    const mode: "light" | "dark" = "light";
    const theme = createCMSDefaultTheme({
        mode,
        primaryColor,
        secondaryColor,
        fontFamily
    });

    const entityLinkBuilder: EntityLinkBuilder = ({ entity }) => `https://console.firebase.google.com/project/${firebaseApp.options.projectId}/firestore/data/${entity.path}/${entity.id}`;

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <Router>
                <CMSAppProvider navigation={navigation}
                                authController={authController}
                                schemaResolver={schemaResolver}
                                dateTimeFormat={dateTimeFormat}
                                dataSource={dataSource}
                                storageSource={storageSource}
                                entityLinkBuilder={entityLinkBuilder}
                                locale={locale}>
                    {({ context }) => {

                        if (context.authController.authLoading || !context.navigation) {
                            return <CircularProgressCenter/>;
                        }

                        if (!context.authController.canAccessMainView) {
                            return (
                                <FirebaseLoginView
                                    logo={logo}
                                    skipLoginButtonEnabled={allowSkipLogin}
                                    signInOptions={signInOptions ?? DEFAULT_SIGN_IN_OPTIONS}
                                    firebaseApp={firebaseApp}/>
                            );
                        }

                        return <CMSMainView name={name}
                                            logo={logo}
                                            toolbarExtraWidget={toolbarExtraWidget}>
                            <CMSRouterSwitch navigation={context.navigation}/>
                        </CMSMainView>;
                    }}
                </CMSAppProvider>
            </Router>
        </ThemeProvider>
);
}
