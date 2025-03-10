import React from 'react';
import HomePage from './Home';
import BlogSection from './Blog';
import Contact from './Contact';
import Vision from './Vision';

const LandingPage = () => {
  return (
    <div>
      <HomePage />
      <Vision /> 
      <BlogSection />
      <Contact/>
    </div>
  );
};

export default LandingPage;
