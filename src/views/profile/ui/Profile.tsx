"use client"

import { type FC } from "react"
import { useTranslations } from "next-intl"

import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  Separator,
} from "@/shared/ui"

import { EditProfileModal } from "@entities/EditProfileModal"
import { motion } from "framer-motion"

import { useGetProfile, usePutProfile } from "../api/useProfile"

import { ProfileField } from "./ProfileField"
import { ProfileSkeleton } from "./ProfileSkeleton"

const Profile: FC = () => {
  const { data: profile, isLoading, error, refetch } = useGetProfile()
  const { mutateAsync } = usePutProfile()
  const t = useTranslations("Profile")

  if (isLoading) return <ProfileSkeleton />
  if (error) {
    return (
      <p className="text-red-500">
        Error loading profile. Please try again later.
      </p>
    )
  }

  return (
    <motion.section
      animate={{ opacity: 1, y: 0 }}
      className="container mx-auto py-10"
      initial={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="w-full">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="font-mono text-3xl font-black">
            {t("profile")}
          </CardTitle>

          <EditProfileModal
            defaultValues={profile}
            refetch={refetch}
            onSubmit={async (values) => {
              await mutateAsync(values)
            }}
          />
        </CardHeader>

        <CardContent>
          <div className="flex flex-col items-center gap-8 md:flex-row">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Avatar
                alt={profile?.name}
                className="size-56"
                fallback={profile?.name.charAt(0)}
                src={profile?.image}
              />
            </motion.div>
            <div className="w-full space-y-4">
              <div className="grid w-full grid-cols-1 items-center gap-3 md:grid-cols-2 md:gap-6 lg:gap-8">
                <ProfileField label={t("name")} value={profile?.name} />
                <ProfileField label={t("email")} value={profile?.email} />
                <ProfileField label={t("username")} value={profile?.username} />
                <ProfileField label={t("phoneNumber")} value={profile?.phone} />
              </div>

              <Separator />

              <div className="items-start">
                <ProfileField label={t("bio")} value={profile?.bio} />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.section>
  )
}

export default Profile
