import { atom } from "jotai";
import { Locale } from "../Localization";

export const localeAtom = atom<Locale | undefined>(undefined);