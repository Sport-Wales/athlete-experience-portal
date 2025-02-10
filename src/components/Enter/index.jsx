// // src/components/enter/PanelMembers.jsx
// import React from 'react';
// import PanelMembers from './PanelMembers';
// import StoryImpact from './StoryImpact';
// import ServiceInfo from './ServiceInfo';

// export default function PanelContent() {
//   return (
//     <div className="space-y-8">
//       {/* Panel Members Section */}
//       <PanelMembers />

//       {/* Service Information */}
//       <ServiceInfo />

//       {/* Impact Stories */}
//       <StoryImpact />
//     </div>
//   );
// }


// File location: src/pages/EnterPage.jsx

import React from 'react';
import { Link } from 'react-router-dom';

// Dummy data for panel members
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

// Impact stories data
const impactStories = [
  {
    id: 1,
    title: "Mental Health Support",
    description: "Your feedback led to new wellbeing resources across all sports",
    impact: "150+ athletes supported",
    icon: "🎯"
  },
  {
    id: 2,
    title: "Training Flexibility",
    description: "Athletes' stories helped create more balanced programs",
    impact: "40% better work-life balance",
    icon: "⚡"
  }
];

export default function LandindPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <section className="py-16 px-4">
        <div className="sw-container text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold text-[--color-sw-blue] mb-6">
            Your Voice Matters
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-12">
            Join the athlete panel in shaping the future of Welsh sport. Share your experiences,
            challenges, and victories.
          </p>
          <Link 
            to="/en/engage"
            className="sw-button sw-button-primary text-xl py-6 px-12 rounded-full 
                     shadow-lg transform transition-all hover:scale-105 
                     hover:shadow-xl inline-block"
          >
            Share Your Story
          </Link>
        </div>
      </section>

      {/* Panel Members Section */}
      <section className="py-16 bg-white">
        <div className="sw-container">
          <h2 className="text-3xl font-bold text-center text-[--color-sw-blue] mb-12">
            Meet Your Panel Members
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {panelMembers.map(member => (
              <div key={member.id} className="sw-card hover:shadow-lg transition-all">
                <img 
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-bold text-[--color-sw-blue] mb-1">
                  {member.name}
                </h3>
                <p className="text-[--color-sw-green] font-medium mb-2">
                  {member.sport}
                </p>
                <p className="text-sm text-gray-600 mb-3">
                  {member.achievement}
                </p>
                <p className="italic text-gray-600">
                  "{member.quote}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16">
        <div className="sw-container">
          <h2 className="text-3xl font-bold text-center text-[--color-sw-blue] mb-12">
            How Story Sharing Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-[--color-sw-green] text-white 
                            flex items-center justify-center text-2xl mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-bold text-[--color-sw-blue] mb-3">
                Share Your Experience
              </h3>
              <p className="text-gray-600">
                Tell us about your journey in Welsh sport - your achievements, challenges,
                and learnings along the way.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-[--color-sw-green] text-white 
                            flex items-center justify-center text-2xl mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-bold text-[--color-sw-blue] mb-3">
                Make an Impact
              </h3>
              <p className="text-gray-600">
                Your insights help identify what's working well and what needs to
                change in Welsh sport.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-[--color-sw-green] text-white 
                            flex items-center justify-center text-2xl mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-bold text-[--color-sw-blue] mb-3">
                Create Positive Change
              </h3>
              <p className="text-gray-600">
                Together, we use these experiences to improve support and create
                better sporting environments across Wales.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stories Section */}
      <section className="py-16 bg-white">
        <div className="sw-container">
          <h2 className="text-3xl font-bold text-center text-[--color-sw-blue] mb-12">
            The Impact of Sharing
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {impactStories.map(story => (
              <div 
                key={story.id} 
                className="sw-card bg-gradient-to-br from-[--color-sw-green] to-[--color-sw-blue] 
                         text-white p-8 rounded-lg hover:shadow-xl transition-all"
              >
                <div className="text-4xl mb-4">{story.icon}</div>
                <h3 className="text-2xl font-bold mb-3">
                  {story.title}
                </h3>
                <p className="mb-4 text-white/90">
                  {story.description}
                </p>
                <div className="text-2xl font-bold">
                  {story.impact}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-gradient-to-r from-[--color-sw-blue] to-[--color-sw-green]">
        <div className="sw-container text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Share Your Story?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join other athletes in shaping the future of Welsh sport. Your experience
            matters and can make a real difference.
          </p>
          <Link 
            to="/en/engage"
            className="sw-button bg-white text-[--color-sw-blue] text-xl py-6 px-12 
                     rounded-full shadow-lg transform transition-all hover:scale-105 
                     hover:shadow-xl inline-block font-bold"
          >
            Share Your Story
          </Link>
        </div>
      </section>
    </div>
  );
}