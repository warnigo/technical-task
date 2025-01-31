"use client"

import { type FC } from "react"
import Image from "next/image"
import { useTranslations } from "next-intl"

import { MotionButton } from "@/shared/motion-ui"

import { Separator } from "@shared/ui"
import { AnimatePresence, motion } from "framer-motion"
import { User, UtilityPole } from "lucide-react"

import { fadeInRight, fadeInUp, floatingShapes, handWave } from "../lib/motion"
import { shapes } from "../model/constants"

const Introduction: FC = () => {
  const t = useTranslations()

  return (
    <motion.section
      animate={{ opacity: 1 }}
      aria-label={t("Introduction.sectionAriaLabel")}
      className="relative grid min-h-[calc(100vh-101px)] grid-cols-1 items-center gap-8 lg:grid-cols-2"
      initial={{ opacity: 0 }}
      role="region"
    >
      <div className="max-w-3xl space-y-8">
        <div className="flex flex-col gap-2">
          <motion.p
            animate="animate"
            className="inline-flex items-center gap-2 text-lg font-medium text-highlight"
            initial="initial"
            role="text"
            variants={fadeInUp}
          >
            <motion.span
              animate="animate"
              aria-hidden="true"
              className="inline-block"
              initial="initial"
              variants={handWave}
            >
              👋
            </motion.span>
            {t("Introduction.hello")}
          </motion.p>

          <div>
            <motion.h1
              animate="animate"
              className="text-4xl font-black md:text-5xl lg:text-5xl"
              initial="initial"
              transition={{ delay: 0.1 }}
              variants={fadeInUp}
            >
              {t("Common.me")}
            </motion.h1>

            <motion.p
              animate="animate"
              className="font-mono text-highlight"
              initial="initial"
              transition={{ delay: 0.2 }}
              variants={fadeInUp}
            >
              {t("Introduction.occupation")}
            </motion.p>
          </div>

          <motion.div
            animate="animate"
            className="flex items-center gap-4"
            initial="initial"
            transition={{ delay: 0.3 }}
            variants={fadeInUp}
          >
            <Separator />
          </motion.div>

          <motion.p
            animate="animate"
            className="font-mono text-sm text-highlight/80"
            initial="initial"
            transition={{ delay: 0.4 }}
            variants={fadeInUp}
          >
            {t("Introduction.shortAboutMe")}
          </motion.p>
        </div>

        <motion.div
          animate="animate"
          className="flex flex-wrap gap-4 pt-4"
          initial="initial"
          transition={{ delay: 0.5 }}
          variants={fadeInUp}
        >
          <MotionButton
            aria-label={t("Common.aboutMe")}
            className="min-h-10 rounded-xl"
            hoverIcon={<User />}
          >
            {t("Common.aboutMe")}
          </MotionButton>
          <MotionButton
            aria-label={t("Common.contactMe")}
            className="min-h-10 rounded-xl"
            hoverIcon={<UtilityPole />}
            variant="outline"
          >
            {t("Common.contactMe")}
          </MotionButton>
        </motion.div>
      </div>

      <AnimatePresence>
        <div className="relative hidden max-h-[400px] lg:block">
          <motion.div
            animate="animate"
            className="relative flex items-center justify-center"
            initial="initial"
            variants={fadeInRight}
          >
            <Image
              priority
              alt={t("Introduction.profileImageAlt")}
              className="h-full  max-h-[400px] rounded-2xl object-cover"
              height={400}
              sizes="(max-width: 768px) 100vw, 400px"
              src="/me.webp"
              width={400}
            />
          </motion.div>

          <div className="absolute inset-0 -z-10">
            {shapes.map((shape, index) => (
              <motion.div
                key={index}
                animate="animate"
                aria-hidden="true"
                className={`absolute ${shape.color} ${shape.size} rounded-full blur-2xl`}
                initial={{ opacity: 0, x: 100 }}
                variants={floatingShapes}
                style={{
                  top: `${(index + 1) * 20}%`,
                  right: `${(index + 1) * 5}%`,
                }}
                transition={{
                  delay: shape.delay,
                  duration: 3,
                }}
              />
            ))}
          </div>
        </div>
      </AnimatePresence>
    </motion.section>
  )
}

Introduction.displayName = "Introduction"
export default Introduction
