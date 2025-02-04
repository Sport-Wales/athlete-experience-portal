// src/pages/EnterPage.jsx
import React from 'react';
import AccessCodeInput from '../components/shared/AccessCodeInput';

export default function EnterPage() {
  return (
    <div className="space-y-8">
      {/* Welcome Header */}
      <header className="text-center mb-12">
        <h1 className="sw-heading-primary text-[--color-sw-blue] mb-4">
          Welcome to the Athlete's Voice
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          A space for all athletes to share their experiences and make a positive impact
          on Welsh sport.
        </p>
      </header>

      {/* Access Code Section */}
      <AccessCodeInput />
    </div>
  );
}