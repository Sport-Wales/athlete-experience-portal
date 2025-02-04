// src/components/enter/StoryImpact.jsx
import React from 'react';
import { Link } from 'react-router-dom';

// Dummy data for impact stories
const impactStories = [
  {
    id: 1,
    title: "Improving Mental Health Support",
    description: "Athletes' feedback led to enhanced mental health resources across all sports.",
    metric: "250+ athletes supported"
  },
  {
    id: 2,
    title: "Training Schedule Flexibility",
    description: "Your stories helped create more balanced training programs.",
    metric: "40% better work-life balance"
  }
];

export default function StoryImpact() {
  return (
    <section className="py-8">
      <div className="sw-card max-w-3xl mx-auto">
        <h2 className="sw-heading-secondary mb-6">
          The Impact of Sharing
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {impactStories.map(story => (
            <div key={story.id} className="sw-highlight p-6">
              <h3 className="font-bold text-xl mb-2">
                {story.title}
              </h3>
              <p className="mb-4">
                {story.description}
              </p>
              <div className="font-bold text-2xl">
                {story.metric}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link 
            to="/en/engage" 
            className="sw-button sw-button-primary inline-block"
          >
            Share Your Story
          </Link>
        </div>
      </div>
    </section>
  );
}