import { type FC, type HTMLAttributes } from "react"

import { cn } from "@shared/lib"
import { cva, type VariantProps } from "class-variance-authority"

const badgeVariants = cva(
  "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80",
        outline: "text-foreground",
      },
      withDot: {
        true: "pl-2",
        false: "",
      },
    },
    defaultVariants: {
      variant: "default",
      withDot: false,
    },
  },
)

interface BadgeProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {
  dotColor?: string
  dotClassName?: string
}

export const Badge: FC<BadgeProps> = ({
  className,
  variant,
  withDot = false,
  dotColor = "bg-green-400",
  dotClassName,
  children,
  ...props
}) => (
  <div
    className={cn(badgeVariants({ variant, withDot }), className)}
    {...props}
  >
    {withDot ? (
      <span
        className={cn(
          "mr-1 inline-block size-2 rounded-full",
          dotColor,
          dotClassName,
        )}
      />
    ) : null}
    {children}
  </div>
)

Badge.displayName = "Badge"
