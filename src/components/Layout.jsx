// src/components/layout/Layout.jsx
import React from 'react';
import Footer from './main/Footer';

const Layout = ({ children }) => {
  return (
    <>
      <header className="sw-header">
        <div className="sw-container">
          <img 
            src="/sport_wales_logo_white.png" 
            alt="Sport Wales" 
            className="h-12"
          />
        </div>
      </header>

      {children}

      <Footer />
    </>
  );
};

export default Layout;