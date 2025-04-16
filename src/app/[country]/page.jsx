"use client"
import University from '@/components/Home/University';
import Universityhero from '@/components/Home/Universityhero';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';

const Page = () => {
  const params = useParams();
  const [countryData, setCountryData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCountryData = async () => {
      try {
        setIsLoading(true);
        const res = await fetch(`/api_study/country_data/${params.country}`);
        if (!res.ok) {
          throw new Error('Failed to fetch country data');
        }
        const data = await res.json();
        setCountryData(data.data);
      } catch (err) {
        console.error('Error fetching country data:', err);
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    if (params.country) {
      fetchCountryData();
    }
  }, [params.country]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!countryData) {
    return <div>Country not found</div>;
  }

  return (
    <div>
      {/* Hero Section */}
      <div className="relative w-full h-[350px] md:h-[450px] lg:h-[500px]">
        <img
          src={countryData.mainImg}
          alt={`Study in ${countryData.country}`}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40">
          <h1 className="text-white text-3xl md:text-5xl font-bold text-center">
          Study in {countryData.country}
          </h1>
          <Link href = "/contact"><button className="bg-[#043682] px-4 py-2 text-white mt-3 rounded-md shadow-md hover:bg-green-700 transition">
            Contact Now
          </button></Link>
        </div>
      </div>

      {/* Overview Section */}
      <div className="container mx-auto px-4 md:px-10 py-10 md:py-16 flex flex-col md:flex-row items-start gap-6">
        {/* Left Side: Text Content */}
        <div className="md:w-2/3">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Overview</h2>
          <p className="text-gray-700 leading-relaxed">
            {countryData.overviewText}
          </p>

          {/* Quick Facts */}
          <div className="mt-6">
            <h3 className="text-lg font-semibold mb-3 text-green-700">Quick Facts:</h3>
            <ul className="text-gray-800 space-y-2">
              <li>✅ <strong>Capital:</strong> {countryData?.quickFacts[0]}</li>
              <li>✅ <strong>English Speaking Population:</strong> {countryData.quickFacts[1]}</li>
              <li>✅ <strong>Currency:</strong> {countryData.quickFacts[2]}</li>
              <li>✅ <strong>Population:</strong> {countryData.quickFacts[3]}</li>
            </ul>
          </div>
        </div>

        {/* Right Side: Image */}
        <div className="md:w-1/3">
          <img
            src={countryData.overviewImg}
            alt={`${countryData.country} Landmark`}
            className="rounded-lg shadow-lg w-full object-cover"
          />
        </div>
      </div>

      {/* Universities Section */}
      <University  countryData={countryData} />

      {/* after universities Section */}
      <Universityhero countryData={countryData} eligibilityPoints={countryData?.eligibilityPoints} mbbsBenefits={countryData.mbbsBenefits} advantages={countryData?.advantages}/>
    </div>
  );
};

export default Page;