import React from "react";

const Contact = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center bg-gray-50 p-6 lg:p-12">
      {/* Form Section */}
      <div className="bg-indigo-50 p-6 rounded-lg shadow-lg w-full lg:w-1/2">
        <form className="flex flex-col space-y-4">
          <div>
            <label
              htmlFor="name"
              className="block text-gray-700 font-semibold mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Name"
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <div>
            <label
              htmlFor="mobile"
              className="block text-gray-700 font-semibold mb-2"
            >
              Mobile Number
            </label>
            <input
              type="tel"
              id="mobile"
              placeholder="Mobile Number"
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-gray-700 font-semibold mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Email"
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <div>
            <label
              htmlFor="destination"
              className="block text-gray-700 font-semibold mb-2"
            >
              Preferred Study Destination
            </label>
            <select
              id="destination"
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option>Select Destination</option>
              <option>USA</option>
              <option>UK</option>
              <option>Canada</option>
              <option>Australia</option>
            </select>
          </div>
          <div>
            <label
              htmlFor="courses"
              className="block text-gray-700 font-semibold mb-2"
            >
              Preferred Courses
            </label>
            <select
              id="courses"
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option>Select Course</option>
              <option>Engineering</option>
              <option>Business</option>
              <option>Data Science</option>
              <option>Medicine</option>
            </select>
          </div>
          <button
            type="submit"
            className="bg-indigo-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-indigo-700 transition"
          >
            Submit
          </button>
        </form>
      </div>

      {/* Image Section */}
      <div className="w-full lg:w-1/2 mt-6 lg:mt-0 lg:ml-8">
        <img
          src="./assests/home/contactimg.png"
          alt="Contact Illustration"
          className="rounded-lg shadow-lg w-full"
        />
      </div>
    </div>
  );
};

export default Contact;
