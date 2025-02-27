import React from "react";
import Service from "@/components/focus/about/Service";
import Image from "next/image";
import Mission from "@/components/focus/about/Mission";



const advantages = [
  "Being customer focused",
  "Offering excellent quality  consultancy service.",
  "Working with integrity.",
  "Achieving excellence in  whatever we do.",
  "Ensuring responsible  counseling through effective  team work."
];

const Page = () => {
  return (
    <div className="mb-14">
      {/* Hero Section */}
      <div className="relative w-full h-[300px] md:h-[450px] lg:h-[500px]">
        <Image
          src="/assests/focus/Bg.jpg"
          alt="Welcome"
          layout="fill"
          objectFit="cover"
          className="w-full h-full"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/0">
          <h1 className="text-white text-3xl md:text-5xl font-bold text-center">
            Your Trusted Partner in Global Medical Education.
          </h1>
        </div>
      </div>

      {/* About Section */}
      <div className="container mx-auto px-6 lg:px-20 mt-10 flex flex-col lg:flex-row items-center gap-8">
        {/* Text Content */}
        <div className="lg:w-1/2">
          <h1 className="font-bold text-3xl md:text-5xl mb-12 underline">
            Welcome to Focus Overseas
          </h1>
          <p className="text-lg md:text-2xl font-light font-roboto leading-relaxed">
            A Pioneer in overseas education with global tie-ups and national
            presence, Our Company is a one stop solution for your overseas
            education needs. We strive to bring overseas education within your
            reach through our extensive experience of more than one decade. We
            are one of the leading overseas service provider in universities of
            Ukraine (Europe), Russia, Kazakhstan, Kyrgyzstan, Nepal, China and
            Georgia as authorized foreign education consultant based at Ukraine
            (Europe). We have helped thousands of students achieve their dreams
            of becoming a Doctor. We provide a rich mix of services that make
            you have a hassle free journey as well as study experience at the
            country of your choice.{" "}
          </p>
          =
        </div>

        {/* Image Section */}
        <div className="lg:w-1/2 flex justify-center">
          <Image
            src="https://res.cloudinary.com/dqggm4k7u/image/upload/v1740640654/Sec_img_h9x8sg.png"
            alt="Campus View"
            width={500}
            height={350}
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>


      {/* mission */}
      <Mission/>


      {/* Services Section */}

      <div>
        <Service/>
      </div>

      {/* New Section: Vision for Global Academic Excellence */}
      <div className="container mx-auto px-6 lg:px-20 mt-16 flex flex-col lg:flex-row items-center gap-8">
        {/* Image */}
        <div className="lg:w-1/2">
          <Image
            src="/assests/about/visionimg.png"
            alt="Graduation"
            width={500}
            height={350}
            className="rounded-lg shadow-lg"
          />
        </div>

        {/* Text */}
        <div className="lg:w-1/2">
          <h2 className="text-3xl font-bold mb-4">
          Path to Progress
          </h2>
          <p className="text-xl font-light leading-relaxed">
          Deliver exceptional service with  intergrity and accountability to become the most trusted name in  the bussiness of education counsulting & overseas education.
          </p>
        </div>

        

      </div>

      {/* Ourvalues */}
      <div className="w-[80%] mt-12 mx-auto">
        <h2 className="text-center text-2xl md:text-3xl font-bold mb-6">
  Our Values
</h2>
<div className="flex flex-col md:flex-row items-center w-full  justify-center gap-6">
  <div className="flex flex-col gap-4 items-left w-[50%]">
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
    src="https://res.cloudinary.com/dqggm4k7u/image/upload/v1740648369/Sec_img_msebdb.png"
    alt="MBBS in Uzbekistan"
    className="w-full md:w-[50%] rounded-lg shadow-md"
  />
</div>
        </div>

      

      
    </div>
  );
};

export default Page;
