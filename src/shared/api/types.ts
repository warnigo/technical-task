export type FetchOptions = {
  cache?: "force-cache" | "no-store"
  headers?: Record<string, string>
  method?: "DELETE" | "GET" | "PATCH" | "POST" | "PUT"
}
