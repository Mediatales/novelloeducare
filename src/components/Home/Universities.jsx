import React, { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Universities = () => {
  const universities = [
    {
      img: "./assests/home/uni1.png",
      name: "MIT University",
      location: "Cambridge, Massachusetts, USA",
    },
    {
      img: "./assests/home/uni2.png",
      name: "Oxford University",
      location: "Oxford, England, UK",
    },
    {
      img: "./assests/home/uni3.png",
      name: "Toronto University",
      location: "Toronto, Canada",
    },
    {
      img: "./assests/home/uni4.png",
      name: "ANU University",
      location: "Canberra, Australia",
    },

    // cloudaniry Images

    {
      img: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1739951628/australia_university_1_logo_1_cguly8.png",
      name: "Monash University",
      location: "Australia",
    },

    {
      img: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1739952034/Melbourne_university_australia_-_Copy_plh9nc.png",
      name: "University of Melbourne",
      location: "Australia",
    },

    {
      img: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1739952034/australia_university_3_1_pyx6kw.png",
      name: "University of Sydney",
      location: "Australia",
    },

    {
      img: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1739952033/australia_university_4_1_-_Copy_bnbxvo.png",
      name: "RMIT University",
      location: "Australia",
    },


    {
      img: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1739952024/usa_university_1_1_i52vno.png",
      name: "Stanford University",
      location: "USA",
    },


    {
      img: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1739952024/usa_university_2_1_jbnvpm.png",
      name: "Princeton University",
      location: "USA",
    },

    {
      img: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1739952024/usa_university_4_1_jobznv.png",
      name: "Yale University ",
      location: "USA",
    },

    {
      img: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1739952025/usa_university_3_1_dqw1tj.png",
      name: "Northwestern University",
      location: "USA",
    },

    {
      img: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1739952024/uk_university_1_1_c7v0ga.png",
      name: "University of Cambridge",
      location: "UK",
    },

    {
      img: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1739952025/uk_university_2_1_lltuvc.png",
      name: "Imperial College London",
      location: "Uk",
    },

    {
      img: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1739952025/uk_university_3_1_cmgxpm.png",
      name: "University of Warwick",
      location: "Uk",
    },

    {
      img: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1739952026/uk_university_4_1_atpxvl.png",
      name: "Durham University",
      location: "UK",
    },

    {
      img: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1739952027/canada_university_1_1_umdajn.png",
      name: "University of Ottawa",
      location: "Canada",
    },

    {
      img: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1739952028/canada_university_2_1_ivihxi.png",
      name: "Western University",
      location: "Canada",
    },

    {
      img: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1739952029/france_university_1_1_eqgb7m.png",
      name: "Sorbonne University",
      location: "France",
    },


    {
      img: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1739952030/france_university_2_1_uyzre4.png",
      name: "University of Paris-Saclay",
      location: "France",
    },

    {
      img: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1739952028/germany_university_1_1_ouli6k.png",
      name: "University of Hamburg",
      location: "Germany",
    },

    {
      img: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1739952028/germany_university_2_1_s4obmg.png",
      name: "University of Tübingen",
      location: "Germany",
    },

    {
      img: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1739952030/poland_university_1_2_spbx5z.png",
      name: "University of Warsaw",
      location: "Poland",
    },

    {
      img: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1739952031/poland_university_2_1_rbnnnz.png",
      name: "Jagiellonian University",
      location: "Poland",
    },

    {
      img: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1739952031/dubai_university_1_1_cptm2d.png",
      name: "Heriot-Watt University",
      location: "Dubai",
    },

    {
      img: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1739952031/dubai_university_2_1_wz6xlv.png",
      name: "Curtin University",
      location: "Dubai",
    },
  ];

  const [visibleItems, setVisibleItems] = useState(4);
  const [currentIndex, setCurrentIndex] = useState(visibleItems);
  const [isPaused, setIsPaused] = useState(false);
  const carouselRef = useRef(null);
  const autoScrollInterval = useRef(null);
  const clonedUniversities = [
    ...universities.slice(-visibleItems),
    ...universities,
    ...universities.slice(0, visibleItems),
  ];

  useEffect(() => {
    const updateVisibleItems = () => {
      if (window.innerWidth >= 1024) {
        setVisibleItems(4);
      } else if (window.innerWidth >= 768) {
        setVisibleItems(2);
      } else {
        setVisibleItems(1);
      }
    };

    updateVisibleItems();
    window.addEventListener("resize", updateVisibleItems);
    return () => window.removeEventListener("resize", updateVisibleItems);
  }, []);

  useEffect(() => {
    const handleTransitionEnd = () => {
      if (currentIndex >= universities.length + visibleItems) {
        carouselRef.current.style.transition = "none";
        setCurrentIndex(visibleItems);
      } else if (currentIndex <= 0) {
        carouselRef.current.style.transition = "none";
        setCurrentIndex(universities.length);
      }
      setTimeout(() => {
        carouselRef.current.style.transition = "transform 0.5s ease-in-out";
      });
    };
  
    const carousel = carouselRef.current;
    carousel.addEventListener("transitionend", handleTransitionEnd);
    return () => carousel.removeEventListener("transitionend", handleTransitionEnd);
  }, [currentIndex, visibleItems, universities.length]);

  // Auto-scrolling effect
  useEffect(() => {
    // Start auto-scrolling
    if (!isPaused) {
      autoScrollInterval.current = setInterval(() => {
        setCurrentIndex(prev => prev + 1);
      }, 3000); // Move every 3 seconds
    }
    
    // Clean up interval on component unmount or when paused
    return () => {
      if (autoScrollInterval.current) {
        clearInterval(autoScrollInterval.current);
      }
    };
  }, [isPaused]);

  const handleSlideChange = (direction) => {
    // Temporarily pause auto-scrolling when manually changing slides
    setIsPaused(true);
    setCurrentIndex((prev) => (direction === "next" ? prev + 1 : prev - 1));
    
    // Resume auto-scrolling after a short delay
    setTimeout(() => {
      setIsPaused(false);
    }, 5000); // Resume after 5 seconds of inactivity
  };

  // Pause auto-scrolling when hovering over the carousel
  const handleMouseEnter = () => {
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  return (
    <div className="bg-gray-100 py-12 px-4 md:px-16">
      <h2 className="text-2xl md:text-3xl font-semibold text-black mb-8 text-center">
        Discover top universities
      </h2>
      <div 
        className="relative" 
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="overflow-hidden">
          <div
            ref={carouselRef}
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${(currentIndex * 100) / visibleItems}%)`,
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
                    className="w-50 h-50 mx-auto mb-4"
                  />
                  <h3 className="font-bold text-lg">{university.name}</h3>
                  <p className="text-sm text-gray-500">{university.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
          onClick={() => handleSlideChange("prev")}
        >
          <ChevronLeft />
        </button>

        <button
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
          onClick={() => handleSlideChange("next")}
        >
          <ChevronRight />
        </button>
      </div>
    </div>
  );
};

export default Universities;