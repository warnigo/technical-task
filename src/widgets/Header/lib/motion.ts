import { type Variants } from "framer-motion"

export const headerVariants: Variants = {
  hidden: { opacity: 0, y: -50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 15 },
  },
}

export const linkHoverVariants: Variants = {
  hover: { scale: 1.1, color: "#1d4ed8" },
}

export const buttonHoverVariants: Variants = {
  hover: { scale: 1.05 },
  tap: { scale: 0.95 },
}
