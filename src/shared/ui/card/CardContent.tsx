import { type FC, type HTMLAttributes } from "react"

import { cn } from "@shared/lib"

type Props = HTMLAttributes<HTMLDivElement>

export const CardContent: FC<Props> = ({ className, children, ...props }) => (
  <div className={cn("p-6 pt-0", className)} {...props}>
    {children}
  </div>
)

CardContent.displayName = "CardContent"
