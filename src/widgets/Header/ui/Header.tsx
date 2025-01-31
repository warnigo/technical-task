"use client"

import { type FC, useState } from "react"
import { useLocale, useTranslations } from "next-intl"

import { ROUTES } from "@/shared/config"
import { Link, usePathname, useRouter } from "@/shared/i18n"
import { cn } from "@/shared/lib"
import { MotionButton } from "@/shared/motion-ui"
import { Avatar, Dropdown, DropdownMenu, Logo, Separator } from "@/shared/ui"

import { motion } from "framer-motion"
import { AlignJustify, ChevronLeft, CircleUser, Languages } from "lucide-react"

import { buttonHoverVariants, headerVariants } from "../lib/motion"
import { languages } from "../model/constants"

import { Sheet } from "./Sheet"

const Header: FC = () => {
  const [isSheetOpen, setIsSheetOpen] = useState(false)
  const t = useTranslations()
  const pathname = usePathname()
  const locale = useLocale()
  const router = useRouter()

  const handleLanguageChange = (newLocale: string): void => {
    router.push(pathname, { locale: newLocale })
  }

  const languageItems = languages.map((lang) => ({
    label: lang.name,
    onClick: () => handleLanguageChange(lang.code),
    active: locale === lang.code,
  }))

  return (
    <motion.header
      animate="visible"
      aria-label={t("Layout.header")}
      className="sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur-sm"
      id="header"
      initial="hidden"
      role="contentinfo"
      variants={headerVariants}
    >
      <div className="container mx-auto flex h-16 items-center justify-between">
        <Logo className="flex min-h-10 items-center justify-center text-2xl" />

        <div className="flex items-center gap-4">
          <DropdownMenu
            align="right"
            className="hidden md:flex"
            items={languageItems}
          >
            <MotionButton
              className="h-full min-h-10 rounded-xl font-mono text-sm"
              hoverIcon={<Languages />}
              variant="outline"
            >
              {languages.find((l) => l.code === locale)?.name}
            </MotionButton>
          </DropdownMenu>

          <Dropdown
            align="right"
            className="hidden md:flex"
            trigger={<Avatar alt="salom" fallback="P" src="/avatar.webp" />}
          >
            <div className="flex flex-col items-center justify-start">
              <div className="flex shrink-0 items-center justify-start gap-2">
                <Avatar alt="salom" fallback="P" src="/avatar.webp" />

                <div>
                  <h6 className="font-mono font-bold">Abubakir Shavkatov</h6>

                  <p className="font-mono text-xs font-bold text-highlight">
                    {t("Common.stack")}
                  </p>
                </div>
              </div>

              <Separator />

              <Link
                className="flex w-full items-center justify-start gap-2 rounded-lg p-2 font-mono text-sm font-bold hover:bg-secondary"
                href={ROUTES.profile}
              >
                <CircleUser className="size-5" />

                <span>{t("Layout.profile")}</span>
              </Link>
            </div>
          </Dropdown>

          <MotionButton
            aria-label={t("Layout.openMenu")}
            className="size-full min-h-10 min-w-10 rounded-xl text-2xl md:hidden [&_svg]:size-5"
            hoverIcon={<ChevronLeft />}
            size="icon"
            variant="outline"
            onClick={() => setIsSheetOpen(true)}
          >
            <AlignJustify />
          </MotionButton>
        </div>
      </div>

      <Sheet isOpen={isSheetOpen} onClose={() => setIsSheetOpen(false)}>
        <div className="flex h-[calc(100vh-44px)] flex-col gap-3 overflow-hidden">
          <div className="grid gap-4">
            <Logo className="flex min-h-10 items-start justify-center border-b border-border pb-3 text-2xl" />

            <nav>
              <Link
                className="flex w-full items-center justify-start gap-2 rounded-lg p-2 font-mono text-base font-bold hover:bg-secondary"
                href={ROUTES.profile}
              >
                <CircleUser className="size-6 md:size-5" />

                <span>{t("Layout.profile")}</span>
              </Link>
            </nav>
          </div>

          <div className="mt-auto flex w-full items-center justify-between gap-3 border-t border-border pt-4">
            {languageItems.map(({ label, onClick, active }) => (
              <motion.div
                key={label}
                className="w-full"
                variants={buttonHoverVariants}
                whileHover="hover"
                whileTap="tap"
              >
                <MotionButton
                  aria-label={label}
                  hoverIcon={<Languages />}
                  variant="outline"
                  className={cn(
                    "size-full min-h-10 rounded-xl font-mono text-sm",
                    { "bg-accent": active },
                  )}
                  onClick={onClick}
                >
                  {label}
                </MotionButton>
              </motion.div>
            ))}
          </div>
        </div>
      </Sheet>
    </motion.header>
  )
}

Header.displayName = "Header"
export default Header
