import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQPage = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const faqs = [
    { question: 'How does the payment structure work?', answer: 'We offer flexible payment options. You can pay upfront fee plus percentage of first year salary, or one-time payment. No payment until you receive offer.' },
    { question: 'What is the average time to get placed?', answer: 'Average placement time is 3 months. Can vary based on experience, role, and market. Some get offers in 6 weeks.' },
    { question: 'Do you guarantee job placement?', answer: 'While we cannot guarantee, we have 95% success rate for engaged candidates. We work until you find the right opportunity.' },
    { question: 'What makes Careera different?', answer: 'End-to-end support: profile optimization (resume, LinkedIn, GitHub, portfolio), direct recruiter outreach, technical prep, and personal recruiters.' },
    { question: 'Can you help with visa sponsorship?', answer: 'Yes! We specialize in connecting candidates with visa-sponsoring employers.' },
    { question: 'What roles do you help with?', answer: 'Tech roles: Software Engineer, Data Scientist, DevOps, Product Manager, etc. Entry to senior level.' },
    { question: 'Do I need to be in US?', answer: 'No, we work globally. You should be eligible for US work authorization.' },
    { question: 'What is profile optimization?', answer: 'ATS-optimized resume, LinkedIn enhancement, GitHub improvement, portfolio website, personal branding.' },
    { question: 'How many companies will you contact?', answer: 'Targeted outreach to 200+ companies matching your profile.' },
    { question: 'What if I don\'t get placed in time?', answer: 'We continue at no additional cost until successfully placed.' }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <section className="pt-32 pb-16 bg-gradient-to-br from-blue-50 via-white to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Frequently Asked
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Questions</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">Find answers about our services, process, and pricing</p>
        </div>
      </section>
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden">
                <button onClick={() => setOpenIndex(openIndex === index ? null : index)} className="w-full px-8 py-6 flex justify-between items-center hover:bg-gray-50 transition-colors">
                  <span className="text-lg font-semibold text-gray-900 text-left">{faq.question}</span>
                  {openIndex === index ? <ChevronUp className="w-6 h-6 text-blue-600 flex-shrink-0" /> : <ChevronDown className="w-6 h-6 text-gray-400 flex-shrink-0" />}
                </button>
                {openIndex === index && (
                  <div className="px-8 pb-6">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default FAQPage;