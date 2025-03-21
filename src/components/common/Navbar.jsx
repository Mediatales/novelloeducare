"use client";
import React, { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isStudyAbroad, setIsStudyAbroad] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    if (isStudyAbroad) setIsStudyAbroad(false);
  };

  const toggleStudyAbroad = () => {
    setIsStudyAbroad(!isStudyAbroad);
  };

  return (
    <nav className="bg-white shadow-md w-full z-50 fixed top-0 left-0">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img src="https://res.cloudinary.com/dqggm4k7u/image/upload/v1739789041/f1f7pedrical8yenlywv.png" alt="Logo" className="h-11" />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link href="/home" className="text-gray-700 hover:text-blue-700 font-medium">
              Home
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-blue-700 font-medium">
              About us
            </Link>

            <Link href="/course" className="text-gray-700 hover:text-blue-700 font-medium">
              Courses
            </Link>
            <div className="relative group">
  <button className="text-gray-700 hover:text-blue-700 font-medium flex items-center gap-1">
    Countries
    <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
      <path
        fillRule="evenodd"
        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
        clipRule="evenodd"
      />
    </svg>
  </button>
  <div className="absolute hidden group-hover:block w-48 py-2 mt-1 bg-white rounded-md shadow-xl max-h-60 overflow-y-auto">
    {[
      { name: "Australia", flag: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1739947305/country_flag_bapifw.png" },
      { name: "Canada", flag: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1739947287/country_flag_1_fp8tkj.png" },
      { name: "Italy", flag: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1739947287/country_flag_2_rmcrca.png" },
      { name: "USA", flag: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1739947287/country_flag_4_azullr.png" },
      { name: "France", flag: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1739947287/country_flag_3_cu46zs.png" },
      { name: "UK", flag: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1739947287/country_flag_5_ehm3m0.png" },
      { name: "Dubai", flag: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1739947287/country_flag_5_ehm3m0.png" },
      { name: "Germany", flag: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1739947306/country_flag_7_dmj0kz.png" },
      { name: "Poland", flag: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1739947305/country_flag_8_lzpkkd.png" },
      { name: "Hungary", flag: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1739947305/country_flag_9_ixn226.png" }
      
    ].map((country, index) => (
      <div
        key={index}
        className="flex items-center gap-3 mt-2 px-4 py-4 transition-all duration-200 bg-[#E6F3EE] hover:bg-[#d4e9de] rounded-md cursor-pointer"
      >
        <img src={country.flag} alt={`${country.name} Flag`} className="w-10 h-10" />
        <p className="text-gray-800 font-medium">{country.name}</p>
      </div>
    ))}
  </div>
</div>

            
            {/* <Link href="/test" className="text-gray-700 hover:text-blue-700 font-medium">
              Test Preparation
            </Link> */}
            <div className="text-gray-700 hover:text-blue-700 font-medium">
              Universities
            </div>
            <Link href="/admission" className="text-gray-700 hover:text-blue-700 font-medium">
              Admission Services
            </Link>
            <Link href="/blogs" className="text-gray-700 hover:text-blue-700 font-medium">
              Blogs
            </Link>
            {/* <Link href="/branch" className="text-gray-700 hover:text-blue-700 font-medium">
              Branches
            </Link> */}
            
            <Link href="/contact" className="text-gray-700 hover:text-blue-700 font-medium">
              Contact Us
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link href="/focus-overseas">
              <button className="px-4 py-2 text-white bg-blue-700 rounded hover:bg-blue-800 font-medium">
                MBBS in ABROAD
              </button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-700 hover:bg-gray-100 focus:outline-none"
          >
            {isOpen ? (
              <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`lg:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 bg-white shadow-lg">
          <Link href="/home" 
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-700 hover:bg-gray-50"
            onClick={toggleMenu}>
            Home
          </Link>
          <Link href="/about" 
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-700 hover:bg-gray-50"
            onClick={toggleMenu}>
            About us
          </Link>

          <Link href="/course" 
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-700 hover:bg-gray-50"
            onClick={toggleMenu}>
            Courses
          </Link>
          
          {/* Mobile Study Abroad Dropdown */}
          <div>
  <button
    onClick={toggleStudyAbroad}
    className="flex justify-between items-center w-full px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-700 hover:bg-gray-50"
  >
    Countries
    <svg 
      className={`w-4 h-4 transition-transform duration-200 ${isStudyAbroad ? 'transform rotate-180' : ''}`}
      viewBox="0 0 20 20" 
      fill="currentColor"
    >
      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
    </svg>
  </button>
  <div className={`${isStudyAbroad ? 'block' : 'hidden'} pl-4`}>
    <div className="max-h-20 overflow-y-scroll">
      <div className="flex items-center gap-3 mt-2 px-4 py-2 transition-all duration-200 bg-[#E6F3EE] hover:bg-[#d4e9de] rounded-md cursor-pointer">
        <img
          src="https://res.cloudinary.com/dqggm4k7u/image/upload/v1739947305/country_flag_bapifw.png"
          alt="Australia Flag"
          className="w-8 h-8"
        />
        <p className="text-gray-800 font-medium">Australia</p>
      </div>

      <div className="flex items-center gap-3 mt-2 px-4 py-2 transition-all duration-200 bg-[#E6F3EE] hover:bg-[#d4e9de] rounded-md cursor-pointer">
        <img
          src="https://res.cloudinary.com/dqggm4k7u/image/upload/v1739947287/country_flag_1_fp8tkj.png"
          alt="Canada Flag"
          className="w-8 h-8"
        />
        <p className="text-gray-800 font-medium">Canada</p>
      </div>

      <div className="flex items-center gap-3 mt-2 px-4 py-2 transition-all duration-200 bg-[#E6F3EE] hover:bg-[#d4e9de] rounded-md cursor-pointer">
        <img
          src="https://res.cloudinary.com/dqggm4k7u/image/upload/v1739947287/country_flag_2_rmcrca.png"
          alt="Italy Flag"
          className="w-8 h-8"
        />
        <p className="text-gray-800 font-medium">Italy</p>
      </div>

      <div className="flex items-center gap-3 mt-2 px-4 py-2 transition-all duration-200 bg-[#E6F3EE] hover:bg-[#d4e9de] rounded-md cursor-pointer">
        <img
          src="https://res.cloudinary.com/dqggm4k7u/image/upload/v1739947287/country_flag_4_azullr.png"
          alt="USA Flag"
          className="w-8 h-8"
        />
        <p className="text-gray-800 font-medium">USA</p>
      </div>

      <div className="flex items-center gap-3 mt-2 px-4 py-2 transition-all duration-200 bg-[#E6F3EE] hover:bg-[#d4e9de] rounded-md cursor-pointer">
        <img
          src="https://res.cloudinary.com/dqggm4k7u/image/upload/v1739947287/country_flag_3_cu46zs.png"
          alt="France Flag"
          className="w-8 h-8"
        />
        <p className="text-gray-800 font-medium">France</p>
      </div>

      <div className="flex items-center gap-3 mt-2 px-4 py-2 transition-all duration-200 bg-[#E6F3EE] hover:bg-[#d4e9de] rounded-md cursor-pointer">
        <img
          src="https://res.cloudinary.com/dqggm4k7u/image/upload/v1739947287/country_flag_5_ehm3m0.png"
          alt="UK Flag"
          className="w-8 h-8"
        />
        <p className="text-gray-800 font-medium">UK</p>
      </div>

      <div className="flex items-center gap-3 mt-2 px-4 py-2 transition-all duration-200 bg-[#E6F3EE] hover:bg-[#d4e9de] rounded-md cursor-pointer">
        <img
          src="https://res.cloudinary.com/dqggm4k7u/image/upload/v1739947287/country_flag_5_ehm3m0.png"
          alt="Dubai Flag"
          className="w-8 h-8"
        />
        <p className="text-gray-800 font-medium">Dubai</p>
      </div>

      <div className="flex items-center gap-3 mt-2 px-4 py-2 transition-all duration-200 bg-[#E6F3EE] hover:bg-[#d4e9de] rounded-md cursor-pointer">
        <img
          src="https://res.cloudinary.com/dqggm4k7u/image/upload/v1739947306/country_flag_7_dmj0kz.png"
          alt="Germany Flag"
          className="w-8 h-8"
        />
        <p className="text-gray-800 font-medium">Germany</p>
      </div>

      <div className="flex items-center gap-3 mt-2 px-4 py-2 transition-all duration-200 bg-[#E6F3EE] hover:bg-[#d4e9de] rounded-md cursor-pointer">
        <img
          src="https://res.cloudinary.com/dqggm4k7u/image/upload/v1739947305/country_flag_8_lzpkkd.png"
          alt="Poland Flag"
          className="w-8 h-8"
        />
        <p className="text-gray-800 font-medium">Poland</p>
      </div>

      <div className="flex items-center gap-3 mt-2 px-4 py-2 transition-all duration-200 bg-[#E6F3EE] hover:bg-[#d4e9de] rounded-md cursor-pointer">
        <img
          src="https://res.cloudinary.com/dqggm4k7u/image/upload/v1739947305/country_flag_9_ixn226.png"
          alt="Hungary Flag"
          className="w-8 h-8"
        />
        <p className="text-gray-800 font-medium">Hungary</p>
      </div>
    </div>
  </div>
</div>

          <div 
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-700 hover:bg-gray-50"
            onClick={toggleMenu}>
            Universities
          </div>

          <Link href="/admission" 
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-700 hover:bg-gray-50"
            onClick={toggleMenu}>
            Admission Services
          </Link>
          {/* <Link href="/test" 
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-700 hover:bg-gray-50"
            onClick={toggleMenu}>
            Test Preparation
          </Link> */}
          
          <Link href="/blogs" 
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-700 hover:bg-gray-50"
            onClick={toggleMenu}>
            Blogs
          </Link>
          {/* <Link href="/branch" 
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-700 hover:bg-gray-50"
            onClick={toggleMenu}>
            Branches
          </Link> */}
          
          <Link href="/contact" 
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-700 hover:bg-gray-50"
            onClick={toggleMenu}>
            Contact Us
          </Link>
          
          {/* Mobile CTA Button */}
          <Link href="/focus-overseas" 
            className="block w-full"
            onClick={toggleMenu}>
            <button className="w-full px-4 py-2 text-white bg-blue-700 rounded hover:bg-blue-800 font-medium">
              MBBS in ABROAD
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;