// // src/components/engage/AthleteInfoForm.jsx

// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { useAthleteContext } from '../../context/AthleteContext';

// const sports = [
//   'Athletics', 'Swimming', 'Cycling', 'Rugby', 'Football',
//   'Gymnastics', 'Hockey', 'Tennis', 'Basketball', 'Other'
// ];

// const levels = [
//   'Development', 'National', 'International', 'Elite', 'Retired'
// ];

// const ageRanges = [
//   'Under 18', '18-21', '22-25', '26-30', 'Over 30'
// ];

// export default function AthleteInfoForm({ onNext }) {
//   const navigate = useNavigate();
//   const { athleteData, updateAthleteData } = useAthleteContext();
  
//   const [formData, setFormData] = useState({
//     sport: athleteData.sport || '',
//     level: athleteData.level || '',
//     ageRange: athleteData.ageRange || ''
//   });

//   const [consents, setConsents] = useState({
//     usage: false,
//     processing: false,
//     safeguarding: false
//   });

//   const handleInfoChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }));
//   };

//   const handleConsentChange = (e) => {
//     const { name, checked } = e.target;
//     setConsents(prev => ({
//       ...prev,
//       [name]: checked
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (Object.values(consents).every(Boolean)) {
//       updateAthleteData(formData);
//       onNext();
//     }
//   };

//   return (
//     <div className="max-w-4xl mx-auto">
//       {/* Back Button */}
//       <div className="mb-8">
//         <button
//           onClick={() => navigate('/en/panel')}
//           className="text-[--color-sw-blue] hover:text-[--color-sw-red] flex items-center gap-2"
//         >
//           <span>←</span> Back to home
//         </button>
//       </div>

//       <div className="sw-card">
//         <form onSubmit={handleSubmit} className="space-y-8">
//           {/* About You Section */}
// <section>
//   <h2 className="text-2xl font-bold text-[--color-sw-blue] mb-4">
//     About You <span className="text-sm font-normal text-gray-500">(Optional)</span>
//   </h2>
//   <p className="text-gray-600 mb-6">
//     This information helps us understand your perspective better. You can choose
//     to remain anonymous when sharing your story.
//   </p>

//   {/* Name Input (Optional) */}
//   <div className="mb-6">
//     <label className="sw-label block mb-2">
//       Name <span className="text-gray-400">(Optional)</span>
//     </label>
//     <input
//       type="text"
//       name="name"
//       value={formData.name}
//       onChange={handleInfoChange}
//       className="sw-input w-full"
//       placeholder="Enter your name"
//     />
//   </div>

//   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//     <div>
//       <label className="sw-label block mb-2">
//         Sport <span className="text-gray-400">(Optional)</span>
//       </label>
//       <select
//         name="sport"
//         value={formData.sport}
//         onChange={handleInfoChange}
//         className="sw-input w-full"
//       >
//         <option value="">Select your sport</option>
//         {sports.map(sport => (
//           <option key={sport} value={sport}>{sport}</option>
//         ))}
//       </select>
//     </div>

//     <div>
//       <label className="sw-label block mb-2">
//         Competition Level <span className="text-gray-400">(Optional)</span>
//       </label>
//       <select
//         name="level"
//         value={formData.level}
//         onChange={handleInfoChange}
//         className="sw-input w-full"
//       >
//         <option value="">Select your level</option>
//         {levels.map(level => (
//           <option key={level} value={level}>{level}</option>
//         ))}
//       </select>
//     </div>
//   </div>

//   <div className="mt-6">
//     <label className="sw-label block mb-2">
//       Age Range <span className="text-gray-400">(Optional)</span>
//     </label>
//     <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
//       {ageRanges.map(range => (
//         <label key={range} className="flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-50">
//           <input
//             type="radio"
//             name="ageRange"
//             value={range}
//             checked={formData.ageRange === range}
//             onChange={handleInfoChange}
//             className="sw-checkbox"
//           />
//           <span>{range}</span>
//         </label>
//       ))}
//     </div>
//   </div>
// </section>


//           {/* Privacy & Consent Section */}
//           <section className="pt-8 border-t">
//             <h2 className="text-2xl font-bold text-[--color-sw-blue] mb-4">
//               Privacy & Consent
//             </h2>
            
//             {/* How We Use Information */}
//             <div className="sw-card bg-gray-50 mb-6">
//               <h3 className="font-bold text-lg mb-3">How we use your information</h3>
//               <p className="mb-4">
//                 Sport Wales uses your information to help improve experiences for athletes. 
//                 Sport Wales relies on your consent to process your information and will not 
//                 use this information for any other purpose.
//               </p>
//               <Link 
//                 to="https://www.sport.wales/privacy/"
//                 target="_blank"
//                 className="text-[--color-sw-blue] hover:text-[--color-sw-red] underline"
//               >
//                 Learn more about how Sport Wales uses personal information →
//               </Link>
//             </div>

//             {/* Safeguarding Notice */}
//             <div className="sw-notice border-l-4 border-[--color-sw-yellow] mb-8">
//               <h3 className="font-bold text-lg mb-3">Safeguarding</h3>
//               <p className="mb-2">
//                 These stories will be reviewed by the Panel supported by staff members at 
//                 Sport Wales. They will be reviewed monthly.
//               </p>
//               <p className="font-medium">
//                 If safeguarding concerns are disclosed, we may have a duty of care to share 
//                 this with external organisations. We will discuss this with you to ensure 
//                 you are fully informed and supported through this process.
//               </p>
//             </div>

//             {/* Consent Checkboxes */}
//             <div className="space-y-4 mb-8">
//               <label className="flex items-start space-x-3 p-2 rounded hover:bg-gray-50">
//                 <input
//                   type="checkbox"
//                   name="usage"
//                   checked={consents.usage}
//                   onChange={handleConsentChange}
//                   className="sw-checkbox mt-1"
//                   required
//                 />
//                 <span>I agree for Sport Wales to use my information for the Athlete Panel to improve athlete experience.</span>
//               </label>

//               <label className="flex items-start space-x-3 p-2 rounded hover:bg-gray-50">
//                 <input
//                   type="checkbox"
//                   name="processing"
//                   checked={consents.processing}
//                   onChange={handleConsentChange}
//                   className="sw-checkbox mt-1"
//                   required
//                 />
//                 <span>I understand how my information will be used and processed.</span>
//               </label>

//               <label className="flex items-start space-x-3 p-2 rounded hover:bg-gray-50">
//                 <input
//                   type="checkbox"
//                   name="safeguarding"
//                   checked={consents.safeguarding}
//                   onChange={handleConsentChange}
//                   className="sw-checkbox mt-1"
//                   required
//                 />
//                 <span>I understand the safeguarding procedures and reporting obligations.</span>
//               </label>
//             </div>
//           </section>

//           {/* Submit Button */}
//           <div className="flex justify-end">
//             <button
//               type="submit"
//               disabled={!Object.values(consents).every(Boolean)}
//               className={`sw-button sw-button-primary px-8 py-3 text-lg ${
//                 !Object.values(consents).every(Boolean) ? 'opacity-50 cursor-not-allowed' : ''
//               }`}
//             >
//               Continue to Share Your Story
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }


// src/components/engage/AthleteInfoForm.jsx

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAthleteContext } from '../../context/AthleteContext';

const sports = [
  'Athletics', 'Swimming', 'Cycling', 'Rugby', 'Football',
  'Gymnastics', 'Hockey', 'Tennis', 'Basketball', 'Cricket',
  'Rowing', 'Golf', 'Netball', 'Sailing', 'Badminton', 'Other'
];

// Levels with descriptions
const levels = [
  { value: 'Development', description: 'Early stage athlete focusing on skill development' },
  { value: 'National', description: 'Competing at a national level within Wales' },
  { value: 'International', description: 'Representing Wales in international competitions' },
  { value: 'Elite', description: 'Highest level of performance in your sport' },
  { value: 'Retired', description: 'No longer competing as an athlete' }
];

const ageRanges = [
  'Under 18', '18-21', '22-25', '26-30', '31-39', '40+'
];

export default function AthleteInfoForm({ onNext }) {
  const navigate = useNavigate();
  const { athleteData, updateAthleteData } = useAthleteContext();
  
  const [formData, setFormData] = useState({
    sport: athleteData.sport || '',
    otherSport: athleteData.otherSport || '',
    level: athleteData.level || '',
    ageRange: athleteData.ageRange || ''
  });

  const [consents, setConsents] = useState({
    usage: false,
    processing: false,
    safeguarding: false
  });

  const handleInfoChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleConsentChange = (e) => {
    const { name, checked } = e.target;
    setConsents(prev => ({
      ...prev,
      [name]: checked
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.values(consents).every(Boolean)) {
      // Create the final data object, including otherSport if needed
      const finalData = {...formData};
      
      // If "Other" is selected and otherSport is filled, use that as the sport
      if (formData.sport === 'Other' && formData.otherSport) {
        finalData.sport = `Other: ${formData.otherSport}`;
      }
      
      updateAthleteData(finalData);
      onNext();
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      {/* Back Button */}
      <div className="mb-8">
        <button
          onClick={() => navigate('/en/panel')}
          className="text-[--color-sw-blue] hover:text-[--color-sw-red] flex items-center gap-2"
        >
          <span>←</span> Back to home
        </button>
      </div>

      <div className="sw-card">
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* About You Section */}
          <section>
            <h2 className="text-2xl font-bold text-[--color-sw-blue] mb-4">
              About You <span className="text-sm font-normal text-gray-500">(Optional)</span>
            </h2>
            <p className="text-gray-600 mb-6">
              This information helps us understand your perspective better. You can choose
              to remain anonymous when sharing your story.
            </p>

            {/* Name Input (Optional) */}
            <div className="mb-6">
              <label className="sw-label block mb-2">
                Name <span className="text-gray-400">(Optional)</span>
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInfoChange}
                className="sw-input w-full"
                placeholder="Enter your name"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="sw-label block mb-2">
                  Sport <span className="text-gray-400">(Optional)</span>
                </label>
                <select
                  name="sport"
                  value={formData.sport}
                  onChange={handleInfoChange}
                  className="sw-input w-full"
                >
                  <option value="">Select your sport</option>
                  {sports.map(sport => (
                    <option key={sport} value={sport}>{sport}</option>
                  ))}
                </select>
                
                {/* Other Sport text input that appears when "Other" is selected */}
                {formData.sport === 'Other' && (
                  <div className="mt-3">
                    <input
                      type="text"
                      name="otherSport"
                      value={formData.otherSport}
                      onChange={handleInfoChange}
                      className="sw-input w-full"
                      placeholder="Please specify your sport"
                    />
                  </div>
                )}
              </div>

              <div>
                <label className="sw-label block mb-2">
                  Competition Level <span className="text-gray-400">(Optional)</span>
                </label>
                <select
                  name="level"
                  value={formData.level}
                  onChange={handleInfoChange}
                  className="sw-input w-full"
                >
                  <option value="">Select your level</option>
                  {levels.map(level => (
                    <option key={level.value} value={level.value}>{level.value}</option>
                  ))}
                </select>
                
                {/* Show description for selected level */}
                {formData.level && (
                  <p className="text-sm text-gray-600 mt-2">
                    {levels.find(l => l.value === formData.level)?.description}
                  </p>
                )}
              </div>
            </div>

            <div className="mt-6">
              <label className="sw-label block mb-2">
                Age Range <span className="text-gray-400">(Optional)</span>
              </label>
              <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
                {ageRanges.map(range => (
                  <label key={range} className="flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-50">
                    <input
                      type="radio"
                      name="ageRange"
                      value={range}
                      checked={formData.ageRange === range}
                      onChange={handleInfoChange}
                      className="sw-checkbox"
                    />
                    <span>{range}</span>
                  </label>
                ))}
              </div>
            </div>
          </section>

          {/* Privacy & Consent Section */}
          <section className="pt-8 border-t">
            <h2 className="text-2xl font-bold text-[--color-sw-blue] mb-4">
              Privacy & Consent
            </h2>
            
            {/* How We Use Information */}
            <div className="sw-card bg-gray-50 mb-6">
              <h3 className="font-bold text-lg mb-3">How we use your information</h3>
              <p className="mb-4">
                Sport Wales uses your information to help improve experiences for athletes. 
                Sport Wales relies on your consent to process your information and will not 
                use this information for any other purpose.
              </p>
              <Link 
                to="https://www.sport.wales/privacy/"
                target="_blank"
                className="text-[--color-sw-blue] hover:text-[--color-sw-red] underline"
              >
                Learn more about how Sport Wales uses personal information →
              </Link>
            </div>

            {/* Safeguarding Notice */}
            <div className="sw-notice border-l-4 border-[--color-sw-yellow] mb-8">
              <h3 className="font-bold text-lg mb-3">Safeguarding</h3>
              <p className="mb-2">
                These stories will be reviewed by the Panel supported by staff members at 
                Sport Wales. They will be reviewed monthly.
              </p>
              <p className="font-medium">
                If safeguarding concerns are disclosed, we may have a duty of care to share 
                this with external organisations. We will discuss this with you to ensure 
                you are fully informed and supported through this process.
              </p>
            </div>

            {/* Consent Checkboxes */}
            <div className="space-y-4 mb-8">
              <label className="flex items-start space-x-3 p-2 rounded hover:bg-gray-50">
                <input
                  type="checkbox"
                  name="usage"
                  checked={consents.usage}
                  onChange={handleConsentChange}
                  className="sw-checkbox mt-1"
                  required
                />
                <span>I agree for Sport Wales to use my information for the Athlete Panel to improve athlete experience.</span>
              </label>

              <label className="flex items-start space-x-3 p-2 rounded hover:bg-gray-50">
                <input
                  type="checkbox"
                  name="processing"
                  checked={consents.processing}
                  onChange={handleConsentChange}
                  className="sw-checkbox mt-1"
                  required
                />
                <span>I understand how my information will be used and processed.</span>
              </label>

              <label className="flex items-start space-x-3 p-2 rounded hover:bg-gray-50">
                <input
                  type="checkbox"
                  name="safeguarding"
                  checked={consents.safeguarding}
                  onChange={handleConsentChange}
                  className="sw-checkbox mt-1"
                  required
                />
                <span>I understand the safeguarding procedures and reporting obligations.</span>
              </label>
            </div>
          </section>

          {/* Submit Button */}
          <div className="flex justify-end">
            <button
              type="submit"
              disabled={!Object.values(consents).every(Boolean)}
              className={`sw-button sw-button-primary px-8 py-3 text-lg ${
                !Object.values(consents).every(Boolean) ? 'opacity-50 cursor-not-allowed' : ''
              }`}
            >
              Continue to Share Your Story
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}