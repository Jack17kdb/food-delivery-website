import React, { useState } from "react";

const CategorySlide = ({
  isFetchingCategories,
  allCategories,
  isSelectedIndex,
  setIsSelectedIndex,
  isSelected,
  setIsSelected,
}) => {
  const handleSelect = (index, cat) => {
    setIsSelectedIndex(index);
    setIsSelected(cat);
  };

  return (
    <div className="flex flex-nowrap overflow-x-auto scrollbar-hide items-center justify-around gap-2 p-2 bg-gray-300 rounded-lg">
      {allCategories && allCategories.length > 0 ? (
        allCategories.map((cat, index) => (
          <div
            key={index}
            className={`text-black text-sm font-semibold cursor-pointer px-3 py-1 rounded-lg transition-all duration-400 ease-in-out ${
              isSelectedIndex === index ? "bg-white shadow-lg" : ""
            }`}
            onClick={() => handleSelect(index, cat)}
          >
            {cat}
          </div>
        ))
      ) : (
        <></>
      )}
    </div>
  );
};

export default CategorySlide;
