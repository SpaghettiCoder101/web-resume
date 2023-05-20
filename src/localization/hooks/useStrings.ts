import { StringsJson } from "../Localization";
import useAvailableLocale from "./useAvailableLocale";

export function useStrings() {
    const locale = useAvailableLocale();
    return StringsJson[locale];
}