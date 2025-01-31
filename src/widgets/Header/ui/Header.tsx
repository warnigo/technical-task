"use client"

import { type FC, useState } from "react"
import { useLocale, useTranslations } from "next-intl"

import { LocalTime } from "@/entities/LocalTime"
import { menuItems } from "@/shared/config"
import { Link, usePathname, useRouter } from "@/shared/i18n"
import { cn } from "@/shared/lib"
import { MotionButton } from "@/shared/motion-ui"
import { DropdownMenu, Logo, Separator } from "@/shared/ui"

import { motion } from "framer-motion"
import { AlignJustify, ChevronLeft, Languages } from "lucide-react"

import {
  buttonHoverVariants,
  headerVariants,
  linkHoverVariants,
} from "../lib/motion"
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

        <nav className="hidden md:block">
          <ul className="flex items-center space-x-6">
            {menuItems.map(({ label, href }) => (
              <li key={label} aria-label={t(`Layout.${label}`)}>
                <Link
                  href={href}
                  className={cn(
                    "font-mono text-sm font-medium text-muted-foreground transition-colors duration-300 hover:text-primary",
                    { "text-primary": pathname === href },
                  )}
                >
                  {t(`Layout.${label}`)}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center space-x-4">
          <LocalTime className="hidden lg:flex" />

          <motion.div
            className="hidden md:flex"
            variants={buttonHoverVariants}
            whileHover="hover"
            whileTap="tap"
          >
            <DropdownMenu align="right" items={languageItems}>
              <MotionButton
                className="h-full min-h-10 rounded-xl font-mono text-sm"
                hoverIcon={<Languages />}
                variant="outline"
              >
                {languages.find((l) => l.code === locale)?.name}
              </MotionButton>
            </DropdownMenu>
          </motion.div>

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
        <div className="flex h-full flex-col justify-between">
          <div className="flex flex-col gap-3">
            <Logo className="flex min-h-10 items-start justify-center border-b border-border pb-3 text-2xl" />

            <nav className="grow">
              <ul className="space-y-4">
                {menuItems.map(({ label, href }) => (
                  <motion.li
                    key={label}
                    variants={linkHoverVariants}
                    whileHover="hover"
                  >
                    <Link
                      aria-label={t(`Layout.${label}`)}
                      href={href}
                      className={cn(
                        "block font-mono text-lg font-medium text-muted-foreground transition-colors duration-300 hover:text-primary",
                        { "text-primary": pathname === href },
                      )}
                      onClick={() => setIsSheetOpen(false)}
                    >
                      {t(`Layout.${label}`)}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </nav>

            <Separator />

            <div className="flex w-full items-center justify-between gap-3">
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

          <div className="mb-6 flex items-center justify-end border-t border-border">
            <LocalTime className="flex items-center pt-3" />
          </div>
        </div>
      </Sheet>
    </motion.header>
  )
}

Header.displayName = "Header"
export default Header
