// src/context/AthleteContext.jsx
import React, { createContext, useState, useContext, useEffect } from 'react';

const AthleteContext = createContext();

export function AthleteProvider({ children }) {
  const [athleteData, setAthleteData] = useState({
    accessCode: '',
    story: '',
    sport: '',
    level: '',
    ageRange: '',
    isAnonymous: false,
    submissionType: 'written',
    needsContact: false,
    isSensitive: false
  });

  const updateAthleteData = (newData) => {
    setAthleteData(prev => ({ ...prev, ...newData }));
  };

  useEffect(() => {
    return () => {
      // Cleanup function to reset data when component unmounts
      setAthleteData({
        accessCode: '',
        story: '',
        sport: '',
        level: '',
        ageRange: '',
        isAnonymous: false,
        submissionType: 'written',
        needsContact: false,
        isSensitive: false
      });
    };
  }, []);

  return (
    <AthleteContext.Provider value={{ athleteData, updateAthleteData }}>
      {children}
    </AthleteContext.Provider>
  );
}

export function useAthleteContext() {
  return useContext(AthleteContext);
}