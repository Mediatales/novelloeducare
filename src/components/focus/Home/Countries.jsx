"use client";

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Navigation, Pagination, Autoplay } from 'swiper/modules';

const Mbbsabroad = () => {
  const images = [
    'https://res.cloudinary.com/dqggm4k7u/image/upload/v1742538818/mbbs_in_Russia_a2pfqx.jpg',
    'https://res.cloudinary.com/dqggm4k7u/image/upload/v1742539666/mbbs_in_Uzbekistan_hohcks.jpg',
    'https://res.cloudinary.com/dqggm4k7u/image/upload/v1742538860/MBBS_in_Kyrgyzstan_pyekcs.jpg',
    'https://res.cloudinary.com/dqggm4k7u/image/upload/v1742538867/Mbbs_in_Kazakhstan_ksgbng.jpg',
    "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742539684/mbbs_in_Georgia_szeyd2.jpg",

    "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742539672/mbbs_in_Armenia_fbwrjf.jpg",
    
    "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742538894/Mbbs_in_Belarus_hzkcj0.jpg",
    
    "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742538911/Mbbs_in_bangladesh_wwgtyz.jpg",
    
    "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742538919/Mbbs_in_nepal_bzunp1.jpg",
    
    "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742538932/Mbbs_in_Poland_h0dwmu.jpg",

    "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742538940/Mbbs_in_dubai_ydciw2.jpg",

    "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742538947/MBBS_in_Ukraine_mliise.jpg",


    // './assests/mbbs/mbbs5.png',
  
    // './assests/mbbs/mbbs5.png', // Add more dynamically as needed
  ];

  return (
    <div className="mt-8">
      <h2 className="text-2xl md:text-3xl text-center font-semibold text-gray-800 mb-8 ml-16">
      Our Top MBBS Universities
      </h2>

      <div className="w-[90%] mx-auto">
        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 2 }, // Show 2 images on medium screens
            1024: { slidesPerView: 4 }, // Show 4 images on large screens
          }}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          modules={[Navigation, Pagination, Autoplay]}
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <img src={image} alt={`Slide ${index + 1}`} className="w-full rounded-lg" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* <div className="flex justify-center mt-8">
        <button className="text-center bg-[#2B2C83] text-white px-3 py-2 rounded-lg">
          View All
        </button>
      </div> */}
    </div>
  );
};

export default Mbbsabroad;
