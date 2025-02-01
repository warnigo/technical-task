import { type FC, type PropsWithChildren } from "react"
import { getLocale } from "next-intl/server"

import { IS_DEV } from "@/shared/config"

import { GeistMono } from "geist/font/mono"
import { GeistSans } from "geist/font/sans"

import "@shared/assets/css/tailwind.css"
import "./styles/globals.css"

export { metadata, viewport } from "./config"

if (IS_DEV) {
  import("../mocks")
    .then(({ setupMocks }) => setupMocks())
    .catch((error) => console.error("mock server error: ", error))
}

const RootLayout: FC<PropsWithChildren> = async ({ children }) => {
  const locale = await getLocale()

  return (
    <html
      suppressHydrationWarning
      className={`${GeistSans.variable} ${GeistMono.variable}`}
      lang={locale}
    >
      <body className="antialiased">{children}</body>
    </html>
  )
}

RootLayout.displayName = "RootLayout"
export default RootLayout
