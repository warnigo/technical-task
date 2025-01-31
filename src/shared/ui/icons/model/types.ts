import { type SVGProps } from "react"

export interface IconProps extends SVGProps<SVGSVGElement> {
  path: string
  className?: string
  size?: number
}
