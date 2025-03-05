import React from 'react';
import Image from 'next/image';

const CourseCard = ({ title, image, description, duration, career, benefits }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-lg hover:-translate-y-1">
    <div className="relative h-48 overflow-hidden">
      <img 
        src={image} 
        alt={title}
        className="w-full h-full object-cover"
      />
    </div>
    <div className="p-6">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4 text-sm">{description}</p>    
      
      <div className="space-y-2">
        <div className="flex items-start gap-2">
          <div className="w-2 h-2 rounded-full bg-blue-500 mt-2 flex-shrink-0"/>
          <p className="text-sm"><span className="font-medium">Duration:</span> {duration}</p>
        </div>
        <div className="flex items-start gap-2">
          <div className="w-2 h-2 rounded-full bg-blue-500 mt-2 flex-shrink-0"/>
          <p className="text-sm"><span className="font-medium">Career prospects:</span> {career}</p>
        </div>
        <div className="flex items-start gap-2">
          <div className="w-2 h-2 rounded-full bg-blue-500 mt-2 flex-shrink-0"/>
          <p className="text-sm"><span className="font-medium">Benefits:</span> {benefits}</p>
        </div>
      </div>
    </div>
  </div>
);

const CoursesGrid = () => {
      
  const courses = [
    {
      title: "Medicine",
      image: "/assests/course/course1.png",
      description: "A comprehensive 6-year MBBS program designed to equip students with global medical knowledge and practical skills.",
      duration: "6 years (5 years study + 1-year internship)",
      career: "Global Healthcare Opportunities",
      benefits: "Holistic Development"
    },
    {
      title: "Law",
      image: "/assests/course/course2.png",
      description: "A law course, or Bachelor of Legislative Law (LLB) program, is a degree program that prepares students for a legal career.",
      duration: "3-4 years",
      career: "International Law Firms",
      benefits: "Global networking opportunities"
    },
    {
      title: "Engineering",
      image: "/assests/course/course3.png",
      description: "An engineering course is a program that teaches students how to apply math and science to design, build, and test machines.",
      duration: "4 years",
      career: "Electronics, Construction",
      benefits: "Hands-on learning, Personal growth"
    },
    {
      title: "Business Studies",
      image: "/assests/course/course4.png",
      description: "Business Studies is a subject that covers the economic side of businesses, including their management, operations, and activities",
      duration: "3-4 years",
      career: "Marketing, Finance etc",
      benefits: "Diverse Business Practices"
    },
    {
      title: "Commerce & Management",
      image: "/assests/course/course5.png",
      description: "Commerce and management courses provide a comprehensive understanding of business operations, encompassing",
      duration: "3 years",
      career: "Financial Analyst, Investment Banker",
      benefits: "High-Quality Education, Language Proficiency"
    },
    {
      title: "Information Technology",
      image: "/assests/course/course6.png",
      description: "Information Technology (IT) is the application of computer systems, software, and networks to manage information.",
      duration: "3-5 years",
      career: "Software Developer, IT Consultant",
      benefits: "Global Industry Exposure"
    },
    
    {
        title: "Architect & Builder",
        image: "/assests/course/course7.png",
        description: "A Bachelor of Architecture (B.Arch) degree is an undergraduate course that teaches students how to plan, design, and build structures.",
        duration: "5 years",
        career: "Architect, Project Architect",
        benefits: "Diverse Architectural Exposure"
    },
    {
        title: "Art & Humanities",
        image: "/assests/course/course8.png",
        description: "Arts and Humanities courses are academic programs that study the human experience, including culture, creativity, and expression.",
        duration: "1-3 years",
        career: "Event management, Graphic design",
        benefits: "Development of ethical insights"
    },
    {
        title: "Health Science",
        image: "/assests/course/course9.png",
        description: "Health science courses teach students about the biological, physical, and social aspects of health care.",
        duration: "3-4 years",
        career: "Nursing and midwifery",
        benefits: "Cross-cultural competency"
    },
    {
        title: "Design Communication",
        image: "/assests/course/course10.png",
        description: "This course teaches students how to create visual messages that are compelling and can be used across many different media",
        duration: "3-4 years",
        career: "Advertising Designer, Art Director",
        benefits: "Exposure to new design trends"
    },
    {
        title: "Creative Art",
        image: "/assests/course/course11.png",
        description: "A creative arts course explores various artistic disciplines, including visual, performing, music, design, and media arts.",
        duration: "3-4 years",
        career: "Film and television producer",
        benefits: "Gain international exposure"
    },
    {
        title: "Social Science",
        image: "/assests/course/course12.png",
        description: "A Social Science course is an academic study that focuses on examining human society, social interactions, and the systems.",
        duration: "3-4 years",
        career: "Economics, Sociology",
        benefits: "Research Experience"
    },
    
  ];

  return (
    <div>
    <div className="relative w-full h-[300px] md:h-[450px] lg:h-[500px]">
            <Image
              src="/assests/course/bgcourse.png"
              alt="Welcome"
              layout="fill"
              objectFit="cover"
              className="w-full h-full"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40">
              <h1 className="text-white text-3xl md:text-5xl font-bold text-center">
              Explore Our Top Programs Now
              </h1>
            </div>
          </div>
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Our Courses</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <CourseCard
              key={index}
              title={course.title}
              image={course.image}
              description={course.description}
              duration={course.duration}
              career={course.career}
              benefits={course.benefits}
            />
          ))}
        </div>
      </div>
    </div>
    </div>
  );
};

export default CoursesGrid;