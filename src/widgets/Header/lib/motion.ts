import { type Variants } from "framer-motion"

export const headerVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 15 },
  },
} satisfies Variants

export const buttonHoverVariants = {
  hover: { scale: 1.05 },
  tap: { scale: 0.95 },
} satisfies Variants
