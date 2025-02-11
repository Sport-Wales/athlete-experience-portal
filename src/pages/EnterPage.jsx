// src/pages/EnterPage.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';



export default function EnterPage() {

  const [code, setCode] = useState('');
      const [error, setError] = useState('');
      const [isLoading, setIsLoading] = useState(false);
      const navigate = useNavigate();
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setError('');
  
        // For prototype, accept any code
        if (code.trim().length > 0) {
          // Simulate a brief loading state
          await new Promise(resolve => setTimeout(resolve, 600));
          navigate('/en/panel');
        } else {
          setError('Please enter the access code provided to you');
        }
        setIsLoading(false);
      };



  return (
    <div className="mt-44 space-y-2 items-center justify-center">
        {/* Welcome Header */}
        <header className="text-center ">
          <h1 className="sw-heading-primary text-[--color-sw-blue] mb-4">
            Welcome to the Athlete's Voice
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A space for all athletes to share their experiences and make a positive impact
            on Welsh sport.
          </p>
        </header>

        {/* Access Code Section */}
        <div className="sw-card max-w-md mx-auto">
        <form onSubmit={handleSubmit}>
          <label className="sw-label block mb-2">
            Enter your access code
          </label>
          <input
            type="text"
            className="sw-input w-full mb-4"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            placeholder="Enter access code"
          />
          {error && (
            <div className="sw-notice text-[--color-sw-red] mb-4">
              {error}
            </div>
          )}
          <button type="submit" className="sw-button sw-button-primary w-full">
            Continue
          </button>
        </form>
      </div>
    </div>
  );
}