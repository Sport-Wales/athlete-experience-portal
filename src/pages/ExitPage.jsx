// src/pages/ExitPage.jsx
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAthleteContext } from '../context/AthleteContext';

export default function ExitPage() {
  const { athleteData } = useAthleteContext();

  // Simulate email notification
  useEffect(() => {
    console.log('Story submitted:', athleteData);
  }, []);

  return (
    <div className="max-w-2xl mx-auto text-center">
      {/* Success Animation */}
      <div className="mb-8">
        <div className="w-24 h-24 rounded-full bg-[--color-sw-green] mx-auto flex items-center justify-center">
          <svg 
            className="w-12 h-12 text-white" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M5 13l4 4L19 7" 
            />
          </svg>
        </div>
      </div>

      {/* Confirmation Message */}
      <div className="sw-card">
        <h1 className="sw-heading-primary text-[--color-sw-green] mb-4">
          Thank You for Sharing Your Story!
        </h1>
        
        <p className="text-lg mb-6">
          Your voice matters and will help shape the future of Welsh sport.
        </p>

        {/* Next Steps */}
        <div className="sw-notice mb-6">
          <h2 className="font-bold mb-2">What happens next?</h2>
          <ul className="text-left space-y-2">
            <li>• Your story will be reviewed by the Athlete Panel within 5 working days</li>
            {athleteData.needsContact && (
              <li>• A panel member will contact you to discuss your story further</li>
            )}
            <li>• Your insights will be used to improve athlete experiences across Wales</li>
          </ul>
        </div>

        {/* Support Resources */}
        <div className="text-left mb-8">
          <h2 className="font-bold mb-2">Support Resources</h2>
          <p>
            If you need immediate support or would like to discuss any concerns,
            please contact our athlete support team:
          </p>
          <div className="mt-2">
            <div>Email: support@sportwales.org.uk</div>
            <div>Phone: 0300 300 3111</div>
          </div>
        </div>

        {/* Return Link */}
        <Link 
          to="/en/enter" 
          className="sw-button sw-button-primary inline-block"
        >
          Return to Homepage
        </Link>
      </div>
    </div>
  );
}