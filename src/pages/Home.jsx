import React from 'react';

const HomePage = () => {
  return (
    <div className="flex flex-col items-center h-screen pt-10">
      {/* Main container for the globe */}
      <div className="flex justify-center items-center w-[90%] h-[70vh] mt-4">
        <div
          className="w-[100%] h-[100%] bg-[#0d1b2a] border-2 border-[#39baff] rounded-[50px] shadow-[0_0_20px_5px_#39baff] relative space-bg"
          style={{
            backgroundImage: `url('/assets/spacebg.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        >
          {/* Globe Image */}
          <img
            src="/assets/fullglobe.png"
            alt="Globe"
            className="absolute"
            style={{
              width: '1200px',
              height: 'auto',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              maxWidth: '100%',
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
