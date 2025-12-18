import { create } from "zustand";
import { axiosInstance } from "../lib/axios.js";
import toast from "react-hot-toast";

export const useCartStore = create((set) => ({
    isGettingItems: false,
    isAddingItems: false,
    isRemovingItems: false,
    cartItems: null,

    getCartItems: async() => {
        try {
            set({isGettingItems: true});
            const response = await axiosInstance.get("/cart/");
            set({cartItems: response.data});
        } catch (error) {
            console.log("Error fetching cart items: ", error);
            toast.error(error?.response?.data?.message);
        }
        finally {
            set({isGettingItems: false});
        }
    },
    addItemToCart: async({ foodId, quantity }) => {
        try {
            set({isAddingItems: true});
            const response = await axiosInstance.post('/cart/', { foodId, quantity });
            set({cartItems: response.data});
            toast.success("Item successfully added to cart");
        } catch (error) {
            console.log("Error adding item to cart: ", error);
            toast.error(error?.response?.data?.message);
        } finally {
            set({isAddingItems: false});
        }
    },
    updateCartQuantity: async({ foodId, action }) => {
        try {
            const response = await axiosInstance.patch(`/cart/${foodId}`, { action });
            set({cartItems: response.data});
            toast.success("Quantity successfully updated");
        } catch (error) {
            console.log("Error adding item to cart: ", error);
            toast.error(error?.response?.data?.message);
        }
    },
    deleteCartItem: async({ foodId }) => {
        try {
            set({isRemovingItems: true});
            const response = await axiosInstance.delete(`/cart/${foodId}`);
            set({cartItems: response.data});
            toast.success("Item deleted successfully");
        } catch (error) {
            console.log("Error deleting item from cart: ", error);
            toast.error(error?.response?.data?.message);
        } finally {
            set({isRemovingItems: false});
        }
    }
}));