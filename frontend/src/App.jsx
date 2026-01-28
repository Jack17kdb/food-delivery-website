import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Cart from "./pages/Cart.jsx";
import Food from "./pages/Food.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import SearchPage from "./pages/SearchPage.jsx";
import { useAuthStore } from "./store/authStore.js";
import { useEffect } from "react";
import NotFound from "./pages/NotFound.jsx";
import { Toaster } from "react-hot-toast";
import { motion } from 'motion/react';

function App() {
  const { authUser, checkAuth, isCheckingAuth } = useAuthStore();

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  if (isCheckingAuth && !authUser) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="w-12 h-12 border-4 border-orange-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={authUser ? <Home /> : <Navigate to="/login" />} />
          <Route path="/cart" element={authUser ? <Cart /> : <Navigate to="/login" />} />
          <Route path="/food/:foodId" element={authUser ? <Food /> : <Navigate to="/login" />} />
          <Route path="/search" element={authUser ? <SearchPage /> : <Navigate to="/login" />} />
          <Route path="/register" element={!authUser ? <Register /> : <Navigate to="/" />} />
          <Route path="/login" element={!authUser ? <Login /> : <Navigate to="/" />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>

      <Toaster position="top-center" />
    </>
  );
}

export default App;
