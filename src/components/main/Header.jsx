//  src/components/main/Header.jsx

import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-[--color-sw-blue] text-white py-2">
      <div className=" px-2 flex items-start justify-between">
        <div className="flex relative left-0 items-start gap-8">
          <Link to="/en">
            <img 
              src="/sport_wales_logo_white.png" 
              alt="Sport Wales" 
              className="h-10"
            />
          </Link>
          <div className="h-6 w-px bg-white/20"></div>
          <span className="text-lg font-semibold">
            Athlete Experience Portal
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;