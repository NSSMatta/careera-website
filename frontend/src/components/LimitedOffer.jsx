import React from 'react';
import { Button } from './ui/button';
import { CheckCircle2, Sparkles } from 'lucide-react';

const LimitedOffer = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-blue-600 via-indigo-600 to-blue-700 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-white rounded-full filter blur-3xl opacity-5 animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white rounded-full filter blur-3xl opacity-5 animate-pulse animation-delay-2000"></div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Content */}
        <div className="text-center">
          <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm font-medium mb-8">
            <Sparkles className="w-4 h-4 mr-2" />
            SPECIAL OFFER
          </div>

          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Start Your Career Journey
            <br />
            Today
          </h2>

          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join hundreds of successful professionals who landed their dream jobs
            through our proven placement system.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <Button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-6 text-lg shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 group">
              Get Started Now
            </Button>
            <Button
              variant="outline"
              className="border-2 border-white text-white hover:bg-white/10 px-8 py-6 text-lg backdrop-blur-sm"
            >
              Schedule Consultation
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-white/80 text-sm">
            <div className="flex items-center">
              <CheckCircle2 className="w-5 h-5 mr-2" />
              No upfront payment required
            </div>
            <div className="flex items-center">
              <CheckCircle2 className="w-5 h-5 mr-2" />
              Success-based model
            </div>
            <div className="flex items-center">
              <CheckCircle2 className="w-5 h-5 mr-2" />
              Money-back guarantee
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LimitedOffer;