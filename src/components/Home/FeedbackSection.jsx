import React from "react";

const feedbacks = [
  {
    name: "Riya Sharma",
    feedback:
      "The entire study abroad process was made so simple! From selecting the right university to visa processing, the expert guidance was invaluable. Highly recommended!",
    rating: 4.5,
  },
  {
    name: "Priya Kapoor",
    feedback:
      "I was unsure about choosing the right country and university, but the support I received helped me make the perfect decision. The assistance with applications and documentation was outstanding!",
    rating: 4.5,
  },
  {
    name: "Kunal Verma",
    feedback:
      "I received guidance at every step, from shortlisting universities to handling my visa process smoothly. Studying in Australia felt like a dream, and they made it happen!",
    rating: 4.5,
  },
  {
    name: "Sneha Gupta",
    feedback:
      "Thanks to the expert advice and personalized support, I secured admission to my dream university in the USA. The help with scholarships and visa processing was top-notch!",
    rating: 4.8,
  },
];

const FeedbackSection = () => {
  return (
    <div className="bg-gray-100 py-8 px-4 mt-8">
      <h2 className="text-center text-2xl font-bold text-indigo-800 mb-6">
        Voices of Success
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {feedbacks.map((item, index) => (
          <div
            key={index}
            className="bg-white shadow-md p-4 rounded-lg border border-gray-200"
          >
            <h3 className="text-lg font-semibold text-gray-900">{item.name}</h3>
            <p className="text-sm text-gray-600 mt-2">{item.feedback}</p>
            <div className="flex items-center mt-4">
              <span className="text-green-500 text-lg font-semibold">★</span>
              <span className="ml-1 text-gray-700 text-sm">{item.rating}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeedbackSection;
