// src/components/layout/Layout.jsx
import React from 'react';
import Footer from './main/Footer';
import Header from './main/Header';


export const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 ">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;