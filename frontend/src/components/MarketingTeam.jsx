import React from 'react';
import { Users, Building, MessageSquare, UserCog, Calendar, CheckCircle2 } from 'lucide-react';

const MarketingTeam = () => {
  const roles = [
    { icon: Users, title: 'Profile Optimizer' },
    { icon: Building, title: 'Company Research' },
    { icon: MessageSquare, title: 'Outreach Manager' },
    { icon: UserCog, title: 'Relationship Manager' },
    { icon: Calendar, title: 'Interview Coordinator' },
    { icon: CheckCircle2, title: 'Placement Specialist' },
  ];

  const features = [
    {
      title: 'Continuous Data Crawling',
      description:
        'Our system automatically scans professional networks and career sites to identify recruiters and hiring managers in real-time.',
    },
    {
      title: 'Visa Sponsorship Verification',
      description: 'We verify each company history of visa sponsorship, ensuring you only connect with recruiters who can truly help F-1 students.',
    },
    {
      title: 'Immediate Opportunity Alerts',
      description:
        'Get notified instantly when our system detects new job postings from verified hiring managers before they appear on public platforms.',
    },
    {
      title: 'Perfect Matching Algorithm',
      description:
        'Our AI matches your skills and career objectives with the right recruiters, maximizing your chances of securing visa sponsorship.',
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-white via-blue-50 to-indigo-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-blue-600 font-semibold uppercase tracking-wider text-sm mb-4">
            MARKETING TEAM
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Multi-Specialist
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Marketing Team
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our dedicated marketing specialists work together to optimize your
            profile and actively promote your candidacy to top tech companies
            and hiring managers.
          </p>
        </div>

        {/* Roles Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-16">
          {roles.map((role, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center group border border-gray-100"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl flex items-center justify-center mx-auto mb-4 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                <role.icon className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-sm font-semibold text-gray-900">
                {role.title}
              </h3>
            </div>
          ))}
        </div>

        {/* How It Works */}
        <div className="bg-white rounded-3xl p-12 shadow-xl border border-gray-100">
          <h3 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            How Our Marketing Team Works
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">
                    {feature.title}
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">
              Our database updates in real-time with{' '}
              <span className="font-bold text-blue-600">200+ new profiles daily</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketingTeam;