import React from "react";
import { useFoodStore } from "../store/foodStore.js";
import Navbar from "../components/Navbar.jsx";
import SearchCard from "../components/SearchCard.jsx";
import { motion } from 'motion/react';

const SearchPage = () => {
    const { searchResults, isSearchingFoods } = useFoodStore();

    const maxItems = 12;
    const foodsToShow = searchResults ? searchResults.slice(0, maxItems) : [];

    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }} className='min-h-screen bg-gray-50 pt-28 pb-10'>
            <Navbar />
            <div className='max-w-4xl mx-auto px-4'>
                <div className="mb-8">
                    <h2 className='text-3xl font-extrabold text-gray-900'>Search Results</h2>
                    <p className="text-gray-500 mt-1">Found {foodsToShow.length} items matching your search</p>
                </div>

                {isSearchingFoods ? (
                    <div className="flex flex-col justify-center items-center h-64 gap-4">
                        <div className="w-12 h-12 border-4 border-orange-500 border-t-transparent rounded-full animate-spin"></div>
                        <p className="text-lg text-gray-500 font-medium">Finding the best meals for you...</p>
                    </div>
                ) : foodsToShow.length > 0 ? (
                    <div className='flex flex-col gap-6'>
                        {foodsToShow.map((food) => (
                            <SearchCard key={food._id} food={food} />
                        ))}
                    </div>
                ) : (
                    <div className='text-center py-20 bg-white rounded-3xl shadow-sm border border-gray-100'>
                        <div className="text-5xl mb-4">🔍</div>
                        <p className='text-xl text-gray-600 font-bold'>No matches found</p>
                        <p className='text-gray-400 mt-2 max-w-xs mx-auto'>
                            We couldn't find what you're looking for. Try a different keyword.
                        </p>
                    </div>
                )}
            </div>
        </motion.div>
    );
}

export default SearchPage;
