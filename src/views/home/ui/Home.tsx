"use client"

import { type FC } from "react"

import { motion } from "framer-motion"

import { homeSections } from "../model/constants"

const Home: FC = () =>
  Object.entries(homeSections).map(([key, SectionComponent]) => (
    <motion.div
      key={key}
      animate={{ opacity: 1, y: 0 }}
      className="container mx-auto"
      exit={{ opacity: 0, y: -20 }}
      initial={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
    >
      <SectionComponent />
    </motion.div>
  ))

Home.displayName = "Home"
export default Home
