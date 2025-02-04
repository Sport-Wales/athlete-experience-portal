// src/components/enter/PanelMembers.jsx
import React from 'react';

// Dummy data for panel members
const panelMembers = [
  {
    id: 1,
    name: "Sarah Jones",
    sport: "Swimming",
    bio: "Former national champion helping athletes navigate their sporting journey.",
    image: "/api/placeholder/150/150"
  },
  {
    id: 2,
    name: "David Williams",
    sport: "Athletics",
    bio: "Passionate about creating positive change in Welsh sport.",
    image: "/api/placeholder/150/150"
  },
  // Add more dummy panel members
];

export default function PanelMembers() {
  return (
    <section className="py-8">
      <h2 className="sw-heading-secondary text-center mb-8">
        Meet Your Panel Members
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {panelMembers.map(member => (
          <div key={member.id} className="sw-card hover:shadow-lg transition-shadow">
            <img 
              src={member.image}
              alt={member.name}
              className="w-32 h-32 rounded-full mx-auto mb-4"
            />
            <h3 className="font-bold text-lg text-[--color-sw-blue] mb-2">
              {member.name}
            </h3>
            <p className="text-[--color-sw-green] font-medium mb-2">
              {member.sport}
            </p>
            <p className="text-gray-600">
              {member.bio}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}