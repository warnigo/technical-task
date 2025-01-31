"use client"

import { type FC } from "react"
import { useTranslations } from "next-intl"

import { Badge } from "@/shared/ui"

import { motion } from "framer-motion"

const Experience: FC = () => {
  const t = useTranslations()

  return (
    <motion.div
      animate={{ opacity: 1, y: 0 }}
      className="flex items-center gap-4"
      initial={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: 0.3 }}
    >
      <Badge
        withDot
        className="rounded-full border-border py-2 pr-4 font-mono text-sm"
        dotClassName="size-2 border border-green-600 mx-2"
        dotColor="bg-green-500"
        variant="secondary"
      >
        <p className="select-none">{t("Layout.availableWork")}</p>
      </Badge>
    </motion.div>
  )
}

Experience.displayName = "Experience"
export default Experience
