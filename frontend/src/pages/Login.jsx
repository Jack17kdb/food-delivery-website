import React, { useState } from "react";
import { FaUser, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import { FaGoogle, FaFacebookF } from "react-icons/fa";
import AuthSlider from "../components/AuthSlider.jsx";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div className="min-h-screen py-5 bg-gray-300">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center p-6 m-8 gap-4 bg-white rounded-2xl py-10">
        <div className="flex flex-col items-center justify-center">
          <div className="text-center mb-8">
            <h1 className="font-bold text-4xl mb-2">Welcome Back!</h1>
            <p className="text-sm text-gray-500">
              Sign in with your username and password
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <div className="flex items-center border border-gray-300 focus-within:ring-2 focus-within:ring-blue-400 focus-within:outline-none rounded-full p-3 h-10 w-75">
              <FaUser className="text-gray-300 mr-3" />
              <input
                type="text"
                placeholder="Username"
                className="w-full outline-none text-gray-700"
              />
            </div>

            <div className="flex items-center border border-gray-300 focus-within:ring-2 focus-within:ring-blue-400 focus-within:outline-none rounded-full p-3 h-10 w-75">
              <FaLock className="text-gray-300 mr-3" />
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="w-full outline-none text-gray-700"
              />
              {!showPassword ? (
                <FaEye
                  size={20}
                  onClick={togglePassword}
                  className="flex-end text-gray-300 hover:text-blue-400 cursor-pointer"
                />
              ) : (
                <FaEyeSlash
                  size={20}
                  onClick={togglePassword}
                  className="flex-end text-gray-300 hover:text-blue-400 cursor-pointer"
                />
              )}
            </div>
            <div className="flex items-center justify-end">
              <a
                href="/forget-password"
                className="font-semibold text-gray-800 hover:underline hover:text-blue-400 transition-all duration-300 text-sm"
              >
                Forget Password?
              </a>
            </div>
            <div className="flex items-center justify-center">
              <button
                type="button"
                className="bg-black text-white font-semibold cursor-pointer rounded-full p-2 h-10 active:scale-95 transition w-full"
              >
                Login
              </button>
            </div>

            <div className="flex items-center my-4">
              <div className="flex-grow border-t border-gray-400"></div>
              <div className="mx-3 text-md text-black">or login with</div>
              <div className="flex-grow border-t border-gray-400"></div>
            </div>

            <div className="flex items-center justify-center">
              <button
                type="button"
                className="bg-transparent text-black border border-gray-300 text-sm cursor-pointer rounded-full p-2 h-10 active:scale-95 transition w-full flex items-center justify-center gap-2"
              >
                <FaGoogle className="text-[#DB4437] text-xl" />
                <span className="font-medium text-sm">Login with Google</span>
              </button>
            </div>

            <div className="flex items-center justify-center">
              <button
                type="button"
                className="bg-transparent text-black border border-gray-300 text-sm cursor-pointer rounded-full p-2 h-10 active:scale-95 transition w-full flex items-center justify-center gap-2"
              >
                <FaFacebookF className="text-blue-400 text-xl" />
                <span className="font-medium text-sm">Login with Facebook</span>
              </button>
            </div>

            <div className="flex items-center justify-center gap-1 mt-10">
              <span className="text-gray-700 text-sm">
                Don't have an account?
              </span>{" "}
              <a
                href="/register"
                className="font-semibold text-sm text-gray-800 hover:underline hover:text-blue-400 transition-all duration-300"
              >
                Register Now
              </a>
            </div>
          </div>
        </div>
        <div className="hidden md:block h-full w-full" >
         <AuthSlider/>
        </div>
      </div>
    </div>
  );
};

export default Login;
