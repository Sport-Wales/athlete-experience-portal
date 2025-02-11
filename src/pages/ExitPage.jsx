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
      <h2 className="font-bold text-lg text-[--color-sw-blue] mb-3">Support Resources</h2>
      
      <div className="space-y-3">
        <div>
            <a 
            href="https://thecpsu.org.uk/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-[--color-sw-blue] hover:text-[--color-sw-blue] hover:underline"
          >
            Support for Athletes - Sport Wales
          </a>
          <p className="text-sm text-gray-600">If you want to be an athlete there are lots of ways you can get support.</p>
        </div>

        <div>
          <a 
            href="https://thecpsu.org.uk/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-[--color-sw-blue] hover:text-[--color-sw-blue] hover:underline"
          >
            British Elite Athletes Association
          </a>
          <p className="text-sm text-gray-600">Support, representation and community for Olympic and Paralympic athletes.</p>
        </div>

        <div>
          <a 
            href="https://thecpsu.org.uk/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-[--color-sw-blue] hover:text-[--color-sw-blue] hover:underline"
          >
            NSPCC Child Protection in Sport Unit
          </a>
          <p className="text-sm text-gray-600">The NSPCC's Child Protection in Sport Unit works to safeguard children in sport.</p>
        </div>

        <p className="text-sm text-gray-600 mt-4">
          For safeguarding concerns, please contact your sport's National Governing Body (NGB) Safeguarding Lead.
        </p>
      </div>


            {/* Safeguarding Notice */}
            <div className=" mt-8 ">
              <h3 className="font-bold text-[--color-sw-blue] mb-2">
                Safeguarding Support
              </h3>
              <p className="text-gray-700">
                If you have any safeguarding concerns, please contact your sport's National Governing Body (NGB) 
                Safeguarding Lead. They are trained to provide appropriate support and guidance in relation to safeguarding in sport.
              </p>
            </div>


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
  );
}