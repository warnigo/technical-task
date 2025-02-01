import { NextResponse } from "next/server"

let profileData = {
  email: "thewarigo@gmail.com",
  username: "warnigo",
  phone: "+998881234567",
  name: "Abubakir Shavkatov",
  bio: "Frontend Developer & Tech Enthusiast",
  image: "/avatar.webp",
}

export async function GET(): Promise<NextResponse> {
  return NextResponse.json(profileData)
}

export async function PUT(req: Request): Promise<NextResponse> {
  try {
    const body = await req.json()
    profileData = { ...profileData, ...body }
    return NextResponse.json(profileData)
  } catch (error) {
    console.error(error)
    return NextResponse.json({ error: "Invalid request" }, { status: 400 })
  }
}
