"use client";
import Link from "next/link";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const Universities = ({ countryData }) => {
  if (!countryData?.univeristes || countryData.univeristes.length === 0) {
    return null;
  }

  return (
    <div className="bg-green-50 py-10 px-5">
      <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-6">
        Top MBBS Universities in{" "}
        <span className="text-green-600">
          {countryData?.country.charAt(0).toUpperCase() +
            countryData?.country.slice(1)}
        </span>
      </h2>
      <div className="max-w-6xl mx-auto">
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          navigation
          loop
        >
          {countryData?.univeristes?.map((university, index) => (
            <SwiperSlide key={index}>
              <Link
                href={`/focus-overseas/${university?.country}/${university?.slug}`}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 block"
              >
                <img
                  src={university?.image}
                  alt={university?.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {university?.name}
                  </h3>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Universities;
