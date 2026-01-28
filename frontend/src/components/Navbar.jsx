import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { FaSearch } from "react-icons/fa";
import { useFoodStore } from '../store/foodStore';
import { useState } from 'react';
import { useAuthStore } from '../store/authStore';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const [ searchTerm, setSearchTerm ] = useState("");
  const [ isMenuOpen, setIsMenuOpen ] = useState(false);
  const { searchingFoods, searchResults } = useFoodStore();
  const { logout } = useAuthStore();
  const navigate = useNavigate();

  const handleSearch = async (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      await searchingFoods(searchTerm);
      setSearchTerm("");
      navigate('/search');
      setIsMenuOpen(false);
    }
  };

  const handleLogout = async () => {
    await logout();
    navigate('/login');
    setIsMenuOpen(false);
  };

  const navLinkStyles = ({ isActive }) => 
    `text-sm font-medium transition-colors ${isActive ? "text-orange-500" : "text-gray-700 hover:text-orange-500"}`;

  return (
    <nav className="fixed top-4 inset-x-0 mx-auto max-w-7xl px-4 sm:px-6 py-3 bg-white/80 backdrop-blur-md z-50 rounded-full shadow-lg">
      <div className="flex items-center justify-between">
        <div>
          <NavLink to="/">
            <p className="text-black cursor-pointer font-bold text-lg sm:text-xl tracking-tight">
              QuickBite
            </p>
          </NavLink>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 items-center">
          <div className="flex gap-6">
            <NavLink to="/" className={navLinkStyles}>
              Home
            </NavLink>
            <NavLink to="/cart" className={navLinkStyles}>
              Cart
            </NavLink>
            <button
              type='button'
              className="text-sm font-medium text-gray-700 hover:text-orange-500 transition-colors cursor-pointer"
              onClick={handleLogout}
            >
              logout
            </button>
          </div>
          
          <form
            onSubmit={handleSearch}
            className="flex items-center px-4 py-1.5 rounded-full bg-gray-100 border border-transparent focus-within:border-orange-400 focus-within:bg-white transition-all">
            <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              className="bg-transparent outline-none text-sm w-32 md:w-48"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button type="submit">
              <FaSearch className="text-gray-400 text-sm cursor-pointer hover:text-orange-500" />
            </button>
          </form>
        </div>

        {/* Mobile Menu Button & Search */}
        <div className="flex md:hidden items-center gap-3">
          <form
            onSubmit={handleSearch}
            className="flex items-center px-3 py-1.5 rounded-full bg-gray-100 border border-transparent focus-within:border-orange-400 focus-within:bg-white transition-all">
            <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              className="bg-transparent outline-none text-sm w-20"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button type="submit">
              <FaSearch className="text-gray-400 text-sm cursor-pointer hover:text-orange-500" />
            </button>
          </form>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-700 hover:text-orange-500 transition-colors"
          >
            {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden mt-4 pt-4 border-t border-gray-200">
          <div className="flex flex-col gap-3">
            <NavLink 
              to="/" 
              className={navLinkStyles}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </NavLink>
            <NavLink 
              to="/cart" 
              className={navLinkStyles}
              onClick={() => setIsMenuOpen(false)}
            >
              Cart
            </NavLink>
            <button
              type='button'
              className="text-sm font-medium text-gray-700 hover:text-orange-500 transition-colors cursor-pointer text-left"
              onClick={handleLogout}
            >
              logout
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
