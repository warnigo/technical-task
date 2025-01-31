"use client"

import { type FC, useEffect, useState } from "react"
import { useNow, useTranslations } from "next-intl"

import { cn } from "@/shared/lib"

import { DEFAULT_TIMEZONE } from "@shared/i18n/request"
import { RotateNumber } from "@shared/motion-ui"
import { Badge } from "@shared/ui"
import dayjs from "dayjs"
import timezone from "dayjs/plugin/timezone"
import utc from "dayjs/plugin/utc"
import { AnimatePresence } from "framer-motion"

dayjs.extend(utc)
dayjs.extend(timezone)

type Props = {
  className?: string
}

export const LocalTime: FC<Props> = ({ className }) => {
  const t = useTranslations("Layout")
  const now = useNow({
    updateInterval: 1000,
  })
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setIsLoading(false)
  }, [])

  const formattedTime = dayjs(now).tz(DEFAULT_TIMEZONE).format("HH:mm:ss")

  if (isLoading) {
    return (
      <div
        aria-label={t("localeTime")}
        className={cn("flex animate-pulse items-center gap-2", className)}
      >
        <p className="select-none font-mono text-sm font-medium text-foreground">
          {t("localeTime")}
        </p>

        <Badge
          className="select-none rounded-xl border-border px-4 py-2 font-mono text-sm hover:bg-secondary"
          variant="secondary"
        >
          <time>00:00:00</time>
        </Badge>
      </div>
    )
  }

  return (
    <div
      className={cn(
        "flex items-center gap-2 transition-opacity duration-300",
        className,
      )}
    >
      <p className="animate-fade-in select-none font-mono text-sm font-medium text-highlight">
        {t("localeTime")}
      </p>

      <Badge
        className="group relative h-full min-h-10 select-none overflow-hidden rounded-xl border-border px-4 py-2 font-mono text-sm hover:bg-secondary"
        variant="secondary"
      >
        <div className="relative flex">
          <AnimatePresence mode="popLayout">
            {formattedTime.split("").map((char, index) => (
              <time key={`${index}-${char}`} style={{ height: "1.5em" }}>
                {char === ":" ? <span>:</span> : <RotateNumber number={char} />}
              </time>
            ))}
          </AnimatePresence>
        </div>
      </Badge>
    </div>
  )
}

LocalTime.displayName = "LocalTime"
