// // src/components/engage/StorySubmission.jsx

// import React, { useState } from 'react';
// import { useAthleteContext } from '../../context/AthleteContext';

// const submissionTypes = [
//   { 
//     id: 'written-free', 
//     label: 'Journal Style', 
//     icon: '📝',
//     description: 'Write freely about your experience in your own way'
//   },
//   { 
//     id: 'written-guided', 
//     label: 'Guided Format', 
//     icon: '📋',
//     description: 'Answer guided questions about your experience'
//   },
//   { 
//     id: 'voice', 
//     label: 'Voice Recording', 
//     icon: '🎤',
//     description: 'Share your story in a casual conversation'
//   },
//   { 
//     id: 'video', 
//     label: 'Video Message', 
//     icon: '🎥',
//     description: 'Tell your story face-to-face'
//   }
// ];

// const guidedQuestions = [
//   {
//     id: 'context',
//     label: 'Describe your exprience',
//     placeholder: 'Set the scene for your experience...'
//   },
//   {
//     id: 'feelings',
//     label: 'How did it make you feel?',
//     placeholder: 'Share your thoughts and feelings...'
//   },
//   {
//     id: 'challenges',
//     label: 'Any challenges?',
//     placeholder: 'What challenges did you face, if any?'
//   },
//   {
//     id: 'impact',
//     label: 'What happened afterwards?',
//     placeholder: 'Were there any results or outcomes?'
//   },
//   {
//     id: 'learning',
//     label: 'What did you learn?',
//     placeholder: 'Share any insights or learnings...'
//   },
//   {
//     id: 'feedback',
//     label: 'What would you like others to learn from this?',
//     placeholder: 'What should the panel, other athletes, NGBs, or Sport Wales take away from your experience?'
//   },
//   {
//     id: 'improvements',
//     label: 'Suggested improvements',
//     placeholder: 'If applicable, what changes could have made your experience better?'
//   }
// ];

// export default function StorySubmission({ onNext, onBack }) {
//   const { athleteData, updateAthleteData } = useAthleteContext();
//   const [submissionType, setSubmissionType] = useState('written-free');
//   const [freeformStory, setFreeformStory] = useState('');
//   const [guidedStory, setGuidedStory] = useState(
//     Object.fromEntries(guidedQuestions.map(q => [q.id, '']))
//   );
//   const [file, setFile] = useState(null);
//   const [confirmNoNames, setConfirmNoNames] = useState(false);

//   const handleSubmissionTypeChange = (type) => {
//     setSubmissionType(type);
//     setFile(null);
//   };

//   const handleGuidedStoryChange = (id, value) => {
//     setGuidedStory(prev => ({
//       ...prev,
//       [id]: value
//     }));
//   };

//   const handleFileChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       const isValid = submissionType === 'voice' 
//         ? file.type.startsWith('audio/')
//         : file.type.startsWith('video/');
      
//       if (isValid) {
//         setFile(file);
//       }
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const storyData = submissionType.startsWith('written') 
//       ? {
//           type: submissionType,
//           content: submissionType === 'written-free' 
//             ? freeformStory 
//             : guidedStory
//         }
//       : {
//           type: submissionType,
//           fileName: file?.name
//         };

//     updateAthleteData({ story: storyData });
//     onNext();
//   };

//   return (
//     <div className="max-w-4xl mx-auto space-y-8">
//       <div>
//         <h2 className="text-2xl font-bold text-[--color-sw-blue] mb-3">
//           Share Your Story
//         </h2>
//         <p className="text-gray-600">
//           Choose how you'd like to share your experience with us. You can provide as much 
//           or as little information as you feel comfortable sharing.
//         </p>
//       </div>

//       {/* Submission Type Selection */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//         {submissionTypes.map(type => (
//           <button
//             key={type.id}
//             onClick={() => handleSubmissionTypeChange(type.id)}
//             className={`p-6 rounded-lg border-2 transition-all text-left
//               ${submissionType === type.id
//                 ? 'border-[--color-sw-green]  bg-[--color-sw-green] bg-opacity-10 text-white'
//                 : 'border-gray-200 hover:border-[--color-sw-blue] text-black'
//               }`}
//           >
//             <div className="flex items-center gap-3 mb-2">
//               <span className="text-2xl">{type.icon}</span>
//               <span className="font-bold">{type.label}</span>
//             </div>
//             <p className={`text-sm text-gray-6002 
//                 ${submissionType === type.id
//                     ? 'text-white'
//                     :''
//                   }
//                 `}>{type.description}</p>
//           </button>
//         ))}
//       </div>

//       <form onSubmit={handleSubmit} className="space-y-6">
//         {/* Written Story - Free Format */}
//         {submissionType === 'written-free' && (
//           <div className="space-y-4">
//             <label className="sw-label block">Your Story</label>
//             <div className="sw-card bg-gray-50">
//                 <h3 className="font-bold mb-2">Story Prompts</h3>
//                 <p>Please consider the following when sharing your story/experience with us. You can provide as much or as little information as you'd like.</p>
//                 <ul className="list-disc pl-5 space-y-2 text-sm mt-3 pt-3 text-gray-600"> 
//                     <li>Describe the context</li>
//                     <li>What happened?</li>
//                     <li>How did it make you feel?</li>
//                     <li>Any challenges?</li>
//                     <li>Was there anything that happened afterwards as a result?</li>
//                     <li>What did you learn that you'd like to share?</li>
//                     <li>What would you like the panel, other athletes, NGBs, or Sport Wales to learn from this?</li>
//                     <li>If appropriate, are there any changes that could have made your experience better?</li>
//                 </ul>
//                 </div>

//             <textarea
//               value={freeformStory}
//               onChange={(e) => setFreeformStory(e.target.value)}
//               className="sw-input w-full h-80 min-h-80 resize-none p-2"
//               placeholder="Share your experience here... Remember not to include other people's names."
//             />
//           </div>
//         )}

//         {/* Written Story - Guided Format */}
//         {submissionType === 'written-guided' && (
//           <div className="space-y-6">
//             <div className="sw-card bg-gray-50">
//               <h3 className="font-bold mb-2">Guide conversation</h3>
//               <p className="text-gray-600 mb-4">
//                 We've provided some questions to help you structure your story. Feel free to answer any or all of them, each question is optional.
//               </p>
//             </div>
//             {guidedQuestions.map(question => (
//               <div key={question.id} className="space-y-2">
//                 <label className="sw-label block">
//                   {question.label}
//                 </label>
//                 <textarea
//                   value={guidedStory[question.id]}
//                   onChange={(e) => handleGuidedStoryChange(question.id, e.target.value)}
//                   className="sw-input w-full h-32 resize-none p-3"
//                   placeholder={question.placeholder}
//                 />
//               </div>
//             ))}
//           </div>
//         )}

//         {/* File Upload for Voice/Video */}
//         {(submissionType === 'voice' || submissionType === 'video') && (
//           <div className="space-y-4">
//             <div className="sw-card bg-gray-50">
//               <h3 className="font-bold mb-2">
//                 {submissionType === 'voice' ? 'Voice Recording' : 'Video Message'} Guidelines
//               </h3>
//               <ul className="list-disc pl-5 space-y-2 text-sm text-gray-600">
//                 <li>Keep your {submissionType === 'voice' ? 'recording' : 'video'} under 10 minutes</li>
//                 <li>Ensure clear audio quality</li>
//                 <li>Remember not to mention other people's names</li>
//                 <li>Supported formats: {submissionType === 'voice' 
//                   ? 'MP3, WAV, M4A' 
//                   : 'MP4, WebM, QuickTime'}</li>
//               </ul>
//             </div>

//             <div className="sw-card border-2 border-dashed border-gray-300 text-center p-8">
//               <input
//                 type="file"
//                 accept={submissionType === 'voice' 
//                   ? 'audio/mp3,audio/wav,audio/m4a' 
//                   : 'video/mp4,video/webm,video/quicktime'
//                 }
//                 onChange={handleFileChange}
//                 className="hidden"
//                 id="file-upload"
//               />
//               <label 
//                 htmlFor="file-upload"
//                 className="cursor-pointer text-[--color-sw-blue] hover:text-[--color-sw-red]"
//               >
//                 <div className="text-3xl mb-2">
//                   {submissionType === 'voice' ? '🎤' : '🎥'}
//                 </div>
//                 <div className="font-bold mb-2">
//                   Click to upload your {submissionType === 'voice' ? 'recording' : 'video'}
//                 </div>
//                 <div className="text-sm text-gray-500">
//                   {file ? file.name : 'No file selected'}
//                 </div>
//               </label>
//             </div>
//           </div>
//         )}

//         {/* Name Confirmation Checkbox */}
//         <label className="flex items-start space-x-3 p-2 rounded hover:bg-gray-50">
//           <input
//             type="checkbox"
//             checked={confirmNoNames}
//             onChange={(e) => setConfirmNoNames(e.target.checked)}
//             className="sw-checkbox mt-1"
//             required
//           />
//           <span className="text-sm">
//             I confirm my submission does not include other people's names
//           </span>
//         </label>

//         {/* Navigation Buttons */}
//         <div className="flex justify-between pt-4">
//           <button
//             type="button"
//             onClick={onBack}
//             className="sw-button bg-gray-100 hover:bg-gray-200"
//           >
//             Back
//           </button>
//           <button
//             type="submit"
//             disabled={!confirmNoNames}
//             className="sw-button sw-button-primary"
//           >
//             Continue
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// }




























































// src/components/engage/StorySubmission.jsx

import React, { useState, useEffect, useRef } from 'react';
import { useAthleteContext } from '../../context/AthleteContext';
import { 
  Mic, 
  MicOff, 
  Video, 
  VideoOff, 
  Play, 
  Square, 
  Upload, 
  Check, 
  AlertCircle,
  RefreshCw
} from 'lucide-react';

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
    label: 'Describe your experience',
    placeholder: 'Set the scene for your experience...',
    isRequired: false,
    recommendedLength: '100-200 words'
  },
  {
    id: 'feelings',
    label: 'How did it make you feel?',
    placeholder: 'Share your thoughts and feelings...',
    isRequired: false,
    recommendedLength: '50-100 words'
  },
  {
    id: 'challenges',
    label: 'Any challenges?',
    placeholder: 'What challenges did you face, if any?',
    isRequired: false,
    recommendedLength: '50-100 words'
  },
  {
    id: 'impact',
    label: 'What happened afterwards?',
    placeholder: 'Were there any results or outcomes?',
    isRequired: false,
    recommendedLength: '50-100 words'
  },
  {
    id: 'learning',
    label: 'What did you learn?',
    placeholder: 'Share any insights or learnings...',
    isRequired: false,
    recommendedLength: '50-100 words'
  },
  {
    id: 'feedback',
    label: 'What would you like others to learn from this?',
    placeholder: 'What should the panel, other athletes, NGBs, or Sport Wales take away from your experience?',
    isRequired: false,
    recommendedLength: '100-200 words'
  },
  {
    id: 'improvements',
    label: 'Suggested improvements',
    placeholder: 'If applicable, what changes could have made your experience better?',
    isRequired: false,
    recommendedLength: '50-100 words'
  }
];

// Word count function
const getWordCount = (text) => {
  return text ? text.trim().split(/\s+/).filter(word => word.length > 0).length : 0;
};

export default function StorySubmission({ onNext, onBack }) {
  const { athleteData, updateAthleteData } = useAthleteContext();
  const [submissionType, setSubmissionType] = useState('written-free');
  const [freeformStory, setFreeformStory] = useState('');
  const [freeformWordCount, setFreeformWordCount] = useState(0);
  const [guidedStory, setGuidedStory] = useState(
    Object.fromEntries(guidedQuestions.map(q => [q.id, '']))
  );
  const [guidedWordCounts, setGuidedWordCounts] = useState(
    Object.fromEntries(guidedQuestions.map(q => [q.id, 0]))
  );
  const [journalWordCounts, setJournalWordCounts] = useState(
    Object.fromEntries(guidedQuestions.map(q => [q.id, 0]))
  );
  const [file, setFile] = useState(null);
  const [confirmNoNames, setConfirmNoNames] = useState(false);
  
  // New state for recording functionality
  const [isRecording, setIsRecording] = useState(false);
  const [recordingTime, setRecordingTime] = useState(0);
  const [recordingMode, setRecordingMode] = useState('upload'); // 'upload' or 'record'
  const [recordedMedia, setRecordedMedia] = useState(null);
  const timerRef = useRef(null);
  const mediaRecorderRef = useRef(null);

  // Update word count when text changes
  useEffect(() => {
    setFreeformWordCount(getWordCount(freeformStory));
  }, [freeformStory]);

  useEffect(() => {
    const counts = {};
    Object.keys(guidedStory).forEach(key => {
      counts[key] = getWordCount(guidedStory[key]);
    });
    setGuidedWordCounts(counts);
  }, [guidedStory]);

  // Cleanup timer on unmount
  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, []);

  const handleSubmissionTypeChange = (type) => {
    setSubmissionType(type);
    setFile(null);
    setRecordedMedia(null);
    setRecordingMode('upload');
    setIsRecording(false);
    if (timerRef.current) {
      clearInterval(timerRef.current);
      setRecordingTime(0);
    }
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

  // Simulate starting recording
  const handleStartRecording = () => {
    setIsRecording(true);
    setRecordingTime(0);
    
    // Start a timer for display purposes
    timerRef.current = setInterval(() => {
      setRecordingTime(prev => prev + 1);
    }, 1000);
    
    // In a real implementation, we would start actual recording here
  };

  // Simulate stopping recording
  const handleStopRecording = () => {
    setIsRecording(false);
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    
    // Mock recorded media for prototype
    setRecordedMedia(submissionType === 'voice' 
      ? "recorded_audio.mp3" 
      : "recorded_video.mp4");
    
    // In a real implementation, we would stop recording and save the media
  };

  // Format seconds to mm:ss
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
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
          fileName: recordingMode === 'upload' 
            ? file?.name 
            : recordedMedia
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
                ? 'border-[--color-sw-green] bg-[--color-sw-green] bg-opacity-10 text-[--color-sw-blue]'
                : 'border-gray-200 hover:border-[--color-sw-blue] text-black'
              }`}
          >
            <div className="flex items-center gap-3 mb-2">
              <span className="text-2xl">{type.icon}</span>
              <span className="font-bold">{type.label}</span>
            </div>
            <p className="text-sm text-gray-600">{type.description}</p>
          </button>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Written Story - Free Format */}
        {submissionType === 'written-free' && (
          <div className="space-y-4">
            <div className="sw-card bg-gray-50">
              <h3 className="font-bold mb-2">Story Prompts</h3>
              <p>Please consider the following when sharing your story/experience with us. <span className="text-[--color-sw-blue] font-medium">All fields are optional and you can write as much or as little as you'd like.</span></p>
              <p className="text-sm text-gray-500 mt-3">
                Total words: {freeformWordCount} 
                (Suggested total: 300-800 words)
              </p>
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
            <div className="flex justify-between items-center">
              <div className="text-m text-gray-500">
                <span className={freeformWordCount > 800 ? 'text-[--color-sw-red]' : ''}>
                  {freeformWordCount} words
                </span>
                <span className="ml-2 text-xs">(Suggested: 300-800 words)</span>
              </div>
            </div>
            

            <div className="relative">
              <textarea
                value={freeformStory}
                onChange={(e) => setFreeformStory(e.target.value)}
                className="sw-input w-full h-80 min-h-80 resize-none p-4"
                placeholder="Share your experience here... Remember not to include other people's names."
              />
              <div className="absolute bottom-2 right-2 text-xs text-gray-400">
                {freeformWordCount > 800 && (
                  <div className="flex items-center text-[--color-sw-red]">
                    <AlertCircle size={12} className="mr-1" />
                    Approaching suggested length
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Written Story - Guided Format */}
        {submissionType === 'written-guided' && (
          <div className="space-y-6">
            <div className="sw-card bg-gray-50">
              <h3 className="font-bold mb-2">Guide conversation</h3>
              <p className="text-gray-600 mb-2">
                We've provided some questions to help you structure your story. <span className="text-[--color-sw-blue] font-medium">All fields are optional.</span> Feel free to answer any or all of them.
              </p>
              <p className="text-sm text-gray-500">
                Total words: {Object.values(guidedWordCounts).reduce((a, b) => a + b, 0)} 
                (Suggested total: 300-800 words)
              </p>
            </div>
            
            {guidedQuestions.map(question => (
              <div key={question.id} className="space-y-2">
                <div className="flex justify-between items-center">
                  <label className="sw-label block">
                    {question.label}
                    <span className="ml-2 text-xs font-normal text-gray-500">
                      (Optional) - Suggested: {question.recommendedLength}
                    </span>
                  </label>
                  <div className="text-sm text-gray-500">
                    <span className={guidedWordCounts[question.id] > 150 ? 'text-[--color-sw-red]' : ''}>
                      {guidedWordCounts[question.id]} words
                    </span>
                  </div>
                </div>
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

        {/* Voice Recording with direct recording capability */}
        {submissionType === 'voice' && (
          <div className="space-y-4">
            <div className="sw-card bg-gray-50">
              <h3 className="font-bold mb-2">Voice Recording Guidelines</h3>
              <p className="mb-2 text-[--color-sw-blue] font-medium">Suggested length: 2-5 minutes</p>
              <ul className="list-disc pl-5 space-y-2 text-sm text-gray-600">
                <li>Keep your recording concise and focused</li>
                <li>Ensure you're in a quiet environment with minimal background noise</li>
                <li>Remember not to mention other people's names</li>
                <li>You can either record directly or upload an existing recording</li>
              </ul>
            </div>

            {/* Recording/Upload Mode Selector */}
            <div className="flex rounded-md overflow-hidden border">
              <button
                type="button"
                onClick={() => setRecordingMode('record')}
                className={`flex-1 py-3 px-4 flex justify-center items-center ${
                  recordingMode === 'record' 
                    ? 'bg-[--color-sw-blue] text-white' 
                    : 'bg-gray-100 hover:bg-gray-200'
                }`}
              >
                <Mic size={18} className="mr-2" />
                Record Directly
              </button>
              <button
                type="button"
                onClick={() => setRecordingMode('upload')}
                className={`flex-1 py-3 px-4 flex justify-center items-center ${
                  recordingMode === 'upload' 
                    ? 'bg-[--color-sw-blue] text-white' 
                    : 'bg-gray-100 hover:bg-gray-200'
                }`}
              >
                <Upload size={18} className="mr-2" />
                Upload File
              </button>
            </div>

            {/* Direct Recording Interface */}
            {recordingMode === 'record' && (
              <div className="sw-card border-2 border-gray-300 p-6">
                <div className="text-center mb-6">
                  <div className="text-3xl mb-2">🎤</div>
                  <div className="font-bold mb-2">Record Your Story</div>
                  <div className="text-sm text-gray-500 mb-4">
                    Current recording time: {formatTime(recordingTime)}
                  </div>
                  
                  {/* Recording visualization - just a mock UI element */}
                  {isRecording && (
                    <div className="h-10 bg-gray-100 rounded-full overflow-hidden mb-4">
                      <div className="h-full w-full bg-[--color-sw-blue] opacity-30 flex items-center justify-center">
                        <div className="animate-pulse bg-[--color-sw-blue] h-6 rounded-full" 
                            style={{width: `${30 + Math.sin(recordingTime) * 30}%`}}>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  <div className="flex justify-center space-x-4">
                    {!isRecording && !recordedMedia && (
                      <button
                        type="button"
                        onClick={handleStartRecording}
                        className="sw-button bg-[--color-sw-red] text-white hover:bg-opacity-90 flex items-center"
                      >
                        <Mic size={18} className="mr-2" />
                        Start Recording
                      </button>
                    )}
                    
                    {isRecording && (
                      <button
                        type="button"
                        onClick={handleStopRecording}
                        className="sw-button bg-gray-800 text-white hover:bg-opacity-90 flex items-center"
                      >
                        <Square size={18} className="mr-2" />
                        Stop Recording
                      </button>
                    )}
                    
                    {recordedMedia && !isRecording && (
                      <>
                        <button
                          type="button"
                          className="sw-button bg-gray-700 text-white hover:bg-opacity-90 flex items-center"
                        >
                          <Play size={18} className="mr-2" />
                          Play Recording
                        </button>
                        <button
                          type="button"
                          onClick={() => {
                            setRecordedMedia(null);
                            setRecordingTime(0);
                          }}
                          className="sw-button bg-[--color-sw-blue] text-white hover:bg-opacity-90 flex items-center"
                        >
                          <RefreshCw size={18} className="mr-2" />
                          Record Again
                        </button>
                      </>
                    )}
                  </div>
                  
                  {recordedMedia && (
                    <div className="mt-4 text-sm text-[--color-sw-green] flex items-center justify-center">
                      <Check size={16} className="mr-1" />
                      Recording saved successfully
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* File Upload Interface */}
            {recordingMode === 'upload' && (
              <div className="sw-card border-2 border-dashed border-gray-300 text-center p-8">
                <input
                  type="file"
                  accept="audio/mp3,audio/wav,audio/m4a"
                  onChange={handleFileChange}
                  className="hidden"
                  id="file-upload"
                />
                <label 
                  htmlFor="file-upload"
                  className="cursor-pointer text-[--color-sw-blue] hover:text-[--color-sw-red]"
                >
                  <div className="text-3xl mb-2">🎤</div>
                  <div className="font-bold mb-2">
                    Click to upload your recording
                  </div>
                  <div className="text-sm text-gray-500 mb-2">
                    Supported formats: MP3, WAV, M4A
                  </div>
                  <div className="text-sm font-medium">
                    {file ? file.name : 'No file selected'}
                  </div>
                </label>
              </div>
            )}
          </div>
        )}

        {/* Video Message with direct recording capability */}
        {submissionType === 'video' && (
          <div className="space-y-4">
            <div className="sw-card bg-gray-50">
              <h3 className="font-bold mb-2">Video Message Guidelines</h3>
              <p className="mb-2 text-[--color-sw-blue] font-medium">Suggested length: 2-5 minutes</p>
              <ul className="list-disc pl-5 space-y-2 text-sm text-gray-600">
                <li>Keep your video concise and focused</li>
                <li>Find a quiet, well-lit location</li>
                <li>Remember not to mention other people's names</li>
                <li>You can either record directly using your camera or upload an existing video</li>
              </ul>
            </div>

            {/* Recording/Upload Mode Selector */}
            <div className="flex rounded-md overflow-hidden border">
              <button
                type="button"
                onClick={() => setRecordingMode('record')}
                className={`flex-1 py-3 px-4 flex justify-center items-center ${
                  recordingMode === 'record' 
                    ? 'bg-[--color-sw-blue] text-white' 
                    : 'bg-gray-100 hover:bg-gray-200'
                }`}
              >
                <Video size={18} className="mr-2" />
                Record Directly
              </button>
              <button
                type="button"
                onClick={() => setRecordingMode('upload')}
                className={`flex-1 py-3 px-4 flex justify-center items-center ${
                  recordingMode === 'upload' 
                    ? 'bg-[--color-sw-blue] text-white' 
                    : 'bg-gray-100 hover:bg-gray-200'
                }`}
              >
                <Upload size={18} className="mr-2" />
                Upload File
              </button>
            </div>

            {/* Direct Recording Interface */}
            {recordingMode === 'record' && (
              <div className="sw-card border-2 border-gray-300 p-6">
                <div className="text-center mb-6">
                  <div className="text-3xl mb-2">🎥</div>
                  <div className="font-bold mb-2">Record Your Video</div>
                  <div className="text-sm text-gray-500 mb-4">
                    Current recording time: {formatTime(recordingTime)}
                  </div>
                  
                  {/* Video preview - just a mock UI element */}
                  <div className="bg-gray-100 aspect-video max-w-lg mx-auto rounded-lg overflow-hidden mb-4 flex items-center justify-center">
                    {isRecording ? (
                      <div className="flex flex-col items-center">
                        <div className="w-4 h-4 bg-[--color-sw-red] rounded-full animate-pulse mb-2"></div>
                        <span className="text-sm text-gray-500">Recording in progress...</span>
                      </div>
                    ) : recordedMedia ? (
                      <div className="text-center">
                        <Video size={36} className="mx-auto mb-2 text-gray-400" />
                        <span className="text-sm text-gray-500">Video recorded</span>
                      </div>
                    ) : (
                      <div className="text-center">
                        <Video size={36} className="mx-auto mb-2 text-gray-400" />
                        <span className="text-sm text-gray-500">Your camera preview will appear here</span>
                      </div>
                    )}
                  </div>
                  
                  <div className="flex justify-center space-x-4">
                    {!isRecording && !recordedMedia && (
                      <button
                        type="button"
                        onClick={handleStartRecording}
                        className="sw-button bg-[--color-sw-red] text-white hover:bg-opacity-90 flex items-center"
                      >
                        <Video size={18} className="mr-2" />
                        Start Recording
                      </button>
                    )}
                    
                    {isRecording && (
                      <button
                        type="button"
                        onClick={handleStopRecording}
                        className="sw-button bg-gray-800 text-white hover:bg-opacity-90 flex items-center"
                      >
                        <Square size={18} className="mr-2" />
                        Stop Recording
                      </button>
                    )}
                    
                    {recordedMedia && !isRecording && (
                      <>
                        <button
                          type="button"
                          className="sw-button bg-gray-700 text-white hover:bg-opacity-90 flex items-center"
                        >
                          <Play size={18} className="mr-2" />
                          Play Video
                        </button>
                        <button
                          type="button"
                          onClick={() => {
                            setRecordedMedia(null);
                            setRecordingTime(0);
                          }}
                          className="sw-button bg-[--color-sw-blue] text-white hover:bg-opacity-90 flex items-center"
                        >
                          <RefreshCw size={18} className="mr-2" />
                          Record Again
                        </button>
                      </>
                    )}
                  </div>
                  
                  {recordedMedia && (
                    <div className="mt-4 text-sm text-[--color-sw-green] flex items-center justify-center">
                      <Check size={16} className="mr-1" />
                      Video saved successfully - Length: {formatTime(recordingTime)}
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* File Upload Interface */}
            {recordingMode === 'upload' && (
              <div className="sw-card border-2 border-dashed border-gray-300 text-center p-8">
                <input
                  type="file"
                  accept="video/mp4,video/webm,video/quicktime"
                  onChange={handleFileChange}
                  className="hidden"
                  id="file-upload"
                />
                <label 
                  htmlFor="file-upload"
                  className="cursor-pointer text-[--color-sw-blue] hover:text-[--color-sw-red]"
                >
                  <div className="text-3xl mb-2">🎥</div>
                  <div className="font-bold mb-2">
                    Click to upload your video
                  </div>
                  <div className="text-sm text-gray-500 mb-2">
                    Supported formats: MP4, WebM, QuickTime
                  </div>
                  <div className="text-sm font-medium">
                    {file ? file.name : 'No file selected'}
                  </div>
                </label>
              </div>
            )}
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
            disabled={!confirmNoNames}
            className="sw-button sw-button-primary"
          >
            Continue
          </button>
        </div>
      </form>
    </div>
  );
}