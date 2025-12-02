import React, { useEffect, useState } from "react";
import FoodCard from "../components/FoodCard.jsx";
import { useFoodStore } from "../store/foodStore.js";
import CategorySlide from "../components/CategorySlide.jsx";
import Navbar from "../components/Navbar.jsx";

const Home = () => {
  const [isSelectedIndex, setIsSelectedIndex] = useState(null);
  const [isSelected, setIsSelected] = useState("");
  const {
    isFetchingCategories,
    allCategories,
    fetchingCategories,
    fetchingFoods,
    isFetchingFoods,
    allFoods,
    fetchingFoodByCategory,
    isFetchingFoodByCategory,
    foodCategory,
  } = useFoodStore();

  useEffect(() => {
    fetchingCategories();
    fetchingFoods();
  }, [fetchingCategories, fetchingFoods]);

  useEffect(() => {
    if (isSelected) {
      fetchingFoodByCategory(isSelected);
    }
  }, [fetchingFoodByCategory, isSelected]);

  return (
    <div className="min-h-screen mx-auto bg-gray-300">
      <div className="">
        <Navbar />        
        <div className="w-full h-screen relative">
          <img
            src="/noodles.webp"
            alt="photo"
            className="w-full h-screen object-cover filter brightness-50"
          />
          <div className="absolute top-1/3 left-10 gap-8 mb-2 text-white text-7xl font-bold max-w-2xl">
            <p>Savor the Best</p>
            <p>Flavours, Delivered</p>
            <p>to Your Door</p>
          </div>
          <div className="absolute bottom-16 left-10 grid grid-cols-3 gap-8 max-w-2xl">
            <div className="flex flex-col justify-center items-center">
              <p className="text-orange-400 font-bold text-lg">10k+</p>
              <p className="text-md text-white">Happy Clients</p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <p className="text-orange-400 font-bold text-lg">4.9</p>
              <p className="text-md text-white">Average Rating</p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <p className="text-orange-400 font-bold text-lg">20 min</p>
              <p className="text-md text-white">Average Delivery Time</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center my-10">
        <div className="text-center">
          <div className="w-24 h-1 bg-orange-400 mx-auto mb-6 rounded-full"></div>
          <h2 className="flex flex-col items-center justify-center font-semibold text-2xl leading-relaxed">
            <span>Healthy Affordable Meals</span>
            <span>Delivered Directly</span>
            <span>to Your Door</span>
          </h2>
          <div className="w-24 h-1 bg-orange-400 mx-auto mt-6 rounded-full"></div>
        </div>
      </div>

      <div className="my-6 bg-white mx-3 rounded-xl p-6">
        <div className="text-center mb-5">
          <h2 className="font-bold text-2xl text-black mb-2">Top Categories</h2>
          <p className="text-gray-600">This is the top picked foods for you</p>
        </div>
        <CategorySlide
          isFetchingCategories={isFetchingCategories}
          allCategories={allCategories}
          isSelectedIndex={isSelectedIndex}
          setIsSelectedIndex={setIsSelectedIndex}
          isSelected={isSelected}
          setIsSelected={setIsSelected}
        />
        <FoodCard
          allFoods={allFoods}
          isFetchingFoods={isFetchingFoods}
          foodCategory={foodCategory}
        />
      </div>
    </div>
  );
};

export default Home;
