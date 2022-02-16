import { ChipColor, EnumValueConfig, EnumValues } from "../../models";

export function enumToObjectEntries(enumValues: EnumValues): [string | number, string | EnumValueConfig][] {
    return Array.isArray(enumValues)
        ? enumValues.map(entry => [entry.id, entry])
        : Object.entries<string | EnumValueConfig>(enumValues);
}

export function getLabelOrConfigFrom(enumValues: EnumValues, key?: string | number): string | EnumValueConfig | undefined {
    if (!key) return "";
    return Array.isArray(enumValues)
        ? enumValues.find((entry) => entry.id === key)
        : enumValues[key];
}

export function getColorSchemaKey(enumValues: EnumValueConfig[], key: string | number): ChipColor | undefined {
    const labelOrConfig = getLabelOrConfigFrom(enumValues, key);
    if (typeof labelOrConfig === "object" && "color" in labelOrConfig) {
        return labelOrConfig.color;
    }
    return undefined;
}

export function isEnumValueDisabled(labelOrConfig?: string | EnumValueConfig) {
    return typeof labelOrConfig === "object" && (labelOrConfig as EnumValueConfig).disabled;
}

export function buildEnumLabel(
    labelOrConfig?: string | EnumValueConfig
): string | undefined {
    if (labelOrConfig === undefined)
        return undefined;
    if (typeof labelOrConfig === "object") {
        return labelOrConfig.label;
    } else {
        return labelOrConfig;
    }
}

