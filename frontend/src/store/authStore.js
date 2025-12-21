import toast from "react-hot-toast";
import { axiosInstance } from "../lib/axios.js";
import { create } from "zustand";

export const useAuthStore = create((set) => ({
    authUser: null,
    isSigningIn: false,
    isLoggingIn: false,
    isCheckingAuth: true,

    checkAuth: async() => {
        try {
            const res = await axiosInstance.get("/auth/me");
            set({authUser: res.data});
        } catch (error) {
            console.log("Error checking auth: ", error);
            set({authUser: null});
        } finally {
            set({isCheckingAuth: false});
        }
    },

    signingIn: async(data) => {
        try {
            set({isSigningIn: true});
            const res = await axiosInstance.post("/auth/register", data);
            set({authUser: res.data});
            toast.success("Registration successfull! Please check your email for verification");
        } catch (error) {
            toast.error(error?.response?.data?.message);
        } finally {
            set({isSigningIn: false});
        }
    },

    loggingIn: async(data) => {
        try {
            set({isLoggingIn: true});
            const res = await axiosInstance.post("/auth/login", data);
            set({authUser: res.data});
            toast.success("Successfully logged in");
        } catch (error) {
            toast.error(error?.response?.data?.message);
        } finally {
            set({isLoggingIn: false});
        }
    },

    logout: async() => {
        try {
            const res = await axiosInstance.post("/auth/logout");
            set({authUser: null});
            toast.success("Logged out successfully");
        } catch (error) {
            toast.error(error.response?.data?.message);
        }
    },
}));