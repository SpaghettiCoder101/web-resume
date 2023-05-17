import { StringsJson } from "../Localization";

export function useStrings() {
    const locale = "it";
    return StringsJson[locale];
}