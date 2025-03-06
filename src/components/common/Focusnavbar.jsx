"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";

const Focusnavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isStudyAbroad, setIsStudyAbroad] = useState(false);
  const [countriesFlagLink, setCountriesFlagLink] = useState([]);

  useEffect(() => {
    fetch('/api/countries_list/')
      .then((res) => res.json())
      .then((data) => {
        setCountriesFlagLink(data.data);
      });
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    if (isStudyAbroad) setIsStudyAbroad(false);
  };

  const toggleStudyAbroad = () => {
    setIsStudyAbroad(!isStudyAbroad);
  };

  return (
    <nav className="bg-white shadow-md w-[100%] z-50 fixed top-0 left-0 justify-evenly py-5 ">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-13">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img src="https://res.cloudinary.com/dqggm4k7u/image/upload/v1739789017/f8dxcljajsufyrqwcphn.png" alt="Logo" className="h-11" />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6 justify-between ">
            <Link href="/focus-overseas/home" className="text-gray-700 hover:text-green-700 font-medium">
              Home
            </Link>
            <Link href="/focus-overseas/about" className="text-gray-700 hover:text-green-700 font-medium">
              About us
            </Link>
            <div className="relative group">
              <button className="text-gray-700 hover:text-green-700 font-medium flex items-center gap-1">
                Country
                <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
              <div className="absolute hidden group-hover:block w-56 py-2 mt-2 bg-white rounded-md shadow-xl">
                {
                  countriesFlagLink.map(({country, flag_link}, idx) => (
                    <Link key={idx} href={`/focus-overseas/${country}`}>
                      <div className="flex items-center gap-3 mt-2 px-4 py-2 transition-all duration-200 bg-[#E6F3EE] hover:bg-[#d4e9de] rounded-md cursor-pointer">
                        <img
                          src={flag_link}
                          alt={`${country} Flag`}
                          className="w-8 h-8"
                        />
                        <p className="text-gray-800 font-medium">Study in {country}</p>
                      </div>
                    </Link>
                  ))
                }

              </div>

            </div>

            <div className="text-gray-700 hover:text-green-700 font-medium">
              University
            </div>
            <Link href="/focus-overseas/admission" className="text-gray-700 hover:text-green-700 font-medium">
              Admission Services
            </Link>
            {/* <Link href="/focus-overseas/test" className="text-gray-700 hover:text-green-700 font-medium">
              Test Preparation
            </Link> */}
            {/* <Link href="/focus-overseas/course" className="text-gray-700 hover:text-green-700 font-medium">
              Courses
            </Link> */}
            {/* <Link href="/focus-overseas/branch" className="text-gray-700 hover:text-green-700 font-medium">
              Branches
            </Link> */}
            <Link href="/focus-overseas/blogs" className="text-gray-700 hover:text-green-700 font-medium">
              Blogs
            </Link>
            <Link href="/focus-overseas/contact" className="text-gray-700 hover:text-green-700 font-medium">
              Contact Us
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link href="/">
              <button className="px-4 py-2 text-white bg-[#047550] rounded hover:bg-green-800 font-medium">
                Study in ABROAD
              </button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-green-700 hover:bg-gray-100 focus:outline-none"
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
          <Link href="/focus-overseas/home"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-green-700 hover:bg-gray-50"
            onClick={toggleMenu}>
            Home
          </Link>
          <Link href="/focus-overseas/about"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-green-700 hover:bg-gray-50"
            onClick={toggleMenu}>
            About us
          </Link>

          {/* Mobile Study Abroad Dropdown */}
          <div>
            <button
              onClick={toggleStudyAbroad}
              className="flex justify-between items-center w-full px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-green-700 hover:bg-gray-50"
            >
              Country
              <svg
                className={`w-4 h-4 transition-transform duration-200 ${isStudyAbroad ? 'transform rotate-180' : ''}`}
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>

            <div className={`${isStudyAbroad ? 'block' : 'hidden'} pl-4`}>
              <Link href="/focus-overseas/uzbekistan"
                className=" flex  py-3 gap-2 align-baseline font-medium text-gray-700 hover:text-green-700 hover:bg-gray-50"

                onClick={toggleMenu}>
                <img
                  src="https://res.cloudinary.com/dqggm4k7u/image/upload/v1739792761/o4dr7q3ihsoh9ccgkxz6.png"
                  alt="Uzbekistan Flag"
                  className="w-4 h-4"
                />
                <p className="text-gray-800 font-medium">Study in Uzbekistan</p>
              </Link>
              <Link href="/focus-overseas/uzbekistan"
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-green-700 hover:bg-gray-50"
                onClick={toggleMenu}>
                Canada
              </Link>
              <Link href="/uk"
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-green-700 hover:bg-gray-50"
                onClick={toggleMenu}>
                UK
              </Link>
            </div>
          </div>

          <div
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-green-700 hover:bg-gray-50"
            onClick={toggleMenu}>
            University
          </div>

          <Link href="/focus-overseas/admission"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-green-700 hover:bg-gray-50"
            onClick={toggleMenu}>
            Admission Services
          </Link>
          {/* <Link href="/focus-overseas/test" 
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-green-700 hover:bg-gray-50"
            onClick={toggleMenu}>
            Test Preparation
          </Link> */}
          {/* <Link href="/focus-overseas/course" 
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-green-700 hover:bg-gray-50"
            onClick={toggleMenu}>
            Courses
          </Link> */}
          {/* <Link href="/focus-overseas/branch" 
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-green-700 hover:bg-gray-50"
            onClick={toggleMenu}>
            Branches
          </Link> */}
          <Link href="/focus-overseas/blogs"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-green-700 hover:bg-gray-50"
            onClick={toggleMenu}>
            Blogs
          </Link>
          <Link href="/focus-overseas/contact"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-green-700 hover:bg-gray-50"
            onClick={toggleMenu}>
            Contact Us
          </Link>

          {/* Mobile CTA Button */}
          <Link href="/"
            className="block w-full"
            onClick={toggleMenu}>
            <button className="w-full px-4 py-2 text-white bg-[#047550] rounded hover:bg-green-700 font-medium">
              Study in ABROAD
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Focusnavbar;