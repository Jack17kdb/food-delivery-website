import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar.jsx';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Navbar />
      
      <div className="flex-grow flex items-center justify-center p-6">
        <div className="max-w-md w-full bg-white rounded-3xl shadow-xl p-10 text-center border border-gray-100 mt-15">
          <div className="relative mb-8">
            <h1 className="text-9xl font-extrabold text-gray-200">404</h1>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-6xl" role="img" aria-label="spilled food">
                empty plate 🍽️
              </span>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Oops! Page is Empty
          </h2>
          <p className="text-gray-500 mb-8 leading-relaxed">
            It looks like the page you're looking for was either moved, deleted, or never existed in our menu.
          </p>

          <div className="flex flex-col gap-3">
            <Link 
              to="/" 
              className="bg-orange-500 text-white font-bold py-3 px-8 rounded-full hover:bg-orange-600 transition-all active:scale-95 shadow-lg shadow-orange-100"
            >
              Back to Home
            </Link>
            <Link 
              to="/foods" 
              className="text-gray-600 font-semibold py-2 hover:text-orange-500 transition-colors"
            >
              View Menu
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;