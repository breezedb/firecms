module.exports = {
    docsSidebar: [
        {
            type: 'doc',
            label: 'Introduction',
            id: 'intro'
        },
        'quickstart',
        'cms_config',
        {
            type: 'category',
            label: 'Default views',
            items: [
                'entity_schemas',
                'entity_schemas_advanced',
                'collections',
                {
                    type: 'category',
                    label: 'Properties',
                    items: [
                        'properties/string',
                        'properties/number',
                        'properties/boolean',
                        'properties/reference',
                        'properties/timestamp',
                        'properties/array',
                        'properties/map',
                        'properties/geopoint'
                    ]
                },
                'custom_fields',
                'custom_previews',
                'custom_schema_views'
            ]
        },
        {
            type: 'category',
            label: 'Custom main views',
            items: [
                'custom_main_views',
                'contexts/hooks'
            ]
        },
        'firebase_setup',
        'deployment',
        'changelog'
    ],

    apiSidebar: [
        {
            type: 'autogenerated',
            dirName: 'api'
        },
        // 'api/index',
        // 'api/functions/cmsapp',
        // {
        //     type: 'category',
        //     label: 'Core',
        //     items: [
        //         {
        //             type: 'category',
        //             label: 'Types',
        //             items: [
        //                 'api/interfaces/user',
        //                 'api/interfaces/cmsappprops',
        //                 'api/interfaces/cmsview',
        //                 'api/interfaces/schemaconfig',
        //                 'api/interfaces/navigation',
        //                 'api/types/navigationbuilder',
        //                 'api/types/navigationbuilderprops',
        //                 'api/types/schemaresolver',
        //                 'api/types/authenticator',
        //             ]
        //         },
        //         {
        //             type: 'category',
        //             label: 'Builders',
        //             items: [
        //                 'api/functions/buildadditionalcolumndelegate',
        //                 'api/functions/buildcollection',
        //                 'api/functions/buildenumvalueconfig',
        //                 'api/functions/buildenumvalues',
        //                 'api/functions/buildnavigation',
        //                 'api/functions/buildproperties',
        //                 'api/functions/buildpropertiesorbuilder',
        //                 'api/functions/buildproperty',
        //                 'api/functions/buildpropertyfrom',
        //                 'api/functions/buildschema',
        //             ]
        //         },
        //         {
        //             type: 'category',
        //             label: 'Custom app',
        //             items: [
        //                 'api/functions/cmsappprovider',
        //                 'api/interfaces/cmsappproviderprops',
        //                 'api/functions/cmsmainview',
        //                 'api/interfaces/cmsmainviewprops'
        //             ]
        //         },
        //         {
        //             type: 'category',
        //             label: 'Components',
        //             items: [
        //                 'api/functions/entitycollectiontable',
        //                 'api/functions/entitypreview',
        //                 'api/functions/errorview',
        //                 'api/functions/referencedialog'
        //             ]
        //         }
        //     ]
        // },
        // {
        //     type: 'category',
        //     label: 'Entity schemas',
        //     items: [
        //         'api/interfaces/entityschema',
        //         {
        //             type: 'category',
        //             label: 'Properties',
        //             items: [
        //                 'api/interfaces/stringproperty',
        //                 'api/interfaces/numberproperty',
        //                 'api/interfaces/booleanproperty',
        //                 'api/interfaces/mapproperty',
        //                 'api/interfaces/arrayproperty',
        //                 'api/interfaces/timestampproperty',
        //                 'api/interfaces/referenceproperty',
        //                 'api/interfaces/geopointproperty'
        //             ]
        //         },
        //         {
        //             type: 'category',
        //             label: 'Types',
        //             items: [
        //                 'api/interfaces/entity',
        //                 'api/interfaces/entityondeleteprops',
        //                 'api/interfaces/entityonsaveprops',
        //                 'api/interfaces/entityschema',
        //                 'api/types/entitystatus',
        //                 'api/types/entityvalues',
        //                 'api/types/entitycustomview',
        //                 'api/types/entitycustomviewparams',
        //                 'api/interfaces/fieldconfig',
        //                 'api/interfaces/stringfieldconfig',
        //                 'api/interfaces/storagemeta',
        //                 'api/interfaces/numberfieldconfig',
        //                 'api/interfaces/mapfieldconfig',
        //                 'api/interfaces/propertyvalidationschema',
        //                 'api/interfaces/stringpropertyvalidationschema',
        //                 'api/interfaces/numberpropertyvalidationschema',
        //                 'api/interfaces/arraypropertyvalidationschema',
        //                 'api/interfaces/timestamppropertyvalidationschema',
        //                 'api/types/cmstype',
        //                 'api/types/datatype',
        //                 'api/types/enumtype',
        //                 'api/types/enumvalueconfig',
        //                 'api/types/enumvalues',
        //                 'api/types/mediatype',
        //                 'api/types/properties',
        //                 'api/types/propertiesorbuilder',
        //                 'api/types/property',
        //                 'api/types/propertybuilder',
        //                 'api/types/propertybuilderprops',
        //                 'api/types/propertydisabledconfig',
        //                 'api/types/propertyorbuilder',
        //                 'api/types/storagefiletypes',
        //                 'api/types/uploadedfilecontext',
        //                 'api/types/chipcolor',
        //                 'api/types/locale'
        //             ]
        //         }
        //     ]
        // },
        // {
        //     type: 'category',
        //     label: 'Collections',
        //     items: [
        //         'api/interfaces/entitycollection',
        //         {
        //             type: 'category',
        //             label: 'Components',
        //             items: [
        //                 'api/functions/collectiontable'
        //             ]
        //         },
        //         {
        //             type: 'category',
        //             label: 'Types',
        //             items: [
        //                 'api/interfaces/collectiontableprops',
        //                 'api/interfaces/additionalcolumndelegate',
        //                 'api/interfaces/textsearchdelegate',
        //                 'api/functions/algoliatextsearchdelegate',
        //                 'api/types/collectionsize',
        //                 'api/types/exportconfig',
        //                 'api/types/exportmappingfunction',
        //                 'api/types/compositeindex',
        //                 'api/types/extraactionsparams',
        //                 'api/types/filtervalues',
        //                 'api/types/permissions',
        //                 'api/types/permissionsbuilder',
        //                 'api/types/permissionsbuilderprops',
        //                 'api/types/wherefilterop',
        //                 'api/types/oncellvaluechange',
        //                 'api/types/oncellvaluechangeparams',
        //                 'api/types/uniquefieldvalidator',
        //             ]
        //         }
        //     ]
        // },
        // {
        //     type: 'category',
        //     label: 'Form fields',
        //     items: [
        //         {
        //             type: 'category',
        //             label: 'Native form fields',
        //             items: [
        //                 'api/functions/arraydefaultfield',
        //                 'api/functions/arrayenumselect',
        //                 'api/functions/arrayofreferencesfield',
        //                 'api/functions/arrayoneoffield',
        //                 'api/functions/datetimefield',
        //                 'api/functions/mapfield',
        //                 'api/functions/readonlyfield',
        //                 'api/functions/referencefield',
        //                 'api/functions/select',
        //                 'api/functions/markdownfield',
        //                 'api/functions/storageuploadfield',
        //                 'api/functions/switchfield',
        //                 'api/functions/textfield'
        //             ]
        //         },
        //         {
        //             type: 'category',
        //             label: 'Components',
        //             items: [
        //                 'api/functions/buildpropertyfield',
        //                 'api/functions/arraycontainer',
        //                 'api/functions/arrayentry',
        //                 'api/functions/fielddescription',
        //                 'api/functions/labelwithicon'
        //             ]
        //         },
        //         {
        //             type: 'category',
        //             label: 'Types',
        //             items: [
        //                 'api/interfaces/cmsformfieldprops',
        //                 'api/interfaces/fieldprops',
        //                 'api/interfaces/formcontext'
        //             ]
        //         }
        //     ]
        // },
        // {
        //     type: 'category',
        //     label: 'Preview',
        //     items: [
        //         'api/interfaces/previewcomponentprops',
        //         'api/types/previewsize',
        //         {
        //             type: 'category',
        //             label: 'Components',
        //             items: [
        //                 'api/functions/arrayenumpreview',
        //                 'api/functions/arrayofmapspreview',
        //                 'api/functions/arrayofreferencespreview',
        //                 'api/functions/arrayofstoragecomponentspreview',
        //                 'api/functions/arrayofstringspreview',
        //                 'api/functions/arraypreview',
        //                 'api/functions/arraypropertyenumpreview',
        //                 'api/functions/asyncpreviewcomponent',
        //                 'api/functions/booleanpreview',
        //                 'api/functions/customchip',
        //                 'api/functions/emptyvalue',
        //                 'api/functions/imagepreview',
        //                 'api/functions/mappreview',
        //                 'api/functions/numberpreview',
        //                 'api/functions/previewcomponent',
        //                 'api/functions/referencepreview',
        //                 'api/functions/skeletoncomponent',
        //                 'api/functions/storagethumbnail',
        //                 'api/functions/stringpreview',
        //                 'api/functions/timestamppreview',
        //                 'api/functions/urlcomponentpreview'
        //             ]
        //         }
        //     ]
        // },
        // {
        //     type: 'category',
        //     label: 'Firebase, Firestore and Storage',
        //     items: [
        //         'api/interfaces/datasource',
        //         'api/interfaces/storagesource',
        //         'api/functions/usefirebasestoragesource',
        //         'api/functions/usefirestoredatasource',
        //         'api/functions/usefirebaseauthhandler',
        //     ]
        // },
        // {
        //     type: 'category',
        //     label: 'Hooks',
        //     items: [
        //         'api/functions/useauthcontroller',
        //         'api/functions/usebreadcrumbscontext',
        //         'api/functions/usecmsappcontext',
        //         'api/functions/usecollectionfetch',
        //         'api/functions/getnavigationfrom',
        //         'api/functions/usenavigationfrom',
        //         'api/functions/usesideentitycontroller',
        //         'api/functions/usesnackbarcontroller',
        //         'api/functions/usedatasource',
        //         'api/functions/usestoragesource',
        //         {
        //             type: 'category',
        //             label: 'Types',
        //             items: [
        //                 'api/interfaces/authcontroller',
        //                 'api/interfaces/breadcrumbentry',
        //                 'api/interfaces/cmsappcontext',
        //                 'api/interfaces/collectionfetchprops',
        //                 'api/interfaces/navigationfromprops',
        //                 'api/interfaces/sideentitypanelprops',
        //                 'api/types/breadcrumbscontroller',
        //                 'api/types/collectionfetchresult',
        //                 'api/types/navigationfrom',
        //                 'api/types/sideentitycontroller',
        //                 'api/types/snackbarcontroller',
        //                 'api/types/snackbarmessagetype'
        //             ]
        //         }
        //     ]
        // },
        // 'api/modules'
    ]
}

// HTML RegEXP:    \<li\>\<a href\=\"\/docs\/([a-zA-Z\s\/]+)\"\>[a-zA-Z\s\/]+\<\/a\>\<\/li\>
// replace by:     '$1',
