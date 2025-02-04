// src/components/engage/PersonalInfo.jsx
import React, { useState } from 'react';
import { useAthleteContext } from '../../context/AthleteContext';

// Dummy data for sports and levels
const sports = [
  'Athletics', 'Swimming', 'Cycling', 'Rugby', 'Football',
  'Gymnastics', 'Hockey', 'Tennis', 'Basketball', 'Other'
];

const levels = [
  'Development', 'National', 'International', 'Elite', 'Retired'
];

const ageRanges = [
  'Under 18', '18-21', '22-25', '26-30', 'Over 30'
];

export default function PersonalInfo({ onNext }) {
  const { athleteData, updateAthleteData } = useAthleteContext();
  const [formData, setFormData] = useState({
    sport: athleteData.sport || '',
    level: athleteData.level || '',
    ageRange: athleteData.ageRange || ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.sport && !formData.level && !formData.ageRange) {
      // If all fields are empty, still allow proceeding as fields are optional
      updateAthleteData(formData);
      onNext();
      return;
    }
    // If any field is filled, validate it
    if ((formData.sport && !formData.level) || (formData.level && !formData.sport)) {
      setError('Please complete both sport and level or leave both empty');
      return;
    }
    updateAthleteData(formData);
    onNext();
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="sw-heading-secondary">Tell us about yourself</h2>
        <p className="text-gray-600">
          This information is optional and helps us understand your perspective better.
          You can choose to remain anonymous later.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="sw-label block mb-2">Sport</label>
          <select
            name="sport"
            value={formData.sport}
            onChange={handleChange}
            className="sw-input w-full"
          >
            <option value="">Select your sport</option>
            {sports.map(sport => (
              <option key={sport} value={sport}>{sport}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="sw-label block mb-2">Competition Level</label>
          <select
            name="level"
            value={formData.level}
            onChange={handleChange}
            className="sw-input w-full"
          >
            <option value="">Select your level</option>
            {levels.map(level => (
              <option key={level} value={level}>{level}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="sw-label block mb-2">Age Range</label>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {ageRanges.map(range => (
              <label key={range} className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="ageRange"
                  value={range}
                  checked={formData.ageRange === range}
                  onChange={handleChange}
                  className="sw-checkbox"
                />
                <span>{range}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="flex justify-end">
          <button type="submit" className="sw-button sw-button-primary">
            Continue
          </button>
        </div>
      </form>
    </div>
  );
}