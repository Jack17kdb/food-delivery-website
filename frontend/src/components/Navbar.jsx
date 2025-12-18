import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaSearch } from "react-icons/fa";

const Navbar = () => {
    const navLinkStyles = ({ isActive }) => 
        `text-sm font-medium transition-colors ${isActive ? "text-orange-500" : "text-gray-700 hover:text-orange-500"}`;

    return (
        <nav className="fixed top-4 inset-x-0 mx-auto max-w-7xl px-6 py-3 bg-white/80 backdrop-blur-md z-50 rounded-full shadow-lg flex items-center justify-between">
          <div>
            <NavLink to="/">
                <p className="text-black cursor-pointer font-bold text-xl tracking-tight">
                QuickBite
                </p>
            </NavLink>
          </div>
          <div className="flex gap-8 items-center">
            <div className="hidden md:flex gap-6">
                <NavLink to="/" className={navLinkStyles}>
                    Home
                </NavLink>
                <NavLink to="/cart" className={navLinkStyles}>
                    Cart
                </NavLink>
                <NavLink to="/foods" className={navLinkStyles}>
                    Foods
                </NavLink>
                <NavLink to="/signout" className={navLinkStyles}>
                    Sign Out
                </NavLink>
            </div>
            
            <div className="flex items-center px-4 py-1.5 rounded-full bg-gray-100 border border-transparent focus-within:border-orange-400 focus-within:bg-white transition-all">
              <input
                type="text"
                placeholder="Search..."
                className="bg-transparent outline-none text-sm w-32 md:w-48"
              />
              <FaSearch className="text-gray-400 text-sm cursor-pointer hover:text-orange-500" />
            </div>
          </div>
        </nav>
    );
};

export default Navbar;