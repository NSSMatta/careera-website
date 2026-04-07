import React from 'react';
import { Zap, Eye, UserCheck, Award } from 'lucide-react';
import { Button } from './ui/button';

const EdgeSection = () => {
  const benefits = [
    {
      number: '01',
      icon: Zap,
      title: 'Faster Placement Process',
      description:
        'Get hired in weeks, not months, through direct marketing to employers who are actively hiring for your skills.',
    },
    {
      number: '02',
      icon: Eye,
      title: 'Hidden Job Market Access',
      description: 'Access positions before they are posted publicly through our exclusive employer network and insider connections.',
    },
    {
      number: '03',
      icon: UserCheck,
      title: 'Professional Marketing Team',
      description:
        'Dedicated specialists actively promoting your profile to relevant companies and building relationships with hiring managers.',
    },
    {
      number: '04',
      icon: Award,
      title: 'Complete Campaign Analytics',
      description:
        'Track which companies viewed your profile, interview requests, and offer status through our comprehensive dashboard.',
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-blue-50 via-indigo-50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-200 rounded-full filter blur-3xl opacity-20"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-200 rounded-full filter blur-3xl opacity-20"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Stats Banner */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-12 mb-16 text-center shadow-2xl transform hover:scale-105 transition-transform duration-500">
          <p className="text-white/80 text-sm uppercase tracking-wider mb-4">
            Average Time to Job Offer
          </p>
          <h3 className="text-6xl font-bold text-white mb-6">3 Months</h3>
          <Button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-6 text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
            Start My Marketing Campaign
          </Button>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 group"
            >
              <div className="flex items-start space-x-6">
                {/* Number */}
                <div className="flex-shrink-0">
                  <div className="text-7xl font-bold bg-gradient-to-br from-blue-600 to-indigo-600 bg-clip-text text-transparent opacity-20 group-hover:opacity-30 transition-opacity">
                    {benefit.number}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-xl flex items-center justify-center mb-4">
                    <benefit.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EdgeSection;