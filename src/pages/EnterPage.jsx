// // src/pages/EnterPage.jsx
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { Info, Shield, Users, MessageCircle } from 'lucide-react';


// export default function EnterPage() {

//   const [code, setCode] = useState('');
//       const [error, setError] = useState('');
//       const [isLoading, setIsLoading] = useState(false);
//       const navigate = useNavigate();
    
//       const handleSubmit = async (e) => {
//         e.preventDefault();
//         setIsLoading(true);
//         setError('');
  
//         // For prototype, accept any code
//         if (code.trim().length > 0) {
//           // Simulate a brief loading state
//           await new Promise(resolve => setTimeout(resolve, 600));
//           navigate('/en/panel');
//         } else {
//           setError('Please enter the access code provided to you');
//         }
//         setIsLoading(false);
//       };



//   return (
//     <div className="mt-44 space-y-2 items-center justify-center px-20">
//         {/* Welcome Header */}
//         <header className="text-center ">
//           <h1 className="sw-heading-primary text-[--color-sw-blue] mb-4">
//             Welcome to the Athlete's Voice
//           </h1>
//           <p className="text-lg text-gray-600 max-w-2xl mx-auto">
//             A space for all athletes to share their experiences and make a positive impact
//             on Welsh sport.
//           </p>
//         </header>

//         {/* Access Code Section */}
//         <div className="sw-card max-w-md mx-auto">
//         <form onSubmit={handleSubmit}>
//           <label className="sw-label block mb-2">
//             Enter your access code
//           </label>
//           <input
//             type="text"
//             className="sw-input w-full mb-4"
//             value={code}
//             onChange={(e) => setCode(e.target.value)}
//             placeholder="Enter access code"
//           />
//           {error && (
//             <div className="sw-notice text-[--color-sw-red] mb-4">
//               {error}
//             </div>
//           )}
//           <button type="submit" className="sw-button sw-button-primary w-full">
//             Continue
//           </button>
//         </form>
//       </div>
//          {/* Information Cards - New section with Nancy's content */}
//          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10 mt-10">
//           <div className="sw-card bg-white border-l-4 border-[--color-sw-blue] p-6">
//            <div className="flex items-start mb-3">
//                <Info className="h-6 w-6 text-[--color-sw-blue] mr-2 flex-shrink-0 mt-1" />
//                <h2 className="text-lg font-bold text-[--color-sw-blue]">What is this portal for?</h2>
//              </div>
//              <p className="text-gray-600">
//                This digital platform allows athletes to share stories from their sports to provide 
//                insight that will help inform Sport Wales work. Your stories will be used to share 
//                examples of best practice and identify common themes and areas for improvement.
//              </p>
//            </div>
          
//           <div className="sw-card bg-white border-l-4 border-[--color-sw-green] p-6">
//              <div className="flex items-start mb-3">
//                <Shield className="h-6 w-6 text-[--color-sw-green] mr-2 flex-shrink-0 mt-1" />
//                <h2 className="text-lg font-bold text-[--color-sw-green]">Privacy & Confidentiality</h2>
//              </div>
//              <p className="text-gray-600">
//                Your stories will be seen by staff members behind the Sport Wales Athlete Panel. 
//                It provides a neutral space where you can share experiences you might feel 
//                uncomfortable discussing directly with your NGB.
//              </p>
//            </div>
//          </div>


//     </div>
//   );
// }













// // src/pages/EnterPage.jsx
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { Info, Shield, Users, MessageCircle } from 'lucide-react'; // Adding icons for visual engagement

// export default function EnterPage() {
//   const [code, setCode] = useState('');
//   const [error, setError] = useState('');
//   const [isLoading, setIsLoading] = useState(false);
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsLoading(true);
//     setError('');

//     // For prototype, accept any code
//     if (code.trim().length > 0) {
//       // Simulate a brief loading state
//       await new Promise(resolve => setTimeout(resolve, 600));
//       navigate('/en/panel');
//     } else {
//       setError('Please enter the access code provided to you');
//     }
//     setIsLoading(false);
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 py-12">
//       <div className="max-w-4xl mx-auto px-4">
//         {/* Welcome Header */}
//         <header className="text-center mb-8">
//           <h1 className="sw-heading-primary text-[--color-sw-blue] mb-4">
//             Welcome to the Athlete's Voice
//           </h1>
//           <p className="text-lg text-gray-600 max-w-2xl mx-auto">
//             A space for all athletes to share their experiences and make a positive impact
//             on Welsh sport.
//           </p>
//         </header>

//         {/* Information Cards - New section with Nancy's content */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
//           <div className="sw-card bg-white border-l-4 border-[--color-sw-blue] p-6">
//             <div className="flex items-start mb-3">
//               <Info className="h-6 w-6 text-[--color-sw-blue] mr-2 flex-shrink-0 mt-1" />
//               <h2 className="text-lg font-bold text-[--color-sw-blue]">What is this portal for?</h2>
//             </div>
//             <p className="text-gray-600">
//               This digital platform allows athletes to share stories from their sports to provide 
//               insight that will help inform Sport Wales work. Your stories will be used to share 
//               examples of best practice and identify common themes and areas for improvement.
//             </p>
//           </div>
          
//           <div className="sw-card bg-white border-l-4 border-[--color-sw-green] p-6">
//             <div className="flex items-start mb-3">
//               <Shield className="h-6 w-6 text-[--color-sw-green] mr-2 flex-shrink-0 mt-1" />
//               <h2 className="text-lg font-bold text-[--color-sw-green]">Privacy & Confidentiality</h2>
//             </div>
//             <p className="text-gray-600">
//               Your stories will be seen by staff members behind the Sport Wales Athlete Panel. 
//               It provides a neutral space where you can share experiences you might feel 
//               uncomfortable discussing directly with your NGB.
//             </p>
//           </div>
//         </div>

//         {/* Access Code Section - Updated with clearer styling */}
//         <div className="sw-card max-w-md mx-auto shadow-lg border-t-4 border-[--color-sw-red]">
//           <h3 className="text-lg font-bold text-[--color-sw-red] mb-4 flex items-center">
//             <Users className="h-5 w-5 mr-2" />
//             Access Your Athlete Portal
//           </h3>
//           <form onSubmit={handleSubmit}>
//             <label className="sw-label block mb-2">
//               Enter your access code
//             </label>
//             <input
//               type="text"
//               className="sw-input w-full mb-4"
//               value={code}
//               onChange={(e) => setCode(e.target.value)}
//               placeholder="Enter access code"
//             />
//             {error && (
//               <div className="sw-notice text-[--color-sw-red] mb-4">
//                 {error}
//               </div>
//             )}
//             <button 
//               type="submit" 
//               className="sw-button sw-button-primary w-full flex items-center justify-center"
//               disabled={isLoading}
//             >
//               {isLoading ? 'Processing...' : 'Continue'}
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }


























// // src/pages/EnterPage.jsx
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { Info, Shield, Users } from 'lucide-react';

// export default function EnterPage() {
//   const [code, setCode] = useState('');
//   const [error, setError] = useState('');
//   const [isLoading, setIsLoading] = useState(false);
//   const navigate = useNavigate();
    
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsLoading(true);
//     setError('');
  
//     // For prototype, accept any code
//     if (code.trim().length > 0) {
//       // Simulate a brief loading state
//       await new Promise(resolve => setTimeout(resolve, 600));
//       navigate('/en/panel');
//     } else {
//       setError('Please enter the access code provided to you');
//     }
//     setIsLoading(false);
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 py-12">
//       <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//           {/* Left Column - Welcome & Purpose */}
//           <div className="space-y-6">
//             <header>
//               <h1 className="sw-heading-primary text-[--color-sw-blue] mb-4">
//                 Welcome to the Athlete's Voice
//               </h1>
//               <p className="text-lg text-gray-600">
//                 A space for all athletes to share their experiences and make a positive impact
//                 on Welsh sport.
//               </p>
//             </header>

//             {/* Purpose Section - New */}
//             <div className="bg-white rounded-lg shadow-sm p-6 border-l-4 border-[--color-sw-blue]">
//               <h2 className="text-xl font-bold text-[--color-sw-blue] mb-3">What is the Athlete's Voice?</h2>
//               <p className="text-gray-700 mb-4">
//                 The Athlete's Voice is a digital platform for athletes to share their stories from their sports to provide athlete insight that will help inform Sport Wales work. 
//               </p>
//               <p className="text-gray-700">
//                 Your stories will be used to share examples of best practice, and collated to identify common themes and areas for improvement. Sport Wales can then influence work within NGBs to improve environments and enhance athlete experiences within the Welsh system.
//               </p>
//             </div>

//             {/* Who Sees Your Stories - New */}
//             <div className="bg-white rounded-lg shadow-sm p-6 border-l-4 border-[--color-sw-green]">
//               <h2 className="text-xl font-bold text-[--color-sw-green] mb-3">Your Privacy Matters</h2>
//               <div className="flex items-start space-x-4 mb-3">
//                 <Shield className="h-6 w-6 text-[--color-sw-green] mt-1 flex-shrink-0" />
//                 <p className="text-gray-700">
//                   Your stories will be seen by the staff members behind the Sport Wales Athlete Panel, who will collate them to identify themes and present findings to inform project delivery.
//                 </p>
//               </div>
//               <p className="text-gray-700 text-sm italic">
//                 Full details about who can access your stories and how they'll be used are provided inside the portal.
//               </p>
//             </div>
//           </div>

//           {/* Right Column - Access Form */}
//           <div className="flex flex-col items-center justify-center space-y-8">
//             <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md border-t-4 border-[--color-sw-red]">
//               <h2 className="text-xl font-bold text-[--color-sw-blue] mb-6 text-center">Enter the Portal</h2>
              
//               <form onSubmit={handleSubmit} className="space-y-6">
//                 <div>
//                   <label className="sw-label block mb-2">
//                     Enter your access code
//                   </label>
//                   <input
//                     type="text"
//                     className="sw-input w-full"
//                     value={code}
//                     onChange={(e) => setCode(e.target.value)}
//                     placeholder="Enter access code"
//                   />
//                   <p className="mt-2 text-sm text-gray-500">
//                     Your access code was provided to you by Sport Wales.
//                   </p>
//                 </div>
                
//                 {error && (
//                   <div className="sw-notice text-[--color-sw-red]">
//                     {error}
//                   </div>
//                 )}
                
//                 <button 
//                   type="submit" 
//                   className="sw-button sw-button-primary w-full py-3 text-lg font-bold"
//                   disabled={isLoading}
//                 >
//                   {isLoading ? 'Verifying...' : 'Continue to Portal'}
//                 </button>
//               </form>
//             </div>

//             {/* What We Want to Achieve - New */}
//             <div className="bg-[--color-sw-blue]/5 rounded-lg p-6 w-full max-w-md">
//               <div className="flex items-start space-x-4">
//                 <Users className="h-6 w-6 text-[--color-sw-blue] mt-1 flex-shrink-0" />
//                 <div>
//                   <h2 className="text-lg font-bold text-[--color-sw-blue] mb-2">What we want to achieve</h2>
//                   <p className="text-gray-700">
//                     We want athletes' voices to be heard, and for their experiences to be used as insight to inform the work at Sport Wales, to help us deliver an athlete-centred approach and build more positive experiences within sport.
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }



// src/pages/EnterPage.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Info, Shield, Users } from 'lucide-react';

export default function EnterPage() {
  const [code, setCode] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
    
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
  
    // For prototype, accept any code
    if (code.trim().length > 0) {
      // Simulate a brief loading state
      await new Promise(resolve => setTimeout(resolve, 600));
      navigate('/en/panel');
    } else {
      setError('Please enter the access code provided to you');
    }
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Welcome Header - Stacked at top */}
        <div className="text-center mb-12">
          <h1 className="sw-heading-primary text-[--color-sw-blue] mb-4">
            Welcome to the Athlete's Voice
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A space for all athletes to share their experiences and make a positive impact
            on Welsh sport.
          </p>
        </div>

        {/* Access Form - Centered */}
        <div className="flex justify-center mb-16">
          <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md border-t-4 border-[--color-sw-red]">
            <h2 className="text-xl font-bold text-[--color-sw-blue] mb-6 text-center">Enter the Portal</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="sw-label block mb-2">
                  Enter your access code
                </label>
                <input
                  type="text"
                  className="sw-input w-full"
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                  placeholder="Enter access code"
                />
                <p className="mt-2 text-sm text-gray-500">
                  Your access code was provided to you by Sport Wales.
                </p>
              </div>
              
              {error && (
                <div className="sw-notice text-[--color-sw-red]">
                  {error}
                </div>
              )}
              
              <button 
                type="submit" 
                className="sw-button sw-button-primary w-full py-3 text-lg font-bold"
                disabled={isLoading}
              >
                {isLoading ? 'Verifying...' : 'Continue to Portal'}
              </button>
            </form>
          </div>
        </div>

        {/* Information Sections - Flex grid at bottom */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Purpose Section */}
          <div className="bg-white rounded-lg shadow-sm p-6 border-l-4 border-[--color-sw-blue]">
            <h2 className="text-xl font-bold text-[--color-sw-blue] mb-3">What is the Athlete's Voice?</h2>
            <p className="text-gray-700 mb-4">
              The Athlete's Voice is a digital platform for athletes to share their stories from their sports to provide athlete insight that will help inform Sport Wales work. 
            </p>
            <p className="text-gray-700">
              Your stories will be used to share examples of best practice, and collated to identify common themes and areas for improvement. Sport Wales can then influence work within NGBs to improve environments and enhance athlete experiences within the Welsh system.
            </p>
          </div>

           {/* What We Want to Achieve Section */}
           <div className="bg-white rounded-lg shadow-sm p-6 border-l-4 border-[--color-sw-green]">
            <h2 className="text-xl font-bold text-[--color-sw-blue] mb-3">What we want to achieve</h2>
            <div className="flex items-start space-x-4 mb-3">
              <Users className="h-6 w-6 text-[--color-sw-green] mt-1 flex-shrink-0" />
              <div>
                <p className="text-gray-700">
                  We want athletes' voices to be heard, and for their experiences to be used as insight to inform the work at Sport Wales, to help us deliver an athlete-centred approach and build more positive experiences within sport.
                </p>
              </div>
            </div>
            <p className="text-gray-700 text-sm mt-2">
              The portal is also a neutral space where athletes may share experiences they feel uncomfortable discussing with their NGB.
            </p>
          </div>

          {/* Privacy Section */}
          <div className="bg-white rounded-lg shadow-sm p-6 border-l-4 border-[--color-sw-yellow]">
            <h2 className="text-xl font-bold text-[--color-sw-blue] mb-3">Your Privacy Matters</h2>
            <div className="flex items-start space-x-4 mb-3">
              <Shield className="h-6 w-6 text-[--color-sw-yellow] mt-1 flex-shrink-0" />
              <p className="text-gray-700">
                Your stories will be seen by the staff members behind the Sport Wales Athlete Panel, who will collate them to identify themes and present findings to inform project delivery.
              </p>
            </div>
            <p className="text-gray-700 text-sm italic">
              Full details about who can access your stories and how they'll be used are provided inside the portal.
            </p>
          </div>

         
        </div>
      </div>
    </div>
  );
}