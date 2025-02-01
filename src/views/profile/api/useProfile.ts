import { axiosInstance } from "@/shared/api"

import { useQuery, type UseQueryResult } from "@tanstack/react-query"

import { type ProfileType } from "../model/types"

const getProfileData = async (): Promise<ProfileType> => {
  const response = await axiosInstance.get<ProfileType>("/api/profile")

  return response
}

export const useGetProfile = (): UseQueryResult<ProfileType, Error> =>
  useQuery<ProfileType>({
    queryKey: ["profile"],
    queryFn: getProfileData,
  })
