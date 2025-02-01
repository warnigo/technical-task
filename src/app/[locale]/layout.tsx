import { type FC, type PropsWithChildren } from "react"

import { Layout } from "@app/layouts"
import { NextIntlProvider, QueryProvider } from "@app/providers"

interface Props extends PropsWithChildren {
  params: Promise<{ locale: string }>
}

const LocaleLayout: FC<Props> = async ({ children, params }) => {
  const { locale } = await params

  return (
    <NextIntlProvider locale={locale}>
      <QueryProvider>
        <Layout>{children}</Layout>
      </QueryProvider>
    </NextIntlProvider>
  )
}

export default LocaleLayout
