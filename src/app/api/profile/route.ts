import { NextResponse } from "next/server"

export async function GET(): Promise<NextResponse> {
  return NextResponse.json({
    email: "thewarigo@gmail.com",
    username: "warnigo",
    phone: "+998881234567",
    name: "Abubakir Shavkatov",
    bio: "Frontend Developer & Tech Enthusiast",
    image: "/avatar.webp",
  })
}
