import React from 'react';
import HeroSection from '../components/HeroSection';
import FeaturedProjectsCallout from '../components/FeaturedProjectsCallout';
import FrontendKnowledge from '../components/FrontendKnowledge';
import BackendKnowledge from '../components/BackendKnowledge';
import AboutSection from '../components/AboutSection';
import ContactsSection from '../components/ContactsSection';

export default function HomePage({ onNavigate, onCopyEmail, onShowToast }) {
  return (
    <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-24 space-y-28">
      <HeroSection onNavigate={onNavigate} onCopyEmail={onCopyEmail} />
      <FeaturedProjectsCallout onNavigate={onNavigate} />
      <FrontendKnowledge />
      <BackendKnowledge />
      <AboutSection />
      <ContactsSection onCopyEmail={onCopyEmail} onShowToast={onShowToast} />
    </main>
  );
}

