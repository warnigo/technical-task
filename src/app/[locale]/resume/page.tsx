import { type FC } from "react"
import { type Metadata } from "next"

import { Resume, resumePageMetadata } from "@/views/resume"

export const metadata: Metadata = resumePageMetadata

const ResumePage: FC = () => <Resume />

export default ResumePage
