"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const universityLogos = [
  "https://res.cloudinary.com/dqggm4k7u/image/upload/v1740648977/University_logo_3_dqovce.png",
  "https://res.cloudinary.com/dqggm4k7u/image/upload/v1740648976/University_logo_4_c1gxbi.png",
  "https://res.cloudinary.com/dqggm4k7u/image/upload/v1740648977/University_logo_1_gupvjd.png",
  "https://res.cloudinary.com/dqggm4k7u/image/upload/v1740648976/University_logo_5_adiwg6.png",
  "https://res.cloudinary.com/dqggm4k7u/image/upload/v1740648976/University_logo_6_rjrrsu.png",
  "https://res.cloudinary.com/dqggm4k7u/image/upload/v1740648976/University_logo_2_v3emlh.png",

  "https://res.cloudinary.com/dqggm4k7u/image/upload/v1740648977/University_logo_3_dqovce.png",
  "https://res.cloudinary.com/dqggm4k7u/image/upload/v1740648976/University_logo_4_c1gxbi.png",
  "https://res.cloudinary.com/dqggm4k7u/image/upload/v1740648977/University_logo_1_gupvjd.png",
  "https://res.cloudinary.com/dqggm4k7u/image/upload/v1740648976/University_logo_5_adiwg6.png",
  "https://res.cloudinary.com/dqggm4k7u/image/upload/v1740648976/University_logo_6_rjrrsu.png",
  "https://res.cloudinary.com/dqggm4k7u/image/upload/v1740648976/University_logo_2_v3emlh.png",
];

const UniversityCarousel = () => {
  return (
    <div className="bg-[#d8ede4] py-10">
      <h2 className="text-center text-2xl font-semibold text-gray-900 mb-6">
        Top MBBS Universities
      </h2>
      <div className="max-w-6xl mx-auto px-4">
        <Swiper
          spaceBetween={30}
          slidesPerView={2}
          breakpoints={{
            640: { slidesPerView: 3 },
            768: { slidesPerView: 4 },
            1024: { slidesPerView: 6 },
          }}
          loop={true}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          navigation={true}
          modules={[Autoplay, Navigation]}
          className="pb-6"
        >
          {universityLogos.map((logo, index) => (
            <SwiperSlide key={index} className="flex justify-center items-center">
              <Image
                src={logo}
                alt={`University ${index + 1}`}
                width={100}
                height={100}
                className="w-[80px] md:w-[100px] object-contain"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default UniversityCarousel;
