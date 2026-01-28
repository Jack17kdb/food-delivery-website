import React, { useState } from "react";
import { FaUser, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import { FaGoogle, FaFacebookF } from "react-icons/fa";
import AuthSlider from "../components/AuthSlider.jsx";
import { useAuthStore } from "../store/authStore.js";
import { motion } from 'motion/react';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { loggingIn, isLoggingIn } = useAuthStore();
  const [ formData, setFormData ] = useState({
    username: "",
    password: ""
  })

  const togglePassword = () => {
    setShowPassword((prev) => !prev);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    loggingIn(formData);
  }

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }} className="min-h-screen py-5 bg-gray-300 px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center p-4 sm:p-6 m-2 sm:m-8 gap-4 bg-white rounded-2xl py-6 sm:py-10">
        <div className="flex flex-col items-center justify-center w-full max-w-md mx-auto">
          <div className="text-center mb-6 sm:mb-8">
            <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl mb-2">Welcome Back!</h1>
            <p className="text-xs sm:text-sm text-gray-500">
              Sign in with your username and password
            </p>
          </div>

          <form onSubmit={handleSubmit} className="w-full">
            <div className="flex flex-col gap-3">
              <div className="flex items-center border border-gray-300 focus-within:ring-2 focus-within:ring-blue-400 focus-within:outline-none rounded-full p-3 h-10 w-full">
                <FaUser className="text-gray-300 mr-3 flex-shrink-0" />
                <input
                  type="text"
                  placeholder="Username"
                  value={formData.username}
                  className="w-full outline-none text-gray-700 text-sm sm:text-base"
                  onChange={(e) => setFormData({...formData, username: e.target.value})}
                />
              </div>

              <div className="flex items-center border border-gray-300 focus-within:ring-2 focus-within:ring-blue-400 focus-within:outline-none rounded-full p-3 h-10 w-full">
                <FaLock className="text-gray-300 mr-3 flex-shrink-0" />
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  value={formData.password}
                  className="w-full outline-none text-gray-700 text-sm sm:text-base"
                  onChange={(e) => setFormData({...formData, password: e.target.value})}
                />
                {!showPassword ? (
                  <FaEye
                    size={18}
                    onClick={togglePassword}
                    className="flex-end text-gray-300 hover:text-blue-400 cursor-pointer flex-shrink-0"
                  />
                ) : (
                  <FaEyeSlash
                    size={18}
                    onClick={togglePassword}
                    className="flex-end text-gray-300 hover:text-blue-400 cursor-pointer flex-shrink-0"
                  />
                )}
              </div>
              <div className="flex items-center justify-end">
                <a
                  href="#"
                  className="font-semibold text-gray-800 hover:underline hover:text-blue-400 transition-all duration-300 text-xs sm:text-sm"
                >
                  Forget Password?
                </a>
              </div>
              <div className="flex items-center justify-center">
                <button
                  type="submit"
                  disabled={isLoggingIn}
                  className="bg-black text-white font-semibold cursor-pointer rounded-full p-2 h-10 active:scale-95 transition w-full text-sm sm:text-base"
                >
                  {isLoggingIn ? "Logging in..." : "Login"}
                </button>
              </div>

              <div className="flex items-center my-4">
                <div className="flex-grow border-t border-gray-400"></div>
                <div className="mx-3 text-xs sm:text-sm text-black">or login with</div>
                <div className="flex-grow border-t border-gray-400"></div>
              </div>

              <div className="flex items-center justify-center">
                <button
                  type="button"
                  className="bg-transparent text-black border border-gray-300 text-sm cursor-pointer rounded-full p-2 h-10 active:scale-95 transition w-full flex items-center justify-center gap-2"
                >
                  <FaGoogle className="text-[#DB4437] text-lg sm:text-xl flex-shrink-0" />
                  <span className="font-medium text-xs sm:text-sm">Login with Google</span>
                </button>
              </div>

              <div className="flex items-center justify-center">
                <button
                  type="button"
                  className="bg-transparent text-black border border-gray-300 text-sm cursor-pointer rounded-full p-2 h-10 active:scale-95 transition w-full flex items-center justify-center gap-2"
                >
                  <FaFacebookF className="text-blue-400 text-lg sm:text-xl flex-shrink-0" />
                  <span className="font-medium text-xs sm:text-sm">Login with Facebook</span>
                </button>
              </div>

              <div className="flex items-center justify-center gap-1 mt-6 sm:mt-10">
                <span className="text-gray-700 text-xs sm:text-sm">
                  Don't have an account?
                </span>{" "}
                <a
                  href="/register"
                  className="font-semibold text-xs sm:text-sm text-gray-800 hover:underline hover:text-blue-400 transition-all duration-300"
                >
                  Register Now
                </a>
              </div>
            </div>
          </form>
        </div>
        
        <div className="hidden md:block h-full w-full" >
         <AuthSlider/>
        </div>
      </div>
    </motion.div>
  );
};

export default Login;
