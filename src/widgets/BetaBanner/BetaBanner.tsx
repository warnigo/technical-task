"use client"

import { type FC } from "react"
import { useTranslations } from "next-intl"

import { AnimatePresence, motion } from "framer-motion"

const BetaBanner: FC = () => {
  const t = useTranslations("BetaBanner")

  return (
    <AnimatePresence>
      <motion.div
        animate={{ y: 0 }}
        className="relative bg-gradient-to-r from-blue-500 to-purple-600 py-1 text-center text-sm font-medium text-white shadow-md sm:py-2"
        exit={{ y: -100 }}
        initial={{ y: -100 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        <p className="text-xs sm:text-sm md:text-base">{t("title")}</p>
      </motion.div>
    </AnimatePresence>
  )
}

BetaBanner.displayName = "BetaBanner"
export default BetaBanner
