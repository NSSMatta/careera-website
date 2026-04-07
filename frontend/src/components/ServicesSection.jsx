import React from 'react';
import { FileText, Megaphone, Calendar, BarChart3, Filter, LineChart } from 'lucide-react';
import { Badge } from './ui/badge';

const ServicesSection = () => {
  const services = [
    {
      icon: FileText,
      title: 'Profile Optimization',
      description:
        'Professional resume, LinkedIn, and GitHub enhancement by our expert team. We transform your profile to stand out to hiring managers and recruiters.',
    },
    {
      icon: Megaphone,
      title: 'Active Marketing',
      description:
        'We pitch your profile directly to hiring managers and recruiters at top tech companies. Our team actively promotes your candidacy to relevant opportunities.',
    },
    {
      icon: Calendar,
      title: 'Interview Coordination',
      description:
        'We schedule and manage your interview process with interested companies. From initial screening to final rounds, we coordinate everything for you.',
    },
    {
      icon: BarChart3,
      title: 'Placement Tracking',
      description:
        'Monitor your marketing campaign progress in real-time. Track which companies viewed your profile, interview requests, and offer status through our dashboard.',
    },
    {
      icon: Filter,
      title: 'Targeted Filtering',
      description:
        'Filter potential contacts by industry, company size, visa sponsorship history, and more to find the perfect match for your skills and career goals.',
    },
    {
      icon: LineChart,
      title: 'Analytics Dashboard',
      description:
        'Comprehensive analytics to track your outreach performance, response rates, and conversion metrics with detailed reports and actionable insights.',
    },
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-blue-600 font-semibold uppercase tracking-wider text-sm mb-4">
            MARKETING SERVICES
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Complete Candidate
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Marketing Solutions
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From profile optimization to placement success - we handle every
            step of your marketing campaign.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-white to-blue-50 p-8 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 group relative overflow-hidden"
            >
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-200 rounded-full filter blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>

              {/* Icon */}
              <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center mb-6 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 relative z-10">
                <service.icon className="w-7 h-7 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 mb-3 relative z-10">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4 relative z-10">
                {service.description}
              </p>
              <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-200 relative z-10">
                Included in premium plan
              </Badge>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <p className="text-lg text-gray-600 font-medium">
            Premium features designed to accelerate your career journey
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;