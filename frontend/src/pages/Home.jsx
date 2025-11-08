import React from 'react'
import { FaSearch } from 'react-icons/fa';

const Home = () => {
  return (
    <div className='min-h-screen mx-auto'>
      <div className=''>
        <div className='flex fixed inset-x-0 items-center justify-between mx-8 my-4 rounded-full px-6 py-3 outline-none bg-white/60 z-10 shadow-sm'>
          <div>
            <p className='text-black cursor-pointer font-bold text-md'>Rapid Eats</p>
          </div>
          <div className='flex gap-6 items-center'>
            <a href='/' className='text-md text-black hover:text-orange-400 transition-all duration-300 cursor-pointer'>Home</a>
            <a href='/' className='text-md text-black hover:text-orange-400 transition-all duration-300 cursor-pointer'>Cart</a>
            <a href='/' className='text-md text-black hover:text-orange-400 transition-all duration-300 cursor-pointer'>Recipes</a>
            <a href='/' className='text-md text-black hover:text-orange-400 transition-all duration-300 cursor-pointer'>SignOut</a>
            <div className='flex items-center px-3 py-1 rounded-full border border-gray-700 focus-within:ring-2 focus-within:ring-blue-400 focus-within:border-none'>
              <input type='text' placeholder='Search...' className='bg-transparent outline-none'/>
              <FaSearch className='text-gray-700 cursor-pointer'/>
            </div>
          </div>
        </div>
        <div className='w-full h-screen relative'>
          <img src="/noodles.webp" alt="photo" className='w-full h-screen object-cover filter brightness-50' />
          <div className='absolute top-1/3 left-10 gap-8 mb-2 text-white text-7xl font-bold max-w-2xl'>
            <p>Savor the Best</p>
            <p>Flavours, Delivered</p>
            <p>to Your Door</p>
          </div>
          <div className='absolute bottom-16 left-10 grid grid-cols-3 gap-8 max-w-2xl'>
            <div className='flex flex-col justify-center items-center'>
              <p className='text-orange-400 font-bold text-lg'>10k+</p>
              <p className='text-md text-white'>Happy Clients</p>
            </div>
            <div className='flex flex-col justify-center items-center'>
              <p className='text-orange-400 font-bold text-lg'>4.9</p>
              <p className='text-md text-white'>Average Rating</p>
            </div>
            <div className='flex flex-col justify-center items-center'>
              <p className='text-orange-400 font-bold text-lg'>20 min</p>
              <p className='text-md text-white'>Average Delivery Time</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home