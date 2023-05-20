import { Locale } from "../../localization/Localization";

export default function getExtendedLocale(locale:Locale): string {
    let extendedLocale = "English";

    if (locale === "it")
        extendedLocale = "Italiano";

    return extendedLocale;
}
