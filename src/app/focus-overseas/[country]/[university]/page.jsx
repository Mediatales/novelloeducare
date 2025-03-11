"use client"
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { FaCheckCircle } from "react-icons/fa";

const Page = () => {

  const params = useParams();
  console.log("params insdie uniberisty", params.university)

  const [universityData, setUniversityData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUniversityData = async () => {
      try {
        setIsLoading(true);
        const res = await fetch(`/api/university/${params.university}`);
        if (!res.ok) {
          throw new Error('Failed to fetch university data');
        }
        const data = await res.json();
        console.log("unierisyt data", data)
        setUniversityData(data.data);
      } catch (err) {
        console.error('Error fetching university data:', err);
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    if (params.university) {
      fetchUniversityData();
    }
  }, [params.university]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!universityData) {
    return <div>University not found</div>;
  }

  return (
    <div>
      {/* Hero Section */}
      <div className="relative w-full h-[350px] md:h-[450px] lg:h-[500px]">
        <img
          src={universityData?.image}
          alt="Samarkand State Medical University"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40">
          <h1 className="text-white text-3xl md:text-5xl font-bold text-center">
            {universityData?.name}
          </h1>
        </div>
      </div>

      {/* Overview Section */}
      <div className="flex flex-col mx-auto mt-10 w-[90%] md:w-[80%]">
        <h1 className="text-center text-2xl font-semibold">Overview</h1>
        {universityData.overview.map((paragraph, index) => (
          <p key={index} className="mb-4 text-gray-700">
            {paragraph}
          </p>
        ))}
      </div>

      {/* Academic Section */}
      <div className="flex flex-col-reverse lg:flex-row items-center mx-auto mt-10 w-[90%] md:w-[80%] gap-8">
        <div className="lg:w-1/2">
          <h1 className="text-2xl font-semibold">Academic</h1>
          {universityData.academic.map((paragraph, index) => (
            <p key={index} className="text-justify mt-4 text-gray-700 leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>
        <div className="lg:w-1/2">
          <img
            src="https://res.cloudinary.com/dqggm4k7u/image/upload/v1741069956/Sec_img_dck6h5.png"
            alt="Academic Lyceum"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
      <div className="bg-green-800 py-4">
        <h2 className="text-white text-center text-2xl font-semibold">Faculties</h2>
        <div className="bg-green-100 mx-auto mt-4 p-6 w-[90%] md:w-[80%] flex flex-col lg:flex-row items-center gap-8 rounded-lg shadow-lg">
         
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-3 w-full lg:w-2/3">
            {universityData?.faculties.map((faculty, index) => (
              <div key={index} className="flex items-center gap-2 text-lg text-gray-800">
                <FaCheckCircle className="text-green-600" />
                {faculty}
              </div>
            ))}
          </div>

         
          <div className="w-full lg:w-1/3">
            <img
              src={universityData?.facultyImg}
              alt="Faculties"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
        
      </div>

      <div className="py-10 px-5">
        <h2 className="text-center text-2xl font-semibold mb-6">
          Affiliation and Recognition
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {
            universityData?.affilationRecognition.map((affi,index)=>{
              return (
                <div className="p-6 border rounded-lg shadow-lg text-center">
                <p className="text-lg font-medium" key={index}>{affi}</p>
              </div>
              )
            })
          }
          
        </div>
      </div>
    </div>
  );
};

export default Page;