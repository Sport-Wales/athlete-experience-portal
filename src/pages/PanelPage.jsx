import React from 'react';
import PanelContent from '../components/enter/PanelContent';

export default function PanelPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <header className="text-center mb-12">
        <h1 className="sw-heading-primary text-[--color-sw-blue] mb-4">
          The Athlete Panel
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Meet our panel members and discover how your voice can make a difference.
        </p>
      </header>

      {/* Panel Content */}
      <PanelContent />
    </div>
  );
}