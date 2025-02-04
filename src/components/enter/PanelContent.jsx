// src/components/enter/PanelContent.jsx
import React from 'react';
import PanelMembers from './PanelMembers';
import StoryImpact from './StoryImpact';
import ServiceInfo from './ServiceInfo';

export default function PanelContent() {
  return (
    <div className="space-y-8">
      {/* Panel Members Section */}
      <PanelMembers />

      {/* Service Information */}
      <ServiceInfo />

      {/* Impact Stories */}
      <StoryImpact />
    </div>
  );
}