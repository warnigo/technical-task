import type * as z from "zod"

import { type profileFormSchema } from "./schemas"

export type ProfileFormValues = z.infer<typeof profileFormSchema>
