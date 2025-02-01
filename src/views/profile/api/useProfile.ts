import { axiosInstance } from "@/shared/api"

import { type ProfileFormValues } from "@entities/EditProfileModal/model/types"
import {
  useMutation,
  type UseMutationResult,
  useQuery,
  type UseQueryResult,
} from "@tanstack/react-query"

import { type ProfileMutationType, type ProfileType } from "../model/types"

const getProfileData = async (): Promise<ProfileType> =>
  await axiosInstance.get<ProfileType>("/api/profile")

const putProfileData = async (
  params: ProfileFormValues,
): Promise<ProfileMutationType> =>
  await axiosInstance.put<ProfileMutationType>("/api/profile", params)

export const useGetProfile = (): UseQueryResult<ProfileType, Error> =>
  useQuery<ProfileType>({
    queryKey: ["profile"],
    queryFn: getProfileData,
  })

export const usePutProfile = (): UseMutationResult<
  ProfileMutationType,
  Error,
  ProfileFormValues
> =>
  useMutation<ProfileMutationType, Error, ProfileFormValues>({
    mutationKey: ["profile"],
    mutationFn: putProfileData,
  })
