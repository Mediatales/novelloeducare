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
            <img src="./assests/home/logo.png" alt="Logo" className="h-11" />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link href="/home" className="text-gray-700 hover:text-blue-700 font-medium">
              Home
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-blue-700 font-medium">
              About us
            </Link>
            <div className="relative group">
              <button className="text-gray-700 hover:text-blue-700 font-medium flex items-center gap-1">
                Study Abroad
                <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
              <div className="absolute hidden group-hover:block w-48 py-2 mt-2 bg-white rounded-md shadow-xl">
                <Link href="/usa" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">USA</Link>
                <Link href="/canada" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Canada</Link>
                <Link href="/uk" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">UK</Link>
              </div>
            </div>
            <Link href="/admission" className="text-gray-700 hover:text-blue-700 font-medium">
              Admission Services
            </Link>
            <Link href="/test" className="text-gray-700 hover:text-blue-700 font-medium">
              Test Preparation
            </Link>
            <Link href="/course" className="text-gray-700 hover:text-blue-700 font-medium">
              Courses
            </Link>
            <Link href="/branch" className="text-gray-700 hover:text-blue-700 font-medium">
              Branches
            </Link>
            <Link href="/blogs" className="text-gray-700 hover:text-blue-700 font-medium">
              Blogs
            </Link>
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
          
          {/* Mobile Study Abroad Dropdown */}
          <div>
            <button
              onClick={toggleStudyAbroad}
              className="flex justify-between items-center w-full px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-700 hover:bg-gray-50"
            >
              Study Abroad
              <svg 
                className={`w-4 h-4 transition-transform duration-200 ${isStudyAbroad ? 'transform rotate-180' : ''}`}
                viewBox="0 0 20 20" 
                fill="currentColor"
              >
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
            <div className={`${isStudyAbroad ? 'block' : 'hidden'} pl-4`}>
              <Link href="/usa" 
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-700 hover:bg-gray-50"
                onClick={toggleMenu}>
                USA
              </Link>
              <Link href="/canada" 
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-700 hover:bg-gray-50"
                onClick={toggleMenu}>
                Canada
              </Link>
              <Link href="/uk" 
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-700 hover:bg-gray-50"
                onClick={toggleMenu}>
                UK
              </Link>
            </div>
          </div>

          <Link href="/admission" 
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-700 hover:bg-gray-50"
            onClick={toggleMenu}>
            Admission Services
          </Link>
          <Link href="/test" 
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-700 hover:bg-gray-50"
            onClick={toggleMenu}>
            Test Preparation
          </Link>
          <Link href="/course" 
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-700 hover:bg-gray-50"
            onClick={toggleMenu}>
            Courses
          </Link>
          <Link href="/branch" 
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-700 hover:bg-gray-50"
            onClick={toggleMenu}>
            Branches
          </Link>
          <Link href="/blogs" 
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-700 hover:bg-gray-50"
            onClick={toggleMenu}>
            Blogs
          </Link>
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