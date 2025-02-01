import { type FC } from "react"

import { motion } from "framer-motion"

type Props = {
  label?: string
  value?: string
}

export const ProfileField: FC<Props> = ({ label, value }) => (
  <motion.div
    animate={{ opacity: 1, x: 0 }}
    className="space-y-1"
    initial={{ opacity: 0, x: -20 }}
    transition={{ duration: 0.3 }}
  >
    <p className="text-sm font-medium text-muted-foreground">{label}</p>
    <p className="line-clamp-2 text-base ">{value}</p>
  </motion.div>
)
