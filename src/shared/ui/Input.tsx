import { type FC, type InputHTMLAttributes } from "react"

import { cn } from "@shared/lib"

type CustomInputProps = InputHTMLAttributes<HTMLInputElement> & {
  error?: string
}

export const Input: FC<CustomInputProps> = ({ error, ...props }) => (
  <div className="relative">
    <input
      {...props}
      className={cn(
        "w-full rounded-md border border-border bg-secondary px-4 py-2 focus:outline-none focus:ring-2",
        { "border-destructive": error },
      )}
    />

    {error ? (
      <span className="absolute bottom-0 left-0 text-sm text-destructive">
        {error}
      </span>
    ) : null}
  </div>
)

Input.displayName = "Input"
