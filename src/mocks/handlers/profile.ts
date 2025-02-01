import { http, HttpResponse } from "msw"

export const profileHandlers = [
  http.get("/api/profile", () =>
    HttpResponse.json({
      email: "thewarigo@gmail.com",
      username: "warnigo",
      phone: "+998881234567",
      name: "Abubakir Shavkatov",
      bio: "Frontend Developer & Tech Enthusiast",
      image: "/avatar.webp",
    }),
  ),
]
