import React from "react";
import { useCartStore } from "../store/cartStore.js";

const SearchCard = ({ food }) => {
  const { addItemToCart } = useCartStore();

  return (
    <div className="flex flex-col sm:flex-row bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow duration-300 w-full">
      <div className="w-full sm:w-48 h-48 sm:h-auto">
        <img
          src={food.image}
          alt={food.name}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex-1 p-5 flex flex-col justify-between">
        <div>
          <div className="flex justify-between items-start">
            <h3 className="text-xl font-bold text-gray-800">{food.name}</h3>
            <span className="bg-orange-100 text-orange-600 text-xs font-bold px-2 py-1 rounded-full uppercase">
              {food.category || 'Popular'}
            </span>
          </div>
          <p className="text-gray-500 text-sm mt-2 line-clamp-2">
            Deliciously prepared {food.name} made with fresh ingredients and authentic flavors.
          </p>
        </div>

        <div className="flex items-center justify-between mt-4">
          <div className="flex flex-col">
            <span className="text-xs text-gray-400 uppercase font-semibold tracking-wider">Price</span>
            <span className="text-2xl font-bold text-green-600">${food.cost}</span>
          </div>
          
          <button
            onClick={() => addItemToCart({ foodId: food._id, quantity: 1 })}
            className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2.5 rounded-xl font-bold transition-all active:scale-95 shadow-lg shadow-orange-100 cursor-pointer"
          >
            Add to Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchCard;