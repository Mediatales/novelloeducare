import React from 'react';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-6 py-3 bg-white shadow-md w-[100%]">
      {/* Logo */}
      <div className="flex items-center ml-6">
        <img src="./assests/logo.png" alt="Logo" className="h-10" />
      </div>

      {/* Navigation Links */}
      <ul className="flex items-center space-x-12 text-sm font-semibold text-gray-700 w-100 ">
        <li className="hover:text-blue-700 cursor-pointer">Home</li>
        <li className="hover:text-blue-700 cursor-pointer">About Us</li>
        <li className="relative group">
          <span className="hover:text-blue-700 cursor-pointer">Study Abroad</span>
          <div className="absolute hidden group-hover:block top-full mt-2 bg-white shadow-md rounded">
            {/* Dropdown options */}
            <ul className="py-2 text-sm text-gray-700">
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">USA</li>
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Canada</li>
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">UK</li>
            </ul>
          </div>
        </li>
        <li className="hover:text-blue-700 cursor-pointer">Admission Services</li>
        <li className="hover:text-blue-700 cursor-pointer">Test Preparation</li>
        <li className="hover:text-blue-700 cursor-pointer">Courses</li>
        <li className="hover:text-blue-700 cursor-pointer">Branches</li>
        <li className="hover:text-blue-700 cursor-pointer">Blogs</li>
        <li className="hover:text-blue-700 cursor-pointer">Contact Us</li>
      </ul>

      {/* Call-to-Action Button */}
      <button className="px-4 py-2 text-white bg-blue-700 rounded hover:bg-blue-800 mr-4">
        MBBS in ABROAD
      </button>
    </nav>
  );
};

export default Navbar;
