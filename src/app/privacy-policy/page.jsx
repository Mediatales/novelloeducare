import React from "react";
import {
  FaUserShield,
  FaInfoCircle,
  FaUserAlt,
  FaShareAlt,
  FaUserCheck,
  FaEdit,
} from "react-icons/fa";

const PrivacyPolicyPage = () => {
  return (
    <div className="min-h-screen bg-pink-100">
      <div className="flex flex-col justify-center items-center w-[90%] mx-auto py-10">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-6 mt-24">
          Privacy Policy
        </h1>

        <p className="text-center text-lg text-gray-700 mb-10">
          At Novello Globe Educare, we are committed to protecting your personal
          information and respecting your privacy. This Privacy Policy explains
          how we collect, use, and protect your personal data when you use our
          website. By accessing and using our website, you agree to the terms of
          this Privacy Policy. Collection of Personal Information
        </p>

        <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-4xl">
          <div className="mb-6">
            <div className="flex items-center gap-3 mb-2">
              <FaUserAlt className="text-blue-500 text-xl" />
              <h2 className="text-xl font-bold text-gray-800">
              Information We Collect
              </h2>
            </div>
            <p className="text-gray-600">
            We collect personal information, such as your name, email address, and payment details (if applicable) when you register, subscribe, or interact with our website. Additionally, we may collect non-personal data, such as browser type, device information, and usage patterns through cookies.
            </p>
          </div>

          <div className="mb-6">
            <div className="flex items-center gap-3 mb-2">
              <FaInfoCircle className="text-green-500 text-xl" />
              <h2 className="text-xl font-bold text-gray-800">
              How We Use Your Information:
              </h2>
            </div>
            <p className="text-gray-600">
            We use your information to provide access to courses, study materials, and educational resources, enhance your user experience and website functionality, send important notifications, updates, and promotional content (from which you can opt out at any time), and ensure compliance with legal and security obligations.
            </p>
          </div>

          <div className="mb-6">
            <div className="flex items-center gap-3 mb-2">
              <FaShareAlt className="text-purple-500 text-xl" />
              <h2 className="text-xl font-bold text-gray-800">
              Data Sharing and Security
              </h2>
            </div>
            <p className="text-gray-600">
            We do not sell or share your personal data with third parties, except for trusted service providers (e.g., payment processors, analytics tools) necessary for website operations. Your data is securely stored with encryption and access controls to prevent unauthorized use.
            </p>
          </div>

          <div className="mb-6">
            <div className="flex items-center gap-3 mb-2">
              <FaUserCheck className="text-teal-500 text-xl" />
              <h2 className="text-xl font-bold text-gray-800">Your Rights and Choices</h2>
            </div>
            <p className="text-gray-600">
            You have the right to access, update, or delete your personal data, opt out of marketing emails and cookies, and request clarification regarding our data collection and usage practices.
            </p>
          </div>

          <div className="mb-6">
            <div className="flex items-center gap-3 mb-2">
              <FaEdit className="text-orange-500 text-xl" />
              <h2 className="text-xl font-bold text-gray-800">
                Changes to this Privacy Policy
              </h2>
            </div>
            <p className="text-gray-600">
              We may update this Privacy Policy from time to time by posting a
              revised version on our website. Your continued use of our website
              after any changes to this Privacy Policy will constitute your
              acceptance of the changes.
            </p>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-2">
              <FaUserShield className="text-red-500 text-xl" />
              <h2 className="text-xl font-bold text-gray-800">Contact Us</h2>
            </div>
            <p className="text-gray-600">
              If you have any questions or concerns about this Privacy Policy or
              our use of your personal information, please contact us.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
