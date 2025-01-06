"use client";
import React, { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex items-center justify-between px-6 py-3 bg-white shadow-md w-full z-10 relative">
      {/* Logo */}
      <div className="flex items-center">
        <img src="./assests/home/logo.png" alt="Logo" className="h-11" />
      </div>

      {/* Hamburger Menu Icon */}
      <div className="lg:hidden block">
        <button
          className="text-gray-700 focus:outline-none"
          onClick={toggleMenu}
        >
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Navigation Links */}
      <ul
        className={`lg:flex items-center space-x-6 text-sm font-semibold text-gray-700 ${
          isOpen ? "block" : "hidden"
        } absolute lg:static top-full left-0 lg:top-0 lg:left-auto bg-white lg:bg-transparent w-full lg:w-auto shadow-md lg:shadow-none lg:py-0 py-4`}
      >
        <Link href= "/home" className="px-6 py-2 lg:p-0 hover:text-blue-700 cursor-pointer">
          Home
        </Link>
        <Link href="/about" className="px-6 py-2 lg:p-0 hover:text-blue-700 cursor-pointer">About us</Link>
        <li className="px-6 py-2 lg:p-0 relative group">
          <span className="hover:text-blue-700 cursor-pointer">
            Study Abroad
          </span>
          <div className="absolute hidden group-hover:block top-full mt-2 bg-white shadow-md rounded">
            <ul className="py-2 text-sm text-gray-700">
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">USA</li>
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                Canada
              </li>
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">UK</li>
            </ul>
          </div>
        </li>
        <Link href="/admission" className="px-6 py-2 lg:p-0 hover:text-blue-700 cursor-pointer">Admission Services</Link>
        <li className="px-6 py-2 lg:p-0 hover:text-blue-700 cursor-pointer">
          Test Preparation
        </li>
        <li className="px-6 py-2 lg:p-0 hover:text-blue-700 cursor-pointer">
          Courses
        </li>
        <Link href="/branch" className="px-6 py-2 lg:p-0 hover:text-blue-700 cursor-pointer">
          Branches
        </Link>
        <li className="px-6 py-2 lg:p-0 hover:text-blue-700 cursor-pointer">
          Blogs
        </li>
        <li className="px-6 py-2 lg:p-0 hover:text-blue-700 cursor-pointer">
          Contact Us
        </li>
      </ul>

      {/* Call-to-Action Button */}
      <button className="hidden lg:block px-4 py-2 text-white bg-blue-700 rounded hover:bg-blue-800">
        MBBS in ABROAD
      </button>
    </nav>
  );
};

export default Navbar;
