import { type Variants } from "framer-motion"

export const linkHoverVariants = {
  hover: { x: 5, scale: 1.2, rotate: 10 },
} satisfies Variants

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
