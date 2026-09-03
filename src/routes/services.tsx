import React from 'react';
import Services from '../components/sections/Services';
import WhyWorkWithMe from '../components/sections/WhyWorkWithMe';
import FreelanceCTA from '../components/sections/FreelanceCTA';

export const ServicesRoute: React.FC = () => {
  return (
    <div className="space-y-6">
      <Services />
      <WhyWorkWithMe />
      <FreelanceCTA />
    </div>
  );
};

export default ServicesRoute;
