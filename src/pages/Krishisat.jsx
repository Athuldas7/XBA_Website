import React from "react";

const Krishisat = () => {
  return (
    <div className="min-h-screen text-white">
      {/* Hero Section with Video */}
      <div className="container px-4 py-16 mx-auto">
        <div className="flex flex-col items-center">
          {/* Main heading with gradient */}
          <div className="mb-8 text-center">
            <h1 className="mb-2 text-4xl font-bold md:text-6xl">
              <span className="text-white">Personalized </span>
              <span className="text-transparent bg-gradient-to-r from-blue-500 to-teal-400 bg-clip-text">
                Agri Broadcast
              </span>
            </h1>
            <p className="max-w-2xl mx-auto mt-4 text-xl text-gray-300">
              Smart farming solutions powered by satellite technology
            </p>
          </div>

          {/* Video Container */}
          <div className="w-full max-w-4xl mb-16 overflow-hidden border-2 shadow-xl rounded-3xl border-blue-500/10">
            <div className="relative pb-2">
              <video
                src="https://firebasestorage.googleapis.com/v0/b/xbosonai-caeb0.appspot.com/o/krishisat%20(1).webm?alt=media&token=aab377a8-9c8d-4925-85b4-40f51b14ee3c"
                autoPlay
                loop
                muted
                className="object-cover w-full h-full rounded-3xl"
              />
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-gray-900/80 to-transparent rounded-3xl"></div>
            </div>
          </div>
        </div>

        {/* Tagline */}
        <div className="mb-16 text-center">
          <h2 className="text-2xl font-bold md:text-4xl">
            Revolutionize{" "}
            <span className="text-transparent bg-gradient-to-r from-blue-500 to-teal-400 bg-clip-text">
              Farming
            </span>{" "}
            with{" "}
            <span className="text-transparent bg-gradient-to-r from-blue-500 to-teal-400 bg-clip-text">
              Satellite
            </span>
            -Powered Insights
          </h2>
        </div>

        {/* Features Section */}
        <div className="grid grid-cols-1 gap-8 mb-20 md:grid-cols-2">
          {/* Feature boxes in a grid layout with fixed heights */}
          {/* Each box has the same height and structure */}
          <div className="h-40 p-6 transition-all duration-300 border shadow-lg bg-gray-800/50 rounded-xl hover:bg-gray-800/80 border-blue-500/20">
            <div className="flex items-start h-full">
              <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 p-3 mr-4 rounded-full bg-blue-500/20">
                <span role="img" aria-label="Globe" className="text-2xl">
                  🌍
                </span>
              </div>
              <div>
                <h3 className="mb-2 text-xl font-semibold text-blue-400">Real-Time Monitoring</h3>
                <p className="text-gray-300">
                  Get a bird's-eye view of your fields with high-resolution satellite imagery updated regularly.
                </p>
              </div>
            </div>
          </div>
          
          <div className="h-40 p-6 transition-all duration-300 border shadow-lg bg-gray-800/50 rounded-xl hover:bg-gray-800/80 border-blue-500/20">
            <div className="flex items-start h-full">
              <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 p-3 mr-4 rounded-full bg-blue-500/20">
                <span role="img" aria-label="Plant" className="text-2xl">
                  🌾
                </span>
              </div>
              <div>
                <h3 className="mb-2 text-xl font-semibold text-blue-400">Maximize Yields</h3>
                <p className="text-gray-300">
                  Optimize your farming practices to boost productivity and increase your harvest.
                </p>
              </div>
            </div>
          </div>
          
          <div className="h-40 p-6 transition-all duration-300 border shadow-lg bg-gray-800/50 rounded-xl hover:bg-gray-800/80 border-blue-500/20">
            <div className="flex items-start h-full">
              <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 p-3 mr-4 rounded-full bg-blue-500/20">
                <span role="img" aria-label="Chart" className="text-2xl">
                  📈
                </span>
              </div>
              <div>
                <h3 className="mb-2 text-xl font-semibold text-blue-400">Weekly Updates</h3>
                <p className="text-gray-300">
                  Receive tailored advisory reports every week, designed specifically for your farm's needs.
                </p>
              </div>
            </div>
          </div>
          
          <div className="h-40 p-6 transition-all duration-300 border shadow-lg bg-gray-800/50 rounded-xl hover:bg-gray-800/80 border-blue-500/20">
            <div className="flex items-start h-full">
              <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 p-3 mr-4 rounded-full bg-blue-500/20">
                <span role="img" aria-label="Money" className="text-2xl">
                  💰
                </span>
              </div>
              <div>
                <h3 className="mb-2 text-xl font-semibold text-blue-400">Reduce Costs</h3>
                <p className="text-gray-300">
                  Minimize waste and improve resource efficiency for better profit margins.
                </p>
              </div>
            </div>
          </div>
          
          <div className="h-40 p-6 transition-all duration-300 border shadow-lg bg-gray-800/50 rounded-xl hover:bg-gray-800/80 border-blue-500/20">
            <div className="flex items-start h-full">
              <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 p-3 mr-4 rounded-full bg-blue-500/20">
                <span role="img" aria-label="Lightbulb" className="text-2xl">
                  💡
                </span>
              </div>
              <div>
                <h3 className="mb-2 text-xl font-semibold text-blue-400">Data-Driven Decisions</h3>
                <p className="text-gray-300">
                  Make informed choices with accurate, up-to-date information at your fingertips.
                </p>
              </div>
            </div>
          </div>
          
          <div className="h-40 p-6 transition-all duration-300 border shadow-lg bg-gray-800/50 rounded-xl hover:bg-gray-800/80 border-blue-500/20">
            <div className="flex items-start h-full">
              <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 p-3 mr-4 rounded-full bg-blue-500/20">
                <span role="img" aria-label="Bar chart" className="text-2xl">
                  📊
                </span>
              </div>
              <div>
                <h3 className="mb-2 text-xl font-semibold text-blue-400">Analyze Data</h3>
                <p className="text-gray-300">
                  Leverage insights for smarter, data-driven decisions that improve your farm's performance.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* How It Works Section */}
        <div className="mb-20">
          <h2 className="mb-10 text-3xl font-bold text-center">
            <span className="text-transparent bg-gradient-to-r from-blue-500 to-teal-400 bg-clip-text">
              How It Works
            </span>
          </h2>
          
          <div className="flex flex-col justify-between gap-6 md:flex-row">
            <div className="flex-1 h-full p-8 text-center border shadow-lg bg-gray-800/70 rounded-2xl border-blue-500/20">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-blue-500/20">
                <span role="img" aria-label="Notebook" className="text-2xl">
                  📝
                </span>
              </div>
              <h3 className="mb-3 text-xl font-semibold text-blue-400">1. Register</h3>
              <p className="text-gray-300">
                Sign up for Krishisat and share your farm details to get started.
              </p>
            </div>
            
            <div className="flex-1 h-full p-8 text-center border shadow-lg bg-gray-800/70 rounded-2xl border-blue-500/20">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-blue-500/20">
                <span role="img" aria-label="Phone" className="text-2xl">
                  📲
                </span>
              </div>
              <h3 className="mb-3 text-xl font-semibold text-blue-400">2. Receive Updates</h3>
              <p className="text-gray-300">
                Weekly advisory reports sent directly to your phone or device.
              </p>
            </div>
            
            <div className="flex-1 h-full p-8 text-center border shadow-lg bg-gray-800/70 rounded-2xl border-blue-500/20">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-blue-500/20">
                <span role="img" aria-label="Bar chart" className="text-2xl">
                  📊
                </span>
              </div>
              <h3 className="mb-3 text-xl font-semibold text-blue-400">3. Analyze Data</h3>
              <p className="text-gray-300">
                Leverage insights for smarter, data-driven farming decisions.
              </p>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mb-20">
          <div className="p-10 border shadow-xl bg-gradient-to-r from-blue-900/40 to-teal-900/40 rounded-2xl border-blue-500/30">
            <h2 className="mb-10 text-3xl font-bold text-center text-white">Our Impact</h2>
            
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              <div className="text-center">
                <div className="mb-2 text-5xl font-bold text-transparent bg-gradient-to-r from-blue-500 to-teal-400 bg-clip-text">110+</div>
                <p className="text-xl text-gray-300">Acres Covered</p>
              </div>
              
              <div className="text-center">
                <div className="mb-2 text-5xl font-bold text-transparent bg-gradient-to-r from-blue-500 to-teal-400 bg-clip-text">130+</div>
                <p className="text-xl text-gray-300">Farmers Served</p>
              </div>
              
              <div className="text-center">
                <div className="mb-2 text-5xl font-bold text-transparent bg-gradient-to-r from-blue-500 to-teal-400 bg-clip-text">1,560+</div>
                <p className="text-xl text-gray-300">Advisory Messages</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mb-10 text-center">
          <h2 className="mb-6 text-3xl font-bold md:text-4xl">
            Ready to Transform Your Farming?{" "}
          </h2>
          
          <p className="max-w-2xl mx-auto mb-8 text-xl text-gray-300">
            Unlock the full potential of satellite farming technology and start 
            receiving personalized agricultural insights today!
          </p>
          
          <a 
            href="https://krishisat.in" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block px-10 py-4 text-lg font-semibold text-white transition-all duration-300 transform rounded-full shadow-lg bg-gradient-to-r from-blue-600 to-teal-500 hover:from-blue-700 hover:to-teal-600 hover:scale-105"
          >
            Visit krishisat.in Now
          </a>
          
          <p className="mt-4 text-blue-400">
            <span className="text-xl">🌱</span> Grow smarter, harvest better
          </p>
        </div>
      </div>
    </div>
  );
};

export default Krishisat;