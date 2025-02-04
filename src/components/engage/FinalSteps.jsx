// src/components/engage/FinalSteps.jsx
import React, { useState } from 'react';
import { useAthleteContext } from '../../context/AthleteContext';

export default function FinalSteps({ onSubmit, onBack }) {
  const { athleteData, updateAthleteData } = useAthleteContext();
  const [preferences, setPreferences] = useState({
    isAnonymous: false,
    needsContact: false,
    isSensitive: false
  });

  const handleChange = (e) => {
    const { name, checked } = e.target;
    setPreferences(prev => ({
      ...prev,
      [name]: checked
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateAthleteData(preferences);
    onSubmit();
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="sw-heading-secondary">Final Steps</h2>
        <p className="text-gray-600">
          Almost done! Let us know how you'd like your story to be handled.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-4">
          <label className="flex items-center space-x-3">
            <input
              type="checkbox"
              name="isAnonymous"
              checked={preferences.isAnonymous}
              onChange={handleChange}
              className="sw-checkbox"
            />
            <span>I'd like to remain anonymous</span>
          </label>

          <label className="flex items-center space-x-3">
            <input
              type="checkbox"
              name="needsContact"
              checked={preferences.needsContact}
              onChange={handleChange}
              className="sw-checkbox"
            />
            <span>I'd like the Athlete Panel to contact me about my story</span>
          </label>

          <label className="flex items-center space-x-3">
            <input
              type="checkbox"
              name="isSensitive"
              checked={preferences.isSensitive}
              onChange={handleChange}
              className="sw-checkbox"
            />
            <span>This story contains sensitive information</span>
          </label>
        </div>

        <div className="sw-notice">
          <p className="text-sm">
            Remember: Your story will be reviewed by the Athlete Panel and relevant
            Sport Wales staff. We'll handle it with care and respect.
          </p>
        </div>

        <div className="flex justify-between">
          <button
            type="button"
            onClick={onBack}
            className="sw-button bg-gray-100 hover:bg-gray-200"
          >
            Back
          </button>
          <button type="submit" className="sw-button sw-button-primary">
            Submit Story
          </button>
        </div>
      </form>
    </div>
  );
}