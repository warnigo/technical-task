"use client"

import {
  type ButtonHTMLAttributes,
  type ElementType,
  type FC,
  type ReactElement,
  type ReactNode,
  useState,
} from "react"

import { buttonVariants } from "@/shared/ui"

import { cn } from "@shared/lib"
import { type VariantProps } from "class-variance-authority"
import { motion } from "framer-motion"

interface MotionConfig {
  duration?: number
  scale?: {
    hover?: number
    tap?: number
  }
  y?: {
    initial?: number
    hover?: number
  }
}

const defaultMotionConfig: MotionConfig = {
  duration: 0.4,
  scale: {
    hover: 1.03,
    tap: 0.95,
  },
  y: {
    initial: 0,
    hover: -30,
  },
}

interface MotionButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
  as?: ElementType
  icon?: ReactElement
  iconPosition?: "left" | "right"
  hoverText?: string
  hoverIcon?: ReactElement
  motionConfig?: MotionConfig
}

export const MotionButton: FC<MotionButtonProps> = ({
  className,
  variant,
  size,
  asChild = false,
  as: Component = "button",
  icon,
  iconPosition = "left",
  hoverText,
  hoverIcon,
  children,
  disabled,
  motionConfig,
  ...props
}) => {
  const [isHovered, setIsHovered] = useState(false)
  const [isPressed, setIsPressed] = useState(false)
  const config = { ...defaultMotionConfig, ...motionConfig }
  const shouldAnimate = Boolean(hoverText || hoverIcon)

  const ButtonComponent = asChild ? Component : "button"

  const getTextVariants = {
    initial: {
      y: 0,
      opacity: 1,
      rotateX: 0,
      transition: {
        duration: config.duration,
        ease: "easeOut",
      },
    },
    hover: {
      y: config.y?.hover,
      opacity: 0,
      rotateX: -90,
      transition: {
        duration: config.duration,
        ease: "easeOut",
      },
    },
  }

  const getIconVariants = {
    initial: {
      y: Math.abs(config.y?.hover || 30),
      opacity: 0,
      rotateX: 90,
      transition: {
        duration: config.duration,
        ease: "easeOut",
      },
    },
    hover: {
      y: 0,
      opacity: 1,
      rotateX: 0,
      transition: {
        duration: config.duration,
        ease: "easeOut",
      },
    },
  }

  const renderContent = (): ReactNode => {
    const contentElements = []

    if (icon && iconPosition === "left") {
      contentElements.push(
        <span key="icon-left" className="mr-2">
          {icon}
        </span>,
      )
    }

    contentElements.push(<span key="text">{children}</span>)

    if (icon && iconPosition === "right") {
      contentElements.push(
        <span key="icon-right" className="ml-2">
          {icon}
        </span>,
      )
    }

    return contentElements
  }

  return (
    <ButtonComponent
      disabled={disabled}
      className={cn(
        buttonVariants({ variant, size, className }),
        "group relative isolate overflow-hidden transition-all",
        shouldAnimate && "perspective-500",
      )}
      onMouseDown={() => setIsPressed(true)}
      onMouseEnter={() => !disabled && setIsHovered(true)}
      onMouseUp={() => setIsPressed(false)}
      onMouseLeave={() => {
        setIsHovered(false)
        setIsPressed(false)
      }}
      {...props}
    >
      <motion.div
        className="relative flex items-center justify-center"
        initial={false}
        animate={
          !disabled
            ? {
                scale: isPressed
                  ? config.scale?.tap
                  : isHovered && shouldAnimate
                    ? config.scale?.hover
                    : 1,
                transition: {
                  type: "spring",
                  stiffness: isPressed ? 400 : 200,
                  damping: isPressed ? 10 : 15,
                },
              }
            : undefined
        }
      >
        <motion.span
          animate={shouldAnimate && isHovered ? "hover" : "initial"}
          className="relative z-10 flex items-center"
          initial="initial"
          style={{ backfaceVisibility: "hidden" }}
          variants={getTextVariants}
        >
          {renderContent()}
        </motion.span>

        {shouldAnimate && (hoverText || hoverIcon) ? (
          <motion.span
            animate={isHovered ? "hover" : "initial"}
            className="absolute inset-0 z-10 flex items-center justify-center gap-2"
            initial="initial"
            style={{ backfaceVisibility: "hidden" }}
            variants={getIconVariants}
          >
            {hoverIcon}
            {hoverText}
          </motion.span>
        ) : null}
      </motion.div>

      <div className="absolute inset-0 z-0 rounded-[inherit] bg-gradient-to-r from-white/0 via-white/[0.1] to-white/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      {shouldAnimate ? (
        <motion.div
          animate={isHovered ? { x: "200%" } : { x: "-100%" }}
          className="pointer-events-none absolute inset-0"
          initial={{ x: "-100%" }}
          transition={{
            duration: 0.7,
            ease: "easeInOut",
            repeat: 1,
            repeatDelay: 0.5,
          }}
        >
          <div className="h-full w-1/3 bg-gradient-to-r from-transparent via-white/[0.2] to-transparent" />
        </motion.div>
      ) : null}
    </ButtonComponent>
  )
}

MotionButton.displayName = "MotionButton"
