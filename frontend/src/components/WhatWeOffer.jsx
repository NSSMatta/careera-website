import React from 'react';
import { FileCheck, Megaphone, Calendar, BarChart3 } from 'lucide-react';

const WhatWeOffer = () => {
  const offerings = [
    {
      icon: FileCheck,
      title: 'Profile Optimization',
      description: 'Professional resume, LinkedIn, and portfolio enhancement to stand out to hiring managers.',
    },
    {
      icon: Megaphone,
      title: 'Active Marketing',
      description: 'Direct outreach to hiring managers and recruiters at top tech companies.',
    },
    {
      icon: Calendar,
      title: 'Interview Coordination',
      description: 'Complete interview management from scheduling to offer negotiations.',
    },
    {
      icon: BarChart3,
      title: 'Campaign Analytics',
      description: 'Real-time tracking of applications, responses, and interview progress.',
    },
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-blue-600 font-semibold uppercase tracking-wider text-sm mb-4">
            WHAT WE OFFER
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Complete Career
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Acceleration Services
            </span>
          </h2>
        </div>

        {/* Offerings Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {offerings.map((offer, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-white to-blue-50 p-8 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 group text-center"
            >
              {/* Icon */}
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center mb-6 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 mx-auto">
                <offer.icon className="w-8 h-8 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {offer.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {offer.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeOffer;
