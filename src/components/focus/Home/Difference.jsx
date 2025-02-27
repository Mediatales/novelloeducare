import Image from "next/image";

export default function MBBSComparison() {
  return (
    <div className="px-4 py-10 md:px-10 lg:px-20 text-center mt-8">
      <h2 className="text-2xl md:text-3xl font-semibold mb-6">
        Why to Choose <span className="text-green-600">MBBS Abroad</span>
      </h2>
      
      {/* Feature Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
        {[
          { icon: "💰", text: "Low Tuition Fees" },
          { icon: "🚫", text: "No Entrance Exams" },
          { icon: "📖", text: "Focus on Practical Learning" },
          { icon: "🌍", text: "Globally Recognized Universities" },
        ].map((item, index) => (
          <div key={index} className="bg-gray-100 p-4 rounded-md shadow-md flex flex-col items-center">
            <span className="text-2xl mb-2">{item.icon}</span>
            <p className="text-sm font-medium">{item.text}</p>
          </div>
        ))}
      </div>
      
      {/* Comparison Section */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-8">
        {/* MBBS India */}
        <div className="w-full md:w-1/3 bg-indigo-800 text-white p-6 rounded-md shadow-lg">
          <h3 className="text-lg font-semibold mb-4">MBBS India</h3>
          {[
            "Basic facilities",
            "Localized cases",
            "Homogeneous peers",
            "Traditional approach",
          ].map((text, index) => (
            <div key={index} className="bg-white text-indigo-800 px-4 py-2 rounded-md mb-2">
              {text}
            </div>
          ))}
        </div>

        {/* Doctor Image */}
        <div className="w-full md:w-1/3 flex justify-center">
          <Image
            src="https://res.cloudinary.com/dqggm4k7u/image/upload/v1740639530/doctorpic_yom5pb.png"
            alt="Doctor"
            width={250}
            height={300}
            className="object-contain"
          />
        </div>

        {/* MBBS Abroad */}
        <div className="w-full md:w-1/3 bg-green-700 text-white p-6 rounded-md shadow-lg">
          <h3 className="text-lg font-semibold mb-4">MBBS Abroad</h3>
          {[
            "Advanced technology",
            "Global diversity",
            "Multicultural exposure",
            "Modern practices",
          ].map((text, index) => (
            <div key={index} className="bg-white text-green-700 px-4 py-2 rounded-md mb-2">
              {text}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
