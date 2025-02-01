"use client"

import {
  type FC,
  type KeyboardEvent,
  type ReactNode,
  useEffect,
  useRef,
  useState,
} from "react"

import { cn } from "@/shared/lib"

import { AnimatePresence, motion } from "framer-motion"

interface DropdownProps {
  trigger: ReactNode
  children: ReactNode
  align?: "center" | "left" | "right"
  className?: string
}

export const Dropdown: FC<DropdownProps> = ({
  trigger,
  children,
  align = "center",
  className,
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const triggerRef = useRef<HTMLButtonElement>(null)

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

  const handleKeyDown = (event: KeyboardEvent): void => {
    if (event.key === "Escape") setIsOpen(false)
  }

  return (
    <div className={cn("relative inline-block", className)}>
      <button
        ref={triggerRef}
        className="focus:outline-none"
        onClick={() => setIsOpen((prev) => !prev)}
        onKeyDown={handleKeyDown}
      >
        {trigger}
      </button>

      <AnimatePresence>
        {isOpen ? (
          <motion.div
            ref={dropdownRef}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            initial={{ opacity: 0, y: -5 }}
            transition={{ duration: 0.2 }}
            className={cn(
              "absolute z-50 mt-1 min-w-60 rounded-lg border border-border bg-background p-2 shadow-lg",
              align === "left" && "left-0",
              align === "right" && "right-0",
              align === "center" && "left-1/2 -translate-x-1/2",
            )}
          >
            {children}
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  )
}

Dropdown.displayName = "Dropdown"
