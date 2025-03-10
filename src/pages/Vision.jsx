import React from 'react';

const Vision = () => {
  return (
    <div className="flex items-center justify-center px-4 py-10 mx-auto">
      {/* Container for Vision and Mission */}
      <div className="w-full max-w-6xl p-12 rounded-[50px] shadow-[0_0_20px_5px_#39baff] border-2 border-[#39baff]">
        <div className="flex flex-col space-y-12 md:flex-row md:space-y-0 md:space-x-12">
          {/* Vision Section */}
          <div className="flex-1">
            <h1
              className="mb-8 text-4xl font-extrabold text-center md:text-left"
              style={{
                background: 'linear-gradient(90deg, #1263AF 0%, #06CCBC 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
              
            >
              Vision
            </h1>
            <p className="text-xl leading-relaxed text-center text-gray-200 md:text-left">
              We believe in a future where agriculture ensures global food security with sustainable, pesticide-free produce. Empowering communities to grow their own food fosters self-reliance against food insecurity.
            </p>
          </div>

          {/* Mission Section */}
          <div className="flex-1">
            <h1
              className="mb-8 text-4xl font-extrabold text-center md:text-left"
              style={{
                background: 'linear-gradient(88.52deg, #1263AF 29.11%, #06CCBC 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Mission
            </h1>
            <p className="text-xl leading-relaxed text-center text-gray-200 md:text-left">
              Our mission is to create a sustainable, decentralized, and accessible food system. We are committed to providing fresh and healthy agri produce grown without pesticides or chemical fertilizers. We believe in using innovative techniques that optimize water consumption from the actual biomass of plants, making agriculture climate-resilient.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vision;
