// "use client";
// import React, { useState } from "react";
// import { MapPin, Phone, Mail, Send } from "lucide-react";

// const Page = () => {
//   const indiaLocations = [
//     {
//       city: "New-Delhi",
//       image: "./assests/branch/delhi.png",
//       address: "516, Somdutt chambers",
//       location: "Bhikaji cama palace new delhi - 110066",
//       phone: "+91-9720701796, +91-7017909721",
//       email: "novelloglobeeducare@gmail.com focusoverseas.eu@gmail.com",
//     },
//     {
//       city: "Dehradun",
//       image: "./assests/branch/dehradun.png",
//       address: "6  N0. Puliya, Near Arya Samaj Mandir Ring Road",
//       location: "Dehradun",
//       phone: "+91-9720701796, +91-7017909721",
//       email: "novelloglobeeducare@gmail.com focusoverseas.eu@gmail.com",
//     },
//     {
//       city: "Agra",
//       image: "./assests/branch/agra.png",
//       address: "F-2 First Floor, Block C-9, Cloth Market, Sanjay Palace",
//       location: "Agra, (U.P)",
//       phone: "+91-9720701796, +91-7017909721",
//       email: "novelloglobeeducare@gmail.com focusoverseas.eu@gmail.com",
//     },
//     {
//       city: "Kota",
//       image: "./assests/branch/kota.png",
//       address: "Bhagerwal Four Seasons, Opp. City Mall, Shop NO.Lg-17",
//       location: "Kota Rajasthan",
//       phone: "+91-9720701796, +91-7017909721",
//       email: "novelloglobeeducare@gmail.com focusoverseas.eu@gmail.com",
//     },
//     {
//       city: "Ahmedabad",
//       image: "./assests/branch/Ahmedabad.png",
//       address: "FF/30/A,Orchid Shopping Mall, Nr. Goverdhan Party Plot",
//       location: "Thaltej, Ahmedabad-380059",
//       phone: "+91-9720701796, +91-7017909721",
//       email: "novelloglobeeducare@gmail.com focusoverseas.eu@gmail.com",
//     },
//   ];

//   const overseasLocations = [
//     {
//       city: "Dubai",
//       image: "./assests/branch/dubai.png",
//       address: "Bingezati heights, JVC Dubai",
//       location: "UAE 56001",
//       phone: "+91-9720701796, +91-7017909721",
//       email: "novelloglobeeducare@gmail.com focusoverseas.eu@gmail.com",
//     },
//     {
//       city: "Ukraine",
//       image: "./assests/branch/ukraine.png",
//       address: "36 Pokrovsky street Lviv Oblast",
//       location: "Lviv Ukraine 79010",
//       phone: "+91-9720701796, +91-7017909721",
//       email: "novelloglobeeducare@gmail.com focusoverseas.eu@gmail.com",
//     },
//   ];

//   // Contact form state
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     message: "",
//   });

//   const [errors, setErrors] = useState({});
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [submitSuccess, setSubmitSuccess] = useState(false);

//   // Handle form input changes
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
    
//     // Clear error when user starts typing
//     if (errors[name]) {
//       setErrors({
//         ...errors,
//         [name]: "",
//       });
//     }
//   };

//   // Validate the form
//   const validateForm = () => {
//     const newErrors = {};
    
//     if (!formData.name.trim()) {
//       newErrors.name = "Name is required";
//     }
    
//     if (!formData.email.trim()) {
//       newErrors.email = "Email is required";
//     } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
//       newErrors.email = "Email is invalid";
//     }
    
//     if (!formData.phone.trim()) {
//       newErrors.phone = "Phone number is required";
//     } else if (!/^\d{10}$/.test(formData.phone.replace(/[^0-9]/g, ""))) {
//       newErrors.phone = "Phone number must be 10 digits";
//     }
    
//     return newErrors;
//   };

//   // Handle form submission
//   const handleSubmit = (e) => {
//     e.preventDefault();
    
//     const formErrors = validateForm();
//     if (Object.keys(formErrors).length > 0) {
//       setErrors(formErrors);
//       return;
//     }
    
//     setIsSubmitting(true);
    
//     // Format message for WhatsApp
//     const whatsappMessage = encodeURIComponent(
//       `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nMessage: ${formData.message}`
//     );
    
//     const whatsappNumber = "919310317960";
//     const whatsappURL = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;
    
//     // Open WhatsApp in a new tab
//     window.open(whatsappURL, "_blank");
    
//     // Reset form
//     setFormData({
//       name: "",
//       email: "",
//       phone: "",
//       message: "",
//     });
//     setIsSubmitting(false);
//     setSubmitSuccess(true);
    
//     // Reset success message after 3 seconds
//     setTimeout(() => {
//       setSubmitSuccess(false);
//     }, 3000);
//   };

//   const LocationCard = ({ location }) => (
//     <div className="flex justify-center w-full">
//       <div className="bg-white rounded-lg shadow-md p-6 transition-all duration-300 hover:shadow-lg w-full max-w-sm">
//         <div className="flex flex-col items-center text-center">
//           <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden mb-4">
//             <img
//               src={location.image}
//               alt={location.city}
//               className="w-full h-full object-cover"
//             />
//           </div>
//           <h3 className="text-lg md:text-xl font-semibold mb-4">
//             {location.city}
//           </h3>

//           <div className="space-y-3 w-full">
//             <div className="flex items-start gap-2">
//               <MapPin className="w-5 h-5 text-gray-600 mt-1 flex-shrink-0" />
//               <div className="text-left">
//                 <p className="text-sm">{location.address}</p>
//                 <p className="text-sm">{location.location}</p>
//               </div>
//             </div>

//             <div className="flex items-start gap-2">
//               <Phone className="w-5 h-5 text-gray-600 flex-shrink-0 mt-1" />
//               <p className="text-sm text-left">{location.phone}</p>
//             </div>

//             <div className="flex items-start gap-2">
//               <Mail className="w-5 h-5 text-gray-600 flex-shrink-0 mt-1" />
//               <p className="text-sm text-left break-words">{location.email}</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );

//   return (
//     <div>
//       {/* Hero Section */}
//       <div className="relative w-full h-[300px] md:h-[500px]">
//         <img
//           src="./assests/branch/branchbg.png"
//           alt="Welcome"
//           className="w-full h-full object-cover"
//         />
//         <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-40">
//           <h1 className="text-white text-2xl md:text-4xl lg:text-6xl font-bold text-center px-4">
//             Explore Our Expanding Network of Branches
//           </h1>
//         </div>
//       </div>

//       {/* Contact Form Section */}
//       <div className="py-12 md:py-20 px-4 bg-white">
//         <div className="max-w-3xl mx-auto">
//           <h2 className="text-2xl md:text-3xl font-bold text-center mb-2">
//             Connect With Us
//           </h2>
//           <p className="text-center text-gray-600 mb-8">
//             Fill out the form below, and we'll get back to you as soon as possible
//           </p>

//           <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
//             {submitSuccess ? (
//               <div className="bg-green-50 border border-green-200 text-green-700 rounded-lg p-4 mb-6 text-center">
//                 Thank you for your message! We'll connect with you shortly.
//               </div>
//             ) : null}
            
//             <form onSubmit={handleSubmit} className="space-y-6">
//               <div>
//                 <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
//                   Full Name *
//                 </label>
//                 <input
//                   type="text"
//                   id="name"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   className={`w-full px-4 py-3 rounded-lg border ${
//                     errors.name ? "border-red-500" : "border-gray-300"
//                   } focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition`}
//                   placeholder="Your name"
//                 />
//                 {errors.name && (
//                   <p className="mt-1 text-sm text-red-600">{errors.name}</p>
//                 )}
//               </div>

//               <div>
//                 <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
//                   Email Address *
//                 </label>
//                 <input
//                   type="email"
//                   id="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   className={`w-full px-4 py-3 rounded-lg border ${
//                     errors.email ? "border-red-500" : "border-gray-300"
//                   } focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition`}
//                   placeholder="your.email@example.com"
//                 />
//                 {errors.email && (
//                   <p className="mt-1 text-sm text-red-600">{errors.email}</p>
//                 )}
//               </div>

//               <div>
//                 <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
//                   Phone Number *
//                 </label>
//                 <input
//                   type="tel"
//                   id="phone"
//                   name="phone"
//                   value={formData.phone}
//                   onChange={handleChange}
//                   className={`w-full px-4 py-3 rounded-lg border ${
//                     errors.phone ? "border-red-500" : "border-gray-300"
//                   } focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition`}
//                   placeholder="Your phone number"
//                 />
//                 {errors.phone && (
//                   <p className="mt-1 text-sm text-red-600">{errors.phone}</p>
//                 )}
//               </div>

//               <div>
//                 <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
//                   Message (Optional)
//                 </label>
//                 <textarea
//                   id="message"
//                   name="message"
//                   value={formData.message}
//                   onChange={handleChange}
//                   rows="4"
//                   className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
//                   placeholder="How can we help you?"
//                 ></textarea>
//               </div>

//               <button
//                 type="submit"
//                 disabled={isSubmitting}
//                 className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition duration-300 flex items-center justify-center"
//               >
//                 {isSubmitting ? (
//                   "Sending..."
//                 ) : (
//                   <>
//                     <Send className="w-5 h-5 mr-2" />
//                     Send Message via WhatsApp
//                   </>
//                 )}
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>

//       {/* India Locations Section */}
//       <div className="py-8 md:py-16 px-4">
//         <div className="max-w-7xl mx-auto">
//           <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12">
//             Strengthening Roots Across India
//           </h2>

//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
//             {indiaLocations.map((location, index) => (
//               <LocationCard key={index} location={location} />
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Overseas Locations Section */}
//       <div className="py-8 md:py-16 px-4 bg-gray-50">
//         <div className="max-w-7xl mx-auto">
//           <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12">
//             Your Trusted Partner Overseas
//           </h2>

//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto justify-items-center">
//             {overseasLocations.map((location, index) => (
//               <LocationCard key={index} location={location} />
//             ))}
//           </div>
//         </div>
//       </div>

      
//     </div>
//   );
// };

// export default Page;