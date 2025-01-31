import { type FC } from "react"
import { useTranslations } from "next-intl"

import { ROUTES } from "@/shared/config"
import { Link } from "@/shared/i18n"
import { MotionButton } from "@/shared/motion-ui"

import { CloudDownload } from "lucide-react"

const Resume: FC = () => {
  const t = useTranslations("Resume")

  return (
    <Link href={ROUTES.resume}>
      <MotionButton
        className="rounded-xl font-mono"
        hoverIcon={<CloudDownload />}
        variant="outline"
      >
        {t("resumeDownload")}
      </MotionButton>
    </Link>
  )
}

Resume.displayName = "Resume"
export default Resume
