import { Card, CardContent, CardHeader, Skeleton } from "@shared/ui"
import type { FC } from "react"

export const ProfileSkeleton: FC = () => (
  <div className="container mx-auto p-4">
    <Card className="mx-auto max-w-2xl">
      <CardHeader className="flex flex-row items-center justify-between">
        <Skeleton className="h-8 w-32" />
        <Skeleton className="h-10 w-32" />
      </CardHeader>

      <CardContent>
        <div className="flex flex-col items-center gap-6 md:flex-row">
          <Skeleton className="size-32 rounded-full" />

          <div className="flex-1 space-y-4">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="space-y-2">
                <Skeleton className="h-4 w-24" />
                <Skeleton className="h-6 w-full" />
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  </div>
)
