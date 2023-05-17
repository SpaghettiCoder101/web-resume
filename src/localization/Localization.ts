import StringsJson from "./LocalizedStrings";

export { StringsJson };

export declare type Locale = keyof typeof StringsJson;

export const defaultLocale: Locale = "it";

export type LocalizationKey = keyof typeof StringsJson["it"];

export declare type LocalizedValue<T> = Record<Locale, T>;

const _locales: Locale[] = [];

for (const locale in StringsJson)
    _locales.push(locale as Locale);

export const Locales = _locales;
