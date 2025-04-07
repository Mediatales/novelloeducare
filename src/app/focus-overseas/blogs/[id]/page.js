"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { blogs } from "../data";

export default function BlogPost() {
  const params = useParams();
  const id = params.id;
  
  // Find the blog post that matches the ID from the URL
  const blog = blogs.find((blog) => blog.id === parseInt(id));
  
  // Handle when blog is not found
  if (!blog) {
    return (
      <div className="mt-16">
        <div className="flex flex-col items-center justify-center p-4 ">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Blog post not found</h2>
        <p className="text-gray-600">The blog post you`&apos;`re looking for doesn`&apos;`t exist or has been removed.</p>
        <Link href="/focus-overseas/blogs" className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded transition-colors">
          Back to Blogs
        </Link>
      </div>
      </div>
    );
  }

  return (
    <div className="mt-16">
      <div className="min-h-screen bg-gray-100 p-4 sm:p-6 mt-12">
      <div className="max-w-4xl mx-auto">
        <Link href="/focus-overseas/blogs" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Blogs
        </Link>
        
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <img
            src={blog.image} 
            alt={blog.title} 
              className="w-full h-48 sm:h-64 md:h-full object-contain" 
          />
          
          <div className="p-4 sm:p-6 md:p-8">
            <div className="mb-6">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-3">{blog.title}</h1>
              <p className="text-gray-500 text-sm sm:text-base">{blog.date}</p>
            </div>
            
            <div className="prose prose-sm sm:prose max-w-none" dangerouslySetInnerHTML={{ __html: blog.content }} />
            
            <div className="mt-10 pt-6 border-t border-gray-200">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Ready to start your study abroad journey?</h3>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/focus-overseas/contact" 
                  className="bg-blue-600 hover:bg-blue-700 text-white text-center font-medium py-2 px-6 rounded transition-colors"
                >
                  Contact Us
                </Link>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}