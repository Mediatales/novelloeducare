"use client";
import React, { useState } from "react";
import { ChevronLeft, ChevronRight, MapPin, Phone, Mail } from "lucide-react";

const page = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const locations = [
    {
      city: "New-Delhi",
      image: "./assests/branch/delhi.png",
      address: "516, Somdutt chambers",
      location: "Bhikaji cama palace new delhi - 110066",
      phone: "+918196525259, +918445632359",
      email: "novelloglobeeducare@gmail.com",
    },
    {
      city: "Dehradun",
      image: "./assests/branch/dehradun.png",
      address: "516, Somdutt chambers",
      location: "Bhikaji cama palace new delhi - 110066",
      phone: "+918196525259, +918445632359",
      email: "novelloglobeeducare@gmail.com",
    },
    {
      city: "Agra",
      image: "./assests/branch/agra.png",
      address: "516, Somdutt chambers",
      location: "Bhikaji cama palace new delhi - 110066",
      phone: "+918196525259, +918445632359",
      email: "novelloglobeeducare@gmail.com",
    },
    {
      city: "Kota",
      image: "./assests/branch/kota.png",
      address: "516, Somdutt chambers",
      location: "Bhikaji cama palace new delhi - 110066",
      phone: "+918196525259, +918445632359",
      email: "novelloglobeeducare@gmail.com",
    },
    {
        city: "Ahmedabad",
        image: "./assests/branch/Ahmedabad.png",
        address: "516, Somdutt chambers",
        location: "Bhikaji cama palace new delhi - 110066",
        phone: "+918196525259, +918445632359",
        email: "novelloglobeeducare@gmail.com",
      },
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === locations.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? locations.length - 1 : prevIndex - 1
    );
  };

  return (
    <div>
      {/* Hero Section */}
      <div className="relative w-full h-[500px]">
        <img
          src="./assests/branch/branchbg.png"
          alt="Welcome"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-40">
          <h1 className="text-white text-4xl md:text-6xl font-bold text-center">
            Explore Our Expanding Network of Branches
          </h1>
        </div>
      </div>

      {/* Location Cards Section */}
      <div className="py-16 px-4 z-10">
        <h2 className="text-3xl font-bold text-center mb-12">
          Strengthening Roots Across India
        </h2>

        <div className="relative max-w-6xl mx-auto overflow-hidden">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 bg-white p-2 rounded-full shadow-lg z-10 hover:bg-gray-100"
          >
            <ChevronLeft className="w-6 h-6 z-10"  />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 bg-white p-2 rounded-full shadow-lg  hover:bg-gray-100 z-20"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Carousel Container */}
          <div
            className="flex transition-transform duration-300"
            style={{
              transform: `translateX(-${currentIndex * 25}%)`,
              width: `${locations.length * 25}%`,
            }}
          >
            {locations.map((location, index) => (
              <div key={index} className="flex-none w-1/4 p-4">
                <div className="bg-white rounded-lg shadow-md p-6 transition-all duration-300 hover:shadow-lg">
                  <div className="flex flex-col items-center">
                    <div className="w-24 h-24 rounded-full overflow-hidden mb-4">
                      <img
                        src={location.image}
                        alt={location.city}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-xl font-semibold mb-4">
                      {location.city}
                    </h3>

                    <div className="space-y-3 w-full">
                      <div className="flex items-start gap-2">
                        <MapPin className="w-5 h-5 text-gray-600 mt-1 flex-shrink-0" />
                        <div>
                          <p className="text-sm">{location.address}</p>
                          <p className="text-sm">{location.location}</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        <Phone className="w-5 h-5 text-gray-600 flex-shrink-0" />
                        <p className="text-sm">{location.phone}</p>
                      </div>

                      <div className="flex items-center gap-2">
                        <Mail className="w-5 h-5 text-gray-600 flex-shrink-0" />
                        <p className="text-sm">{location.email}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
