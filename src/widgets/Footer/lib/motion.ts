import { type Variants } from "framer-motion"

export const footerVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 15 },
  },
}

export const linkHoverVariants: Variants = {
  hover: { x: 5, scale: 1.2, rotate: 10 },
}

export const textHoverVariants: Variants = {
  hover: { x: -5 },
}

export const containerVariants: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { type: "spring", stiffness: 120, damping: 20 },
  },
}
