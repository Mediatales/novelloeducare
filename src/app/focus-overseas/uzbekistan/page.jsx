import React from 'react';

const Page = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative w-full h-[350px] md:h-[450px] lg:h-[500px]">
        <img
          src="https://res.cloudinary.com/dqggm4k7u/image/upload/v1739793558/img_container_wsmqin.png"
          alt="Study in Uzbekistan"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40">
          <h1 className="text-white text-3xl md:text-5xl font-bold text-center">
            Study In Uzbekistan
          </h1>
          <button className="bg-[#048259] px-4 py-2 text-white mt-3 rounded-md shadow-md hover:bg-green-700 transition">
            Contact Now
          </button>
        </div>
      </div>

      {/* Overview Section */}
      <div className="container mx-auto px-4 md:px-10 py-10 md:py-16 flex flex-col md:flex-row items-start gap-6">
        {/* Left Side: Text Content */}
        <div className="md:w-2/3">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Overview</h2>
          <p className="text-gray-700 leading-relaxed">
            Uzbekistan has become an attractive destination for aspiring medical students, including those from India and beyond.
            Known for its esteemed medical universities, the country offers high-quality education with world-class infrastructure,
            experienced faculty, and a supportive learning environment.
            Students gain valuable international exposure and advanced medical training, preparing them for a successful career in medicine.
          </p>

          {/* Quick Facts */}
          <div className="mt-6">
            <h3 className="text-lg font-semibold mb-3 text-green-700">Quick Facts:</h3>
            <ul className="text-gray-800 space-y-2">
              <li>✅ <strong>Capital:</strong> Tashkent</li>
              <li>✅ <strong>English Speaking Population:</strong> 40%</li>
              <li>✅ <strong>Currency:</strong> Uzbekistani Som</li>
              <li>✅ <strong>Population:</strong> Approx. 3.5 crores</li>
            </ul>
          </div>
        </div>

        {/* Right Side: Image */}
        <div className="md:w-1/3">
          <img
            src="https://res.cloudinary.com/dqggm4k7u/image/upload/v1739793987/ov_img_sny10k.png"
            alt="Uzbekistan Landmark"
            className="rounded-lg shadow-lg w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Page;
