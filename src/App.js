import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import './App.css';
import LandingPage from './pages/LandingPage';
import CaaxPage from './pages/Caax';
import Footer from './components/Footer';
import Krishisat from './pages/Krishisat';
import BlogDetails from './pages/BlogDetails';
import BlogSection from './pages/Blog';
import Enablers from './pages/Enablers';
import PrivacyPolicy from './pages/privacy-policy';
import Contact from './pages/Contact';
import ScrollToTop from './components/ScrollToTop'; 
import AnalyticsTracker from './analytics/analytics';

const App = () => {
  return (
    <Router>
      <Navbar />
      <ScrollToTop /> 
      <AnalyticsTracker/>
      <div className="container mx-auto">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/caax" element={<CaaxPage />} />
          <Route path="/krishisat" element={<Krishisat />} />
          <Route path="/blog" element={<BlogSection />} /> 
          <Route path="/blog/:id" element={<BlogDetails />} /> 
          <Route path="/enablers" element={<Enablers />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
