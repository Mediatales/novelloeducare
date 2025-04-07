import Link from "next/link";
import { blogs } from "./data";

export default function BlogPage() {
  return (
    <div className="mt-16">
        <div className="mt-12 w-full">
        <div className="min-h-screen bg-gray-100 p-4 sm:p-6 ">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold text-center mb-4 sm:mb-6 text-gray-800">
          Study Abroad with Focus Overseas
        </h1>
        <p className="text-center text-gray-600 mb-6 sm:mb-10 max-w-2xl mx-auto px-4">
          Discover how Focus Overseas helps Indian students realize their dreams of studying abroad with expert guidance and support.
        </p>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 px-2 sm:px-0">
          {blogs.map((blog) => (
            <div key={blog.id} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:shadow-lg hover:-translate-y-1">
              <div className="relative">
                <img 
                  src={blog.image} 
                  alt={blog.title} 
                  className="w-full h-48  object-contain" 
                />
                <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/70 to-transparent p-3">
                  <p className="text-white text-sm">{blog.date}</p>
                </div>
              </div>
              
              <div className="p-4 sm:p-5">
                <h2 className="text-lg sm:text-xl font-semibold text-gray-800 line-clamp-2">{blog.title}</h2>
                <p className="text-gray-600 mt-2 text-sm sm:text-base line-clamp-3">{blog.description}</p>
                <Link
                  href={`/focus-overseas/blogs/${blog.id}`}
                  className="inline-flex items-center mt-4 text-blue-600 hover:text-blue-800 font-semibold text-sm sm:text-base"
                >
                  Read More 
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Link 
            href="/focus-overseas/contact" 
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors"
          >
            Contact Us for Free Counseling
          </Link>
        </div>
      </div>
    </div>
    </div>
    </div>
  );
}