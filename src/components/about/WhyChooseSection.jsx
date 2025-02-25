import { FaPassport, FaUserCheck, FaHandHoldingUsd, FaLaptop } from "react-icons/fa";

const WhyChooseSection = () => {
  return (
    <div className="container mx-auto px-6 lg:px-20 mt-16">
      {/* Heading */}
      <div className="text-center text-2xl font-bold mb-6">
        Why Choose <span className="text-indigo-600">Novello Globe Educare?</span>
      </div>

      {/* Benefits Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
        {/* Visa Success */}
        <div className="flex flex-col items-center">
          <FaPassport className="text-4xl text-black mb-4" />
          <p className="font-semibold">100% visa success ratio</p>
        </div>

        {/* Assured Admission */}
        <div className="flex flex-col items-center">
          <FaUserCheck className="text-4xl text-black mb-4" />
          <p className="font-semibold">Assured Admission</p>
        </div>

        {/* Minimum Package */}
        <div className="flex flex-col items-center">
          <FaHandHoldingUsd className="text-4xl text-black mb-4" />
          <p className="font-semibold">Min, Package 20 Lac</p>
        </div>

        {/* Stay Back Visa */}
        <div className="flex flex-col items-center">
          <FaLaptop className="text-4xl text-black mb-4" />
          <p className="font-semibold">18 months Stay back Visa</p>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseSection;
