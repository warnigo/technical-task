"use client"

import {
  type ComponentProps,
  createContext,
  type FC,
  type FormEvent,
  type FormHTMLAttributes,
  type HTMLAttributes,
  type LabelHTMLAttributes,
  type ReactElement,
  type ReactNode,
  useContext,
} from "react"

import { cn } from "@shared/lib"
import {
  Controller,
  type FieldPath,
  type FieldValues,
  FormProvider,
  useFormContext,
} from "react-hook-form"

type FormFieldContextValue<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> = {
  name: TName
}

type FormLabelProps = LabelHTMLAttributes<HTMLLabelElement> & {
  required?: boolean
}

type FormProps = FormHTMLAttributes<HTMLFormElement> & {
  children: ReactNode
  form: any
  onSubmit?: (e: FormEvent<HTMLFormElement>) => void
  className?: string
}

const FormFieldContext = createContext<FormFieldContextValue>(
  Object as FormFieldContextValue,
)

const Form: FC<FormProps> = ({
  children,
  form,
  onSubmit,
  className,
  ...props
}) => (
  <FormProvider {...form}>
    <form
      className={cn("w-full space-y-4", className)}
      onSubmit={onSubmit}
      {...props}
    >
      {children}
    </form>
  </FormProvider>
)

// eslint-disable-next-line react/no-multi-comp
const FormField = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
  name,
  ...props
}: Omit<ComponentProps<typeof Controller>, "name"> & {
  name: TName
}): ReactElement => (
  <FormFieldContext.Provider value={{ name }}>
    <Controller name={name} {...props} />
  </FormFieldContext.Provider>
)

// eslint-disable-next-line react/no-multi-comp
const FormItem: FC<HTMLAttributes<HTMLDivElement>> = ({
  children,
  className,
  ...props
}) => (
  <div className={`relative space-y-2 ${className}`} {...props}>
    {children}
  </div>
)

// eslint-disable-next-line react/no-multi-comp
const FormLabel: FC<FormLabelProps> = ({
  children,
  className,
  required,
  ...props
}) => (
  <label className={cn("block text-sm font-medium", className)} {...props}>
    {children}
    {required ? <span className="ml-1 text-destructive">*</span> : null}
  </label>
)

// eslint-disable-next-line react/no-multi-comp
const FormControl: FC<HTMLAttributes<HTMLDivElement>> = ({
  children,
  className,
  ...props
}) => (
  <div className={`relative mt-1 rounded-md ${className}`} {...props}>
    {children}
  </div>
)

// eslint-disable-next-line react/no-multi-comp
const FormMessage: FC<HTMLAttributes<HTMLParagraphElement>> = ({
  children,
  className,
  ...props
}) => {
  const { formState } = useFormContext()
  const formContext = useContext(FormFieldContext)
  const fieldState = formState.errors[formContext.name]

  if (!fieldState?.message && !children) {
    return null
  }

  return (
    <p className={cn("mt-1 text-sm text-destructive", className)} {...props}>
      {children ?? (fieldState?.message as never)}
    </p>
  )
}

// eslint-disable-next-line react/no-multi-comp
const FormDescription: FC<HTMLAttributes<HTMLParagraphElement>> = ({
  children,
  className,
  ...props
}) => (
  <p className={cn("text-sm text-highlight", className)} {...props}>
    {children}
  </p>
)

export {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
}
