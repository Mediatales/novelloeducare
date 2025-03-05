"use client";

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Link from 'next/link';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

const Mbbsabroad = () => {
  const images = [
    './assests/mbbs/mbbs1.png',
    './assests/mbbs/mbbs2.png',
    './assests/mbbs/mbbs3.png',
    './assests/mbbs/mbbs4.png',
    // './assests/mbbs/mbbs5.png',
    './assests/mbbs/mbbs1.png',
    './assests/mbbs/mbbs2.png',
    './assests/mbbs/mbbs3.png',
    './assests/mbbs/mbbs4.png',
    // './assests/mbbs/mbbs5.png', // Add more dynamically as needed
  ];

  return (
    <div className="mt-8">
      <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-8 text-left ml-16">
        <span className="text-[#2B2C83] text-pretty font-bold">MBBS</span> Abroad
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

      <Link href = "/focus-overseas">
      <div className="flex justify-center mt-8">
        <button className="text-center bg-[#2B2C83] text-white px-3 py-2 rounded-lg">
          View All
        </button>
      </div>
      </Link>
    </div>
  );
};

export default Mbbsabroad;
