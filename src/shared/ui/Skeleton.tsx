import { type FC, type HTMLAttributes } from "react"

import { cn } from "@shared/lib"

type Props = HTMLAttributes<HTMLDivElement>

export const Skeleton: FC<Props> = ({ className, ...props }) => (
  <div
    className={cn("animate-pulse rounded-md bg-muted", className)}
    {...props}
  />
)

Skeleton.displayName = "Skeleton"
