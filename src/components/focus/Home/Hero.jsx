import React from 'react'
import Countries from "./Countries";
import Image from 'next/image';
import Difference from './Difference';
const Hero = () => {
  return (
    <div>
      <div className="relative bg-[#F5F5F5]">
        {/* Background Image */}
        <img
          src="../assests/focus/bg.png"
          alt="Hero Background"
          className="w-full h-[500px] object-cover"
        />

        {/* Overlay Text */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center bg-black bg-opacity-50">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Discover effective ways to MBBS Abroad
          </h1>
          
        </div>
      </div>

      {/*countries Section */}

      <Countries/>

      {/*about*/}

      <div className="container mx-auto px-6 lg:px-20 mt-14 flex flex-col lg:flex-row items-center gap-8">
              {/* Text Content */}
              <div className="lg:w-1/2 space-y-10">
                <h1 className="font-bold text-3xl md:text-5xl mb-4">MBBS Journey Abroad</h1>
                <p className="text-lg md:text-2xl font-extralight leading-relaxed">
                Going abroad to study medicine (MBBS) can be life-changing. It offers a world-class education and a chance to learn about different medical practices around the world. If you dream of becoming a doctor and want to study at a leading international university, or if you simply want to see how healthcare works in other countries, studying abroad can be a great first step in your medical career. It&apos;s a chance to grow both intellectually and personally.                 </p>
                <p className="text-lg md:text-2xl font-extralight leading-relaxed mt-4">
                You&apos;ll get practical clinical experience, learn from world-famous professors, and benefit from studying in diverse settings.                </p>
              </div>
      
              {/* Image Section */}
              <div className="lg:w-1/2 flex justify-center">
                <Image
                  src="/assests/focus/focusabout.png"
                  alt="Campus View"
                  width={500}
                  height={350}
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>

            
    </div>
  )
}

export default Hero
