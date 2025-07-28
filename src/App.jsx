import React from 'react';
import HeroSection from './sections/HeroSection';
import Navbar from './components/Navbar';
import WorkExperience from './sections/WorkExperience';
import ProjectsSection from './sections/ProjectsSection';
import Footer from './sections/Footer';
import SkillsSection from './sections/SkillsSection';
import SocialLinksSection from './sections/ SocialLinksSection';

export default function App() {
  return (
    <div className="bg-[#0e0c1d] text-white min-h-screen font-sans">
      <Navbar />
      <main>
        <HeroSection />       
        <SkillsSection/>
        <WorkExperience />
        <ProjectsSection />
        <SocialLinksSection/>
      </main>
      <Footer />
    </div>
  );
}
