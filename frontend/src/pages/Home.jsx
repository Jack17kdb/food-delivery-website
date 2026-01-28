import React, { useEffect, useState } from "react";
import FoodCard from "../components/FoodCard.jsx";
import { useFoodStore } from "../store/foodStore.js";
import CategorySlide from "../components/CategorySlide.jsx";
import Navbar from "../components/Navbar.jsx";
import HeroComponent from "../components/HeroComponent.jsx";
import { motion } from 'motion/react';

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
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }} className="min-h-screen mx-auto bg-gray-300">
      <div className="">
        <Navbar />        
        <HeroComponent />
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
    </motion.div>
  );
};

export default Home;
