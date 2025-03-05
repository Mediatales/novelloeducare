import { FaUserGraduate, FaPencilAlt, FaGlobe ,FaUniversity } from "react-icons/fa";

const ServicesSection = () => {
  return (
    <>
      {/* Previous Section Ends Here */}
      <div className="flex justify-center items-center mt-10 text-3xl font-bold mb-4">
        Our Services
      </div>

      {/* Services Grid */}
      <div className="container mx-auto px-6 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Career Counselling */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-md flex flex-col items-center text-center">
            <FaUserGraduate className="text-4xl text-black mb-4" />
            <h3 className="text-xl font-semibold mb-2">Course selection</h3>
            <p className="text-gray-600">
            Our expert guidance helps you find the perfect program at top-ranked universities.
            </p>
          </div>

          {/* Test Preparation */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-md flex flex-col items-center text-center">
            <FaPencilAlt className="text-4xl text-black mb-4" />
            <h3 className="text-xl font-semibold mb-2">Country Selection</h3>
            <p className="text-gray-600">
            Choosing the right study abroad destination depends on your academic goals
            </p>
          </div>

          {/* university selection*/}

          <div className="bg-gray-100 p-6 rounded-lg shadow-md flex flex-col items-center text-center">
            <FaUniversity className="text-4xl text-black mb-4" />
            <h3 className="text-xl font-semibold mb-2">University Selection</h3>
            <p className="text-gray-600">
            Our expert advisors simplify international university selection.
            </p>
          </div>

          {/* Visa Processing */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-md flex flex-col items-center text-center">
            <FaGlobe className="text-4xl text-black mb-4" />
            <h3 className="text-xl font-semibold mb-2">Visa Processing</h3>
            <p className="text-gray-600">
            Visa processing helps students navigate the application process for studying abroad.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesSection;
