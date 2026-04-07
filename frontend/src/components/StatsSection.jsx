import React from 'react';
import { Filter, Mail, TrendingUp, Target } from 'lucide-react';
import { Button } from './ui/button';

const StatsSection = () => {
  const features = [
    {
      icon: Target,
      title: 'Targeted leads',
      description: 'Connect with verified hiring managers',
    },
    {
      icon: Filter,
      title: 'Smart filtering',
      description: 'Find companies matching your profile',
    },
    {
      icon: Mail,
      title: 'AI email drafting',
      description: 'Personalized outreach that converts',
    },
    {
      icon: TrendingUp,
      title: 'Response tracking',
      description: 'Monitor and optimize your campaigns',
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-white via-blue-50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-blue-100 rounded-full filter blur-3xl opacity-30"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Big stat */}
          <div className="text-center lg:text-left">
            <div className="inline-block">
              <div className="relative">
                <h2 className="text-8xl lg:text-9xl font-bold bg-gradient-to-br from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  10X
                </h2>
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-200 rounded-full filter blur-2xl opacity-50 animate-pulse"></div>
              </div>
              <p className="mt-4 text-xl text-gray-600">
                <span className="text-blue-600 font-semibold">...faster than</span>
                <br />
                traditional job search.
              </p>
              <p className="mt-4 text-gray-500">
                With personalized AI-powered outreach
              </p>
            </div>
            <Button className="mt-8 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-6 text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
              Try It Now
            </Button>
          </div>

          {/* Right: Features grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-xl flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;