import React from "react";

const feedbacks = [
  {
    name: "Riya Sharma",
    feedback:
      "This institute truly transformed the way I learn. The courses are well-structured, and the instructors are incredibly knowledgeable. I completed a Data Science course and landed my dream job within months!",
    rating: 4.5,
  },
  {
    name: "Priya Kapoor",
    feedback:
      "The variety of courses available is phenomenal! I was able to enhance my leadership skills and improve my career prospects with practical lessons I could apply immediately.",
    rating: 4.5,
  },
  {
    name: "Kunal Verma",
    feedback:
      "The certification I earned here has been a game-changer for my resume. The courses are up-to-date with industry trends, making learning both relevant and enjoyable.",
    rating: 4.5,
  },
  {
    name: "Sneha Gupta",
    feedback:
      "The community forum is my favorite part! It is amazing to connect with learners worldwide. The instructors and support team are always ready to help. I feel motivated every day.",
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
