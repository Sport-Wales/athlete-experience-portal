// src/components/shared/AccessCodeInput.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function AccessCodeInput() {
    const [code, setCode] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // For prototype, accept any code
      if (code.trim().length > 0) {
        navigate('/en/panel'); // Changed from '/en/engage' to '/en/panel'
      } else {
        setError('Please enter the access code provided to you');
      }
    };

  return (
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
  );
}