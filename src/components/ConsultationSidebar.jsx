"use client";

import { useState } from "react";

const ConsultationSidebar = () => {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = () => {
    if (!name || !message) return;
    const whatsappUrl = `https://wa.me/919310317960?text=Hello, my name is ${encodeURIComponent(name)}. ${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
    setOpen(false);
  };

  return (
    <>
      {/* Sidebar Button */}
      <div
        className="fixed right-0 top-1/3 bg-blue-700 text-white px-4 py-6 rotate-[-90deg] origin-top-right cursor-pointer rounded-t-lg z-50"
        onClick={() => setOpen(true)}
        style={{ transform: "rotate(-90deg) translateY(-100%)" }}
      >
        Need Help? Get a Free Consultation Today!
      </div>

      {/* Modal Form */}
      {open && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-lg font-bold mb-4">Get a Free Consultation</h2>
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border p-2 rounded mb-3"
            />
            <textarea
              placeholder="Your Query"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full border p-2 rounded mb-3"
              rows="4"
            />
            <button
              onClick={handleSubmit}
              className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
            >
              Send on WhatsApp
            </button>
            <button
              onClick={() => setOpen(false)}
              className="w-full mt-2 text-gray-600"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ConsultationSidebar;