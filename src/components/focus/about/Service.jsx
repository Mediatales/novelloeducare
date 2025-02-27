"use client";
import React from "react";

const Service = () => {
  return (
    <>
      {/* Previous Section Ends Here */}
      <div className="flex justify-center items-center mt-10 text-3xl font-bold mb-4">
        Our Services
      </div>

      {/* Services Grid */}
      <div className="container mx-auto px-6 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          

          <div className="bg-gray-100 p-6 rounded-lg shadow-md flex flex-col items-center text-center">
            
            <h3 className="text-xl font-semibold mb-2">Free pre-assessment package</h3>
            <p className="text-gray-600 mt-2">
            Free pre-assessment application
            service and guidance.
            </p>
          </div>

         
          <div className="bg-gray-100 p-6 rounded-lg shadow-md flex flex-col items-center text-center">
            
            <h3 className="text-xl font-semibold mb-2">Personalized guidance for applicants</h3>
            <p className="text-gray-600 mt-2">
            Individual approach to each and every
            applicant to choose applied course
            and Desire University
            </p>
          </div>

          <div className="bg-gray-100 p-6 rounded-lg shadow-md flex flex-col items-center text-center">
            
            <h3 className="text-xl font-semibold mb-2">Official admission documents</h3>
            <p className="text-gray-600 mt-2">
            Official invitation & Admission letter  from the chosen university
            </p>
          </div>

          <div className="bg-gray-100 p-6 rounded-lg shadow-md flex flex-col items-center text-center">
            
            <h3 className="text-xl font-semibold mb-2">6/year temporary residency permit</h3>
            <p className="text-gray-600 mt-2">
            Temporary Resident Permit For 6 years
            Letter for bank credit & passport
            </p>
          </div>

          
          
        </div>
      </div>
    </>
  );
};

export default Service;
