import { type FC } from "react"
import { type Metadata } from "next"

import { Profile, profileMetadata } from "@views/profile"

export const metadata = profileMetadata satisfies Metadata

const ProfilePage: FC = () => <Profile />

export default ProfilePage
