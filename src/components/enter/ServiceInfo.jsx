// src/components/enter/ServiceInfo.jsx
import React from 'react';

export default function ServiceInfo() {
  return (
    <section className="py-8">
      <div className="sw-card max-w-3xl mx-auto">
        <h2 className="sw-heading-secondary mb-6">
          How Story Sharing Works
        </h2>
        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <div className="w-8 h-8 rounded-full bg-[--color-sw-green] flex items-center justify-center text-white shrink-0">
              1
            </div>
            <div>
              <h3 className="font-bold text-[--color-sw-blue] mb-2">
                Share Your Experience
              </h3>
              <p className="text-gray-600">
                Tell us about your journey, challenges, and victories in Welsh sport. 
                Your story matters and can help shape the future.
              </p>
            </div>
          </div>
          
          <div className="flex items-start gap-4">
            <div className="w-8 h-8 rounded-full bg-[--color-sw-green] flex items-center justify-center text-white shrink-0">
              2
            </div>
            <div>
              <h3 className="font-bold text-[--color-sw-blue] mb-2">
                Make an Impact
              </h3>
              <p className="text-gray-600">
                Your insights help us understand what's working and what needs to change
                in Welsh sport.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-8 h-8 rounded-full bg-[--color-sw-green] flex items-center justify-center text-white shrink-0">
              3
            </div>
            <div>
              <h3 className="font-bold text-[--color-sw-blue] mb-2">
                Create Positive Change
              </h3>
              <p className="text-gray-600">
                We use your feedback to improve athlete support and create better
                sporting environments across Wales.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}