import { apiClient } from "../apiClient";
import { AUTH_ENDPOINTS } from "./authEndpoints";
import { Auth } from "./authType";

export const login = async (credentials: { email: string; password: string }) => {
    try {
        const { data } = await apiClient.post(AUTH_ENDPOINTS.LOGIN, credentials);
        return data;
    } catch (error: any) {
        throw new Error(error?.response?.data?.message || 'Login failed');
    }
};

export const register = async (userDetails: { email: string; password: string }) => {
    try {
        const { data } = await apiClient.post(AUTH_ENDPOINTS.REGISTER, userDetails);
        return data;
    } catch (error: any) {
        throw new Error(error?.response?.data?.message || 'Register failed');
    }

};

export const getProfile = async (): Promise<Auth> => {
    try {
        const { data } = await apiClient.get(AUTH_ENDPOINTS.PROFILE);
        return data;
    } catch (error: any) {
        throw new Error(error?.response?.data?.message || 'GetProfile failed');
    }
};
