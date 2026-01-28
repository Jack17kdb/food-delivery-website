import React from "react";
import { useCartStore } from "../store/cartStore.js";
import { useNavigate } from 'react-router-dom';

const FoodCard = ({ allFoods, isFetchingFoods, foodCategory }) => {
  const navigate = useNavigate();
  const { addItemToCart } = useCartStore();

  const maxItems = 12;
  const foodsToShow = foodCategory
    ? foodCategory.slice(0, maxItems)
    : allFoods
    ? allFoods.slice(0, maxItems)
    : [];

  const handleClick = (foodId) => {
    navigate(`/food/${foodId}`);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 mt-5">
      {foodsToShow.length > 0 ? (
        foodsToShow.map((food, index) => (
          <div
            key={index}
            className="bg-gray-300 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 ease-in-out max-w-xs hover:scale-105 cursor-pointer"
            onClick={() => handleClick(food._id)}
          >
            <img
              src={food.image}
              className="w-full h-48 object-cover filter brightness-80"
            />
            <div className="p-4">
              <p className="font-bold text-lg mb-2 flex flex-start">
                {food.name}
              </p>
              <div className="flex justify-between items-center">
                <div className="flex gap-2 items-center">
                  <p className="text-lg font-bold text-green-600">
                    ${food.cost}
                  </p>
                </div>
                <button
                  className="cursor-pointer bg-orange-500 rounded-lg px-4 py-2 text-white active:scale-93 hover:bg-orange-600 transition-all duration-300"
                  onClick={(e) => {
                    e.stopPropagation();
                    addItemToCart({ foodId: food._id, quantity: 1 });
                  }}
                >
                    Order Me
                </button>
              </div>
            </div>
          </div>
        ))
      ) : (
        <></>
      )}
    </div>
  );
};

export default FoodCard;
