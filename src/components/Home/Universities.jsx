import React, { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Universities = () => {
  const universities = [
    {
      img: "./assests/uni1.png",
      name: "MIT University",
      location: "Cambridge, Massachusetts, USA",
    },
    {
      img: "./assests/uni2.png",
      name: "Oxford University",
      location: "Oxford, England, UK",
    },
    {
      img: "./assests/uni3.png",
      name: "Toronto University",
      location: "Toronto, Canada",
    },
    {
      img: "./assests/uni4.png",
      name: "ANU University",
      location: "Canberra, Australia",
    },
  ];

  const [visibleItems, setVisibleItems] = useState(4);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const carouselRef = useRef(null);

  useEffect(() => {
    const updateVisibleItems = () => {
      if (window.innerWidth >= 1024) {
        setVisibleItems(4); // lg screens
      } else if (window.innerWidth >= 768) {
        setVisibleItems(2); // md screens
      } else {
        setVisibleItems(1); // mobile
      }
    };

    updateVisibleItems();
    window.addEventListener("resize", updateVisibleItems);
    return () => window.removeEventListener("resize", updateVisibleItems);
  }, []);

  const clonedUniversities = [
    ...universities.slice(-visibleItems),
    ...universities,
    ...universities.slice(0, visibleItems),
  ];

  const handleSlideChange = (direction) => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    const totalItems = universities.length;
    
    if (direction === 'next') {
      setCurrentIndex(prev => prev + 1);
    } else {
      setCurrentIndex(prev => prev - 1);
    }

    setTimeout(() => {
      setIsTransitioning(false);
      if (direction === 'next' && currentIndex >= totalItems - 1) {
        carouselRef.current.style.transition = 'none';
        setCurrentIndex(0);
        setTimeout(() => {
          carouselRef.current.style.transition = 'transform 0.3s ease-in-out';
        }, 50);
      } else if (direction === 'prev' && currentIndex <= 0) {
        carouselRef.current.style.transition = 'none';
        setCurrentIndex(totalItems - 1);
        setTimeout(() => {
          carouselRef.current.style.transition = 'transform 0.3s ease-in-out';
        }, 50);
      }
    }, 300);
  };

  return (
    <div className="bg-gray-100 py-12 px-4 md:px-16">
      <h2 className="text-2xl md:text-3xl font-semibold text-black mb-8 text-center">
        Discover top universities
      </h2>
      <div className="relative">
        <div className="overflow-hidden">
          <div
            ref={carouselRef}
            className="flex transition-transform duration-300 ease-in-out"
            style={{
              transform: `translateX(-${(currentIndex * (100 / visibleItems))}%)`,
            }}
          >
            {clonedUniversities.map((university, index) => (
              <div
                key={index}
                className="flex-shrink-0 px-3"
                style={{ width: `${100 / visibleItems}%` }}
              >
                <div className="bg-white shadow-md rounded-lg p-6 text-center">
                  <img
                    src={university.img}
                    alt={university.name}
                    className="w-20 h-20 mx-auto mb-4"
                  />
                  <h3 className="font-bold text-lg">{university.name}</h3>
                  <p className="text-sm text-gray-500">{university.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={() => handleSlideChange('prev')}
          className="absolute top-1/2 -left-4 transform -translate-y-1/2 bg-gray-200 p-2 rounded-full shadow-md hover:bg-gray-300"
          aria-label="Previous"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>
        <button
          onClick={() => handleSlideChange('next')}
          className="absolute top-1/2 -right-4 transform -translate-y-1/2 bg-gray-200 p-2 rounded-full shadow-md hover:bg-gray-300"
          aria-label="Next"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default Universities;