import { type FC, type PropsWithChildren } from "react"
import { notFound } from "next/navigation"
import { NextIntlClientProvider } from "next-intl"
import { getMessages } from "next-intl/server"

import { type Locales, routing } from "@shared/i18n"

type Props = PropsWithChildren & {
  locale: string
}

export const NextIntlProvider: FC<Props> = async ({ children, locale }) => {
  const messages = await getMessages()

  if (!routing.locales.includes(locale as Locales)) {
    notFound()
  }

  return (
    <NextIntlClientProvider messages={messages}>
      {children}
    </NextIntlClientProvider>
  )
}

NextIntlProvider.displayName = "NextIntlProvider"
