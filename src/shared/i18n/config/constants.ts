import { type Locales } from "../model/types"

export const LOCALES: Locales[] = ["en", "ru", "uz"] as const
export const DEFAULT_LOCALE: Locales = "en" as const
export const COOKIE_LOCALE_KEY = "WARNIGO_LOCALE"
