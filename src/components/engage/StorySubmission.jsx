// File location: src/components/engage/StorySubmission.jsx

import React, { useState } from 'react';
import { useAthleteContext } from '../../context/AthleteContext';

const submissionTypes = [
  { 
    id: 'written-free', 
    label: 'Journal Style', 
    icon: '📝',
    description: 'Write freely about your experience in your own way'
  },
  { 
    id: 'written-guided', 
    label: 'Guided Format', 
    icon: '📋',
    description: 'Answer guided questions about your experience'
  },
  { 
    id: 'voice', 
    label: 'Voice Recording', 
    icon: '🎤',
    description: 'Share your story in a casual conversation'
  },
  { 
    id: 'video', 
    label: 'Video Message', 
    icon: '🎥',
    description: 'Tell your story face-to-face'
  }
];

const guidedQuestions = [
  {
    id: 'context',
    label: 'Describe your exprience',
    placeholder: 'Set the scene for your experience...'
  },
  {
    id: 'feelings',
    label: 'How did it make you feel?',
    placeholder: 'Share your thoughts and feelings...'
  },
  {
    id: 'challenges',
    label: 'Any challenges?',
    placeholder: 'What challenges did you face, if any?'
  },
  {
    id: 'impact',
    label: 'What happened afterwards?',
    placeholder: 'Were there any results or outcomes?'
  },
  {
    id: 'learning',
    label: 'What did you learn?',
    placeholder: 'Share any insights or learnings...'
  },
  {
    id: 'feedback',
    label: 'What would you like others to learn from this?',
    placeholder: 'What should the panel, other athletes, NGBs, or Sport Wales take away from your experience?'
  },
  {
    id: 'improvements',
    label: 'Suggested improvements',
    placeholder: 'If applicable, what changes could have made your experience better?'
  }
];

export default function StorySubmission({ onNext, onBack }) {
  const { athleteData, updateAthleteData } = useAthleteContext();
  const [submissionType, setSubmissionType] = useState('written-free');
  const [freeformStory, setFreeformStory] = useState('');
  const [guidedStory, setGuidedStory] = useState(
    Object.fromEntries(guidedQuestions.map(q => [q.id, '']))
  );
  const [file, setFile] = useState(null);
  const [confirmNoNames, setConfirmNoNames] = useState(false);

  const handleSubmissionTypeChange = (type) => {
    setSubmissionType(type);
    setFile(null);
  };

  const handleGuidedStoryChange = (id, value) => {
    setGuidedStory(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
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
    const storyData = submissionType.startsWith('written') 
      ? {
          type: submissionType,
          content: submissionType === 'written-free' 
            ? freeformStory 
            : guidedStory
        }
      : {
          type: submissionType,
          fileName: file?.name
        };

    updateAthleteData({ story: storyData });
    onNext();
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-[--color-sw-blue] mb-3">
          Share Your Story
        </h2>
        <p className="text-gray-600">
          Choose how you'd like to share your experience with us. You can provide as much 
          or as little information as you feel comfortable sharing.
        </p>
      </div>

      {/* Submission Type Selection */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {submissionTypes.map(type => (
          <button
            key={type.id}
            onClick={() => handleSubmissionTypeChange(type.id)}
            className={`p-6 rounded-lg border-2 transition-all text-left
              ${submissionType === type.id
                ? 'border-[--color-sw-green]  bg-[--color-sw-green] bg-opacity-10 text-white'
                : 'border-gray-200 hover:border-[--color-sw-blue] text-black'
              }`}
          >
            <div className="flex items-center gap-3 mb-2">
              <span className="text-2xl">{type.icon}</span>
              <span className="font-bold">{type.label}</span>
            </div>
            <p className={`text-sm text-gray-6002 
                ${submissionType === type.id
                    ? 'text-white'
                    :''
                  }
                `}>{type.description}</p>
          </button>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Written Story - Free Format */}
        {submissionType === 'written-free' && (
          <div className="space-y-4">
            <label className="sw-label block">Your Story</label>
            <div className="sw-card bg-gray-50">
                <h3 className="font-bold mb-2">Story Prompts</h3>
                <p>Please consider the following when sharing your story/experience with us. You can provide as much or as little information as you'd like.</p>
                <ul className="list-disc pl-5 space-y-2 text-sm mt-3 pt-3 text-gray-600"> 
                    <li>Describe the context</li>
                    <li>What happened?</li>
                    <li>How did it make you feel?</li>
                    <li>Any challenges?</li>
                    <li>Was there anything that happened afterwards as a result?</li>
                    <li>What did you learn that you'd like to share?</li>
                    <li>What would you like the panel, other athletes, NGBs, or Sport Wales to learn from this?</li>
                    <li>If appropriate, are there any changes that could have made your experience better?</li>
                </ul>
                </div>

            <textarea
              value={freeformStory}
              onChange={(e) => setFreeformStory(e.target.value)}
              className="sw-input w-full h-80 min-h-80 resize-none p-2"
              placeholder="Share your experience here... Remember not to include other people's names."
            />
          </div>
        )}

        {/* Written Story - Guided Format */}
        {submissionType === 'written-guided' && (
          <div className="space-y-6">
            {guidedQuestions.map(question => (
              <div key={question.id} className="space-y-2">
                <label className="sw-label block">
                  {question.label}
                </label>
                <textarea
                  value={guidedStory[question.id]}
                  onChange={(e) => handleGuidedStoryChange(question.id, e.target.value)}
                  className="sw-input w-full h-32 resize-none p-3"
                  placeholder={question.placeholder}
                />
              </div>
            ))}
          </div>
        )}

        {/* File Upload for Voice/Video */}
        {(submissionType === 'voice' || submissionType === 'video') && (
          <div className="space-y-4">
            <div className="sw-card bg-gray-50">
              <h3 className="font-bold mb-2">
                {submissionType === 'voice' ? 'Voice Recording' : 'Video Message'} Guidelines
              </h3>
              <ul className="list-disc pl-5 space-y-2 text-sm text-gray-600">
                <li>Keep your {submissionType === 'voice' ? 'recording' : 'video'} under 10 minutes</li>
                <li>Ensure clear audio quality</li>
                <li>Remember not to mention other people's names</li>
                <li>Supported formats: {submissionType === 'voice' 
                  ? 'MP3, WAV, M4A' 
                  : 'MP4, WebM, QuickTime'}</li>
              </ul>
            </div>

            <div className="sw-card border-2 border-dashed border-gray-300 text-center p-8">
              <input
                type="file"
                accept={submissionType === 'voice' 
                  ? 'audio/mp3,audio/wav,audio/m4a' 
                  : 'video/mp4,video/webm,video/quicktime'
                }
                onChange={handleFileChange}
                className="hidden"
                id="file-upload"
              />
              <label 
                htmlFor="file-upload"
                className="cursor-pointer text-[--color-sw-blue] hover:text-[--color-sw-red]"
              >
                <div className="text-3xl mb-2">
                  {submissionType === 'voice' ? '🎤' : '🎥'}
                </div>
                <div className="font-bold mb-2">
                  Click to upload your {submissionType === 'voice' ? 'recording' : 'video'}
                </div>
                <div className="text-sm text-gray-500">
                  {file ? file.name : 'No file selected'}
                </div>
              </label>
            </div>
          </div>
        )}

        {/* Name Confirmation Checkbox */}
        <label className="flex items-start space-x-3 p-2 rounded hover:bg-gray-50">
          <input
            type="checkbox"
            checked={confirmNoNames}
            onChange={(e) => setConfirmNoNames(e.target.checked)}
            className="sw-checkbox mt-1"
            required
          />
          <span className="text-sm">
            I confirm my submission does not include other people's names
          </span>
        </label>

        {/* Navigation Buttons */}
        <div className="flex justify-between pt-4">
          <button
            type="button"
            onClick={onBack}
            className="sw-button bg-gray-100 hover:bg-gray-200"
          >
            Back
          </button>
          <button
            type="submit"
            disabled={!confirmNoNames || (
              submissionType.startsWith('written') 
                ? submissionType === 'written-free' 
                  ? !freeformStory
                  : !Object.values(guidedStory).some(Boolean)
                : !file
            )}
            className="sw-button sw-button-primary"
          >
            Continue
          </button>
        </div>
      </form>
    </div>
  );
}