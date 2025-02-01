import { type FC, type HTMLAttributes, type PropsWithChildren } from "react"

import { cn } from "@shared/lib"

type Props = HTMLAttributes<HTMLDivElement>

export const Card: FC<PropsWithChildren<Props>> = ({
  className,
  children,
  ...props
}) => (
  <div
    className={cn(
      "rounded-lg border border-border bg-card text-card-foreground shadow-sm transition-all duration-200 hover:shadow-md",
      className,
    )}
    {...props}
  >
    {children}
  </div>
)

Card.displayName = "Card"
