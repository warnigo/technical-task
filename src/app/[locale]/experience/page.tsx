import { type FC } from "react"
import { type Metadata } from "next"

import { Experience, experiencePageMetadata } from "@/views/experience"

export const metadata: Metadata = experiencePageMetadata

const ExperiencePage: FC = () => <Experience />

export default ExperiencePage
