import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const CountriesCarousel = () => {
  const countries = [
    { img: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742383777/Australia_country_yinda7.jpg" },
    { img: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742383792/Canada_country_up0qkj.jpg" },
    { img: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742383811/Dubai_country_gnpit1.jpg" },
    { img: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742383820/France_country_ezx8bs.jpg" },
    { img: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742383830/germany_country_q0o1mp.jpg" },
    { img: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742383839/Hungary_country_j9r8v7.jpg" },
    { img: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742383847/Italy_country_cqac62.jpg" },
    { img: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742383855/Poland_country_zydisw.jpg" },
    { img: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742383868/UK_country_flgw5g.jpg" },
    { img: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742383877/USA_country_kfuoq0.jpg" },
    
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [screenWidth, setScreenWidth] = useState(0);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setScreenWidth(window.innerWidth);
      const handleResize = () => setScreenWidth(window.innerWidth);
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000); // Auto-scroll every 3 seconds
    return () => clearInterval(interval);
  }, [currentIndex]);

  const getVisibleCount = () => {
    if (screenWidth >= 1024) return 4;
    if (screenWidth >= 768) return 2;
    return 1;
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % countries.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + countries.length) % countries.length);
  };

  const getVisibleItems = () => {
    const count = getVisibleCount();
    return Array.from({ length: count }, (_, i) => countries[(currentIndex + i) % countries.length]);
  };

  return (
    <div className="mt-7 bg-gray-100 p-10">
      <h1 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-8 text-center">
        Beautiful Countries in the <span className="text-[#2B2C83]">world</span>
      </h1>
      <div className="flex items-center justify-center relative max-w-6xl mx-auto">
        <button
          onClick={handlePrev}
          className="absolute left-0 bg-gray-300 p-2 rounded-full shadow-md hover:bg-gray-400 transition-colors z-10"
        >
          <ChevronLeft className="w-6 h-6 text-gray-700" />
        </button>

        <div className="flex overflow-hidden w-full justify-center gap-6">
          {getVisibleItems().map((country, index) => (
            <div 
              key={`${currentIndex}-${index}`} 
              className=" flex-shrink-0 transition-all duration-500"
              style={{ width: `${100 / getVisibleCount()}%` }}
            >
              <img 
                src={country.img} 
                alt="Country" 
                className="w-[80%] mx-auto rounded-lg shadow-md transition-transform duration-500"
              />
              {/* <img
                src={country.flag}
                alt="Flag"
                className="w-[15%] absolute bottom-[-0.5rem] left-[30%] object-cover rounded-full shadow-lg border-2 border-white transition-transform duration-500"
              /> */}
            </div>
          ))}
        </div>

        <button
          onClick={handleNext}
          className="absolute right-0 bg-gray-300 p-2 rounded-full shadow-md hover:bg-gray-400 transition-colors z-10"
        >
          <ChevronRight className="w-6 h-6 text-gray-700" />
        </button>
      </div>
    </div>
  );
};

export default CountriesCarousel;