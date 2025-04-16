"use client";
import React, { useState , useEffect } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isUniversityOpen, setIsUniversityOpen] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [isStudyAbroad, setIsStudyAbroad] = useState(false);
    const [countriesFlagLink, setCountriesFlagLink] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [universtiesName , setUniversitiesName] = useState([]);
    const slugify = (text) =>
      text.toLowerCase().replace(/\s+/g, "-").replace(/[^\w\-]+/g, "");
    
    const [searchQuery, setSearchQuery] = useState("");
  
    const filteredUniversities = universtiesName.filter(({ university }) =>
      university.toLowerCase().includes(searchQuery.toLowerCase())
    );

    useEffect(() => {
        const fetchCountries = async () => {
          try {
            setIsLoading(true);
            const res = await fetch("/api_study/countries_list");
            if (!res.ok) {
              throw new Error("Failed to fetch countries");
            }
            const data = await res.json();
            setCountriesFlagLink(data.data);
          } catch (err) {
            console.error("Error fetching countries:", err);
            setError(err.message);
          } finally {
            setIsLoading(false);
          }
        };
    
        fetchCountries();
      }, []);


      //university

      useEffect(() => {
        const fetchUniversity = async () => {
          try {
            setIsLoading(true);
            const res = await fetch("/api_study/university_list");
            if (!res.ok) {
              throw new Error("Failed to fetch universities");
            }
      
            const result = await res.json();
            setUniversitiesName(result.data); // set the array of universities
          } catch (err) {
            setError("Something went wrong");
          } finally {
            setIsLoading(false);
          }
        };
      
        fetchUniversity();
      }, []);





  const toggleMenu = () => {
    setIsOpen(!isOpen);
    if (isStudyAbroad) setIsStudyAbroad(false);
  };

  const toggleStudyAbroad = () => {
    setIsStudyAbroad(!isStudyAbroad);
  };

  return (
    <nav className="bg-white shadow-md w-full z-50 fixed top-0 left-0">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
            <img src="https://res.cloudinary.com/dqggm4k7u/image/upload/v1739789041/f1f7pedrical8yenlywv.png" alt="Logo" className="h-11" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link href="/home" className="text-gray-700 hover:text-blue-700 font-medium">
              Home
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-blue-700 font-medium">
              About us
            </Link>

            <Link href="/course" className="text-gray-700 hover:text-blue-700 font-medium">
              Courses
            </Link>


            {/* --------------------------------------------------------------------------------------------------------- */}
            <div className="relative group">
              <button className="text-gray-700 hover:text-blue-700 font-medium flex items-center gap-0">
                Country
                <svg
                  className="w-5 h-4 mt-1"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              <div className="absolute hidden group-hover:block w-60 py-0 mt-0 bg-white rounded-md shadow-xl z-10 max-h-80 overflow-y-auto">
                {isLoading ? (
                  <div className="px-4 py-2">Loading...</div>
                ) : error ? (
                  <div className="px-4 py-2 text-red-500">{error}</div>
                ) : (
                  countriesFlagLink
                    .slice(0, 20)
                    .map(({ country, flag_link }, idx) => (
                      <Link key={idx} href={`/${country}`}>
                        <div className="flex items-center gap-3 mt-2 px-4 py-2 transition-all duration-200 bg-[#E6F3EE] hover:bg-[#d4e9de] rounded-md cursor-pointer">
                          <img
                            src={flag_link}
                            alt={`${country} Flag`}
                            className="w-11 h-8"
                          />
                          <p className="text-gray-800 font-medium">
                             {country}
                          </p>
                        </div>
                      </Link>
                    ))
                )}
              </div>
            </div>

            
            {/* <Link href="/test" className="text-gray-700 hover:text-blue-700 font-medium">
              Test Preparation
            </Link> */}
{/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */}


            <div className="relative group">
              <button className="text-gray-700 hover:text-green-700 font-medium flex items-center gap-0">
                University
                <svg
                  className="w-5 h-4 mt-1"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>

              <div className="absolute hidden group-hover:block w-60 py-2 mt-0 bg-white rounded-md shadow-xl z-10 max-h-80 overflow-y-auto">
                {/* Search input */}
                <div className="px-4 pb-2">
                  <input
                    type="text"
                    placeholder="Search university..."
                    className="w-full px-3 py-1 border border-gray-300 rounded-md text-sm"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>

                {isLoading ? (
                  <div className="px-4 py-2">Loading...</div>
                ) : error ? (
                  <div className="px-4 py-2 text-red-500">{error}</div>
                ) : filteredUniversities.length > 0 ? (
                  <>
                    {filteredUniversities.slice(0, 500).map(({ country, university }, idx) => (
                      <Link
                        key={idx}
                        href={`/${country.toLowerCase()}/${slugify(university)}`}
                      >
                        <div className="flex items-center gap-3 mt-2 px-4 py-2 transition-all duration-200 bg-[#E6F3EE] hover:bg-[#d4e9de] rounded-md cursor-pointer">
                          <p className="text-gray-800 font-medium">{university}</p>
                        </div>
                      </Link>
                    ))}
                  </>
                ) : (
                  <div className="px-4 py-2 text-gray-500">No results found.</div>
                )}
              </div>
            </div>


            <Link href="/admission" className="text-gray-700 hover:text-blue-700 font-medium">
              Admission Services
            </Link>
            <Link href="/focus-overseas/blogs" className="text-gray-700 hover:text-blue-700 font-medium">
              Blogs
            </Link>
            {/* <Link href="/branch" className="text-gray-700 hover:text-blue-700 font-medium">
              Branches
            </Link> */}
            
            <Link href="/contact" className="text-gray-700 hover:text-blue-700 font-medium">
              Contact Us
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link href="/focus-overseas">
              <button className="px-4 py-2 text-white bg-blue-700 rounded hover:bg-blue-800 font-medium">
                MBBS in ABROAD
              </button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-700 hover:bg-gray-100 focus:outline-none"
          >
            {isOpen ? (
              <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`lg:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 bg-white shadow-lg">
          <Link href="/home" 
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-700 hover:bg-gray-50"
            onClick={toggleMenu}>
            Home
          </Link>
          <Link href="/about" 
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-700 hover:bg-gray-50"
            onClick={toggleMenu}>
            About us
          </Link>

          <Link href="/course" 
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-700 hover:bg-gray-50"
            onClick={toggleMenu}>
            Courses
          </Link>
          
          {/* Mobile Study Abroad Dropdown */}
          <div>
            <button
              onClick={toggleStudyAbroad}
              className="flex justify-between items-center w-full px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-green-700 hover:bg-gray-50"
            >
              Country
              <svg
                className={`w-4 h-4 transition-transform duration-200 ${
                  isStudyAbroad ? "transform rotate-180" : ""
                }`}
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>

            <div
              className={`${
                isStudyAbroad ? "block" : "hidden"
              } pl-4 max-h-60 overflow-y-auto`}
            >
              {isLoading ? (
                <div className="px-4 py-2">Loading...</div>
              ) : error ? (
                <div className="px-4 py-2 text-red-500">{error}</div>
              ) : (
                countriesFlagLink
                  .slice(0, 20)
                  .map(({ country, flag_link }, idx) => (
                    <Link
                      key={idx}
                      href={`/${country}`}
                      onClick={toggleMenu}
                    >
                      <div className="flex items-center gap-2 py-3 font-medium text-gray-700 hover:text-green-700 hover:bg-gray-50">
                        <img
                          src={flag_link}
                          alt={`${country} Flag`}
                          className="w-4 h-4"
                        />
                        <p className="text-gray-800 font-medium">
                           {country}
                        </p>
                      </div>
                    </Link>
                  ))
              )}
            </div>
          </div>
          
          
          {/* University Button */}


          <div>
  
  <button
    onClick={() => setIsUniversityOpen(!isUniversityOpen)}
    className="flex justify-between items-center w-full px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-green-700 hover:bg-gray-50"
  >
    University
    <svg
      className={`w-4 h-4 transition-transform duration-200 ${
        isUniversityOpen ? "rotate-180" : ""
      }`}
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
        clipRule="evenodd"
      />
    </svg>
  </button>

  {/* Dropdown */}
  <div className={`${isUniversityOpen ? "block" : "hidden"} pl-4 max-h-60 overflow-y-auto`}>
    {/* Search Bar */}
    <div className="p-3">
      <input
        type="text"
        placeholder="Search university..."
        className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
    </div>

    {isLoading ? (
      <div className="px-4 py-2">Loading...</div>
    ) : error ? (
      <div className="px-4 py-2 text-red-500">{error}</div>
    ) : (
      filteredUniversities.slice(0, 500).map(({ country, university }, idx) => (
        <Link
          key={idx}
          href={`/${country.toLowerCase()}/${slugify(university)}`}
          onClick={() => setIsUniversityOpen(false)}
        >
          <div className="flex items-center gap-2 py-3 font-medium text-gray-700 hover:text-green-700 hover:bg-gray-50">
            <p className="text-gray-800 font-medium">{university}</p>
          </div>
        </Link>
      ))
    )}
  </div>
</div>

          <Link href="/admission" 
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-700 hover:bg-gray-50"
            onClick={toggleMenu}>
            Admission Services
          </Link>
          {/* <Link href="/test" 
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-700 hover:bg-gray-50"
            onClick={toggleMenu}>
            Test Preparation
          </Link> */}
          
          <Link href="/blogs" 
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-700 hover:bg-gray-50"
            onClick={toggleMenu}>
            Blogs
          </Link>
          {/* <Link href="/branch" 
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-700 hover:bg-gray-50"
            onClick={toggleMenu}>
            Branches
          </Link> */}
          
          <Link href="/contact" 
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-700 hover:bg-gray-50"
            onClick={toggleMenu}>
            Contact Us
          </Link>
          
          {/* Mobile CTA Button */}
          <Link href="/focus-overseas" 
            className="block w-full"
            onClick={toggleMenu}>
            <button className="w-full px-4 py-2 text-white bg-blue-700 rounded hover:bg-blue-800 font-medium">
              MBBS in ABROAD
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;