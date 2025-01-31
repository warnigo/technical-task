"use client"

import { type FC } from "react"
import Link from "next/link"
import { useTranslations } from "next-intl"

import { ROUTES } from "@/shared/config"
import { MotionButton } from "@/shared/motion-ui"
import { Separator } from "@/shared/ui"

import { motion } from "framer-motion"
import { ChevronRight, CircleUser, MoveUpRight } from "lucide-react"

import { linkHoverVariants } from "../lib/motion"
import { stackItems } from "../model/constants"

import { Shapes } from "./Shapes"

const Home: FC = () => {
  const t = useTranslations("Home")

  return (
    <motion.section
      animate={{ opacity: 1 }}
      aria-label={t("sectionAriaLabel")}
      className="container relative mx-auto flex h-full min-h-[calc(100vh-65px)] items-center justify-center text-center"
      initial={{ opacity: 0 }}
      role="region"
    >
      <motion.div
        animate={{ opacity: 1, y: 0 }}
        className="grid gap-4"
        initial={{ opacity: 0, y: 50 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <h1 className="font-mono text-4xl font-black">{t("heading")}</h1>

        <p className="font-sans text-base text-highlight">{t("description")}</p>

        <Separator />

        <div className="flex flex-col gap-3 rounded-lg bg-secondary/10">
          <h2 className="mb-4 font-mono text-2xl font-black">
            {t("taskStack")}
          </h2>

          <nav>
            <ul className="flex flex-col items-center justify-center gap-2">
              {stackItems.map((item, index) => (
                <motion.li
                  key={index}
                  animate={{ opacity: 1, x: 0 }}
                  className=" flex items-center  gap-2 font-sans  text-sm transition-colors duration-500"
                  initial={{ opacity: 0, x: -20 }}
                  transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
                >
                  <span className="font-semibold">{item.name}:</span>

                  <Link
                    className="flex items-center text-highlight duration-700 hover:text-primary"
                    href={item.link}
                    target="_blank"
                  >
                    {item.tech}

                    <motion.div variants={linkHoverVariants} whileHover="hover">
                      <MoveUpRight aria-hidden="true" size={18} />
                    </motion.div>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </nav>
        </div>

        <Separator />

        <Link href={ROUTES.profile}>
          <MotionButton
            hoverIcon={<CircleUser />}
            icon={<ChevronRight />}
            iconPosition="right"
          >
            {t("goToProfile")}
          </MotionButton>
        </Link>
      </motion.div>

      <Shapes />
    </motion.section>
  )
}

Home.displayName = "Home"
export default Home
