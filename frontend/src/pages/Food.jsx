import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useFoodStore } from "../store/foodStore.js";
import { useCartStore } from "../store/cartStore.js";
import Navbar from "../components/Navbar.jsx";
import { motion } from "motion/react";

const Food = () => {
  const { foodId } = useParams();
  const { fetchingFoodById, food, isFetchingFoodById } = useFoodStore();
  const { addItemToCart } = useCartStore();

  useEffect(() => {
    fetchingFoodById(foodId);
  }, [fetchingFoodById, foodId]);

  if (isFetchingFoodById || !food) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="min-h-screen bg-gray-50"
      >
        <Navbar />
        <div className="flex flex-col justify-center items-center h-[70vh] gap-4">
          <div className="w-12 h-12 border-4 border-orange-500 border-t-transparent rounded-full animate-spin"></div>
          <p className="text-gray-500 font-medium">Loading meal details...</p>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="min-h-screen bg-gray-50 pb-16"
    >
      <Navbar />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-24 sm:pt-28 grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-10">
        
        <div className="bg-white rounded-2xl sm:rounded-3xl overflow-hidden shadow-sm border border-gray-200">
          <img
            src={food.image}
            alt={food.name}
            className="w-full h-64 sm:h-80 lg:h-full object-cover"
          />
        </div>

        
        <div className="flex flex-col justify-between">
          <div>
            <span className="inline-block bg-orange-100 text-orange-600 text-xs font-bold px-3 py-1 rounded-full uppercase mb-3 sm:mb-4">
              {food.category}
            </span>

            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 mb-3 sm:mb-4">
              {food.name}
            </h1>

            <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4 sm:mb-6">
              This {food.name} is freshly prepared using high-quality ingredients to ensure great taste, balanced nutrition, and a satisfying experience with every bite.
            </p>

            <div className="flex items-center gap-4 sm:gap-6 mb-6 sm:mb-8">
              <div>
                <p className="text-xs uppercase text-gray-400 font-semibold tracking-wide">Price</p>
                <p className="text-2xl sm:text-3xl font-bold text-green-600">${food.cost}</p>
              </div>

              <div>
                <p className="text-xs uppercase text-gray-400 font-semibold tracking-wide">Availability</p>
                <p className="text-base sm:text-lg font-bold text-gray-800">In Stock</p>
              </div>
            </div>
          </div>

          <button
            onClick={() => addItemToCart({ foodId: food._id, quantity: 1 })}
            className="w-full bg-orange-500 hover:bg-orange-600 text-white px-8 sm:px-10 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-bold text-base sm:text-lg transition-all active:scale-95 shadow-lg shadow-orange-200"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default Food;
