export const ENV = {
  node: process.env.NODE_ENV,
  repo_url: process.env.NEXT_PUBLIC_REPO_URL ?? "",
}

export const IS_PROD = ENV.node === "production"
export const IS_DEV = ENV.node === "development"
