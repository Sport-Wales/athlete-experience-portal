// src/components/main/Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[--color-sw-blue] text-white py-8 mt-auto">
      <div className="sw-container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-bold mb-4">Contact Us</h3>
            <p>Email: support@sportwales.org.uk</p>
            <p>Phone: 0300 300 3111</p>
          </div>
          
          <div>
            <h3 className="font-bold mb-4">Support Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">Safeguarding</a></li>
              <li><a href="#" className="hover:underline">Privacy Policy</a></li>
              <li><a href="#" className="hover:underline">Terms of Use</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:opacity-80">Twitter</a>
              <a href="#" className="hover:opacity-80">Facebook</a>
              <a href="#" className="hover:opacity-80">Instagram</a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-white/20 text-center">
          <p>&copy; {new Date().getFullYear()} Sport Wales. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;