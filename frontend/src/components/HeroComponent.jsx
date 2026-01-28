import React from 'react'

const HeroComponent = () => {
  return (
    <div className="w-full h-screen relative">
      <img
        src="/noodles.webp"
        alt="photo"
        className="w-full h-screen object-cover filter brightness-50"
      />
      <div className="absolute top-1/4 sm:top-1/3 left-4 sm:left-10 gap-4 sm:gap-8 mb-2 text-white text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold max-w-2xl px-2">
        <p><span className='text-orange-500'>Savor</span> the Best</p>
        <p><span className="text-orange-500">Flavours</span>, Delivered</p>
        <p>to Your Door</p>
      </div>
      <div className="absolute bottom-8 sm:bottom-16 left-4 sm:left-10 right-4 sm:right-auto grid grid-cols-3 gap-3 sm:gap-8 max-w-2xl bg-black/20 backdrop-blur-sm p-3 sm:p-6 rounded-2xl border border-white/10">
        <div className="flex flex-col justify-center items-center">
          <p className="text-orange-400 font-bold text-sm sm:text-lg">10k+</p>
          <p className="text-xs sm:text-md text-white text-center">Happy Clients</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <p className="text-orange-400 font-bold text-sm sm:text-lg">4.9</p>
          <p className="text-xs sm:text-md text-white text-center">Average Rating</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <p className="text-orange-400 font-bold text-sm sm:text-lg">20 min</p>
          <p className="text-xs sm:text-md text-white text-center">Average Delivery Time</p>
        </div>
      </div>
    </div>
  )
}

export default HeroComponent
