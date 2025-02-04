import React from "react";
import { FaInstagram, FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-indigo-50 text-gray-700 mt-7 py-8 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Section */}
        <div>
          <img
            src="./assests/home/logo.png"
            alt="Logo"
            className="w-16 mb-4"
          />
          <p className="text-sm leading-relaxed">
            Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industrys standard dummy text ever since the.
          </p>
          <div className="flex space-x-4 mt-4">
            <a href="#" className="text-gray-600 hover:text-indigo-600">
              <FaInstagram size={20} />
            </a>
            <a href="#" className="text-gray-600 hover:text-indigo-600">
              <FaFacebookF size={20} />
            </a>
            <a href="#" className="text-gray-600 hover:text-indigo-600">
              <FaTwitter size={20} />
            </a>
            <a href="#" className="text-gray-600 hover:text-indigo-600">
              <FaLinkedinIn size={20} />
            </a>
          </div>
        </div>

        {/* Middle Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Section</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">About Us</a></li>
            <li><a href="#" className="hover:underline">Careers</a></li>
            <li><a href="#" className="hover:underline">Blogs</a></li>
            <li><a href="#" className="hover:underline">Contact Us</a></li>
          </ul>
        </div>

        {/* Right Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Useful Links</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Test Preparation</a></li>
            <li><a href="#" className="hover:underline">Admission Service</a></li>
            <li><a href="#" className="hover:underline">Popular Courses</a></li>
            <li><a href="#" className="hover:underline">Our Branches</a></li>
          </ul>
        </div>
      </div>

      <div className="text-center mt-8 text-sm text-gray-600">
        © 2024 All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
