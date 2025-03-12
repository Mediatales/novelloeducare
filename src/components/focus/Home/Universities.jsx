"use client"
import Link from "next/link";
import React from "react";

const Universities = ({countryData}) => {
  return (
    <div className="bg-green-50 py-10 px-5">
      <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-6">
        Top MBBS Universities in <span className="text-green-600">{countryData?.country.charAt(0).toUpperCase() + countryData?.country.slice(1)}</span>
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {countryData?.univeristes.map((university, index) => (
          <Link 
            key={index} 
            href={`/focus-overseas/${university.country}/${university.slug}`}
            className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <div className="cursor-pointer">
              <img
                src={university.image}
                alt={university.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900">
                  {university.name}
                </h3>
                <ul className="mt-3 text-sm text-gray-700 space-y-2">
                  <li>✅ English-Medium Education</li>
                  <li>✅ Globally Recognized Degree and FMGE/NExT Preparation</li>
                  <li>✅ Affordable Tuition and Living Costs</li>
                  <li>✅ +5k Indian Students</li>
                </ul>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Universities;