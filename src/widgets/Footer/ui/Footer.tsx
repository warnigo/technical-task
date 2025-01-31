"use client"

import { type FC } from "react"
import { useTranslations } from "next-intl"

import { ENV, socialMedia } from "@/shared/config"
import { Link, usePathname } from "@/shared/i18n"
import { cn } from "@/shared/lib"
import { MotionButton } from "@/shared/motion-ui"
import { Icon, Logo, Separator } from "@/shared/ui"

import { motion } from "framer-motion"
import { Milestone, MoveUpRight } from "lucide-react"

import {
  containerVariants,
  footerVariants,
  linkHoverVariants,
  textHoverVariants,
} from "../lib/motion"
import { footerMenu } from "../model/constants"

const Footer: FC = () => {
  const t = useTranslations()
  const pathname = usePathname()

  return (
    <motion.footer
      aria-label={t("Layout.footer")}
      className="mt-auto w-full border-t border-border bg-background"
      id="footer"
      initial="hidden"
      role="contentinfo"
      variants={containerVariants}
      viewport={{ once: true, amount: 0.2 }}
      whileInView="visible"
    >
      <div className="container mx-auto flex flex-col items-center gap-5 py-5">
        <motion.div
          className="flex w-full flex-col items-start justify-center gap-3 sm:items-center md:flex-row md:justify-between"
          variants={footerVariants}
        >
          <Logo
            className="flex items-center justify-center md:items-center"
            title={t("Common.warnigo")}
          />
          <nav>
            <ul className="flex w-full flex-col items-start justify-center gap-2 sm:flex-row sm:gap-6 md:items-center md:gap-3 lg:gap-6">
              {footerMenu.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    aria-label={t(`Layout.${label}`)}
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

          <Link href="">
            <MotionButton
              aria-label={t("Common.visitBlog")}
              className="group min-h-10"
              hoverIcon={<Milestone />}
              hoverText={t("Common.go")}
              variant="outline"
            >
              {t("Common.visitBlog")}
            </MotionButton>
          </Link>
        </motion.div>

        <Separator />

        <div className="flex w-full flex-col-reverse items-start justify-between gap-3 md:flex-row md:items-center">
          <Link
            aria-label={t("Common.thanksForVisit")}
            className="font-mono text-base font-semibold text-highlight duration-500 hover:text-primary active:text-primary/80"
            href={ENV.buymeacoffee_url}
            rel="noopener noreferrer"
            target="_blank"
          >
            {t("Common.thanksForVisit")}
          </Link>

          <nav aria-label={t("Common.socialMedia")}>
            <ul className="flex items-center justify-center gap-7">
              {socialMedia.map(({ label, href, icon_path }) => (
                <li key={label}>
                  <Link
                    aria-label={label}
                    href={href}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <Icon
                      aria-hidden="true"
                      className="fill-highlight stroke-none text-highlight duration-500 hover:fill-primary hover:text-primary"
                      path={icon_path}
                      size={24}
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <motion.a
            aria-label={t("Layout.sourceCode")}
            className="group relative flex items-center gap-2 text-highlight transition-colors duration-500 hover:text-primary"
            href={ENV.repo_url}
            rel="noopener noreferrer"
            target="_blank"
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <motion.p
              className="relative z-10"
              variants={textHoverVariants}
              whileHover="hover"
            >
              {t("Layout.sourceCode")}
            </motion.p>

            <motion.div variants={linkHoverVariants} whileHover="hover">
              <MoveUpRight aria-hidden="true" size={18} />
            </motion.div>
          </motion.a>
        </div>
      </div>
    </motion.footer>
  )
}

Footer.displayName = "Footer"
export default Footer
