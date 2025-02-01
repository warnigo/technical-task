import { type GetServerSidePropsContext } from "next"

import { ENV } from "@/shared/config"

import axios, {
  type AxiosInstance,
  type AxiosRequestConfig,
  type AxiosResponse,
} from "axios"

class ApiClient {
  private readonly instance: AxiosInstance

  constructor(baseURL: string) {
    if (!baseURL) {
      throw new Error("Base URL is required for API requests")
    }

    this.instance = axios.create({
      baseURL,
      headers: {
        "Content-Type": "application/json",
      },
    })

    // Request Interceptor
    this.instance.interceptors.request.use(
      (config) => config,
      // eslint-disable-next-line promise/no-promise-in-callback
      (error) => Promise.reject(error),
    )

    // Response Interceptor
    this.instance.interceptors.response.use(
      (response) => response,
      (error) => {
        console.error("API Error:", error.response?.data || error.message)
        return Promise.reject(error)
      },
    )
  }

  public async get<T>(
    endpoint: string,
    options: AxiosRequestConfig = {},
    context?: GetServerSidePropsContext,
  ): Promise<T> {
    return this.request<T>(
      { url: endpoint, method: "GET", ...options },
      context,
    )
  }

  public async post<T>(
    endpoint: string,
    body: Record<string, unknown>,
    options: AxiosRequestConfig = {},
    context?: GetServerSidePropsContext,
  ): Promise<T> {
    return this.request<T>(
      { url: endpoint, method: "POST", data: body, ...options },
      context,
    )
  }

  public async put<T>(
    endpoint: string,
    body: Record<string, unknown>,
    options: AxiosRequestConfig = {},
    context?: GetServerSidePropsContext,
  ): Promise<T> {
    return this.request<T>(
      { url: endpoint, method: "PUT", data: body, ...options },
      context,
    )
  }

  public async patch<T>(
    endpoint: string,
    body: Record<string, unknown>,
    options: AxiosRequestConfig = {},
    context?: GetServerSidePropsContext,
  ): Promise<T> {
    return this.request<T>(
      { url: endpoint, method: "PATCH", data: body, ...options },
      context,
    )
  }

  public async delete<T>(
    endpoint: string,
    options: AxiosRequestConfig = {},
    context?: GetServerSidePropsContext,
  ): Promise<T> {
    return this.request<T>(
      { url: endpoint, method: "DELETE", ...options },
      context,
    )
  }

  private async request<T>(
    config: AxiosRequestConfig,
    _context?: GetServerSidePropsContext,
  ): Promise<T> {
    try {
      const response: AxiosResponse<T> = await this.instance.request<T>(config)
      return response.data
    } catch (error: any) {
      throw new Error(error.response?.data?.message || error.message)
    }
  }
}

// Singleton instance
export const axiosInstance = new ApiClient(ENV.base_url)
