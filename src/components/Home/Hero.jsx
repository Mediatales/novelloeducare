import React from 'react';

const Hero = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative bg-[#F5F5F5]">
        {/* Background Image */}
        <img
          src="./assests/herobg.png"
          alt="Hero Background"
          className="w-full h-[500px] object-cover"
        />

        {/* Overlay Text */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center bg-black bg-opacity-50">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Dream to Study Abroad
          </h1>
          <p className="text-lg md:text-xl text-white max-w-2xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
          </p>
        </div>
      </div>

      {/* Discover Universities Section */}
      <div className="bg-gray-100 py-12 px-4 md:px-16">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-8 text-center">
          Discover top universities
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1 */}
          <div className="bg-white shadow-md rounded-lg p-6 text-center">
            <img
              src="./assests/uni1.png"
              alt="MIT University"
              className="w-20 h-20 mx-auto mb-4"
            />
            <h3 className="font-bold text-lg">MIT University</h3>
            <p className="text-sm text-gray-500">
              Cambridge, Massachusetts, USA
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white shadow-md rounded-lg p-6 text-center">
            <img
              src="./assests/uni2.png"
              alt="Oxford University"
              className="w-20 h-20 mx-auto mb-4"
            />
            <h3 className="font-bold text-lg">Oxford University</h3>
            <p className="text-sm text-gray-500">
              Oxford, England, UK
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white shadow-md rounded-lg p-6 text-center">
            <img
              src="./assests/uni3.png"
              alt="Toronto University"
              className="w-20 h-20 mx-auto mb-4"
            />
            <h3 className="font-bold text-lg">Toronto University</h3>
            <p className="text-sm text-gray-500">
              Cambridge, Massachusetts, USA
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-white shadow-md rounded-lg p-6 text-center">
            <img
              src="./assests/uni4.png"
              alt="ANU University"
              className="w-20 h-20 mx-auto mb-4"
            />
            <h3 className="font-bold text-lg">ANU University</h3>
            <p className="text-sm text-gray-500">
              Cambridge, Massachusetts, USA
            </p>
          </div>
        </div>
      </div> 

      {/*Course Brochere */}

      {/* <div className='mt-5' >
      <h1 className='text-2xl md:text-3xl font-semibold text-gray-800 mb-8 text-center' >Course Brochure</h1>

      <img src="./assests/course.png" alt="" />

      

      </div> */}


      {/* Countries */}

      <div className='mt-7 bg-gray-100 p-10' >
      <h1 className='text-2xl md:text-3xl font-semibold text-gray-800 mb-8 text-center' >Beautiful Countries in the <span className='text-[#2B2C83]'>world</span></h1>
      <div className='flex justify-around  items-center  ml-6' >
        <div className='relative'>
        <img src="./assests/country1.png" alt="" className='w-[80%] '/>
        <img src="./assests/aus.png" alt="" className='w-[15%] absolute bottom-[-0.5rem] left-[30%] object-cover'/>
        </div>
        <div className='relative'>
        <img src="./assests/country2.png" alt="" className='w-[80%] '/>
        <img src="./assests/ita.png" alt="" className='w-[15%] absolute bottom-[-0.5rem] left-[30%] object-cover'/>
        </div>
        <div className='relative'>
        <img src="./assests/country3.png" alt="" className='w-[80%] '/>
        <img src="./assests/fra.png" alt="" className='w-[15%] absolute bottom-[-0.5rem] left-[30%] object-cover'/>
        </div>
        <div className='relative'>
        <img src="./assests/country4.png" alt="" className='w-[80%] '/>
        <img src="./assests/usa.png" alt="" className='w-[15%] absolute bottom-[-0.5rem] left-[30%] object-cover'/>
        </div>
        
        </div>
            
      </div>

      {/* process */}
      <div>
        <h1 className='text-2xl md:text-3xl font-semibold text-black mb-8 text-center mt-8' >Your journey at abroad</h1>

        {/* cards */}

        <div className='flex justify-around  items-center' >

        {/* card1 */}

        <div className='bg-white font-[mullish] shadow-md rounded-lg p-6 border border-gray-200 text-center items-center justify-center' >
        <img src="./assests/research.png" alt="img" height={100} width={100} className='mx-auto' />
        <p>Research and <br /> Choose a Program</p>
        </div>

        {/* cards2 */}

        <div className='bg-white font-[mullish] shadow-md rounded-lg p-6 border border-gray-200 text-center items-center justify-center' >
        <img src="./assests/exam.png" alt="img" height={100} width={100} className='mx-auto' />
        <p>Prepare for <br />  Standardized Tests</p>
        </div>


        {/* card3 */}

        <div className='bg-white font-[mullish] shadow-md rounded-lg p-6 border border-gray-200 text-center items-center justify-center' >
        <img src="./assests/apply.png" alt="img" height={90} width={90} className='mx-auto' />
        <p>Apply to <br /> Universities</p>
        </div>

        {/* card4*/}

        <div className='bg-white font-[mullish] shadow-md rounded-lg p-6 border border-gray-200 text-center items-center justify-center' >
        <img src="./assests/securefinance.png" alt="img" height={100} width={100} className='mx-auto' />
        <p>Secure Funding  <br /> and Scholarships</p>
        </div>

        {/* card5 */}

        <div className='bg-white font-[mullish] shadow-md rounded-lg p-6 border border-gray-200 text-center items-center justify-center' >
        <img src="./assests/visa.png" alt="img" height={100} width={100} className='mx-auto' />
        <p>Obtain a Student  <br /> Visa</p>
        </div>

        </div>
      </div>

      {/* test */}

      <div className='mt-8' >

      <h1 className='text-2xl md:text-3xl font-semibold text-black mb-8 text-center' > Test <span className='text-[#303192]' >Preparation</span></h1>

      </div>

      {/* test */}
    </div>


  );
};

export default Hero;
