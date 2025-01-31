import { type FC } from "react"
import { useTranslations } from "next-intl"

import { ROUTES } from "@/shared/config"
import { Link } from "@/shared/i18n"
import { cn } from "@/shared/lib"

type Props = {
  className?: string
  title?: string
}

export const Logo: FC<Props> = ({ className, title }) => {
  const t = useTranslations("Common")

  return (
    <Link
      aria-label={t("me")}
      href={ROUTES.home}
      className={cn(
        "min-h-10 font-mono text-2xl font-black transition-colors hover:text-primary",
        className,
      )}
    >
      {title ? title : t("me")}
    </Link>
  )
}

Logo.displayName = "Logo"
