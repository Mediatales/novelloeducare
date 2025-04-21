// components/Footer.jsx
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaWhatsapp, FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa';
import { MdLocationOn, MdPhone, MdEmail } from 'react-icons/md';

const Footer = () => {
  return (
    <footer className="bg-[#EAEAF4] py-8 px-4 md:px-6 lg:px-8 mt-10">
      <div className="container mx-auto w-[90%]">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
          {/* Logo and Mission Statement */}
          <div className="mb-6 md:mb-0 max-w-sm">
            <div className="flex items-center mb-3">
              <Image 
                src="https://res.cloudinary.com/dqggm4k7u/image/upload/v1739789017/f8dxcljajsufyrqwcphn.png" 
                alt="Company Logo" 
                width={100} 
                height={100} 
                className="mr-2"
              />
            </div>
            <p className="text-gray-700 text-sm">
              Established in 2013, We helping you to achieve your global education goals. 
              Our aim is to unlock global education opportunities for students.
            </p>
          </div>

          {/* Address Section */}
          <div className="mb-6 md:mb-0">
            <h3 className="text-[#036847] font-semibold text-xl mb-6">Address</h3>
            <div className="text-gray-600 text-sm mb-2 flex items-start">
              <MdLocationOn className="text-[#036847] mt-1 mr-2 flex-shrink-0" />
              <p>516, Somdutt Chambers, Bhikaji Cama Palace, New Delhi -110066</p>
            </div>
            <div className="text-gray-600 text-sm mb-2 flex items-center">
              <MdPhone className="text-[#036847] mr-2 flex-shrink-0" />
              <p>+91-8126532259, +91-7017909721</p>
            </div>
            <div className="text-gray-600 text-sm flex items-center">
              <MdEmail className="text-[#036847] mr-2 flex-shrink-0" />
              <div>
                <p>novelloeducare@gmail.com</p>
                <p>focusoverseas.eu@gmail.com</p>
              </div>
            </div>
          </div>
          
          {/* Links Section */}
          <div className="mb-6 md:mb-0">
            <h3 className="text-[#036847] text-xl font-semibold mb-4">Section</h3>
            <ul className="text-gray-600 text-sm">
              <li className="mb-2">
                <Link href="/about-study-abroad" className="hover:text-blue-800">
                  About Study Abroad
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/about-mbbs-abroad" className="hover:text-blue-800">
                  About MBBS Abroad
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/about-mbbs-abroad" className="hover:text-blue-800">
                Medical Licensing
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/privacy-policy" className="hover:text-blue-800">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/contact-us" className="hover:text-blue-800">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media Icons */}
          <div className="flex flex-col space-y-2">
            <Link href="https://wa.me/918126532259" className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-white hover:bg-green-600">
              <FaWhatsapp />
            </Link>
            <Link href="https://www.facebook.com/FOCUSOVERSEAS.INDIA.EU/" className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white hover:bg-blue-700">
              <FaFacebookF />
            </Link>
            <Link href="https://www.instagram.com/focus_overseas_education_/" className="w-8 h-8 rounded-full bg-pink-600 flex items-center justify-center text-white hover:bg-pink-700">
              <FaInstagram />
            </Link>
            <Link href="https://www.youtube.com/@FOCUSOVERSEASmbbsabroad" className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center text-white hover:bg-red-400">
              <FaYoutube />
            </Link>
          </div>
        </div>

        {/* Separator Line */}
        <div className="border-t border-gray-200 my-4"></div>
        
        {/* Copyright */}
        <div className="text-center text-gray-600 text-sm">
          <p>© 2025 All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;