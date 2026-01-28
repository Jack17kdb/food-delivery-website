import React, { useState, useEffect } from "react";
import axios from "axios";

const AuthSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [pictures, setPictures] = useState([]);
  const [loading, setLoading] = useState(false);
  const [fade, setFade] = useState(true);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    loadPhotos();
  }, []);

  useEffect(() => {
    if (pictures.length === 0 || !ready) return;
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentIndex((prev) =>
          prev === pictures.length - 1 ? 0 : prev + 1
        );
        setFade(true);
      }, 500);
    }, 5000);

    return () => clearInterval(interval);
  }, [pictures, ready]);

  const loadPhotos = async () => {
    try {
      setLoading(true);
      const images = ['/image1.webp', '/image2.webp', '/image3.webp'];
      setPictures(images);
      setCurrentIndex(0);
      setReady(true);
    } catch (error) {
      console.log("Error fetching images", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative h-full w-full flex flex-col justify-center items-center rounded-xl">
      {loading ? (
        <div className="h-full w-full animate-pulse rounded-xl bg-gray-300"></div>
      ) : (
        <img
          src={pictures[currentIndex]}
          alt="Food slide"
          className={`w-full h-full rounded-xl object-contain transition-opacity duration-500 ${
            fade ? "opacity-100" : "opacity-0"
          }`}
        />
      )}
      <div className="absolute flex bottom-3 gap-2">
        {pictures?.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`transition-all duration-300 rounded-full cursor-pointer ${
              index === currentIndex
                ? "bg-orange-500 w-6 h-2"
                : "bg-gray-400 w-2 h-2"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default AuthSlider;
