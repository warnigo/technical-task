"use client"

import { type FC, useState } from "react"
import Image from "next/image"

type AvatarProps = {
  src?: string
  alt?: string
  fallback?: string
  size?: "lg" | "md" | "sm" | "xl"
  status?: "away" | "busy" | "offline" | "online"
  className?: string
}

export const Avatar: FC<AvatarProps> = ({
  src,
  alt = "Avatar",
  fallback,
  size = "md",
  status,
  className,
}) => {
  const [imageError, setImageError] = useState(false)

  const sizeClasses = {
    sm: "size-8 text-xs",
    md: "size-10 text-sm",
    lg: "size-12 text-base",
    xl: "size-16 text-lg",
  }

  const statusColors = {
    online: "bg-green-500",
    offline: "bg-gray-400",
    away: "bg-yellow-500",
    busy: "bg-red-500",
  }

  const initials = fallback
    ? fallback.slice(0, 2).toUpperCase()
    : alt
        .split(" ")
        .map((word) => word[0])
        .join("")
        .toUpperCase()
        .slice(0, 2)

  const classes = [
    "relative overflow-hidden rounded-full",
    "bg-secondary",
    "flex items-center justify-center",
    "ring-2 ring-border",
    sizeClasses[size],
    className,
  ]
    .filter(Boolean)
    .join(" ")

  return (
    <div className="relative inline-block">
      <div className={classes}>
        {src && !imageError ? (
          <Image
            priority
            alt={alt}
            blurDataURL="/avatar.webp"
            className="size-full object-cover"
            draggable={false}
            height={56}
            placeholder="blur"
            sizes="(max-width: 640px) 100vw, 33vw"
            src={src}
            width={56}
            onError={() => setImageError(true)}
          />
        ) : (
          <span className="font-mono text-xl font-bold text-primary">
            {initials}
          </span>
        )}
      </div>

      {status ? (
        <span
          className={[
            "absolute bottom-0 right-0 block rounded-full",
            "ring-2 ring-border",
            statusColors[status],
            {
              sm: "h-2 w-2",
              md: "h-2.5 w-2.5",
              lg: "h-3 w-3",
              xl: "h-4 w-4",
            }[size],
          ].join(" ")}
        />
      ) : null}
    </div>
  )
}

Avatar.displayName = "Avatar"
