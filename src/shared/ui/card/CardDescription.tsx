import { type FC, type HTMLAttributes } from "react"

import { cn } from "@shared/lib"

type Props = HTMLAttributes<HTMLParagraphElement>

export const CardDescription: FC<Props> = ({
  className,
  children,
  ...props
}) => (
  <p className={cn("text-sm text-muted-foreground", className)} {...props}>
    {children}
  </p>
)

CardDescription.displayName = "CardDescription"
