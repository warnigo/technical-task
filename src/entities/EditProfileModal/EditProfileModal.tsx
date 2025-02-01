"use client"

import { type FC, useState } from "react"
import { useTranslations } from "next-intl"

import { zodResolver } from "@hookform/resolvers/zod"
import { MotionButton } from "@shared/motion-ui"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
  Separator,
  Textarea,
} from "@shared/ui"
import {
  type QueryObserverResult,
  type RefetchOptions,
} from "@tanstack/react-query"
import { type ProfileType } from "@views/profile/model/types"
import { CircleX, Edit } from "lucide-react"
import { useForm } from "react-hook-form"
import { toast } from "sonner"

import { profileFormSchema } from "./model/schemas"
import { type ProfileFormValues } from "./model/types"

type EditProfileModalProps = {
  defaultValues?: ProfileFormValues
  onSubmit?: (values: ProfileFormValues) => Promise<void>
  refetch?: (
    options?: RefetchOptions,
  ) => Promise<QueryObserverResult<ProfileType, Error>>
}

export const EditProfileModal: FC<EditProfileModalProps> = ({
  defaultValues,
  onSubmit,
  refetch,
}) => {
  const [open, setOpen] = useState<boolean>(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const t = useTranslations()

  const form = useForm<ProfileFormValues>({
    resolver: zodResolver(profileFormSchema),
    defaultValues: defaultValues ?? {
      name: "",
      email: "",
      username: "",
      phone: "",
      bio: "",
    },
  })

  const handleSubmit = async (values: ProfileFormValues): Promise<void> => {
    try {
      setIsSubmitting(true)
      if (onSubmit) {
        await onSubmit(values)
      }
      if (refetch) {
        await refetch()
      }
      setOpen(false)
      toast.success("Profile updated successfully")
    } catch (error) {
      toast.error("Failed to update profile")
      console.error(error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <MotionButton hoverIcon={<Edit />} size="lg" variant="outline">
          {t("Profile.editProfile")}
        </MotionButton>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{t("Profile.editProfile")}</DialogTitle>
        </DialogHeader>

        <Separator />

        <Form form={form} onSubmit={form.handleSubmit(handleSubmit)}>
          <FormField
            control={form.control as any}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t("Profile.name")}</FormLabel>
                <FormControl>
                  <Input placeholder="John Doe" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control as any}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t("Profile.email")}</FormLabel>
                <FormControl>
                  <Input placeholder="john@example.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control as any}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t("Profile.username")}</FormLabel>
                <FormControl>
                  <Input placeholder="johndoe" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control as any}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t("Profile.phoneNumber")}</FormLabel>
                <FormControl>
                  <Input placeholder="+1234567890" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control as any}
            name="bio"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t("Profile.bio")}</FormLabel>
                <FormControl>
                  <Textarea
                    className="resize-none"
                    placeholder="Tell us about yourself"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="flex justify-end space-x-4">
            <MotionButton
              className="h-10 bg-secondary"
              hoverIcon={<CircleX />}
              type="button"
              variant="outline"
              onClick={() => setOpen(false)}
            >
              {t("Common.cancel")}
            </MotionButton>

            <MotionButton
              className="h-10"
              disabled={isSubmitting}
              hoverIcon={<Edit />}
              type="submit"
            >
              {isSubmitting ? t("Common.saving") : t("Common.save")}
            </MotionButton>
          </div>
        </Form>
      </DialogContent>
    </Dialog>
  )
}

EditProfileModal.displayName = "EditProfileModal"
