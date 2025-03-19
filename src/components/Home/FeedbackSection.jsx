import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const feedbacks = [
  { name: "Riya Sharma", feedback: "The entire study abroad process was made so simple! From selecting the right university to visa processing, the expert guidance was invaluable. Highly recommended!", rating: 4.5 },
  { name: "Priya Kapoor", feedback: "I was unsure about choosing the right country and university, but the support I received helped me make the perfect decision. The assistance with applications and documentation was outstanding!", rating: 4.5 },
  { name: "Kunal Verma", feedback: "I received guidance at every step, from shortlisting universities to handling my visa process smoothly. Studying in Australia felt like a dream, and they made it happen!", rating: 4.5 },
  { name: "Sneha Gupta", feedback: "Thanks to the expert advice and personalized support, I secured admission to my dream university in the USA. The help with scholarships and visa processing was top-notch!", rating: 4.8 },
  { name: "Arjun Mehta", feedback: "Novello Educare made my UK study journey hassle-free. They were always available to answer my queries!", rating: 4.7 },
  { name: "Neha Agarwal", feedback: "The process of selecting the right university was overwhelming, but Novello's team guided me with patience and expertise!", rating: 4.6 },
  { name: "Rohan Khanna", feedback: "I was confused between Canada and Germany, but their insights helped me choose the right career path. Thanks, Novello Educare!", rating: 4.9 },
  { name: "Meera Sinha", feedback: "They provided exceptional support with my visa application. The process was stress-free!", rating: 4.5 },
  { name: "Siddharth Jain", feedback: "From IELTS preparation to visa guidance, Novello was there at every step!", rating: 4.7 },
  { name: "Aditi Verma", feedback: "They helped me secure a great scholarship in Australia! Eternally grateful!", rating: 4.9 },
  { name: "Tarun Malik", feedback: "Highly recommend Novello Educare for their professional and efficient approach to study abroad consulting.", rating: 4.6 },
  { name: "Ishita Roy", feedback: "The entire process of university applications was streamlined and stress-free thanks to Novello's guidance.", rating: 4.8 },
  { name: "Varun Batra", feedback: "Great experience with Novello! They made the entire admission process super easy!", rating: 4.5 },
  { name: "Sanya Kapoor", feedback: "Their expert advice helped me choose the best course for my career in Germany.", rating: 4.7 },
  { name: "Rahul Mishra", feedback: "From shortlisting colleges to visa approval, they made everything seamless.", rating: 4.6 },
  { name: "Alisha Reddy", feedback: "Personalized guidance made my study abroad dream come true. Highly professional!", rating: 4.8 },
  { name: "Gaurav Nair", feedback: "Very knowledgeable counselors. The best decision to go with Novello Educare!", rating: 4.9 },
  { name: "Simran Gill", feedback: "Their team supported me throughout the application process, making it hassle-free.", rating: 4.7 },
  { name: "Yash Sharma", feedback: "Excellent guidance and quick response to queries. Highly recommended!", rating: 4.6 },
];

const FeedbackCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="bg-gray-100 py-8 px-4 mt-8">
      <h2 className="text-center text-2xl font-bold text-indigo-800 mb-6">
        Voices of Success at <span className="text-red-600">Novello Educare</span>
      </h2>
      <div className="max-w-6xl mx-auto">
        <Slider {...settings}>
          {feedbacks.map((item, index) => (
            <div key={index} className="px-2">
              <div className="bg-white shadow-md p-4 rounded-lg border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900">{item.name}</h3>
                <p className="text-sm text-gray-600 mt-2">{item.feedback}</p>
                <div className="flex items-center mt-4">
                  <span className="text-green-500 text-lg font-semibold">★</span>
                  <span className="ml-1 text-gray-700 text-sm">{item.rating}</span>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default FeedbackCarousel;
