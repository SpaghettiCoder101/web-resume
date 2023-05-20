import { useAtomValue } from "jotai";
import { Locale } from "../Localization";
import { localeAtom } from "../atoms/localeAtom";

export default function useAvailableLocale():Locale {
    const selectedLocale = useAtomValue(localeAtom);
    let defaultLocale: Locale = "en";

    const browserLanguage = navigator.language.split(/[-_]/)[0];

    if (browserLanguage === "it")
        defaultLocale = "it";

    return selectedLocale ?? defaultLocale ;
}