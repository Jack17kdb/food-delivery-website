import React from 'react'
import { FaSearch } from "react-icons/fa";

const Navbar = () => {
    return (
        <div className="flex fixed inset-x-0 items-center justify-between mx-8 my-4 rounded-full px-5 py-2 outline-none bg-white/60 z-10 shadow-sm">
          <div>
            <p className="text-black cursor-pointer font-bold text-md">
              QuickBite
            </p>
          </div>
          <div className="flex gap-6 items-center">
            <a
              href="/"
              className="text-md text-black hover:text-orange-400 transition-all duration-300 cursor-pointer"
            >
              Home
            </a>
            <a
              href="/cart"
              className="text-md text-black hover:text-orange-400 transition-all duration-300 cursor-pointer"
            >
              Cart
            </a>
            <a
              href="/"
              className="text-md text-black hover:text-orange-400 transition-all duration-300 cursor-pointer"
            >
              Foods
            </a>
            <a
              href="/"
              className="text-md text-black hover:text-orange-400 transition-all duration-300 cursor-pointer"
            >
              SignOut
            </a>
            <div className="flex items-center px-3 py-1 rounded-full border border-gray-700 focus-within:ring-2 focus-within:ring-blue-400 focus-within:border-none">
              <input
                type="text"
                placeholder="Search..."
                className="bg-transparent outline-none"
              />
              <FaSearch className="text-gray-700 cursor-pointer" />
            </div>
          </div>
        </div>
    )
}

export default Navbar