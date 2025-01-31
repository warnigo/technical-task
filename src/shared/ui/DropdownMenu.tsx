"use client"

import { type FC, type ReactNode, useEffect, useRef, useState } from "react"

import { cn } from "@/shared/lib"

import { AnimatePresence, motion } from "framer-motion"

type DropdownItemType = {
  label: string
  onClick?: () => void
  icon?: React.ReactNode
  disabled?: boolean
  active?: boolean
}

type DropdownMenuProps = {
  children: ReactNode
  items: DropdownItemType[]
  align?: "center" | "left" | "right"
  className?: string
}

export const DropdownMenu: FC<DropdownMenuProps> = ({
  children,
  items,
  align = "center",
  className = "",
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const [dropdownWidth, setDropdownWidth] = useState(0)
  const [triggerWidth, setTriggerWidth] = useState(0)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const triggerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (triggerRef.current) {
      setTriggerWidth(triggerRef.current.offsetWidth)
    }
    if (dropdownRef.current) {
      setDropdownWidth(dropdownRef.current.offsetWidth)
    }
  }, [isOpen])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent): void => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        triggerRef.current &&
        !triggerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const handleItemClick = (item: DropdownItemType): void => {
    if (!item.disabled && item.onClick) {
      item.onClick()
      setIsOpen(false)
    }
  }

  const handleTriggerClick = (): void => {
    setIsOpen(!isOpen)
  }

  const getCenterOffset = (): string | undefined => {
    if (align === "center") {
      const offset = (dropdownWidth - triggerWidth) / 2
      return `-${offset}px`
    }
    return undefined
  }

  return (
    <div className={cn("relative inline-block", className)}>
      <div
        ref={triggerRef}
        className="cursor-pointer"
        role="button"
        tabIndex={0}
        onClick={handleTriggerClick}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            handleTriggerClick()
          }
        }}
      >
        {children}
      </div>

      <AnimatePresence>
        {isOpen ? (
          <motion.div
            ref={dropdownRef}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            initial={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className={cn(
              "absolute z-50 mt-2 overflow-hidden rounded-lg border border-border bg-background shadow-lg",
              {
                "right-0": align === "right",
                "left-0": align === "left",
              },
            )}
            style={{
              left: align === "center" ? "50%" : undefined,
              marginLeft: getCenterOffset(),
            }}
          >
            {items.map((item, index) => (
              <motion.button
                key={index}
                disabled={item.disabled}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={cn(
                  "flex w-full items-center justify-center gap-2 px-4 py-2 text-left font-mono text-sm font-bold",
                  "transition-colors duration-300",
                  {
                    "cursor-not-allowed text-highlight/50": item.disabled,
                    "bg-border text-primary": item.active,
                    "text-highlight hover:text-primary hover:bg-border active:bg-border/80":
                      !item.disabled && !item.active,
                  },
                )}
                onClick={() => handleItemClick(item)}
              >
                {item.icon ? <span className="size-4">{item.icon}</span> : null}
                {item.label}
              </motion.button>
            ))}
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  )
}

DropdownMenu.displayName = "DropdownMenu"
