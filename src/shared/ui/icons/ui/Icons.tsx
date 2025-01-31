import { type FC } from "react"

import { cn } from "@/shared/lib/utils"
import { iconPaths } from "@/shared/ui/icons/model/paths"

import { dimensions } from "../model/dimensions"
import { type IconProps } from "../model/types"

export const Icon: FC<IconProps> = ({
  path,
  size = 24,
  className,
  ...props
}) => {
  const iconKey = Object.entries(iconPaths).find(
    ([_, p]) => p === path,
  )?.[0] as keyof typeof dimensions

  const iconDimensions = dimensions[iconKey]

  return (
    <svg
      className={cn(className)}
      fill={props.fill ?? "currentColor"}
      height={size}
      stroke={props.stroke ?? "none"}
      strokeWidth={props.strokeWidth ?? 0}
      viewBox={iconDimensions.viewBox}
      width={size}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d={path}
        strokeLinecap="round"
        strokeLinejoin="round"
        transform={iconDimensions.transform}
      />
    </svg>
  )
}
