import { type FC, type TextareaHTMLAttributes } from "react"

import { cn } from "@shared/lib"

type CustomTextAreaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  error?: string
}

export const Textarea: FC<CustomTextAreaProps> = ({ error, ...props }) => (
  <div className="relative">
    <textarea
      {...props}
      className={cn(
        "w-full rounded-md border border-border bg-secondary px-4 py-2 focus:outline-none focus:ring-2",
        props.className,
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

Textarea.displayName = "Textarea"
