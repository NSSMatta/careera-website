import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CompanyLogos from './components/CompanyLogos';
import WhatWeOffer from './components/WhatWeOffer';
import HowItWorks from './components/HowItWorks';
import Pricing from './components/Pricing';
import LimitedOffer from './components/LimitedOffer';
import Footer from './components/Footer';
import HowItWorksPage from './pages/HowItWorksPage';
import SuccessStoriesPage from './pages/SuccessStoriesPage';
import FAQPage from './pages/FAQPage';
import ResourcesPage from './pages/ResourcesPage';
import './App.css';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <CompanyLogos />
      <WhatWeOffer />
      <HowItWorks />
      <Pricing />
      <LimitedOffer />
      <Footer />
    </div>
  );
};

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/how-it-works" element={<HowItWorksPage />} />
        <Route path="/success-stories" element={<SuccessStoriesPage />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/resources" element={<ResourcesPage />} />
        <Route path="/resources/*" element={<ResourcesPage />} />
        <Route path="/legal/*" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;