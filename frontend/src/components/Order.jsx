import React from "react";
import { FaTrash } from 'react-icons/fa';

const Order = () => {
    return (
        <div className="bg-gray-300 w-full rounded-xl m-2 px-4 py-3">
            <div className="grid grid-cols-3 gap-4 items-center">
                <div className="flex items-center gap-3">
                    <img src="/cheese.webp" className="w-12 h-12 object-cover rounded-xl shadow-md border border-gray-300"/>
                    <div className="flex flex-col flex-start">
                        <p className="text-black text-lg font-semibold">Cheese Picture</p>
                        <p className="text-xs text-orange-700 leading-relaxed font-semibold"><span className="text-xs text-gray-700 font-semibold">Category: </span>Dessert</p>
                    </div>
                </div>

                <div className="flex items-center border border-gray-300 shadow-sm bg-white rounded-md w-fit ml-10">
                    <button className="px-3 py-1 text-xl cursor-pointer font-medium text-gray-800 hover:bg-gray-200 active:bg-gray-300 hover:text-red-600 transition-colors" aria-label="Decrease quantity">
                        -
                    </button>
                    <div className="px-4 py-1 text-center border-x border-gray-400 min-w-[40px] font-medium">
                        1
                    </div>
                    <button className="px-3 py-1 text-lg cursor-pointer font-medium text-gray-800 hover:bg-gray-200 active:bg-gray-300 hover:text-green-600 transition-colors" aria-label="Increase quantity">
                        +
                    </button>
                </div>

                <div className="flex items-center justify-around">
                    <p className="text-lg font-bold text-green-600 ml-16">$25.01</p>
                    <FaTrash className="text-gray-600 group-hover:text-red-500 transition-colors duration-300 text-md"/>
                </div>
            </div>
        </div>
    )
}

export default Order