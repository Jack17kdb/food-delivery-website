import { create } from "zustand";
import { axiosInstance } from "../lib/axios.js";
import toast from "react-hot-toast";

export const useFoodStore = create((set) => ({
    isFetchingFoods: false,
    isFetchingCategories: false,
    isSearchingFoods: false,
    isFetchingFoodByCategory: false,
    isFetchingFoodById: false,
    allFoods: null,
    allCategories: null,
    searchResults: null,
    foodCategory: null,
    idFoods: null,
    userCart: [],

    fetchingFoods: async() => {
        try {
            set({isFetchingFoods: true});
            const res = await axiosInstance.get("/food/foods");
            set({allFoods: res.data.data});
        } catch (error) {
            console.log("Error fetching foods: ", error);
            toast.error(error?.response?.data?.message);
        } finally {
            set({isFetchingFoods: false});
        }
    },

    fetchingCategories: async() => {
        try {
            set({isFetchingCategories: true});
            const res = await axiosInstance.get("/food/categories");
            set({allCategories: res.data.data});
        } catch (error) {
            console.log("Error fetching categories: ", error);
            toast.error(error?.response?.data?.message);
        } finally {
            set({isFetchingCategories: false});
        }
    },

    searchingFoods: async(search) => {
        try {
            set({isSearchingFoods: true});
            const res = await axiosInstance.get("/food/search", {params: {search: search}});
            set({searchResults: res.data.data});
            toast.success("Search complete");
        } catch (error) {
            console.log("Error searching: ", error);
            toast.error(error?.response?.data?.message);
        } finally {
            set({isSearchingFoods: false});
        }
    },

    fetchingFoodByCategory: async(category) => {
        try {
            set({isFetchingFoodByCategory: true});
            const res = await axiosInstance.get(`/food/category/${category}`);
            set({foodCategory: res.data.data});
            toast.success("Search complete");
        } catch (error) {
            console.log("Error fetching: ", error);
            toast.error(error?.response?.data?.message);
        } finally {
            set({isFetchingFoodByCategory: false});
        }
    },

    fetchingFoodById: async(id) => {
        try {
            set({isFetchingFoodById: true});
            const res = await axiosInstance.get(`/food/${id}`);
            set({idFoods: res.data.data});
            toast.success("Search complete");
        } catch (error) {
            console.log("Error fetching: ", error);
            toast.error(error?.response?.data?.message);
        } finally {
            set({isFetchingFoodById: false});
        }
    }
}));