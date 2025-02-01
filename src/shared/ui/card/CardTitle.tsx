import { type FC, type HTMLAttributes } from "react"

import { cn } from "@shared/lib"

type Props = HTMLAttributes<HTMLHeadingElement>

export const CardTitle: FC<Props> = ({ className, children, ...props }) => (
  <h3
    className={cn(
      "text-2xl font-semibold leading-none tracking-tight",
      className,
    )}
    {...props}
  >
    {children}
  </h3>
)

CardTitle.displayName = "CardTitle"
