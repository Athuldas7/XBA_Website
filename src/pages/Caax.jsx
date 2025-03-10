import React, { useState, useRef } from "react";
import emailjs from "emailjs-com";

const CaaxPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const form = useRef();

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          alert("Form submitted successfully!");
          toggleModal();
        },
        (error) => {
          alert("Failed to send form. Please try again.");
        }
      );
  };
  
  // Gradient text style for reuse
  const gradientTextStyle = {
    background: "linear-gradient(88.52deg, #1263AF 29.11%, #06CCBC 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
  };

  // Button gradient style
  const gradientBgStyle = {
    background: "linear-gradient(88.52deg, #1263AF 29.11%, #06CCBC 100%)",
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 py-12 ">
      {/* Hero Section with Animated Entry */}
      <div className="w-full mx-auto max-w-7xl">
        <div className="relative flex flex-col items-center justify-between gap-12 lg:flex-row">
          {/* Video Container with Enhanced Styling */}
          <div className="relative w-full lg:w-3/5 h-[500px] rounded-3xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-all duration-700">
            <div className="absolute inset-0 z-10 opacity-60 rounded-3xl"></div>
            <div className="absolute inset-0 border border-[#1263AF]/30 rounded-3xl z-20"></div>
            <video
              src="https://firebasestorage.googleapis.com/v0/b/xbosonai-caeb0.appspot.com/o/caaxv.webm?alt=media&token=4a4d7482-9ae3-4a55-85d6-2609ec181010"
              autoPlay
              loop
              muted
              className="object-cover w-full h-full rounded-3xl"
            />
          </div>

          {/* Text Content with Improved Layout */}
          <div className="z-10 flex flex-col items-center w-full space-y-8 lg:w-2/5 lg:items-start">
            <img
              src="/assets/caaxl.svg"
              alt="CAAX Logo"
              className="w-52 drop-shadow-lg animate-pulse" 
            />
            
            <h1 className="text-5xl font-bold tracking-tight text-white">
              Experience the{" "}
              <span style={gradientTextStyle} className="font-extrabold">
                Digital Growing
              </span>{" "}
              Revolution
            </h1>
            
            <p className="text-lg leading-relaxed text-gray-300">
              Discover how our cutting-edge personal food computer is transforming indoor cultivation with patented technology.
            </p>

            <button
              className="relative px-10 py-4 overflow-hidden text-xl font-bold transition-all duration-500 bg-white rounded-full shadow-lg hover:shadow-xl group"
              onClick={toggleModal}
            >
              <span className="relative z-10" style={gradientTextStyle}>
                Own it Now
              </span>
              <div className="absolute inset-0 w-0 transition-all duration-700 group-hover:w-full"></div>
            </button>
          </div>
        </div>
      </div>

      {/* Introduction Section with Better Typography */}
      <div className="w-full px-4 mx-auto mt-24 text-center max-w-7xl">
        <h2 className="mb-6 text-4xl font-bold leading-tight text-white md:text-5xl">
          Introducing{" "}
          <span style={gradientTextStyle}>CAAX</span>: The{" "}
          <span style={gradientTextStyle}>Personal Food Computer</span>{" "}
          Revolutionizing Indoor Cultivation
        </h2>
        
        <p className="max-w-4xl mx-auto text-xl leading-relaxed text-gray-300">
          Experience the future of sustainable farming with{" "}
          <span style={gradientTextStyle} className="font-semibold">CAAX</span>{" "}
          — grow fresh, delicious greens at home using minimal resources. With patented 
          technology and groundbreaking efficiency, CAAX redefines indoor agriculture.
        </p>
      </div>

      {/* Features Section with Cards */}
      <div className="w-full px-4 mx-auto mt-20 max-w-7xl">
        <div className="grid gap-12 md:grid-cols-2">
          {/* Left Column */}
          <div className="bg-[#0A1629]/80 rounded-3xl p-8 backdrop-blur-sm border border-[#1263AF]/20 shadow-xl hover:shadow-2xl transition-all duration-500">
            <h3 className="flex items-center mb-8 text-3xl font-bold text-white">
              <span className="w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-r from-[#1263AF] to-[#06CCBC] mr-4">🚀</span>
              Why Choose CAAX?
            </h3>
            
            <ul className="space-y-8">
              <li className="flex">
                <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-[#1263AF]/20 flex items-center justify-center text-2xl">
                  🚀
                </div>
                <div className="ml-4">
                  <h4 className="mb-2 text-xl font-bold text-white">Patented Technology</h4>
                  <p className="text-gray-300">
                    Advanced algorithms for unmatched resource optimization and growth management.
                  </p>
                </div>
              </li>
              
              <li className="flex">
                <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-[#1263AF]/20 flex items-center justify-center text-2xl">
                  💧
                </div>
                <div className="ml-4">
                  <h4 className="mb-2 text-xl font-bold text-white">Water Conservation Champion</h4>
                  <p className="text-gray-300">
                    Grow 110g of lettuce with just 230ml of water — 90% less than traditional methods!
                  </p>
                </div>
              </li>
              
              <li className="flex">
                <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-[#1263AF]/20 flex items-center justify-center text-2xl">
                  ⚡
                </div>
                <div className="ml-4">
                  <h4 className="mb-2 text-xl font-bold text-white">Energy Efficiency Master</h4>
                  <p className="text-gray-300">
                    Cultivate greens with a mere 0.03 KWh/month — ultra-low energy usage.
                  </p>
                </div>
              </li>
            </ul>
          </div>
          
          {/* Right Column */}
          <div className="bg-[#0A1629]/80 rounded-3xl p-8 backdrop-blur-sm border border-[#06CCBC]/20 shadow-xl hover:shadow-2xl transition-all duration-500">
            <h3 className="flex items-center mb-8 text-3xl font-bold text-white">
              <span className="w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-r from-[#1263AF] to-[#06CCBC] mr-4">💪</span>
              What This Means for You
            </h3>
            
            <ul className="space-y-8">
              <li className="flex">
                <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-[#06CCBC]/20 flex items-center justify-center text-2xl">
                  🌱
                </div>
                <div className="ml-4">
                  <h4 className="mb-2 text-xl font-bold text-white">Grow More Food</h4>
                  <p className="text-gray-300">
                    Produce more using less — maximize yield with minimal resources and space.
                  </p>
                </div>
              </li>
              
              <li className="flex">
                <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-[#06CCBC]/20 flex items-center justify-center text-2xl">
                  💸
                </div>
                <div className="ml-4">
                  <h4 className="mb-2 text-xl font-bold text-white">Reduce Costs</h4>
                  <p className="text-gray-300">
                    Cut down on water and electricity expenses without sacrificing crop quality.
                  </p>
                </div>
              </li>
              
              <li className="flex">
                <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-[#06CCBC]/20 flex items-center justify-center text-2xl">
                  🔒
                </div>
                <div className="ml-4">
                  <h4 className="mb-2 text-xl font-bold text-white">Secure Supply</h4>
                  <p className="text-gray-300">
                    Maintain a steady food supply, even in uncertain times and changing seasons.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Product Visualization */}
      <div className="relative w-full mx-auto">
        <div className="absolute inset-0 z-10 pointer-events-none"></div>
        <img
          src="/assets/desc.svg"
          alt="CAAX Product Visualization"
          className="relative z-0 w-full max-w-5xl mx-auto"
        />
      </div>
      
      {/* Call to Action */}
      {/* <div className="w-full max-w-3xl mx-auto mt-12 mb-20 text-center">
        <h3 className="mb-6 text-3xl font-bold text-white">Ready to Transform Your Indoor Growing Experience?</h3>
        <button
          className="px-12 py-5 text-xl font-bold rounded-full shadow-xl"
          style={gradientBgStyle}
          onClick={toggleModal}
        >
          <span className="text-white">Get Your CAAX Today</span>
        </button>
      </div> */}

      {/* Modal with Improved Design */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div 
            className="w-full max-w-lg bg-gradient-to-b from-[#0A1629] to-[#050B15] rounded-3xl shadow-2xl border border-[#1263AF]/30 overflow-hidden animate-fade-in"
          >
            {/* Modal Header */}
            <div className="p-6 border-b border-[#1263AF]/20">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-white">Connect With Us</h2>
                <button 
                  onClick={toggleModal}
                  className="text-gray-400 transition-colors hover:text-white"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
            
            {/* Form Content */}
            <div className="p-6">
              <form ref={form} onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-300">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    className="w-full px-4 py-3 bg-[#0A1629]/70 border border-[#1263AF]/30 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#06CCBC]/50 transition-all"
                    placeholder="Enter your name"
                    required
                  />
                </div>

                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-300">
                    Phone Number
                  </label>
                  <input
                    type="text"
                    name="number"
                    className="w-full px-4 py-3 bg-[#0A1629]/70 border border-[#1263AF]/30 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#06CCBC]/50 transition-all"
                    placeholder="Enter your phone number"
                    required
                  />
                </div>

                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-300">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    className="w-full px-4 py-3 bg-[#0A1629]/70 border border-[#1263AF]/30 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#06CCBC]/50 transition-all"
                    placeholder="Enter your email"
                    required
                  />
                </div>

                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-300">
                    Message
                  </label>
                  <textarea
                    name="message"
                    className="w-full px-4 py-3 bg-[#0A1629]/70 border border-[#1263AF]/30 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#06CCBC]/50 transition-all min-h-[120px]"
                    placeholder="How can we help you with CAAX?"
                    required
                  ></textarea>
                </div>

                <div className="flex justify-between pt-4">
                  <button
                    type="button"
                    className="px-6 py-3 text-white transition-colors bg-gray-800 hover:bg-gray-700 rounded-xl"
                    onClick={toggleModal}
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-3 text-white transition-all rounded-xl hover:shadow-lg"
                    style={gradientBgStyle}
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CaaxPage;