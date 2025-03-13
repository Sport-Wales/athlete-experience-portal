// src/pages/LandingPage.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import { Users, MessageCircle, Share2,} from 'lucide-react';

const panelMembers = [
  {
    id: 1,
    name: "Sarah Jones",
    sport: "Swimming",
    achievement: "Former Commonwealth Athlete",
    quote: "I'm passionate about helping athletes have their voices heard.",
    image: "/api/placeholder/200/200"
  },
  {
    id: 2,
    name: "David Williams",
    sport: "Athletics",
    achievement: "National Champion",
    quote: "Every athlete's journey matters. Share yours with us.",
    image: "/api/placeholder/200/200"
  },
  {
    id: 3,
    name: "Emma Hughes",
    sport: "Hockey",
    achievement: "Olympic Team Member",
    quote: "Together we can make Welsh sport even better.",
    image: "/api/placeholder/200/200"
  }
];

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">

      {/* How It Works Section - Horizontal layout */}
      <section className="py-4 bg-sw-light-grey">
        <div className="w-[90%] mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-[--color-sw-blue] mb-4">
            How Story Sharing Works
          </h2>
          <div className="grid grid-cols-1 pt-4 md:grid-cols-3 gap-8 lg:gap-6 max-w-8xl mx-auto">
            {[
              {
                title: "Share Your Experience",
                description: "Tell us about your journey in Welsh sport - your achievements, challenges, and learnings."
              },
              {
                title: "Make an Impact",
                description: "Your insights help identify what's working well and what needs to change in Welsh sport."
              },
              {
                title: "Create Positive Change",
                description: "Together, we use these experiences to improve support and create better sporting environments."
              }
            ].map((step, index) => (
              <div key={index} className="flex items-start space-x-4 ">
                <div className="w-10 h-10 rounded-full bg-[--color-sw-green] text-white 
                              flex items-center justify-center text-md shrink-0">
                  {index + 1}
                </div>
                <div>
                  <h3 className="text-md font-bold text-[--color-sw-blue] mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>



       {/* Hero Section - Redesigned with better spacing */}
    <section className="py-12  mx-auto bg-white from-white to-gray-50">
      <div className="text-center max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold text-[--color-sw-blue] mb-4">
          Your Voice Matters
        </h1>
        <p className="text-md md:text-lg text-gray-600 max-w-3xl mx-auto mb-12">
          Join the athlete panel in shaping the future of Welsh sport. Share your experiences,
          challenges, and victories.
        </p>
        
        {/* Enhanced CTA Container */}
          <Link 
            to="/en/engage"
            
          >
        <div className="relative items-center justify-center py-6 my-4 group">
          {/* Decorative skewed background */}
          <div className="absolute inset-0 bg-[--color-sw-blue] z-0 cursor-pointer rounded-xl w-[50%] mr-auto ml-auto"></div>

          {/* Expanding background on hover */}
          <div
            className="absolute inset-0 bg-[--color-sw-red] 
                      transition-all duration-300 ease-out origin-center cursor-pointer
                      scale-0 group-hover:scale-100 z-10 rounded-xl w-[50%] mr-auto ml-auto">
          </div>

          {/* Call to Action Link */}
            <span className="relative z-20 inline-block text-lg font-bold
                      text-white group-hover:text-white
                      transition-transform duration-300 ease-out
                      group-hover:scale-105 active:scale-95"> 
            Share Your Story
              
              </span>
        </div>
          </Link>

      </div>
    </section>

    {/* How Your Stories Are Used */}
    <section className="py-10 bg-[--color-sw-light-grey]">
        <div className="w-[95%] max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-[--color-sw-blue] mb-6">
            How Your Stories Are Used
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm h-full border-l-2 border-[--color-sw-blue]">
              <div className="flex items-center mb-4">
                <Users className="h-6 w-6 text-[--color-sw-blue] mr-2" />
                <h3 className="text-lg font-bold text-[--color-sw-blue]">Who Sees Your Stories</h3>
              </div>
              <p className="text-gray-600">
                Your stories will be seen by staff members behind the Sport Wales Athlete Panel, 
                who will identify themes and present findings to the Institute leadership team. 
                Other stakeholders within Sport Wales (e.g., governance or safeguarding) may be 
                involved depending on the context.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm h-full border-l-2 border-[--color-sw-green]">
              <div className="flex items-center mb-4">
                <Share2 className="h-6 w-6 text-[--color-sw-green] mr-2" />
                <h3 className="text-lg font-bold text-[--color-sw-green]">How We Use Your Insight</h3>
              </div>
              <p className="text-gray-600">
                We use your stories to share examples of best practice and identify areas for 
                improvement. This insight helps us influence work within National Governing 
                Bodies to improve environments and enhance athlete experiences within the 
                Welsh system.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm h-full border-l-2 border-[--color-sw-red]">
              <div className="flex items-center mb-4">
                <MessageCircle className="h-6 w-6 text-[--color-sw-red] mr-2" />
                <h3 className="text-lg font-bold text-[--color-sw-red]">Request Contact</h3>
              </div>
              <p className="text-gray-600">
                If you request to be contacted about your experience, a member of Sport Wales 
                staff that runs the Athlete Panel will reach out to you for further discussions. 
                This provides an opportunity to dive deeper into your experiences and concerns.
              </p>
            </div>
          </div>
        </div>
      </section>

    {/* Impact Stories Section - Simplified */}
    <section className="py-10 bg-white">
        <div className="w-[90%] mx-auto">
          <h2 className="text-2xl md:text-2xl font-bold text-center text-[--color-sw-blue] mb-2">
            The Impact of Sharing
          </h2>
          <p className="text-lg text-[--color-sw-blue] text-center mb-8 pt-2 max-w-2xl mx-auto">
                  Join other athletes in shaping the future of Welsh sport. Your experience
                  matters and can make a real difference.
                </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6 max-w-2xl mx-auto">
            <div className="sw-card bg-[--color-sw-blue] text-white p-6 rounded-lg">
              <h3 className="text-md text-center font-bold mb-3">
                Make an Impact
              </h3>
              <p className="text-white/90">
                Your insights help us understand what's working well and what needs to change in Welsh sport.
              </p>
            </div>
            <div className="sw-card bg-[--color-sw-green] text-white p-6 rounded-lg">
              <h3 className="text-md text-center font-bold mb-3">
                Create Change
              </h3>
              <p className="text-white/90">
                We use your feedback to improve athlete support and create better sporting environments across Wales.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Panel Members Section - Better grid layout */}
      <section className="pt-8 bg-white">
        <div className="w-[86%] mx-auto">
          <h2 className="text-2xl md:text-2xl font-bold text-center text-[--color-sw-blue] mb-6">
            Meet Your Panel Members
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
            {panelMembers.map(member => (
              <div key={member.id} className="sw-card shadow-lg transition-all p-4">
                <div className="flex items-center space-x-4">
                 
                  <div>
                    <h3 className="text-m font-bold text-[--color-sw-blue]">
                      {member.name}
                    </h3>
                    <p className="text-[--color-sw-green] font-small">
                      {member.sport}
                    </p>
                    <p className="text-sm text-gray-600">
                      {member.achievement}
                    </p>
                  </div>
                </div>
                <p className="italic text-gray-600 mt-3 text-sm">
                  "{member.quote}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}












































// // src/pages/LandingPage.jsx
// import React from 'react';
// import { Link } from 'react-router-dom';
// import { Users, Target, Shield, MessageCircle, Share2, TrendingUp, CheckCircle } from 'lucide-react'; // Adding icons

// const panelMembers = [
//   {
//     id: 1,
//     name: "Sarah Jones",
//     sport: "Swimming",
//     achievement: "Former Commonwealth Athlete",
//     quote: "I'm passionate about helping athletes have their voices heard.",
//     image: "/api/placeholder/200/200"
//   },
//   {
//     id: 2,
//     name: "David Williams",
//     sport: "Athletics",
//     achievement: "National Champion",
//     quote: "Every athlete's journey matters. Share yours with us.",
//     image: "/api/placeholder/200/200"
//   },
//   {
//     id: 3,
//     name: "Emma Hughes",
//     sport: "Hockey",
//     achievement: "Olympic Team Member",
//     quote: "Together we can make Welsh sport even better.",
//     image: "/api/placeholder/200/200"
//   }
// ];

// export default function LandingPage() {
//   return (
//     <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
//       {/* Hero Section - Redesigned with better spacing */}
//       <section className="py-12 mx-auto bg-white from-white to-gray-50">
//         <div className="text-center max-w-4xl mx-auto px-4">
//           <h1 className="text-4xl md:text-5xl font-extrabold text-[--color-sw-blue] mb-4">
//             Your Voice Matters
//           </h1>
//           <p className="text-md md:text-lg text-gray-600 max-w-3xl mx-auto mb-8">
//             Join the athlete panel in shaping the future of Welsh sport. Share your experiences,
//             challenges, and victories.
//           </p>
          
//           {/* Purpose Statement - New section with Nancy's content */}
//           <div className="bg-[--color-sw-blue-light] text-[--color-sw-blue] p-6 rounded-lg mb-8 max-w-3xl mx-auto">
//             <h2 className="text-xl font-bold mb-3 flex items-center justify-center">
//               <Target className="h-5 w-5 mr-2" />
//               What We Want to Achieve
//             </h2>
//             <p className="text-md">
//               We want athletes' voices to be heard, and for their experiences to be used as insight 
//               to inform the work at Sport Wales. This helps us deliver an athlete-centred approach 
//               and build more positive experiences within sport across Wales.
//             </p>
//           </div>
          
//           {/* Enhanced CTA Container */}
//           <Link to="/en/engage">
//             <div className="relative items-center justify-center py-6 my-4 group">
//               {/* Decorative skewed background */}
//               <div className="absolute inset-0 bg-[--color-sw-blue] z-0 cursor-pointer rounded-xl w-[50%] mr-auto ml-auto"></div>

//               {/* Expanding background on hover */}
//               <div
//                 className="absolute inset-0 bg-[--color-sw-red] 
//                           transition-all duration-300 ease-out origin-center cursor-pointer
//                           scale-0 group-hover:scale-100 z-10 rounded-xl w-[50%] mr-auto ml-auto">
//               </div>

//               {/* Call to Action Link */}
//               <span className="relative z-20 inline-block text-lg font-bold
//                           text-white group-hover:text-white
//                           transition-transform duration-300 ease-out
//                           group-hover:scale-105 active:scale-95"> 
//                 Share Your Story
//               </span>
//             </div>
//           </Link>
//         </div>
//       </section>

//       {/* How Your Stories Are Used - Based on Nancy's information */}
//       <section className="py-10 bg-[--color-sw-light-grey]">
//         <div className="w-[90%] max-w-5xl mx-auto">
//           <h2 className="text-2xl md:text-3xl font-bold text-center text-[--color-sw-blue] mb-6">
//             How Your Stories Are Used
//           </h2>
          
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             <div className="bg-white p-6 rounded-lg shadow-sm h-full">
//               <div className="flex items-center mb-4">
//                 <Users className="h-6 w-6 text-[--color-sw-blue] mr-2" />
//                 <h3 className="text-lg font-bold text-[--color-sw-blue]">Who Sees Your Stories</h3>
//               </div>
//               <p className="text-gray-600">
//                 Your stories will be seen by staff members behind the Sport Wales Athlete Panel, 
//                 who will identify themes and present findings to the Institute leadership team. 
//                 Other stakeholders within Sport Wales (e.g., governance or safeguarding) may be 
//                 involved depending on the context.
//               </p>
//             </div>
            
//             <div className="bg-white p-6 rounded-lg shadow-sm h-full">
//               <div className="flex items-center mb-4">
//                 <Share2 className="h-6 w-6 text-[--color-sw-green] mr-2" />
//                 <h3 className="text-lg font-bold text-[--color-sw-green]">How We Use Your Insight</h3>
//               </div>
//               <p className="text-gray-600">
//                 We use your stories to share examples of best practice and identify areas for 
//                 improvement. This insight helps us influence work within National Governing 
//                 Bodies to improve environments and enhance athlete experiences within the 
//                 Welsh system.
//               </p>
//             </div>
            
//             <div className="bg-white p-6 rounded-lg shadow-sm h-full">
//               <div className="flex items-center mb-4">
//                 <MessageCircle className="h-6 w-6 text-[--color-sw-red] mr-2" />
//                 <h3 className="text-lg font-bold text-[--color-sw-red]">Request Contact</h3>
//               </div>
//               <p className="text-gray-600">
//                 If you request to be contacted about your experience, a member of Sport Wales 
//                 staff that runs the Athlete Panel will reach out to you for further discussions. 
//                 This provides an opportunity to dive deeper into your experiences and concerns.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* How It Works Section - Horizontal layout */}
//       <section className="py-10 bg-white">
//         <div className="w-[90%] mx-auto">
//           <h2 className="text-2xl md:text-3xl font-bold text-center text-[--color-sw-blue] mb-4">
//             How Story Sharing Works
//           </h2>
//           <div className="grid grid-cols-1 pt-4 md:grid-cols-3 gap-8 lg:gap-6 max-w-5xl mx-auto">
//             {[
//               {
//                 icon: <Share2 className="h-5 w-5 text-white" />,
//                 title: "Share Your Experience",
//                 description: "Tell us about your journey in Welsh sport - your achievements, challenges, and learnings."
//               },
//               {
//                 icon: <TrendingUp className="h-5 w-5 text-white" />,
//                 title: "Make an Impact",
//                 description: "Your insights help identify what's working well and what needs to change in Welsh sport."
//               },
//               {
//                 icon: <CheckCircle className="h-5 w-5 text-white" />,
//                 title: "Create Positive Change",
//                 description: "Together, we use these experiences to improve support and create better sporting environments."
//               }
//             ].map((step, index) => (
//               <div key={index} className="flex items-start space-x-4 ">
//                 <div className="w-10 h-10 rounded-full bg-[--color-sw-green] text-white 
//                               flex items-center justify-center text-md shrink-0">
//                   {step.icon}
//                 </div>
//                 <div>
//                   <h3 className="text-md font-bold text-[--color-sw-blue] mb-2">
//                     {step.title}
//                   </h3>
//                   <p className="text-sm text-gray-600">
//                     {step.description}
//                   </p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Impact Stories Section - Simplified */}
//       <section className="py-10 bg-[--color-sw-light-grey]">
//         <div className="w-[90%] mx-auto">
//           <h2 className="text-2xl md:text-2xl font-bold text-center text-[--color-sw-blue] mb-2">
//             The Impact of Sharing
//           </h2>
//           <p className="text-lg text-[--color-sw-blue] text-center mb-8 pt-2 max-w-2xl mx-auto">
//             Join other athletes in shaping the future of Welsh sport. Your experience
//             matters and can make a real difference.
//           </p>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6 max-w-2xl mx-auto">
//             <div className="sw-card bg-[--color-sw-blue] text-white p-6 rounded-lg">
//               <h3 className="text-md text-center font-bold mb-3">
//                 Make an Impact
//               </h3>
//               <p className="text-white/90">
//                 Your insights help us understand what's working well and what needs to change in Welsh sport.
//               </p>
//             </div>
//             <div className="sw-card bg-[--color-sw-green] text-white p-6 rounded-lg">
//               <h3 className="text-md text-center font-bold mb-3">
//                 Create Change
//               </h3>
//               <p className="text-white/90">
//                 We use your feedback to improve athlete support and create better sporting environments across Wales.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Panel Members Section - Better grid layout */}
//       <section className="pt-8 pb-12 bg-white">
//         <div className="w-[86%] mx-auto">
//           <h2 className="text-2xl md:text-2xl font-bold text-center text-[--color-sw-blue] mb-6">
//             Meet Your Panel Members
//           </h2>
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
//             {panelMembers.map(member => (
//               <div key={member.id} className="sw-card shadow-lg transition-all p-4 hover:shadow-xl">
//                 <div className="flex items-center space-x-4">
//                   <div>
//                     <h3 className="text-m font-bold text-[--color-sw-blue]">
//                       {member.name}
//                     </h3>
//                     <p className="text-[--color-sw-green] font-small">
//                       {member.sport}
//                     </p>
//                     <p className="text-sm text-gray-600">
//                       {member.achievement}
//                     </p>
//                   </div>
//                 </div>
//                 <p className="italic text-gray-600 mt-3 text-sm">
//                   "{member.quote}"
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }