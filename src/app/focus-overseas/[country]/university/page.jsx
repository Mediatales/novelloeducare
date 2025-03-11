import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const Page = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative w-full h-[350px] md:h-[450px] lg:h-[500px]">
        <img
          src="https://res.cloudinary.com/dqggm4k7u/image/upload/v1741069514/img_container_tqemkk.png"
          alt="Samarkand State Medical University"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40">
          <h1 className="text-white text-3xl md:text-5xl font-bold text-center">
            Samarkand State Medical University
          </h1>
        </div>
      </div>

      {/* Overview Section */}
      <div className="flex flex-col mx-auto mt-10 w-[90%] md:w-[80%]">
        <h1 className="text-center text-2xl font-semibold">Overview</h1>
        <p className="text-justify mt-4 text-gray-700 leading-relaxed">
          Samarkand State Medical University, established in 1930 as the State
          Uzbek Medical Institute, has evolved significantly over its 90-year
          history. Following Uzbekistan`&apos;`s independence in 1991, the university
          experienced notable growth with the implementation of various
          educational and healthcare reform programs. These initiatives led to
          the establishment of new faculties and courses, including traditional
          medicine.
          <br />
          <br />
          In December 2021, Uzbekistan introduced reforms granting greater
          autonomy to public higher education institutions, empowering Samarkand
          State Medical University to make independent decisions regarding
          curriculum development and international partnerships.
          <br />
          <br />
          A presidential decree in April 2022 officially established the
          university as a modern medical institution, emphasizing practical
          skills, innovative teaching methods, and integration with real-world
          healthcare sectors. Initiatives outlined in the decree include the
          development of specialized research institutes and clinics.
          <br />
          <br />
          In summary, Samarkand State Medical University continues to evolve,
          meeting the demands of healthcare and education while maintaining its
          status as a leading institution in Uzbekistan and Central Asia.
        </p>
      </div>

      {/* Academic Section */}
      <div className="flex flex-col-reverse lg:flex-row items-center mx-auto mt-10 w-[90%] md:w-[80%] gap-8">
        <div className="lg:w-1/2">
          <h1 className="text-2xl font-semibold">Academic</h1>
          <p className="text-justify mt-4 text-gray-700 leading-relaxed">
            The Academic Lyceum at Samarkand State Medical University (Academic
            Lyceum No.1 at SamSMU) started in 2004-2005 to teach natural
            sciences. Initially, it was under different leadership but
            eventually integrated into Samarkand State Medical Institute. Now,
            with Director Associate Professor H.I. Mahmudova, it focuses on
            providing quality education in biology, chemistry, and other
            subjects.
            <br />
            <br />
            The lyceum has modern facilities and organizes events to discover
            students`&apos;` talents. Graduates become "Chemist Laboratory Technicians"
            and have succeeded in national and international competitions. The
            lyceum aims to keep preparing skilled graduates for Uzbekistan`&apos;`s
            future.
          </p>
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
          {/* Faculty List */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-3 w-full lg:w-2/3">
            {[
              "Medical Faculty",
              "Faculty of Medical Pedagogy",
              "Faculty of Higher Nursing",
              "Faculty of Postgraduate Education",
              "Faculty of medical Prevention, Public Health and Medical Biology",
              "Faculty of Pediatrics",
              "Faculty of Dentistry",
              "Faculty of Pharmacy",
              "International Faculty",
            ].map((faculty, index) => (
              <div key={index} className="flex items-center gap-2 text-lg text-gray-800">
                <FaCheckCircle className="text-green-600" />
                {faculty}
              </div>
            ))}
          </div>

          {/* Faculty Image */}
          <div className="w-full lg:w-1/3">
            <img
              src="https://res.cloudinary.com/dqggm4k7u/image/upload/v1741070182/img_content_fzjv5p.png"
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
          <div className="p-6 border rounded-lg shadow-lg text-center">
            <p className="text-lg font-medium">Recognized by MCI</p>
          </div>
          <div className="p-6 border rounded-lg shadow-lg text-center">
            <p className="text-lg font-medium">Recognized by FAIMER</p>
          </div>
          <div className="p-6 border rounded-lg shadow-lg text-center">
            <p className="text-lg font-medium">NMC and WHO approved</p>
          </div>
          <div className="p-6 border rounded-lg shadow-lg text-center">
            <p className="text-lg font-medium">Recognized by UNESCO</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;