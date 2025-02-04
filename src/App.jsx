// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';


function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <main>
          <Routes>
            {/* Redirect root to English version */}
            <Route path="/" element={<Navigate to="/en" replace />} />
            
            {/* English route */}
            {/* <Route path="/en" element={<Component />} /> */}
            
            {/* Welsh route */}
            {/* <Route path="/cy" element={<Component />} /> */}
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;