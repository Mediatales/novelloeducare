"use client";
import React, { useState, useEffect } from "react";
import Universities from "./Universities";
import Countries from "./Countries";
import Link from "next/link";

const Hero = () => {
  

  return (
    <div>
      {/* Hero Section */}
      <div className="relative bg-[#F5F5F5]">
        {/* Background Image */}
        <img
          src="./assests/home/herobg.png"
          alt="Hero Background"
          className="w-full h-[500px] object-cover"
        />

        {/* Overlay Text */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center bg-black bg-opacity-50">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Dream to Study Abroad
          </h1>
          <p className="text-lg md:text-xl text-white max-w-2xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
          </p>
        </div>
      </div>

      {/* Discover Universities Section */}
      <Universities/>

      {/*Course Brochere */}

      <div className="mt-5">
  <h1 className="text-2xl md:text-3xl font-semibold text-black mb-8 text-center">Course Brochure</h1>

  {/* cards */}
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mx-auto w-[90%]">
    {/* card1 */}
    <div className="flex border shadow-md gap-4">
      <img src="./assests/home/Medicine.png" alt="" className="w-[50%] object-cover" />
      <div className="flex flex-col justify-center gap-2">
        <h1 className="font-semibold  text-xl md:text-2xl">Medicine</h1>
        <p className="text-sm md:text-base">
        This course explores the science of healthcare, diagnosis, treatment, and prevention of diseases.        </p>
      </div>
    </div>

    {/* card2 */}
    <div className="flex border shadow-md gap-4">
      <img src="./assests/home/Law.png" alt="" className="w-[50%] object-cover" />
      <div className="flex flex-col justify-center gap-2">
        <h1 className="font-semibold text-xl md:text-2xl">Law</h1>
        <p className="text-sm font-extralight md:text-base">
        This course examines legal systems, principles, and practices to uphold justice and societal order.
        </p>
      </div>
    </div>

    {/* card3 */}
    <div className="flex border shadow-md gap-4">
      <img src="./assests/home/Engineering.png" alt="" className="w-[50%] object-cover" />
      <div className="flex flex-col  justify-center gap-2 ">
        <h1 className="font-semibold text-xl md:text-2xl">Engineering</h1>
        <p className="text-sm font-extralight md:text-base">
        This course focuses on designing, building, and innovating solutions to technical challenges.       </p>
      </div>
    </div>

    {/* card4 */}
    <div className="flex border shadow-md gap-4">
      <img src="./assests/home/Bs.png" alt="" className="w-[50%] object-cover" />
      <div className="flex flex-col justify-center gap-2">
        <h1 className="font-semibold text-xl md:text-2xl">Business studies</h1>
        <p className="text-sm font-extralight md:text-base">
        This course covers management, marketing, and financial strategies for organizational success.        </p>
      </div>
    </div>
  </div>

  <div className="flex justify-center mt-8">
    <Link href="/course"><button className="text-center bg-[#2B2C83] text-white px-3 py-2 rounded-lg">View all</button></Link>
  </div>
</div>



      {/* Countries */}

      <Countries/>

      {/* process */}
      <div className='w-[90%] mx-auto '>
  <h1 className="text-2xl md:text-3xl font-semibold text-black mb-8 text-center mt-8">
    Your journey at abroad
  </h1>

  {/* cards */}
  <div className="flex flex-wrap justify-center gap-6">
    {/* card1 */}
    <div className="bg-white font-[mullish] shadow-md rounded-lg p-6 border border-gray-200 text-center items-center w-full sm:w-[45%] lg:w-[18%]">
      <img
        src="./assests/home/research.png"
        alt="img"
        height={100}
        width={100}
        className="mx-auto"
      />
      <p>Research and <br /> Choose a Program</p>
    </div>

    {/* card2 */}
    <div className="bg-white font-[mullish] shadow-md rounded-lg p-6 border border-gray-200 text-center items-center w-full sm:w-[45%] lg:w-[18%]">
      <img
        src="./assests/home/exam.png"
        alt="img"
        height={100}
        width={100}
        className="mx-auto"
      />
      <p>Prepare for <br /> Standardized Tests</p>
    </div>

    {/* card3 */}
    <div className="bg-white font-[mullish] shadow-md rounded-lg p-6 border border-gray-200 text-center items-center w-full sm:w-[45%] lg:w-[18%]">
      <img
        src="./assests/home/apply.png"
        alt="img"
        height={90}
        width={90}
        className="mx-auto"
      />
      <p>Apply to <br /> Universities</p>
    </div>

    {/* card4 */}
    <div className="bg-white font-[mullish] shadow-md rounded-lg p-6 border border-gray-200 text-center items-center w-full sm:w-[45%] lg:w-[18%]">
      <img
        src="./assests/home/securefinance.png"
        alt="img"
        height={100}
        width={100}
        className="mx-auto"
      />
      <p>Secure Funding <br /> and Scholarships</p>
    </div>

    {/* card5 */}
    <div className="bg-white font-[mullish] shadow-md rounded-lg p-6 border border-gray-200 text-center items-center w-full sm:w-[45%] lg:w-[18%]">
      <img
        src="./assests/home/visa.png"
        alt="img"
        height={100}
        width={100}
        className="mx-auto"
      />
      <p>Obtain a Student <br /> Visa</p>
    </div>
  </div>
</div>


      {/* test */}

      <div className="mt-8">
  <h1 className="text-2xl md:text-3xl font-semibold text-black mb-8 text-center">
    Test <span className="text-[#303192]">Preparation</span>
  </h1>

  <div className="mt-8 flex flex-wrap gap-6 justify-center mx-auto w-[90%]">
    {/* card1 */}
    <div className="border bg-white font-[mullish] shadow-md rounded-lg p-6 border-gray-200 text-center flex flex-col items-center w-full sm:w-[48%] lg:w-[30%]">
      <img src="./assests/home/test1.png" alt="img" className="mx-auto mb-4" />
      <h2 className="text-xl font-semibold">
        TOEFL (Test of English as a Foreign Language)
      </h2>
      <p>
        This globally recognized course offers insights into international
        trade, leadership, and global marketing strategies.
      </p>
    </div>

    {/* card2 */}
    <div className="border bg-white font-[mullish] shadow-md rounded-lg p-6 border-gray-200 text-center flex flex-col items-center w-full sm:w-[48%] lg:w-[30%]">
      <img src="./assests/home/test2.png" alt="img" className="mx-auto mb-4" />
      <h2 className="text-xl font-semibold">
        TOEFL (Test of English as a Foreign Language)
      </h2>
      <p>
        This globally recognized course offers insights into international
        trade, leadership, and global marketing strategies.
      </p>
    </div>

    {/* card3 */}
    <div className="border bg-white font-[mullish] shadow-md rounded-lg p-6 border-gray-200 text-center flex flex-col items-center w-full sm:w-[48%] lg:w-[30%]">
      <img src="./assests/home/test3.png" alt="img" className="mx-auto mb-4" />
      <h2 className="text-xl font-semibold">
        TOEFL (Test of English as a Foreign Language)
      </h2>
      <p>
        This globally recognized course offers insights into international
        trade, leadership, and global marketing strategies.
      </p>
    </div>
  </div>
</div>

    </div>


  );
};



export default Hero;
