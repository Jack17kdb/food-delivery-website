import React, { useEffect } from "react";
import { FaTrash } from 'react-icons/fa';
import { useCartStore } from "../store/cartStore.js";

const Order = () => {
    const { getCartItems, updateCartQuantity, deleteCartItem, cartItems } = useCartStore();

    useEffect(() => {
        getCartItems();
    }, []);

    return (
        <div className="bg-gray-300 w-full rounded-xl m-2 px-2 sm:px-4 py-3">
            
            {cartItems && cartItems.length > 0 ? 
                cartItems.map((item, index) => (
                    <div className="flex flex-col sm:grid sm:grid-cols-3 gap-3 sm:gap-4 items-start sm:items-center mb-4 bg-white sm:bg-transparent p-3 sm:p-0 rounded-lg sm:rounded-none" key={index}>
                        {/* Product Info */}
                        <div className="flex items-center gap-2 sm:gap-3 w-full sm:w-auto">
                            <img 
                                src={item.foodId?.image} 
                                alt={item.foodId?.name}
                                className="w-12 h-12 sm:w-12 sm:h-12 object-cover rounded-lg sm:rounded-xl shadow-md border border-gray-300 flex-shrink-0"
                            />
                            <div className="flex flex-col flex-start min-w-0">
                                <p className="text-black text-sm sm:text-base md:text-lg font-semibold truncate">{item.foodId?.name}</p>
                                <p className="text-xs text-orange-700 leading-relaxed font-semibold">
                                    <span className="text-xs text-gray-700 font-semibold hidden sm:inline">Category: </span>
                                    {item.foodId?.category}
                                </p>
                            </div>
                        </div>

                        {/* Quantity Controls */}
                        <div className="flex items-center justify-between sm:justify-center w-full sm:w-auto">
                            <span className="text-xs text-gray-500 font-semibold sm:hidden">Quantity:</span>
                            <div className="flex items-center border border-gray-300 shadow-sm bg-white rounded-md">
                                <button
                                    className="px-2 sm:px-3 py-1 text-lg sm:text-xl cursor-pointer font-medium text-gray-800 hover:bg-gray-200 active:bg-gray-300 hover:text-red-600 transition-colors"
                                    aria-label="Decrease quantity"
                                    onClick={() => updateCartQuantity({ foodId: item.foodId?._id, action: "decrease" })}
                                >
                                    -
                                </button>
                                <div className="px-3 sm:px-4 py-1 text-center border-x border-gray-400 min-w-[35px] sm:min-w-[40px] font-medium text-sm sm:text-base">
                                    {item.quantity}
                                </div>
                                <button
                                    className="px-2 sm:px-3 py-1 text-base sm:text-lg cursor-pointer font-medium text-gray-800 hover:bg-gray-200 active:bg-gray-300 hover:text-green-600 transition-colors"
                                    aria-label="Increase quantity"
                                    onClick={() => updateCartQuantity({ foodId: item.foodId?._id, action: "increase" })}
                                >
                                    +
                                </button>
                            </div>
                        </div>

                        {/* Price and Delete */}
                        <div className="flex items-center justify-between sm:justify-around w-full sm:w-auto">
                            <span className="text-xs text-gray-500 font-semibold sm:hidden">Total:</span>
                            <div className="flex items-center gap-3 sm:gap-4">
                                <p className="text-base sm:text-lg font-bold text-green-600">
                                    ${(item.foodId?.cost * item.quantity).toFixed(2)}
                                </p>
                                <FaTrash
                                    className="text-gray-600 hover:text-red-500 transition-colors duration-300 text-sm sm:text-md cursor-pointer active:scale-95"
                                    onClick={() => deleteCartItem({ foodId: item.foodId?._id })}
                                />
                            </div>
                        </div>
                    </div>
                ))
            : 
                <div className="text-center py-8">
                    <p className="text-gray-600">No items in cart</p>
                </div>
            }
            
        </div>
    )
}

export default Order
