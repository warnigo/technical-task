import { type FC, type HTMLAttributes } from "react"

import { cn } from "@shared/lib"

type Props = HTMLAttributes<HTMLDivElement>

export const CardFooter: FC<Props> = ({ className, children, ...props }) => (
  <div className={cn("flex items-center p-6 pt-0", className)} {...props}>
    {children}
  </div>
)

CardFooter.displayName = "CardFooter"
