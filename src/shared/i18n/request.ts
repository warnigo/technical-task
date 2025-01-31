import { getRequestConfig } from "next-intl/server"

import { DEFAULT_LOCALE, LOCALES } from "./config/constants"
import { type Locales } from "./model/types"

export const DEFAULT_TIMEZONE = "Asia/Tashkent"

export default getRequestConfig(async ({ requestLocale }) => {
  let locale: Locales | string = (await requestLocale) ?? DEFAULT_LOCALE

  if (!LOCALES.includes(locale as Locales)) {
    locale = DEFAULT_LOCALE
  }

  try {
    const translations = await import(`../../../messages/${locale}.json`)
    return {
      locale,
      messages: translations.default,
      timeZone: DEFAULT_TIMEZONE,
      now: new Date(),
    }
  } catch (error) {
    console.error(`Failed to load messages for locale ${locale}:`, error)
    return {
      locale: DEFAULT_LOCALE,
      messages: {},
      timeZone: DEFAULT_TIMEZONE,
      now: new Date(),
    }
  }
})
