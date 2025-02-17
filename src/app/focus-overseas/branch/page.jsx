"use client";
import React from "react";
import { MapPin, Phone, Mail } from "lucide-react";

const Page = () => {
  const indiaLocations = [
    {
      city: "New-Delhi",
      image: "../assests/branch/delhi.png",
      address: "516, Somdutt chambers",
      location: "Bhikaji cama palace new delhi - 110066",
      phone: "+918196525259, +918445632359",
      email: "novelloglobeeducare@gmail.com",
    },
    {
      city: "Dehradun",
      image: "../assests/branch/dehradun.png",
      address: "516, Somdutt chambers",
      location: "Bhikaji cama palace new delhi - 110066",
      phone: "+918196525259, +918445632359",
      email: "novelloglobeeducare@gmail.com",
    },
    {
      city: "Agra",
      image: "../assests/branch/agra.png",
      address: "516, Somdutt chambers",
      location: "Bhikaji cama palace new delhi - 110066",
      phone: "+918196525259, +918445632359",
      email: "novelloglobeeducare@gmail.com",
    },
    {
      city: "Kota",
      image: "../assests/branch/kota.png",
      address: "516, Somdutt chambers",
      location: "Bhikaji cama palace new delhi - 110066",
      phone: "+918196525259, +918445632359",
      email: "novelloglobeeducare@gmail.com",
    },
    {
      city: "Ahmedabad",
      image: "../assests/branch/Ahmedabad.png",
      address: "516, Somdutt chambers",
      location: "Bhikaji cama palace new delhi - 110066",
      phone: "+918196525259, +918445632359",
      email: "novelloglobeeducare@gmail.com",
    },
  ];

  const overseasLocations = [
    {
      city: "Dubai",
      image: "../assests/branch/dubai.png",
      address: "Bingezati heights, JVC Dubai",
      location: "UAE 56001",
      phone: "+918196525259, +918445632359",
      email: "focusoverseasedu@gmail.com",
    },
    {
      city: "Ukraine",
      image: "../assests/branch/ukraine.png",
      address: "36 Pokrovsky street Lviv Oblast",
      location: "Lviv Ukraine 79010",
      phone: "+918196525259, +918445632359",
      email: "focusoverseasedu@gmail.com",
    },
  ];

  const LocationCard = ({ location }) => (
    <div className="flex justify-center w-full">
      <div className="bg-white rounded-lg shadow-md p-6 transition-all duration-300 hover:shadow-lg w-full max-w-sm">
        <div className="flex flex-col items-center text-center">
          <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden mb-4">
            <img
              src={location.image}
              alt={location.city}
              className="w-full h-full object-cover"
            />
          </div>
          <h3 className="text-lg md:text-xl font-semibold mb-4">
            {location.city}
          </h3>

          <div className="space-y-3 w-full">
            <div className="flex items-start gap-2">
              <MapPin className="w-5 h-5 text-gray-600 mt-1 flex-shrink-0" />
              <div className="text-left">
                <p className="text-sm">{location.address}</p>
                <p className="text-sm">{location.location}</p>
              </div>
            </div>

            <div className="flex items-start gap-2">
              <Phone className="w-5 h-5 text-gray-600 flex-shrink-0 mt-1" />
              <p className="text-sm text-left">{location.phone}</p>
            </div>

            <div className="flex items-start gap-2">
              <Mail className="w-5 h-5 text-gray-600 flex-shrink-0 mt-1" />
              <p className="text-sm text-left break-words">{location.email}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div>
      {/* Hero Section */}
      <div className="relative w-full h-[300px] md:h-[500px]">
        <img
          src="../assests/branch/branchbg.png"
          alt="Welcome"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-40">
          <h1 className="text-white text-2xl md:text-4xl lg:text-6xl font-bold text-center px-4">
            Explore Our Expanding Network of Branches
          </h1>
        </div>
      </div>

      {/* India Locations Section */}
      <div className="py-8 md:py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12">
            Strengthening Roots Across India
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
            {indiaLocations.map((location, index) => (
              <LocationCard key={index} location={location} />
            ))}
          </div>
        </div>
      </div>

      {/* Overseas Locations Section */}
      <div className="py-8 md:py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12">
            Your Trusted Partner Overseas
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto justify-items-center">
            {overseasLocations.map((location, index) => (
              <LocationCard key={index} location={location} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;