import React from 'react';
import { Users, Mail, BarChart3 } from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      icon: Users,
      title: 'Insider Connections',
      description:
        'Access contact details of hiring managers and recruiters who are actively looking to hire.',
    },
    {
      icon: Mail,
      title: 'Personalized Emails',
      description: 'AI-generated outreach customized to your skills and the company needs for higher response rates.',
    },
    {
      icon: BarChart3,
      title: 'Real-Time Analytics',
      description:
        'Track opens, responses, and interactions to optimize your approach and maximize opportunities.',
    },
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-blue-600 font-semibold uppercase tracking-wider text-sm mb-4">
            OUR EDGE
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Skip the Endless Applications
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              That Lead Nowhere
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our marketing and placement approach delivers real results through
            direct employer relationships and active candidate promotion - no
            more hoping for responses.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-white to-blue-50 p-8 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100"
            >
              {/* Icon */}
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center mb-6 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                <feature.icon className="w-8 h-8 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>

              {/* Decorative element */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-blue-200 rounded-full filter blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;