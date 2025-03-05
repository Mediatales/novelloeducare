import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const CountriesCarousel = () => {
  const countries = [
    { img: "./assests/home/country1.png", flag: "./assests/home/aus.png" },
    { img: "./assests/home/country2.png", flag: "./assests/home/ita.png" },
    { img: "./assests/home/country3.png", flag: "./assests/home/fra.png" },
    { img: "./assests/home/country4.png", flag: "./assests/home/usa.png" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [screenWidth, setScreenWidth] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setScreenWidth(window.innerWidth);

      const handleResize = () => {
        setScreenWidth(window.innerWidth);
      };

      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  const getVisibleCount = () => {
    if (screenWidth >= 1024) return 4; // Large screens
    if (screenWidth >= 768) return 2; // Medium screens
    return 1; // Small screens
  };

  const handleNext = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    
    setCurrentIndex((prevIndex) => {
      const nextIndex = prevIndex + 1;
      if (nextIndex >= countries.length) {
        return 0;
      }
      return nextIndex;
    });

    setTimeout(() => setIsTransitioning(false), 500);
  };

  const handlePrev = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    
    setCurrentIndex((prevIndex) => {
      const nextIndex = prevIndex - 1;
      if (nextIndex < 0) {
        return countries.length - 1;
      }
      return nextIndex;
    });

    setTimeout(() => setIsTransitioning(false), 500);
  };

  // Calculate visible items with wrap-around
  const getVisibleItems = () => {
    const count = getVisibleCount();
    const items = [];
    for (let i = 0; i < count; i++) {
      const index = (currentIndex + i) % countries.length;
      items.push(countries[index]);
    }
    return items;
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
          disabled={isTransitioning}
        >
          <ChevronLeft className="w-6 h-6 text-gray-700" />
        </button>

        <div className="flex overflow-hidden w-full justify-center gap-6">
          {getVisibleItems().map((country, index) => (
            <div 
              key={`${currentIndex}-${index}`} 
              className="relative flex-shrink-0 transition-all duration-500"
              style={{
                width: `${100 / getVisibleCount()}%`,
              }}
            >
              <img 
                src={country.img} 
                alt="Country" 
                className="w-[80%] mx-auto rounded-lg shadow-md transition-transform duration-500"
              />
              <img
                src={country.flag}
                alt="Flag"
                className="w-[15%] absolute bottom-[-0.5rem] left-[30%] object-cover rounded-full shadow-lg border-2 border-white transition-transform duration-500"
              />
            </div>
          ))}
        </div>

        <button
          onClick={handleNext}
          className="absolute right-0 bg-gray-300 p-2 rounded-full shadow-md hover:bg-gray-400 transition-colors z-10"
          disabled={isTransitioning}
        >
          <ChevronRight className="w-6 h-6 text-gray-700" />
        </button>
      </div>
    </div>
  );
};

export default CountriesCarousel;