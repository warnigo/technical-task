import { type FC, type PropsWithChildren } from "react"

import { BetaBanner } from "@widgets/BetaBanner"
import { Footer } from "@widgets/Footer"
import { Header } from "@widgets/Header"

export const Layout: FC<PropsWithChildren> = ({ children }) => (
  <div className="flex min-h-screen flex-col">
    <BetaBanner />
    <Header />
    <main className="grow" id="main-content">
      {children}
    </main>
    <Footer />
  </div>
)

Layout.displayName = "Layout"
