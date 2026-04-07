import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HowItWorks from '../components/HowItWorks';
import { CheckCircle2, Zap, Users, Target } from 'lucide-react';

const HowItWorksPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <section className="pt-32 pb-16 bg-gradient-to-br from-blue-50 via-white to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            How Careera
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Gets You Hired
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our proven 4-step process transforms your career prospects and connects you with top employers.
          </p>
        </div>
      </section>

      <HowItWorks />

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
            Why Our Process Works
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: CheckCircle2, title: 'Proven Track Record', description: 'Hundreds of successful placements across top companies' },
              { icon: Zap, title: 'Fast Results', description: 'Average placement time of just 3 months' },
              { icon: Users, title: 'Expert Team', description: 'Dedicated specialists for every step' },
              { icon: Target, title: 'Targeted Approach', description: 'Focus on companies actively hiring' }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HowItWorksPage;