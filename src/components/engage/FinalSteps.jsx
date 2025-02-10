// File location: src/components/engage/FinalSteps.jsx

import React, { useState } from 'react';
import { useAthleteContext } from '../../context/AthleteContext';

export default function FinalSteps({ onSubmit, onBack }) {
  const { athleteData, updateAthleteData } = useAthleteContext();
  const [preferences, setPreferences] = useState({
    isAnonymous: false,
    needsContact: false,
    isSensitive: false
  });

  // Helper function to format story preview
  const renderStoryPreview = () => {
    const { story } = athleteData;
    
    if (!story) return null;

    if (story.type === 'written-free') {
      return (
        <div className="prose max-w-none">
          <p>{story.content}</p>
        </div>
      );
    }

    if (story.type === 'written-guided') {
      return (
        <div className="space-y-4">
          {Object.entries(story.content).map(([key, value]) => 
            value && (
              <div key={key}>
                <h4 className="font-medium text-[--color-sw-blue]">
                  {key.charAt(0).toUpperCase() + key.slice(1)}
                </h4>
                <p>{value}</p>
              </div>
            )
          )}
        </div>
      );
    }

    return (
      <div className="flex items-center space-x-3 text-gray-600">
        <span className="text-2xl">
          {story.type === 'voice' ? '🎤' : '🎥'}
        </span>
        <span>{story.fileName}</span>
      </div>
    );
  };

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
    <div className="max-w-4xl mx-auto space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-[--color-sw-blue] mb-3">
          Review Your Story
        </h2>
        <p className="text-gray-600">
          Please review your story and choose your sharing preferences before submitting.
        </p>
      </div>

      {/* Enlarged Story Preview Section */}
      <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
        <h3 className="font-bold text-lg mb-4 text-[--color-sw-blue] flex items-center gap-2">
          <span>Story Preview</span>
          <span className="text-sm font-normal text-gray-500">
            (Scroll to view full content)
          </span>
        </h3>
        <div className="bg-white rounded-lg p-6 shadow-sm min-h-[300px] max-h-[400px] overflow-y-auto">
          {renderStoryPreview()}
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Compact Preferences List */}
        <div className="sw-card space-y-2">
          <h3 className="font-bold text-lg mb-4 text-[--color-sw-blue]">
            Sharing Preferences
          </h3>
          
          <div className="space-y-3">
            {/* Anonymous Option */}
            <label className="flex items-center space-x-3 p-2 hover:bg-gray-50 rounded cursor-pointer">
              <input
                type="checkbox"
                name="isAnonymous"
                checked={preferences.isAnonymous}
                onChange={handleChange}
                className="sw-checkbox"
              />
              <div className="flex-1">
                <span className="font-medium">Stay Anonymous</span>
                <p className="text-sm text-gray-600 mt-1">
                  Your story will be shared without your name or identifying details
                </p>
              </div>
            </label>

            {/* Contact Option */}
            <label className="flex items-center space-x-3 p-2 hover:bg-gray-50 rounded cursor-pointer">
              <input
                type="checkbox"
                name="needsContact"
                checked={preferences.needsContact}
                onChange={handleChange}
                className="sw-checkbox"
              />
              <div className="flex-1">
                <span className="font-medium">Request Panel Contact</span>
                <p className="text-sm text-gray-600 mt-1">
                  The Athlete Panel can contact you to discuss your story further
                </p>
              </div>
            </label>

            {/* Sensitive Content Warning */}
            <label className="flex items-center space-x-3 p-2 bg-red-50 rounded cursor-pointer">
              <input
                type="checkbox"
                name="isSensitive"
                checked={preferences.isSensitive}
                onChange={handleChange}
                className="sw-checkbox"
              />
              <div className="flex-1">
                <span className="font-medium text-[--color-sw-red]">
                  Mark as Sensitive Content
                </span>
                <p className="text-sm text-gray-700 mt-1">
                  Content that requires careful handling or raises safeguarding concerns
                </p>
              </div>
            </label>
          </div>
        </div>

        {/* Submission Notice */}
        <div className="sw-notice bg-opacity-10 text-md py-4">
          <p>
            Your story will be reviewed by the Athlete Panel and relevant Sport Wales
            staff. We'll handle your experiences with care and respect, using them to
            improve athlete support across Wales.
          </p>
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between pt-4">
          <button
            type="button"
            onClick={onBack}
            className="sw-button bg-gray-100 hover:bg-gray-200"
          >
            Back to Edit
          </button>
          <button 
            type="submit" 
            className="sw-button sw-button-primary px-8 py-3"
          >
            Submit Story
          </button>
        </div>
      </form>
    </div>
  );
}