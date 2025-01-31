import { createNavigation } from "next-intl/navigation"
import { defineRouting } from "next-intl/routing"

import { DEFAULT_LOCALE, LOCALES } from "../config/constants"

export const routing = defineRouting({
  locales: ["en", "ru", "uz"],

  defaultLocale: "en",
})

export const { Link, redirect, usePathname, useRouter } = createNavigation({
  locales: LOCALES,
  defaultLocale: DEFAULT_LOCALE,
})
