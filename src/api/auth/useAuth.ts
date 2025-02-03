import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { login, register, getProfile } from "./authServices";
import { QueryKeys } from "./authQueryKeys";

export const useLogin = () => {
    // const queryClient = useQueryClient()
    return useMutation({
        mutationFn: login,
        onError: (error) => {
            console.log(error)
        },
        onSuccess: (data) => {
            console.log(data)
            // queryClient.invalidateQueries({queryKey: [QueryKeys.DeviceCount]});
            // queryClient.refetchQueries({queryKey:[QueryKeys.UserProfile]})
        },
    });
};

export const useRegister = () => {
    return useMutation({
        mutationFn: register,
        onError: (error) => {
            console.log(error)
        },
        onSuccess: (data) => {
            console.log(data)
        },
    });
};

export const useProfile = () => {
    return useQuery({
        queryKey: ["profile"],
        queryFn: getProfile,
        staleTime: 5 * 60 * 1000,
    });
};
