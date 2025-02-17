"use client";
import { useState, useEffect } from "react";
import { FaTimes } from "react-icons/fa";
import Contact from "@/components/Home/Contact";
import FeedbackSection from "@/components/Home/FeedbackSection";
import Hero from "@/components/Home/Hero";
import Mbbsabroad from "@/components/Home/Mbbsabroad";

export default function Page() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    // Open the modal every 25 seconds
    const interval = setInterval(() => {
      setIsModalOpen(true);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="w-full">
      <Hero />
      <Mbbsabroad />
      <FeedbackSection />
      <Contact />

      {/* Popup Contact Form Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md relative">
            {/* Close Button */}
            <button className="absolute top-2 right-2 text-gray-500" onClick={closeModal}>
              <FaTimes className="text-xl" />
            </button>

            <h2 className="text-xl font-bold text-blue-600 text-center mb-4">
              Get in Touch
            </h2>

            <form className="space-y-4">
              <input
                type="text"
                placeholder="Full Name"
                required
                className="w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="email"
                placeholder="Email Address"
                required
                className="w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                required
                className="w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-500"
              />
              <textarea
                placeholder="Your Message"
                required
                rows="4"
                className="w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="w-full bg-blue-600 text-white p-3 rounded-md hover:bg-blue-700 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
