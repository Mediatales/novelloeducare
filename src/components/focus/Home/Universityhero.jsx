import React from "react";

const eligibilityPoints = [
  {
    title: "Academic Qualification",
    description: "50% marks in PCB in 12th standard (40% for reserved categories).",
  },
  {
    title: "Age Requirement",
    description: "The student must be 17 years of age eligible for MBBS admission",
  },
  {
    title: "Entrance Exam",
    description: "Must qualify the NEET exam to be eligible for MBBS admission",
  },
  {
    title: "NMC Recognition",
    description: "MBBS degrees from Uzbekistan are recognized by the (NMC) in India.",
  },
];

const mbbsBenefits = [
  {
    title: "Affordable Cost",
    description:
      "Compared to many other countries, the tuition fees and overall cost of living in Uzbekistan are significantly lower, making it a budget-friendly choice for international students.",
  },
  {
    title: "Study Duration",
    description:
      "MBBS in Uzbekistan offers a 6-year program (5 years of education + 1 year internship), similar to many other countries but shorter and more affordable than the USA.",
  },
  {
    title: "Practical Exposure",
    description:
      "The MBBS curriculum in Uzbekistan includes a substantial practical component with internships in affiliated hospitals, ensuring hands-on clinical experience.",
  },
  {
    title: "Quality Education",
    description:
      "Uzbekistan boasts well-equipped medical universities with experienced faculty and modern teaching methods, providing a high standard of medical education.",
  },
];

const advantages = [
  "Low cost of education",
  "Globally recognized degree",
  "English medium instruction",
  "Quality clinical training",
];

const Universityhero = () => {
  return (
    <div className="p-6 md:p-12">
      {/* Eligibility Section */}
      <h2 className="text-center text-2xl md:text-3xl font-bold mb-6">Key points about Eligibility</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {eligibilityPoints.map((point, index) => (
          <div key={index} className="p-4 border rounded-lg bg-green-100 text-center">
            <h3 className="font-bold text-lg text-green-700">{point.title}</h3>
            <p className="text-gray-700 mt-2">{point.description}</p>
          </div>
        ))}
      </div>

      {/* Why Choose MBBS Section */}
      <h2 className="text-center text-2xl md:text-3xl font-bold mb-6">Why to choose MBBS in Uzbekistan</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {mbbsBenefits.map((benefit, index) => (
          <div key={index} className="p-4 border rounded-lg bg-white shadow-md text-center">
            <h3 className="font-bold text-lg text-green-700">{benefit.title}</h3>
            <p className="text-gray-700 mt-2">{benefit.description}</p>
          </div>
        ))}
      </div>

      {/* Key Advantages Section */}
      <h2 className="text-center text-2xl md:text-3xl font-bold mb-6">
  Key advantages of pursuing MBBS in Uzbekistan
</h2>
<div className="flex flex-col md:flex-row items-center w-full justify-between gap-6">
  <div className="flex flex-col gap-4 w-[50%]">
    {advantages.map((adv, index) => (
      <div key={index} className="flex items-center  gap-4">
        <div className="w-10 h-10 flex items-center justify-center bg-green-500 text-white text-2xl rounded-full">
          ✔
        </div>
        <p className="text-lg  font-medium">{adv}</p>
      </div>
    ))}
  </div>
  <img
    src="https://res.cloudinary.com/dqggm4k7u/image/upload/v1739825183/img_nbxth7.png"
    alt="MBBS in Uzbekistan"
    className="w-full md:w-[50%] rounded-lg shadow-md"
  />
</div>

    </div>
  );
};

export default Universityhero;
