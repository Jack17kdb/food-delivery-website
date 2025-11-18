import React from 'react'

const FoodCard = () => {
  return (
    <div className='bg-gray-300 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 max-w-xs hover:scale-105 transition duration-500'>
        <img src='/cheese.webp' className='w-full h-48 object-cover'/>
        <div className='p-4'>
            <p className='font-bold text-lg mb-2'>American Style Burger</p>
            <div className='flex justify-between items-center'>
                <div className='flex gap-2 items-center'>
                    <p className='text-lg font-bold text-green-600'>$27</p>
                    <span className='text-gray-500 text-sm line-through'>$32</span>
                </div>
                <button className='cursor-pointer bg-orange-500 rounded-lg px-4 py-2 text-white active:scale-93 hover:bg-orange-600 transition-all duration-300'>Order Me</button>
            </div>
        </div>
    </div>
  )
}

export default FoodCard