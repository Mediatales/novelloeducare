"use client";
import Image from "next/image";
import { FaCheckCircle } from "react-icons/fa";

const Mission = () => {
  return (
    <div className="flex flex-col md:flex-row items-center gap-10 px-6 md:px-16 lg:px-32 py-14">
      {/* Image Section */}
      <div className="w-full">
        <Image
          src="https://res.cloudinary.com/dqggm4k7u/image/upload/v1740642072/Sec_img_tehkjk.png"
          alt="Medical Students"
          width={500}
          height={400}
          className="rounded-lg shadow-lg"
        />
      </div>

      {/* Text Section */}
      <div className="w-full">
        <h2 className="text-3xl md:text-4xl font-bold  mb-10 text-gray-900">Our Mission</h2>
        <ul className="space-y-4 text-lg text-gray-700">
          {[
            "We always keep in mind the best interest of our partners, students, and parents.",
            "We aim at transforming lives by offering Quality overseas medical education at reasonable cost to aspiring candidates.",
            "Backed by our expert team of professional consultants, we hope to offer students an opportunity to fulfill their medical ambition.",
            "We ensure that each of our students goes through a hassle-free admission and visa process to the university of their choice.",
            "Quality Medical education promotes competency of Doctors and also results in overall growth and advancement of the society."
          ].map((text, index) => (
            <li key={index} className="flex items-start gap-3">
              <FaCheckCircle className="text-green-600 mt-1 text-xl" />
              <p>{text}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Mission;
