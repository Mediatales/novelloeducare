import ServicesSection from "@/components/about/ServicesSection";
import WhyChooseSection from "@/components/about/WhyChooseSection";
import Image from "next/image";

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
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40">
          <h1 className="text-white text-3xl md:text-5xl font-bold text-center">
            Discover Our Story
          </h1>
        </div>
      </div>

      {/* About Section */}
      <div className="container mx-auto px-6 lg:px-20 mt-10 flex flex-col lg:flex-row items-center gap-8">
        {/* Text Content */}
        <div className="lg:w-1/2">
          <h1 className="font-bold text-3xl md:text-5xl mb-4">About Us</h1>
          <p className="text-lg md:text-2xl font-light leading-relaxed">
            Studying in a foreign country allows you to immerse yourself in a new culture, language, and way of life. This not only broadens your worldview but also helps you develop a global mindset that is essential in today’s interconnected world.
          </p>
          <p className="text-lg md:text-2xl font-light leading-relaxed mt-4">
            We believe that studying abroad is a life-changing experience that opens doors to endless opportunities. Here’s why studying abroad can be one of the most rewarding decisions you make:
          </p>
        </div>

        {/* Image Section */}
        <div className="lg:w-1/2 flex justify-center">
          <Image
            src="/assests/about/secimg.png"
            alt="Campus View"
            width={500}
            height={350}
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* New Section: Planning to Study Internationally */}
      <div className="container mx-auto px-6 lg:px-20 mt-16">
        <h2 className="text-center text-3xl font-bold mb-6 border-b-4 pb-2 inline-block">
          Planning to study internationally?
        </h2>

        {/* Statistics Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center bg-gray-100 p-6 rounded-lg shadow-lg">
          <div className="flex flex-col items-center justify-center">
            <img src="/assests/about/school1.png"/>
            <p className="text-2xl font-bold">10K+</p>
            <p className="text-gray-600">Universities</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <img src="/assests/about/homework1.png"/>
            <p className="text-2xl font-bold">80K</p>
            <p className="text-gray-600">Courses</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <img src="/assests/about/globe.png"/>
            <p className="text-2xl font-bold">80+</p>
            <p className="text-gray-600">Countries</p>
          </div>
          <div className="flex flex-col items-center justify-center">
          <img src="/assests/about/branch1.png"/>
            <p className="text-2xl font-bold">5+</p>
            <p className="text-gray-600">Branches</p>
          </div>
        </div>
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
          <h2 className="text-3xl font-bold mb-4">A Vision for Global Academic Excellence</h2>
          <p className="text-xl font-light leading-relaxed">
            To empower aspiring students globally by providing access to exceptional educational opportunities, fostering academic excellence, and nurturing future leaders through innovative, inclusive, and student-centered solutions in international education.
          </p>
        </div>
      </div>

      <div>
      <ServicesSection/>
      </div>

      <div>
      <WhyChooseSection/>
      </div>
    </div>
  );
};

export default Page;
