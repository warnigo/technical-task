import { type FC } from "react"

import { motion } from "framer-motion"

type Props = {
  number: string
}

export const RotateNumber: FC<Props> = ({ number }) => (
  <motion.span
    key={number}
    animate={{ rotateX: 0, opacity: 1 }}
    exit={{ rotateX: 90, opacity: 0 }}
    initial={{ rotateX: -90, opacity: 0 }}
    style={{ display: "inline-block", transformOrigin: "50% 50%" }}
    transition={{ duration: 0.3, ease: "easeOut" }}
  >
    {number}
  </motion.span>
)
