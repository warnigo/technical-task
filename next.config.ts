import type { NextConfig } from "next"
import createNextIntlPlugin from "next-intl/plugin"

const withNextIntl = createNextIntlPlugin("./src/shared/i18n/request.ts")

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
  /* config options here */
}

export default withNextIntl(nextConfig)
