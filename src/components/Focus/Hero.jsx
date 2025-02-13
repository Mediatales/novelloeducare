import React from 'react'

const Hero = () => {
  return (
    <div>
      <div className="relative bg-[#F5F5F5]">
        {/* Background Image */}
        <img
          src="./assests/focus/home/bg.png"
          alt="Hero Background"
          className="w-full h-[500px] object-cover"
        />

        {/* Overlay Text */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center bg-black bg-opacity-50">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Dream to Study Abroad
          </h1>
          <p className="text-lg md:text-xl text-white max-w-2xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Hero
