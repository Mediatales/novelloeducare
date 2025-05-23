"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Link from "next/link";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

const Mbbsabroad = () => {
  const countries = [
    { name: "Russia", image: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742447226/MBBS_in_Russia_country_mul3c6.jpg" },
    { name: "Uzbekistan", image: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742447314/MBBS_in_Uzbekistan_ik2fi2.jpg" },
    { name: "Kyrgyzstan", image: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742447282/MBBS_in_Kyrgyzstan_adqmfh.png" },
    { name: "Kazakhstan", image: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742447434/MBBS_in_Kazakhstan_dqaeyg.png" },
    { name: "Georgia", image: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742447428/MBBS_in_Georgia_geibcj.jpg" },
    { name: "Armenia", image: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742447263/MBBS_in_Armenia_osnw1i.jpg" },
    { name: "Belarus", image: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742447294/MBBS_in_Belarus_l14pt0.jpg" },
    { name: "Bangladesh", image: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742447990/MBBS_in_Bangladesh_pbz9h8.jpg" },
    { name: "Nepal", image: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742447274/MBBS_in_Nepal_e1owe8.jpg" },
    { name: "Poland", image: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742447267/MBBS_in_Poland_msbfbn.jpg" },
    { name: "Dubai", image: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742447459/MBBS_in_Dubai_dbcwfq.jpg" },
    { name: "Ukraine", image: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742447445/MBBS_in_Ukraine_od6vn3.jpg" },
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
          {countries.map((country, index) => (
            <SwiperSlide key={index}>
              <Link href={`https://novelloeducare.com/focus-overseas/${country.name}`}>
                <img src={country.image} alt={country.name} className="w-full rounded-lg cursor-pointer" />
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <Link href="/focus-overseas">
        <div className="flex justify-center mt-8">
          <button className="text-center bg-[#2B2C83] text-white px-3 py-2 rounded-lg">View All</button>
        </div>
      </Link>
    </div>
  );
};

export default Mbbsabroad;
