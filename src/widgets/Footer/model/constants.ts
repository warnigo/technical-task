import { menuItems, ROUTES } from "@/shared/config"

export const footerMenu = [
  ...menuItems,
  {
    label: "notFoundPage",
    href: ROUTES.notFound,
  },
]
