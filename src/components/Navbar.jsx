import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState('/Home');

  // Update active link when location changes
  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location.pathname]);

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <nav
      className="sticky top-0 z-50 flex flex-col items-center justify-between px-4 py-4 sm:flex-row sm:px-8 md:px-12 lg:px-16 backdrop-blur-lg"
      style={{ backdropFilter: 'blur(10px)' }}
    >
      <div className="flex items-center mb-4 sm:mb-0">
        {/* Wrap the logo inside the Link component */}
        <Link to="/" onClick={() => handleLinkClick('/')}>
          <img src="/assets/logo.png" alt="XBA Logo" className="h-14 sm:h-10 md:h-12 lg:h-14" />
        </Link>
      </div>

      <ul className="flex justify-start mr-auto space-x-2 sm:space-x-4 md:space-x-6 md:ml-6 lg:space-x-8">
        <li>
          <Link
            to="/"
            onClick={() => handleLinkClick('/')}
            className={`px-3 sm:px-4 md:px-6 py-2 text-sm sm:text-lg md:text-xl font-medium rounded-full transition-all border ${
              activeLink === '/'
                ? 'bg-[#E3E4E5] text-black border-[#66a4a2] shadow-[0_0_15px_#00FFF7]'
                : 'border-[#66a4a2] text-white shadow-[0_0_10px_#00FFF7] hover:bg-[#E3E4E5] hover:text-black'
            }`}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/caax"
            onClick={() => handleLinkClick('/caax')}
            className={`px-3 sm:px-4 md:px-6 py-2 text-sm sm:text-lg md:text-xl font-medium rounded-full transition-all border ${
              activeLink === '/caax'
                ? 'bg-[#E3E4E5] text-black border-[#66a4a2] shadow-[0_0_15px_#00FFF7]'
                : 'border-[#66a4a2] text-white shadow-[0_0_10px_#00FFF7] hover:bg-[#E3E4E5] hover:text-black'
            }`}
          >
            CAAX
          </Link>
        </li>
        <li>
          <Link
            to="/krishisat"
            onClick={() => handleLinkClick('/krishisat')}
            className={`px-3 sm:px-4 md:px-6 py-2 text-sm sm:text-lg md:text-xl font-medium rounded-full transition-all border ${
              activeLink === '/krishisat'
                ? 'bg-[#E3E4E5] text-black border-[#66a4a2] shadow-[0_0_15px_#00FFF7]'
                : 'border-[#66a4a2] text-white shadow-[0_0_10px_#00FFF7] hover:bg-[#E3E4E5] hover:text-black'
            }`}
          >
            KrishiSat
          </Link>
        </li>
        <li>
          <Link
            to="/enablers"
            onClick={() => handleLinkClick('/enablers')}
            className={`px-3 sm:px-4 md:px-6 py-2 text-sm sm:text-lg md:text-xl font-medium rounded-full transition-all border ${
              activeLink === '/enablers'
                ? 'bg-[#E3E4E5] text-black border-[#66a4a2] shadow-[0_0_15px_#00FFF7]'
                : 'border-[#66a4a2] text-white shadow-[0_0_10px_#00FFF7] hover:bg-[#E3E4E5] hover:text-black'
            }`}
          >
            Enablers
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
