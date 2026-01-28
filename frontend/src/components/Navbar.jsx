import React, { useEffect, useRef, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { FiMenu, FiX } from "react-icons/fi";
import { useFoodStore } from "../store/foodStore";
import { useAuthStore } from "../store/authStore";

const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navRef = useRef(null);
  const { searchingFoods } = useFoodStore();
  const { logout } = useAuthStore();
  const navigate = useNavigate();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!searchTerm.trim()) return;
    await searchingFoods(searchTerm);
    setSearchTerm("");
    navigate("/search");
    setIsMenuOpen(false);
  };

  const handleLogout = async () => {
    await logout();
    navigate("/login");
    setIsMenuOpen(false);
  };

  const navLinkStyles = ({ isActive }) =>
    `text-sm font-medium transition-colors ${
      isActive ? "text-orange-500" : "text-gray-700 hover:text-orange-500"
    }`;

  return (
    <nav
      ref={navRef}
      className="
        fixed top-4 inset-x-0 mx-auto max-w-7xl
        px-4 sm:px-6 py-3
        bg-white/80 backdrop-blur-md
        z-50 shadow-lg
        rounded-3xl md:rounded-full
        transition-shadow duration-200
      "
    >
      <div className="flex items-center justify-between">
        <NavLink to="/">
          <p className="font-bold text-lg sm:text-xl tracking-tight">
            QuickBite
          </p>
        </NavLink>

        <div className="hidden md:flex items-center gap-8">
          <div className="flex gap-6">
            <NavLink to="/" className={navLinkStyles}>
              Home
            </NavLink>
            <NavLink to="/cart" className={navLinkStyles}>
              Cart
            </NavLink>
            <button
              onClick={handleLogout}
              className="text-sm font-medium text-gray-700 hover:text-orange-500 transition-colors"
            >
              logout
            </button>
          </div>

          <form
            onSubmit={handleSearch}
            className="flex items-center px-4 py-1.5 rounded-full bg-gray-100 focus-within:bg-white focus-within:border-orange-400 border transition-colors"
          >
            <input
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search..."
              className="bg-transparent outline-none text-sm w-32 md:w-48"
            />
            <button type="submit">
              <FaSearch className="text-gray-400 hover:text-orange-500" />
            </button>
          </form>
        </div>

        <div className="flex md:hidden items-center gap-3">
          <form
            onSubmit={handleSearch}
            className="flex items-center px-3 py-1.5 rounded-full bg-gray-100 focus-within:bg-white border transition-colors"
          >
            <input
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search..."
              className="bg-transparent outline-none text-sm w-20"
            />
            <button type="submit">
              <FaSearch className="text-gray-400 hover:text-orange-500" />
            </button>
          </form>

          <button
            onClick={() => setIsMenuOpen((v) => !v)}
            className="text-gray-700 hover:text-orange-500"
          >
            {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden mt-4 pt-4 border-t border-gray-200">
          <div className="flex flex-col gap-3 pb-2">
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
              onClick={handleLogout}
              className="text-sm font-medium text-left text-gray-700 hover:text-orange-500"
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
