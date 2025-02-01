"use client"

import React, {
  Children,
  cloneElement,
  createContext,
  type FC,
  type HTMLAttributes,
  type ReactNode,
  useCallback,
  useContext,
  useEffect,
} from "react"

import { cn } from "@shared/lib"
import { X } from "lucide-react"

type DialogProps = {
  children: ReactNode
  open?: boolean
  onOpenChange?: (open: boolean) => void
}

type DialogContentType = {
  open: boolean
  onOpenChange: (open: boolean) => void
}

type DialogTriggerProps = HTMLAttributes<HTMLDivElement> & {
  asChild?: boolean
  [key: string]: unknown
}

const DialogContext = createContext<{
  open: boolean
  onOpenChange: (open: boolean) => void
} | null>(null)

const useDialog = (): DialogContentType => {
  const context = useContext(DialogContext)
  if (!context) {
    throw new Error("Dialog components must be wrapped in <Dialog />")
  }
  return context
}

const Dialog: FC<DialogProps> = ({ children, open = false, onOpenChange }) => {
  const handleEscape = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === "Escape" && open) {
        onOpenChange?.(false)
      }
    },
    [open, onOpenChange],
  )

  useEffect(() => {
    document.addEventListener("keydown", handleEscape)
    return () => document.removeEventListener("keydown", handleEscape)
  }, [handleEscape])

  return (
    <DialogContext.Provider
      value={{ open, onOpenChange: onOpenChange ?? (() => {}) }}
    >
      {children}
    </DialogContext.Provider>
  )
}

// eslint-disable-next-line react/no-multi-comp
const DialogTrigger: FC<DialogTriggerProps> = ({
  children,
  asChild,
  ...props
}) => {
  const { onOpenChange } = useDialog()

  const handleClick = (): void => {
    onOpenChange(true)
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>): void => {
    if (e.key === "Enter" || e.key === " ") {
      onOpenChange(true)
    }
  }

  const childProps = {
    onClick: handleClick,
    onKeyDown: handleKeyDown,
    role: "button",
    tabIndex: 0,
  }

  if (asChild) {
    return cloneElement(
      Children.only(children) as React.ReactElement,
      childProps,
    )
  }

  return (
    <div {...props} {...childProps}>
      {children}
    </div>
  )
}

// eslint-disable-next-line react/no-multi-comp
const DialogContent: FC<HTMLAttributes<HTMLDivElement>> = ({
  children,
  className,
  ...props
}) => {
  const { open, onOpenChange } = useDialog()

  if (!open) return null

  return (
    <div
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center"
      role="dialog"
    >
      <div
        aria-label="Close modal"
        className="fixed inset-0 bg-black/50 backdrop-blur-sm"
        role="button"
        tabIndex={0}
        onClick={() => onOpenChange(false)}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            onOpenChange(false)
          }
        }}
      />
      <div
        className={cn(
          "relative z-50 w-full max-w-lg rounded-lg bg-secondary p-6 shadow-lg",
          "duration-700 animate-in zoom-in-95",
          className,
        )}
        {...props}
      >
        {children}
      </div>
    </div>
  )
}

// eslint-disable-next-line react/no-multi-comp
const DialogHeader: FC<HTMLAttributes<HTMLDivElement>> = ({
  className,
  ...props
}) => (
  <div
    className={cn(
      "flex flex-col space-y-1.5 text-center sm:text-left",
      className,
    )}
    {...props}
  />
)

// eslint-disable-next-line react/no-multi-comp
const DialogTitle: FC<HTMLAttributes<HTMLHeadingElement>> = ({
  className,
  children,
  ...props
}) => (
  <h2
    className={cn(
      "text-lg font-semibold leading-none tracking-tight",
      className,
    )}
    {...props}
  >
    {children}
  </h2>
)

// eslint-disable-next-line react/no-multi-comp
const DialogDescription: FC<HTMLAttributes<HTMLParagraphElement>> = ({
  className,
  ...props
}) => <p className={cn("text-sm text-highlight", className)} {...props} />

// eslint-disable-next-line react/no-multi-comp
const DialogClose: FC<HTMLAttributes<HTMLButtonElement>> = (props) => {
  const { onOpenChange } = useDialog()

  return (
    <button
      className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-white transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2"
      type="button"
      onClick={() => onOpenChange(false)}
      {...props}
    >
      <X className="size-4" />
      <span className="sr-only">Close</span>
    </button>
  )
}

// eslint-disable-next-line react/no-multi-comp
const DialogFooter: FC<HTMLAttributes<HTMLDivElement>> = ({
  className,
  ...props
}) => (
  <div
    className={cn(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      className,
    )}
    {...props}
  />
)

export {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
}
