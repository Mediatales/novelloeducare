"use client";

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Navigation, Pagination, Autoplay } from 'swiper/modules';

const Mbbsabroad = () => {
  const images = [
    'https://res.cloudinary.com/dqggm4k7u/image/upload/v1742813741/mbbs_in_Russia_rhum75.jpg',
    'https://res.cloudinary.com/dqggm4k7u/image/upload/v1742813767/mbbs_in_Uzbekistan_idpkpk.jpg',
    'https://res.cloudinary.com/dqggm4k7u/image/upload/v1742813827/MBBS_in_Kyrgyzstan_ypc0sp.jpg',
    'https://res.cloudinary.com/dqggm4k7u/image/upload/v1742813839/Mbbs_in_Kazakhstan_fiad6o.jpg',
    "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742813852/mbbs_in_Georgia_wbboxf.jpg",

    "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742813874/mbbs_in_Armenia_dmjdnb.jpg",
    
    "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742813891/Mbbs_in_Belarus_rwiyzb.jpg",
    
    "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742813907/Mbbs_in_bangladesh_ylxofv.jpg",
    
    "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742813940/Mbbs_in_nepal_kgrxoi.jpg",
    
    "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742813991/Mbbs_in_Poland_t5nni4.jpg",

    "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742814024/Mbbs_in_dubai_bacvsm.jpg",

    "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742814040/MBBS_in_Ukraine_h8k6tr.jpg",


    // './assests/mbbs/mbbs5.png',
  
    // './assests/mbbs/mbbs5.png', // Add more dynamically as needed
  ];

  return (
    <div className="mt-8">
      <h2 className="text-2xl md:text-3xl text-center font-semibold text-gray-800 mb-8 ml-16">
      Our Top MBBS Countries
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
