import { type FC, type HTMLAttributes } from "react"

import { cn } from "@/shared/lib"

import { cva, type VariantProps } from "class-variance-authority"

const separatorVariants = cva(
  "shrink-0 bg-border transition-colors duration-200",
  {
    variants: {
      orientation: {
        horizontal: "h-px w-full",
        vertical: "h-full w-px",
      },
      size: {
        sm: "opacity-70",
        md: "opacity-80",
        lg: "opacity-90",
        xl: "opacity-100",
      },
      variant: {
        default: "bg-border",
        primary: "bg-primary",
        muted: "bg-muted",
        subtle: "bg-border/50",
      },
    },
    defaultVariants: {
      orientation: "horizontal",
      size: "md",
      variant: "default",
    },
    compoundVariants: [
      {
        orientation: "horizontal",
        size: "sm",
        className: "my-1",
      },
      {
        orientation: "horizontal",
        size: "md",
        className: "my-2",
      },
      {
        orientation: "horizontal",
        size: "lg",
        className: "my-4",
      },
      {
        orientation: "horizontal",
        size: "xl",
        className: "my-6",
      },
      {
        orientation: "vertical",
        size: "sm",
        className: "mx-1 h-4",
      },
      {
        orientation: "vertical",
        size: "md",
        className: "mx-2 h-6",
      },
      {
        orientation: "vertical",
        size: "lg",
        className: "mx-4 h-8",
      },
      {
        orientation: "vertical",
        size: "xl",
        className: "mx-6 h-10",
      },
    ],
  },
)

interface SeparatorProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof separatorVariants> {
  decorative?: boolean
}

export const Separator: FC<SeparatorProps> = ({
  className,
  orientation,
  size,
  variant,
  decorative = true,
  ...props
}) => (
  <div
    aria-orientation={orientation === "horizontal" ? "horizontal" : "vertical"}
    role={decorative ? "none" : "separator"}
    className={cn(
      separatorVariants({
        orientation,
        size,
        variant,
      }),
      className,
    )}
    {...props}
  />
)

Separator.displayName = "Separator"
