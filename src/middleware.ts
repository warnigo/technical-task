import createMiddleware from "next-intl/middleware"

import { DEFAULT_LOCALE, LOCALES } from "@shared/i18n"

export default createMiddleware({
  locales: LOCALES,
  defaultLocale: DEFAULT_LOCALE,
  localePrefix: "always",
  localeDetection: true,
})

export const config = {
  matcher: ["/((?!api|_next|.*\\..*).*)"],
}
