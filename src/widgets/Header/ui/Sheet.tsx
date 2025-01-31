"use client"

import {
  type FC,
  type PropsWithChildren,
  useEffect,
  useRef,
  useState,
} from "react"
import { useTranslations } from "next-intl"

import { AnimatePresence, motion } from "framer-motion"
import { X } from "lucide-react"

type Props = {
  isOpen: boolean
  onClose: VoidFunction
}

export const Sheet: FC<PropsWithChildren<Props>> = ({
  isOpen,
  onClose,
  children,
}) => {
  const [isMounted, setIsMounted] = useState(false)
  const sheetRef = useRef<HTMLDivElement>(null)
  const t = useTranslations()

  useEffect(() => {
    setIsMounted(true)
  }, [])

  useEffect(() => {
    const body = document.body
    const mainContent = document.getElementById("main-content")
    const footer = document.getElementById("footer")
    const layoutElements = [mainContent, footer]

    if (isOpen) {
      body.style.overflow = "hidden"
      layoutElements.forEach((element) => {
        if (element) {
          element.style.filter = "blur(8px)"
          element.style.transition = "filter 0.3s ease-in-out"
        }
      })
    } else {
      body.style.overflow = "unset"
      layoutElements.forEach((element) => {
        if (element) {
          element.style.filter = "none"
        }
      })
    }

    return () => {
      body.style.overflow = "unset"
      layoutElements.forEach((element) => {
        if (element) {
          element.style.filter = "none"
        }
      })
    }
  }, [isOpen])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent): void => {
      if (
        sheetRef.current &&
        !sheetRef.current.contains(event.target as Node)
      ) {
        onClose()
      }
    }

    const handleFocusOut = (event: FocusEvent): void => {
      if (!sheetRef.current?.contains(event.relatedTarget as Node)) {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside)
      document.addEventListener("focusin", handleFocusOut)
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
      document.removeEventListener("focusin", handleFocusOut)
    }
  }, [isOpen, onClose])

  if (!isMounted) {
    return null
  }

  return (
    <AnimatePresence>
      {isOpen ? (
        <>
          <motion.div
            animate={{ opacity: 1 }}
            className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm"
            exit={{ opacity: 0 }}
            initial={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          />

          <motion.div
            ref={sheetRef}
            animate={{ x: 0 }}
            className="fixed right-0 top-0 z-[60] h-screen w-3/4 max-w-sm overflow-y-auto border-l border-border bg-background p-6 shadow-lg"
            exit={{ x: "100%" }}
            id="sheet-content"
            initial={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
          >
            <button
              className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
              onClick={onClose}
            >
              <X className="size-6" />
              <span className="sr-only">{t("Common.close")}</span>
            </button>

            <div className="relative z-50 h-full">{children}</div>
          </motion.div>
        </>
      ) : null}
    </AnimatePresence>
  )
}
