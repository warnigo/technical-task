import { type FC } from "react"

import { cn } from "@/shared/lib"
import { floatingShapes } from "@/views/home/lib/motion"

import { AnimatePresence, motion } from "framer-motion"

import { shapes } from "../model/constants"

export const Shapes: FC = () => (
  <AnimatePresence>
    <div className="absolute inset-0 -z-10">
      {shapes.map((shape, index) => (
        <motion.div
          key={index}
          animate="animate"
          aria-hidden="true"
          initial={{ opacity: 0, x: 100 }}
          variants={floatingShapes}
          className={cn(
            `absolute rounded-full blur-2xl`,
            shape.color,
            shape.size,
          )}
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
  </AnimatePresence>
)
