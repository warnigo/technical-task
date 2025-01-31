"use client"

import { type FC } from "react"
import { useTranslations } from "next-intl"

import { LocalTime } from "@/entities/LocalTime"
import { ENV } from "@/shared/config"
import { Logo, Separator } from "@/shared/ui"

import { motion } from "framer-motion"
import { MoveUpRight } from "lucide-react"

import {
  containerVariants,
  footerVariants,
  linkHoverVariants,
  textHoverVariants,
} from "../lib/motion"

const Footer: FC = () => {
  const t = useTranslations()

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
          <Logo className="flex items-center justify-center md:items-center" />

          <LocalTime />
        </motion.div>

        <Separator />

        <div className="flex w-full flex-col-reverse items-start justify-between gap-3 md:flex-row md:items-center">
          <p
            aria-label={t("Common.thanksForVisit")}
            className="font-mono text-base font-semibold text-highlight duration-500 hover:text-primary active:text-primary/80"
          >
            {t("Common.thanksForVisit")}
          </p>

          <motion.a
            aria-describedby="sourse-code"
            aria-label={t("Layout.sourceCode")}
            className="group relative flex items-center gap-2 text-highlight transition-colors duration-500 hover:text-primary"
            href={ENV.repo_url}
            rel="noopener noreferrer"
            target="_blank"
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <motion.p
              className="relative z-10"
              id="sourse-code"
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
