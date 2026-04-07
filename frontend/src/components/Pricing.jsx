import React from 'react';
import { Check, X } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';

const Pricing = () => {
  const plans = [
    {
      name: 'Basic Plan',
      price: '$2,500',
      commission: '+ 15%',
      duration: '6 Months',
      description: 'Perfect for getting started with professional placement services',
      featured: false,
      features: {
        profileOptimization: [true, true, false, false, false, false],
        technicalPreparation: [false, false, true, true, false],
        resumeDocumentation: [true, true, true, false, false],
        activeMarketing: [true, true, false, false, true, false],
        recruiterSupport: [true, false, false, false],
        jobPlacement: [true, false, false, false],
      },
    },
    {
      name: 'Elite Plan',
      price: '$4,000',
      commission: '+ 14%',
      duration: '4 Months',
      description: 'Enhanced services with priority support and faster placement',
      featured: true,
      features: {
        profileOptimization: [true, true, true, true, true, true],
        technicalPreparation: [true, true, true, true, false],
        resumeDocumentation: [true, true, true, true, true],
        activeMarketing: [true, true, true, true, true, true],
        recruiterSupport: [true, false, true, true],
        jobPlacement: [true, true, true, false],
      },
    },
    {
      name: 'Premium Plan',
      price: '$5,500',
      commission: '+ 12%',
      alternativePrice: '$13,000',
      alternativeLabel: 'One Time Payment',
      duration: '3 Months',
      description: 'Complete VIP service with all features and fastest placement',
      featured: false,
      features: {
        profileOptimization: [true, true, true, true, true, true],
        technicalPreparation: [true, true, true, true, true],
        resumeDocumentation: [true, true, true, true, true],
        activeMarketing: [true, true, true, true, true, true],
        recruiterSupport: [true, true, true, true],
        jobPlacement: [true, true, true, true],
      },
    },
  ];

  const allFeatures = [
    {
      category: 'Profile Optimization',
      features: [
        'Professional Resume Rewrite',
        'LinkedIn Profile Optimization',
        'GitHub Profile Enhancement',
        'Portfolio Website Development',
        'GitHub Commit History Review',
        'Personal Branding Strategy',
      ],
    },
    {
      category: 'Technical Preparation',
      features: [
        'Live Technical Brush up With Tech Expert',
        'Mock Interview Session',
        'Interview Preparation (Webinar)',
        'Recorded Technical Training',
        'System Design Review',
      ],
    },
    {
      category: 'Resume & Documentation',
      features: [
        'ATS-Optimized Resume',
        'Cover Letter Templates',
        'Webinar for Resume Understanding',
        'One-to-One Resume Session',
        'Project Documentation',
      ],
    },
    {
      category: 'Active Marketing & Outreach',
      features: [
        'Resume Marketing to 200+ Companies',
        'Direct Recruiter Outreach',
        'LinkedIn InMail Campaigns',
        'AI-Powered Email Generation',
        'Hiring Manager Contact Database',
        'Personalized Outreach Strategy',
      ],
    },
    {
      category: 'Recruiter Support',
      features: [
        'Associate Recruiter',
        'Personal Recruiter',
        'Email/LinkedIn Chat Support',
        'Offer Negotiation Support',
      ],
    },
    {
      category: 'Job Placement Services',
      features: [
        'Full Time/W2 Positions',
        'Company Culture Fit Analysis',
        'Salary Negotiation Guide',
        'Background Check Support',
      ],
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-white via-blue-50 to-indigo-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-blue-600 font-semibold uppercase tracking-wider text-sm mb-4">
            PRICING PLANS
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Choose Your Perfect
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Career Acceleration Plan
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our plans define our ability to meet your expectations and provide
            you with the best results by opening the gateway to your dream job.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-2 ${
                plan.featured
                  ? 'border-blue-600 scale-105'
                  : 'border-gray-100'
              }`}
            >
              {plan.featured && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-2 text-sm">
                    Most Popular
                  </Badge>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {plan.name}
                </h3>
                <p className="text-gray-600 text-sm mb-6">{plan.description}</p>

                <div className="mb-4">
                  <div className="flex items-baseline justify-center">
                    <span className="text-5xl font-bold text-gray-900">
                      {plan.price}
                    </span>
                    <span className="text-xl text-gray-600 ml-2">
                      {plan.commission}
                    </span>
                  </div>
                  {plan.alternativePrice && (
                    <div className="mt-2 text-gray-600">
                      or{' '}
                      <span className="font-semibold text-gray-900">
                        {plan.alternativePrice}
                      </span>
                      <br />
                      <span className="text-sm">{plan.alternativeLabel}</span>
                    </div>
                  )}
                </div>

                <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                  Average Duration: {plan.duration}
                </div>
              </div>

              <Button
                className={`w-full py-6 text-lg mb-6 ${
                  plan.featured
                    ? 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white'
                    : 'bg-white border-2 border-blue-600 text-blue-600 hover:bg-blue-50'
                }`}
              >
                Get Started
              </Button>

              <div className="text-sm text-gray-500 text-center">
                All features included in this plan
              </div>
            </div>
          ))}
        </div>

        {/* Detailed Feature Comparison */}
        <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Detailed Feature Comparison
          </h3>

          {/* Column Headers */}
          <div className="grid grid-cols-4 gap-4 mb-6 pb-4 border-b-2 border-gray-300">
            <div className="col-span-1 text-gray-900 font-bold text-lg">
              Features
            </div>
            {plans.map((plan, index) => (
              <div
                key={index}
                className="flex justify-center items-center text-center"
              >
                <div className={`font-bold text-lg ${plan.featured ? 'text-blue-600' : 'text-gray-900'}`}>
                  {plan.name}
                </div>
              </div>
            ))}
          </div>

          {allFeatures.map((section, sectionIndex) => (
            <div key={sectionIndex} className="mb-8">
              <h4 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-blue-600">
                {section.category}
              </h4>
              <div className="space-y-4">
                {section.features.map((feature, featureIndex) => (
                  <div
                    key={featureIndex}
                    className="grid grid-cols-4 gap-4 items-center py-3 border-b border-gray-100 last:border-0"
                  >
                    <div className="col-span-1 text-gray-700 font-medium text-sm">
                      {feature}
                    </div>
                    {plans.map((plan, planIndex) => {
                      // Map category names to feature keys
                      const categoryKeyMap = {
                        'Profile Optimization': 'profileOptimization',
                        'Technical Preparation': 'technicalPreparation',
                        'Resume & Documentation': 'resumeDocumentation',
                        'Active Marketing & Outreach': 'activeMarketing',
                        'Recruiter Support': 'recruiterSupport',
                        'Job Placement Services': 'jobPlacement',
                      };
                      
                      const categoryKey = categoryKeyMap[section.category];
                      const hasFeature = categoryKey && 
                                        plan.features[categoryKey] && 
                                        plan.features[categoryKey][featureIndex];
                      
                      return (
                        <div
                          key={planIndex}
                          className="flex justify-center items-center"
                        >
                          {hasFeature ? (
                            <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                              <Check className="w-5 h-5 text-green-600" />
                            </div>
                          ) : (
                            <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                              <X className="w-5 h-5 text-red-600" />
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
