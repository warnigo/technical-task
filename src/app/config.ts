import { type Metadata, type Viewport } from "next"

export const metadata: Metadata = {
  title: {
    template: "%s | Abubakir Shavkatov",
    default: "Abubakir Shavkatov | Software Engineer & Web Developer",
  },
  description:
    "Welcome to the digital realm of Abubakir Shavkatov, also known as Warnigo. Professional software engineer and creative developer combining technical expertise with artistic vision. Explore my innovative projects, creative works, and technical achievements.",
  icons: "https://warnigo.uz/avatar.webp",
  keywords: [
    // English keywords
    "Abubakir Shavkatov",
    "Abubakir",
    "Warnigo",
    "Web Developer",
    "Frontend Developer",
    "Frontend Engineer",
    "Backend Developer",
    "Software Engineer",
    "Full Stack Developer",
    "React Developer",
    "JavaScript Engineer",
    "TypeScript Developer",
    "Next.js Developer",
    "Golang Developer",
    "Nest.js Developer",
    // Russian keywords
    "Абубакир Шавкатов",
    "Абубакир",
    "веб-разработчик",
    "фронтенд разработчик",
    "программист",
    "разработчик",
    "инженер-программист",
    "фуллстек разработчик",
    "React разработчик",
    "JavaScript разработчик",
    // Uzbek keywords
    "Abubakir Shavkatov",
    "dasturchi",
    "veb dasturchi",
    "frontend dasturchi",
    "dastur ishlab chiquvchi",
    "React dasturchi",
    "JavaScript dasturchi",
    "fullstack dasturchi",
  ],
  authors: [
    { name: "Abubakir Shavkatov" },
    { name: "Абубакир Шавкатов" },
    { name: "Warnigo" },
  ],
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
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://warnigo.uz",
    title: "Abubakir Shavkatov | Software Engineer & Web Developer",
    description:
      "Discover the work of Abubakir Shavkatov (Warnigo) - Where technical innovation meets creative vision. Explore my portfolio of web development, creative coding, and digital art.",
    images: [
      {
        url: "https://warnigo.uz/avatar.webp",
        width: 1200,
        height: 630,
        alt: "Abubakir Shavkatov - Warnigo - Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Abubakir Shavkatov | Software Engineer & Web Developer",
    description:
      "Software engineer and creative developer combining technical expertise with artistic vision. Follow my journey in tech and digital creativity.",
    creator: "@warn1go",
    images: [
      "https://pbs.twimg.com/profile_images/1832811747075645440/g7ai9Ts8_400x400.jpg",
    ],
  },
  verification: {
    google: "",
    yandex: "",
  },
  alternates: {
    canonical: "https://warnigo.uz",
    languages: {
      "en-US": "https://warnigo.uz/en",
      "ru-RU": "https://warnigo.uz/ru",
      "uz-UZ": "https://warnigo.uz/uz",
    },
  },
  other: {
    name: ["Abubakir Shavkatov", "Абубакир Шавкатов", "Abubakir Shavkatov"],
    alternateName: "Warnigo",
    knowsAbout: [
      // English
      "Frontend Engineer",
      "Software Development",
      "Web Development",
      "Creative Coding",
      // Russian
      "Фронтенд разработка",
      "Разработка программного обеспечения",
      "Веб-разработка",
      // Uzbek
      "Frontend dasturlash",
      "Dasturiy ta'minot ishlab chiqish",
      "Veb dasturlash",
    ],
  },
}

export const viewport: Viewport = {
  initialScale: 1,
  userScalable: false,
  width: "device-width",
}
