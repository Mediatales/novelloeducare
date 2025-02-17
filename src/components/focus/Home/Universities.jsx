import React from "react";

const universities = [
  {
    name: "Samarkand State Medical University",
    image: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1739793855/img_bg_sybjt5.png",
  },
  {
    name: "Tashkent Medical Academy University",
    image: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1739793855/img_bg_sybjt5.png",
  },
  {
    name: "Tashkent State Dental Institute",
    image: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1739793855/img_bg_sybjt5.png",
  },
  {
    name: "Fergana Medical University",
    image: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1739793855/img_bg_sybjt5.png",
  },
];

const Universities = () => {
  return (
    <div className="bg-green-50 py-10 px-5">
      <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-6">
        Top MBBS Universities in <span className="text-green-600">Uzbekistan</span>
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {universities.map((university, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
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
        ))}
      </div>
    </div>
  );
};

export default Universities;
