import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { FileText, Briefcase, TrendingUp, Code } from 'lucide-react';
import { Button } from '../components/ui/button';

const ResourcesPage = () => {
  const resources = [
    { icon: FileText, title: 'Resume Optimization Guide', description: 'Create ATS-friendly resume that gets past screening.', category: 'Career Prep' },
    { icon: Briefcase, title: 'Interview Success Tips', description: 'Master technical and behavioral interviews.', category: 'Interviews' },
    { icon: TrendingUp, title: 'Salary Negotiation Guide', description: 'Maximize compensation with proven strategies.', category: 'Negotiation' },
    { icon: Code, title: 'Portfolio Optimization', description: 'Build standout portfolio showcasing skills.', category: 'Personal Brand' },
    { icon: FileText, title: 'LinkedIn Marketing Guide', description: 'Optimize LinkedIn to attract recruiters.', category: 'Personal Brand' },
    { icon: Briefcase, title: 'Tech Hiring Trends 2026', description: 'Stay updated with hiring trends and skills.', category: 'Industry Insights' }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <section className="pt-32 pb-16 bg-gradient-to-br from-blue-50 via-white to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Free Career Resources
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">For Professionals</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">Expert guides, templates, and tools to accelerate your career</p>
        </div>
      </section>
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {resources.map((resource, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 p-8 group">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center mb-6 transform group-hover:scale-110 transition-all duration-300">
                  <resource.icon className="w-7 h-7 text-white" />
                </div>
                <div className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-semibold mb-4">{resource.category}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{resource.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-6">{resource.description}</p>
                <Button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white">Download Guide</Button>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default ResourcesPage;