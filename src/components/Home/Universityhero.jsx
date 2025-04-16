import React from "react";

const Universityhero = ({eligibilityPoints , mbbsBenefits , advantages , countryData}) => {
  return (
    <div className="p-6 md:p-12">
      {/* Eligibility Section */}
      <h2 className="text-center text-2xl md:text-3xl font-bold mb-6">Key points about Eligibility</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {eligibilityPoints.map((point, index) => (
          <div key={index} className="p-4 border rounded-lg bg-blue-100 text-center">
            <h3 className="font-bold text-lg text-blue-700">{point.title}</h3>
            <p className="text-gray-700 mt-2">{point.description}</p>
          </div>
        ))}
      </div>

      {/* Why Choose MBBS Section */}
      <h2 className="text-center text-2xl md:text-3xl font-bold mb-6">Why to choose Study in {countryData?.country.charAt(0).toUpperCase() + countryData?.country.slice(1)}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {mbbsBenefits.map((benefit, index) => (
          <div key={index} className="p-4 border rounded-lg bg-white shadow-md text-center">
            <h3 className="font-bold text-lg text-blue-700">{benefit.title}</h3>
            <p className="text-gray-700 mt-2">{benefit.description}</p>
          </div>
        ))}
      </div>

      {/* Key Advantages Section */}
      <h2 className="text-center text-2xl md:text-3xl font-bold mb-6">
  Key advantages of pursuing Study in {countryData?.country.charAt(0).toUpperCase() + countryData?.country.slice(1)}
</h2>
<div className="flex flex-col md:flex-row items-center w-full  justify-center gap-6">
  <div className="flex flex-col gap-4 items-left w-[50%]">
    {advantages.map((adv, index) => (
      <div key={index} className="flex items-center  gap-4">
        <div className="w-10 h-10 flex items-center justify-center bg-blue-500 text-white text-2xl rounded-full">
          ✔
        </div>
        <p className="text-lg  font-medium">{adv}</p>
      </div>
    ))}
  </div>
  <img
    src={countryData?.advantageImg}
    alt={`Study in ${countryData?.country.charAt(0).toUpperCase() + countryData?.country.slice(1)}`}
    className="w-full md:w-[50%] rounded-lg shadow-md"
  />
</div>

    </div>
  );
};

export default Universityhero;
