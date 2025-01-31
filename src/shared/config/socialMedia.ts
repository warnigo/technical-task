import { iconPaths } from "@/shared/ui"

import { ENV } from "./env"

export const socialMedia = [
  {
    label: "github",
    icon_path: iconPaths.github,
    href: ENV.github_account,
  },
  {
    label: "linkedin",
    icon_path: iconPaths.linkedin,
    href: ENV.linkedin_account,
  },
  {
    label: "x",
    icon_path: iconPaths.X,
    href: ENV.x_account,
  },
]
