import { type Variants } from "framer-motion"

export const fadeInUp = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
}

export const fadeInRight = {
  initial: {
    opacity: 0,
    x: 100,
  },
  animate: {
    opacity: 1,
    x: 0,
  },
}

export const handWave = {
  initial: { rotate: 0 },
  animate: {
    rotate: [0, 14, -8, 14, -4, 10, 0],
    transition: {
      duration: 2.5,
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
} satisfies Variants

export const imageReveal = {
  initial: {
    scale: 0.8,
    opacity: 0,
  },
  animate: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20,
    },
  },
  whileInView: {
    scale: [1, 1.05, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
}

export const floatingShapes = {
  animate: {
    opacity: 0.8,
    x: 0,
    y: [0, 20, 0],
    scale: [1, 1.1, 1],
    transition: {
      duration: 4,
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
} satisfies Variants
