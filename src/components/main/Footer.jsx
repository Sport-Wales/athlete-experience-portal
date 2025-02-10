// src/components/main/Footer.jsx

import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[--color-sw-blue] text-white py-4">
      <div className="sw-container">
        <div className="text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Sport Wales. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;