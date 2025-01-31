import { type Metadata, type Viewport } from "next"

export const metadata: Metadata = {
  title: {
    template: "%s | Abubakir Shavkatov",
    default: "Abubakir Shavkatov's task",
  },
  description: "",
  icons: "/avatar.webp",
  authors: [{ name: "Abubakir Shavkatov" }, { name: "Warnigo" }],
  creator: "Abubakir Shavkatov (Warnigo)",
  publisher: "Abubakir Shavkatov",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      "index": true,
      "follow": true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "/",
    languages: {
      en: "/en",
      ru: "/ru",
      uz: "/uz",
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "",
    title: "Abubakir Shavkatov | Software Engineer & Web Developer",
    description: "",
    images: [
      {
        url: "https://warnigo.uz/avatar.webp",
        width: 1200,
        height: 630,
        alt: "Abubakir Shavkatov",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Abubakir Shavkatov | Software Engineer & Web Developer",
    description:
      "Software engineer and creative developer combining technical expertise with artistic vision. Follow my journey in tech and digital creativity.",
    creator: "@warn1go",
    images: ["/avatar.webp"],
  },
  verification: {
    google: "",
    yandex: "",
  },
}

export const viewport: Viewport = {
  initialScale: 1,
  userScalable: false,
  width: "device-width",
}
