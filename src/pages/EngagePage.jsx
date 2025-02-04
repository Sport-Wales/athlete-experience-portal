// src/pages/EngagePage.jsx
import React, { useState } from 'react';
import PersonalInfo from '../components/engage/PersonalInfo';
import PrivacyConsent from '../components/engage/PrivacyConsent';
import StorySubmission from '../components/engage/StorySubmission';
import FinalSteps from '../components/engage/FinalSteps';
import { useAthleteContext } from '../context/AthleteContext';
import { useNavigate } from 'react-router-dom';

export default function EngagePage() {
  const [currentStep, setCurrentStep] = useState(1);
  const { athleteData } = useAthleteContext();
  const navigate = useNavigate();

  const steps = [
    { id: 1, title: 'About You' },
    { id: 2, title: 'Privacy & Consent' },
    { id: 3, title: 'Share Your Story' },
    { id: 4, title: 'Final Steps' }
  ];

  const renderStep = () => {
    if (currentStep < 1 || currentStep > 4) {
        navigate('/en/enter');
        return null;
      }
    switch(currentStep) {
      case 1:
        return <PersonalInfo onNext={() => setCurrentStep(2)} />;
      case 2:
        return <PrivacyConsent onNext={() => setCurrentStep(3)} onBack={() => setCurrentStep(1)} />;
      case 3:
        return <StorySubmission onNext={() => setCurrentStep(4)} onBack={() => setCurrentStep(2)} />;
      case 4:
        return <FinalSteps onSubmit={() => navigate('/en/exit')} onBack={() => setCurrentStep(3)} />;
      default:
        return null;
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      {/* Progress Steps */}
      <div className="mb-8">
        <div className="flex justify-between items-center">
          {steps.map(step => (
            <div 
              key={step.id}
              className={`flex-1 text-center ${
                currentStep === step.id 
                  ? 'text-[--color-sw-blue] font-bold' 
                  : 'text-gray-400'
              }`}
            >
              <div className={`
                w-8 h-8 rounded-full mx-auto mb-2 flex items-center justify-center
                ${currentStep >= step.id 
                  ? 'bg-[--color-sw-blue] text-white' 
                  : 'bg-gray-200'
                }
              `}>
                {step.id}
              </div>
              <span className="text-sm">{step.title}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="sw-card">
        {renderStep()}
      </div>
    </div>
  );
}