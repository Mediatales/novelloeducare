"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const universityLogos = [

  //russia
  {
    logo: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1744005911/Saint_Petersburg_logo_c2p7h1.png",
    link: "https://novelloeducare.com/focus-overseas/russia/saint-petersburg-state-pediatric-medical-university",
  },
  {
    logo: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1744002651/North_western_uanava.png",
    link: "https://novelloeducare.com/focus-overseas/russia/north-western-state-medical-university",
  },
  {
    logo: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1744005927/Ural_state_logo_vn05bi.png",
    link: "https://novelloeducare.com/focus-overseas/russia/ural-state-medical-university",
  },
  {
    logo: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1744002787/Oral_State_Medical_University_fgfexs.png",
    link: "https://novelloeducare.com/focus-overseas/russia/orel-state-medical-university",
  },
  {
    logo: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1744003281/Kemerovo_state_logo_b3pz4c.png",
    link: "https://novelloeducare.com/focus-overseas/russia/kemerovo-state-medical-university",
  },
  {
    logo: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1744003559/Tula_state_logo_gcy2i8.png",
    link: "https://novelloeducare.com/focus-overseas/russia/tula-state-university",
  },
  {
    logo: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1744005992/Ryazan_state_logo_kuzo9h.png",
    link: "https://novelloeducare.com/focus-overseas/russia/ryazan-state-medical-university",
  },
  {
    logo: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1744006211/Siberian_state_logo_goig3p.png",
    link: "https://novelloeducare.com/focus-overseas/russia/siberian-state-medical-university",
  },
  {
    logo: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1740648976/University_logo_5_adiwg6.png",
    link: "https://novelloeducare.com/focus-overseas/russia/omsk-state-medical-university",
  },
  {
    logo: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1740648976/University_logo_2_v3emlh.png",
    link: "https://novelloeducare.com/focus-overseas/russia/ulyanovsk-state-university",
  },

  //uzbekistan
  {
    logo:"https://res.cloudinary.com/dqggm4k7u/image/upload/v1744006451/Tashkant_dental_logo_uo5fq5.png",
    link:"https://novelloeducare.com/focus-overseas/uzbekistan/tashkent-state-dental-institute",
  },
  {
    logo:"https://res.cloudinary.com/dqggm4k7u/image/upload/v1744006641/Bukhara_state_logo_q40deb.png",
    link:"https://novelloeducare.com/focus-overseas/uzbekistan/bukhara-state-medical-university",
  },
  {
    logo:"https://res.cloudinary.com/dqggm4k7u/image/upload/v1740648977/University_logo_3_dqovce.png",
    link:"https://novelloeducare.com/focus-overseas/uzbekistan/tashkent-medical-academy-university",
  },
  {
    logo:"https://res.cloudinary.com/dqggm4k7u/image/upload/v1740648977/University_logo_1_gupvjd.png",
    link:"https://novelloeducare.com/focus-overseas/uzbekistan/samarkand-state-medical-university",
  },

  //kazakhstan 

  {
    logo:"https://res.cloudinary.com/dqggm4k7u/image/upload/v1744006000/kazakh_national_logo_taohsm.png",
    link:"https://novelloeducare.com/focus-overseas/kazakhstan/kazakh-national-medical-university",
  },
  {
    logo:"https://res.cloudinary.com/dqggm4k7u/image/upload/v1744006131/Al-frabi_logo_h0urrb.png",
    link:"https://novelloeducare.com/focus-overseas/kazakhstan/al-farabi-national-medical-university",
  },
  {
    logo:"https://res.cloudinary.com/dqggm4k7u/image/upload/v1744006105/South_kazakh_logo_njuqht.png",
    link:"https://novelloeducare.com/focus-overseas/uzbekistan/bukhara-state-medical-university",
  },

  //kyrgyzstan 

  {
    logo:"https://res.cloudinary.com/dqggm4k7u/image/upload/v1744005046/Asian_medical_logo_ohqckc.png",
    link:"https://novelloeducare.com/focus-overseas/kyrgyzstan/asian-medical-institute",
  },
  {
    logo:"https://res.cloudinary.com/dqggm4k7u/image/upload/v1744007208/OSH_state_zmfrir.png",
    link:"https://novelloeducare.com/focus-overseas/kyrgyzstan/osh-state-medical-university",
  },
  {
    logo:"https://res.cloudinary.com/dqggm4k7u/image/upload/v1744007314/Ism_logo_gw5xfv.png",
    link:"https://novelloeducare.com/focus-overseas/kyrgyzstan/international-school-of-medicine",
  },




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
          {universityLogos.map((item, index) => (
            <SwiperSlide key={index} className="flex justify-center items-center">
              <a href={item.link} target="_blank" rel="noopener noreferrer">
                <Image
                  src={item.logo}
                  alt={`University ${index + 1}`}
                  width={100}
                  height={100}
                  className="w-[80px] md:w-[100px] object-contain"
                />
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default UniversityCarousel;
