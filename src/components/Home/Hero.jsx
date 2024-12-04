import React from 'react';

const Hero = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative bg-[#F5F5F5]">
        {/* Background Image */}
        <img
          src="./assests/herobg.png"
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

      {/* Discover Universities Section */}
      <div className="bg-gray-100 py-12 px-4 md:px-16">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-8 text-center">
          Discover top universities
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1 */}
          <div className="bg-white shadow-md rounded-lg p-6 text-center">
            <img
              src="./assests/uni1.png"
              alt="MIT University"
              className="w-20 h-20 mx-auto mb-4"
            />
            <h3 className="font-bold text-lg">MIT University</h3>
            <p className="text-sm text-gray-500">
              Cambridge, Massachusetts, USA
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white shadow-md rounded-lg p-6 text-center">
            <img
              src="./assests/uni2.png"
              alt="Oxford University"
              className="w-20 h-20 mx-auto mb-4"
            />
            <h3 className="font-bold text-lg">Oxford University</h3>
            <p className="text-sm text-gray-500">
              Oxford, England, UK
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white shadow-md rounded-lg p-6 text-center">
            <img
              src="./assests/uni3.png"
              alt="Toronto University"
              className="w-20 h-20 mx-auto mb-4"
            />
            <h3 className="font-bold text-lg">Toronto University</h3>
            <p className="text-sm text-gray-500">
              Cambridge, Massachusetts, USA
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-white shadow-md rounded-lg p-6 text-center">
            <img
              src="./assests/uni4.png"
              alt="ANU University"
              className="w-20 h-20 mx-auto mb-4"
            />
            <h3 className="font-bold text-lg">ANU University</h3>
            <p className="text-sm text-gray-500">
              Cambridge, Massachusetts, USA
            </p>
          </div>
        </div>
      </div>

      {/*Course Brochere */}

      <div>

      <img src="./assests/course.png" alt="" />

      </div>
    </div>

    

  );
};

export default Hero;
