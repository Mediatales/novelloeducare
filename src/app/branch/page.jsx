import React from 'react'

const page = () => {
  return (
    <div>
      <div className="relative w-full h-[500px]">
        <img
          src="./assests/branch/branchbg.png"
          alt="Welcome"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-40">
          <h1 className="text-white text-4xl md:text-6xl font-bold text-center">
          Unlock Opportunities with Expert Admission Assistance!
          </h1>
        </div>
      </div>
    </div>
  )
}

export default page
