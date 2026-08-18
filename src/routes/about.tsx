import React from 'react';
import About from '../components/sections/About';
import Skills from '../components/sections/Skills';
import Experience from '../components/sections/Experience';
import Certificates from '../components/sections/Certificates';
import Achievements from '../components/sections/Achievements';
import CodingProfiles from '../components/sections/CodingProfiles';

export const AboutRoute: React.FC = () => {
  return (
    <div className="space-y-12">
      <About />
      <Skills />
      <Experience />
      <Certificates />
      <Achievements />
      <CodingProfiles />
    </div>
  );
};

export default AboutRoute;
