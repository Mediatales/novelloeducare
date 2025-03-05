import React from 'react';
import { Building2, BookOpen, GraduationCap, Wallet, Plane, FileCheck,Globe2Icon } from 'lucide-react';

const services = [
  
  {
    title: 'Country selection',
    icon: Globe2Icon,
    description: 'Our consultants provide comprehensive and strategic guidance for international study destinations. We analyze your academic field, budget, and career goals. We recommend optimal countries based on scholarship availability, visa policies, and cultural compatibility.'
  },
  {
    title: 'University Selection',
    icon: GraduationCap,
    description: 'International university selection is simple with our expert advisors. We provide personalized guidance, assessing your academic profile, goals, and budget to recommend suitable universities. We shortlist universities and assist with admissions, scholarships, and visas.'
  },
  
  
  {
    title: 'Loan Assistance',
    icon: Wallet,
    description: 'Loan assistance programs offered by educational platforms and institutions guide students through available loan options, eligibility, and applications, often partnering with financial institutions for favorable terms. help students find and apply for loans'
  },
  {
    title: 'Travel Assistance',
    icon: Plane,
    description: 'Travel assistance helps students with visa applications, travel arrangements, accommodation, and settling into a new environment, often including discounted travel options and airport pickup. helps students with visa applications.'
  },
  {
    title: 'Visa Processing',
    icon: FileCheck,
    description: 'Institutions guide students through visa applications, including requirements, documents, and deadlines.  They may also offer interview support, sponsorship letters, and legal assistance for a smoother approval process.'
  }
];

const Page = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative w-full h-[500px]">
        <img
          src="../assests/about/aboutbg.png"
          alt="Welcome"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-40">
          <h1 className="text-white text-4xl md:text-6xl font-bold text-center">
          Unlock Opportunities with Expert Admission Assistance!
          </h1>
        </div>
      </div>

      {/* Services Section */}
      <div className="container mx-auto px-4 py-16 w-[90%]">
        {/* <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Services</h2> */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div 
                key={index} 
                className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 p-6"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-2 bg-slate-100 rounded-full">
                    <IconComponent className="h-6 w-6 text-slate-600" />
                  </div>
                  <h3 className="font-semibold text-lg">{service.title}</h3>
                </div>
                <p className="text-slate-600 text-sm">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Page;