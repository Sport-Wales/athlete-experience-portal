// src/components/engage/StorySubmission.jsx
import React, { useState } from 'react';
import { useAthleteContext } from '../../context/AthleteContext';

const submissionTypes = [
  { id: 'written', label: 'Written Story', icon: '📝' },
  { id: 'voice', label: 'Voice Recording', icon: '🎤' },
  { id: 'video', label: 'Video Message', icon: '🎥' }
];

const storyPrompts = [
  "What challenges have you faced in your sport?",
  "How has your journey in sport influenced you?",
  "What positive changes would you like to see?",
  "What support has made the biggest difference?",
];

export default function StorySubmission({ onNext, onBack }) {
  const { athleteData, updateAthleteData } = useAthleteContext();
  const [submissionType, setSubmissionType] = useState('written');
  const [story, setStory] = useState('');
  const [file, setFile] = useState(null);

  const handleSubmissionTypeChange = (type) => {
    setSubmissionType(type);
    setFile(null);
    setStory('');
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Add file type validation
      const isValid = submissionType === 'voice' 
        ? file.type.startsWith('audio/')
        : file.type.startsWith('video/');
        
      if (isValid) {
        setFile(file);
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateAthleteData({
      submissionType,
      story: submissionType === 'written' ? story : file?.name || '',
    });
    onNext();
  };
  

  const isSubmitDisabled = submissionType === 'written' ? !story : !file;



  return (
    <div className="space-y-6">
      <div>
        <h2 className="sw-heading-secondary">Share Your Story</h2>
        <p className="text-gray-600">
          Choose how you'd like to share your experience with us.
        </p>
      </div>

      {/* Submission Type Selection */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        {submissionTypes.map(type => (
          <button
            key={type.id}
            onClick={() => handleSubmissionTypeChange(type.id)}
            className={`p-4 rounded-lg border-2 transition-all ${
              submissionType === type.id
                ? 'border-[--color-sw-blue] bg-[--color-sw-blue-light] bg-opacity-10'
                : 'border-gray-200 hover:border-[--color-sw-blue]'
            }`}
          >
            <div className="text-2xl mb-2">{type.icon}</div>
            <div className="font-bold">{type.label}</div>
          </button>
        ))}
      </div>

      {/* Story Prompts */}
      <div className="sw-card bg-[--color-sw-yellow-light] bg-opacity-20">
        <h3 className="font-bold mb-3">Story Prompts</h3>
        <ul className="list-disc pl-5 space-y-2">
          {storyPrompts.map((prompt, index) => (
            <li key={index}>{prompt}</li>
          ))}
        </ul>
      </div>

      {/* Submission Form */}
      <form onSubmit={handleSubmit} className="space-y-6">
        {submissionType === 'written' ? (
          <div>
            <label className="sw-label block mb-2">Your Story</label>
            <textarea
              value={story}
              onChange={(e) => setStory(e.target.value)}
              className="sw-input w-full h-48 resize-none"
              placeholder="Share your experience here..."
            />
          </div>
        ) : (
          <div>
            <label className="sw-label block mb-2">
              Upload your {submissionType === 'voice' ? 'recording' : 'video'}
            </label>
            <input
                type="file"
                accept={submissionType === 'voice' ? 
                    'audio/mp3,audio/wav,audio/m4a' : 
                    'video/mp4,video/webm,video/quicktime'
                }
                onChange={handleFileChange}
                className="sw-input w-full"
                />
          </div>
        )}

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
            disabled={isSubmitDisabled}
            className={`sw-button sw-button-primary ${
                isSubmitDisabled ? 'opacity-50 cursor-not-allowed' : ''
            }`}
            >
            Continue
            </button>
        </div>
      </form>
    </div>
  );
}