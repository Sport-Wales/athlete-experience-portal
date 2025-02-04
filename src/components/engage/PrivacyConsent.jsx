// src/components/engage/PrivacyConsent.jsx
import React, { useState } from 'react';
import { useAthleteContext } from '../../context/AthleteContext';

export default function PrivacyConsent({ onNext, onBack }) {
  const [consents, setConsents] = useState({
    dataProcessing: false,
    sharing: false,
    safeguarding: false
  });

  const handleConsentChange = (e) => {
    const { name, checked } = e.target;
    setConsents(prev => ({
      ...prev,
      [name]: checked
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.values(consents).every(consent => consent)) {
      onNext();
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="sw-heading-secondary">Privacy & Consent</h2>
        <p className="text-gray-600">
          Before sharing your story, please review and consent to the following.
        </p>
      </div>

      {/* GDPR Notice */}
      <div className="sw-notice">
        <h3 className="font-bold mb-2">How We Use Your Information</h3>
        <p>
          Your story will be shared with the Athlete Panel and relevant Sport Wales
          staff to help improve athlete experiences. We may use anonymized insights
          for research and development purposes.
        </p>
      </div>

      {/* Safeguarding Information */}
      <div className="sw-card bg-[--color-sw-blue-light] bg-opacity-10">
        <h3 className="font-bold mb-2">Safeguarding</h3>
        <p className="mb-4">
          If your story includes any safeguarding concerns, we are obligated to
          follow proper reporting procedures. Your safety is our priority.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-4">
          <label className="flex items-start space-x-3">
            <input
              type="checkbox"
              name="dataProcessing"
              checked={consents.dataProcessing}
              onChange={handleConsentChange}
              className="sw-checkbox mt-1"
            />
            <span>
              I understand how my information will be used and processed
            </span>
          </label>

          <label className="flex items-start space-x-3">
            <input
              type="checkbox"
              name="sharing"
              checked={consents.sharing}
              onChange={handleConsentChange}
              className="sw-checkbox mt-1"
            />
            <span>
              I consent to my story being shared with the Athlete Panel and Sport Wales
            </span>
          </label>

          <label className="flex items-start space-x-3">
            <input
              type="checkbox"
              name="safeguarding"
              checked={consents.safeguarding}
              onChange={handleConsentChange}
              className="sw-checkbox mt-1"
            />
            <span>
              I understand the safeguarding procedures and reporting obligations
            </span>
          </label>
        </div>

        <div className="flex justify-between">
          <button
            type="button"
            onClick={onBack}
            className="sw-button bg-gray-100 hover:bg-gray-200"
          >
            Back
          </button>
          <button
            type="submit"
            disabled={!Object.values(consents).every(Boolean)}
            className={`sw-button sw-button-primary ${
              !Object.values(consents).every(Boolean) ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          >
            Continue
          </button>
        </div>
      </form>
    </div>
  );
}