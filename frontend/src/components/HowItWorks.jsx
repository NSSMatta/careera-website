import React from 'react';
import { FileCheck, Target, Megaphone, Handshake } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      number: '01',
      icon: FileCheck,
      title: 'Profile Transformation',
      description:
        'We optimize your resume, LinkedIn, and GitHub to industry standards',
    },
    {
      number: '02',
      icon: Target,
      title: 'Marketing Strategy',
      description:
        'Develop targeted outreach plan to companies hiring for your skills',
    },
    {
      number: '03',
      icon: Megaphone,
      title: 'Active Promotion',
      description:
        'Our team markets your profile directly to hiring managers and recruiters',
    },
    {
      number: '04',
      icon: Handshake,
      title: 'Interview & Placement',
      description:
        'Coordinate interviews and support you through offer negotiations',
    },
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-blue-600 font-semibold uppercase tracking-wider text-sm mb-4">
            HOW IT WORKS
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            From Profile to Placement
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              in 4 Steps
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Our marketing and placement process gets you hired faster than
            traditional job searching.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connection line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-200 via-indigo-200 to-blue-200 transform -translate-y-1/2"></div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {steps.map((step, index) => (
              <div
                key={index}
                className="relative group"
                style={{
                  animationDelay: `${index * 150}ms`,
                }}
              >
                {/* Card */}
                <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 border border-gray-100 relative z-10">
                  {/* Number badge */}
                  <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold text-sm">
                      {step.number}
                    </span>
                  </div>

                  {/* Icon */}
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl flex items-center justify-center mb-6 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    <step.icon className="w-8 h-8 text-blue-600" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;