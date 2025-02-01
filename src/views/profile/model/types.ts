export type ProfileType = {
  email: string
  username: string
  phone: string
  name: string
  bio: string
  image: string
}

export type ProfileMutationType = Promise<{
  name: string
  email: string
  username: string
  phone?: string | undefined
  bio?: string | undefined
}>
