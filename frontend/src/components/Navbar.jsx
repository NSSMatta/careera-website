import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown, User } from 'lucide-react';
import { Button } from './ui/button';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
              <span className="text-white font-bold text-xl">C</span>
            </div>
            <span className="text-2xl font-bold text-gray-900">
              Careera
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link
              to="/how-it-works"
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
            >
              How it Works
            </Link>
            <Link
              to="/success-stories"
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
            >
              Success Stories
            </Link>
            <Link
              to="/faq"
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
            >
              FAQ
            </Link>
            <div className="relative">
              <button
                onMouseEnter={() => setIsResourcesOpen(true)}
                onMouseLeave={() => setIsResourcesOpen(false)}
                className="flex items-center text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
              >
                Resources
                <ChevronDown className="ml-1 w-4 h-4" />
              </button>
              {isResourcesOpen && (
                <div
                  onMouseEnter={() => setIsResourcesOpen(true)}
                  onMouseLeave={() => setIsResourcesOpen(false)}
                  className="absolute top-full mt-2 w-64 bg-white rounded-lg shadow-xl py-2 border border-gray-100"
                >
                  <Link
                    to="/resources/salary-negotiation"
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                  >
                    Salary Negotiation Guide
                  </Link>
                  <Link
                    to="/resources/interview-success"
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                  >
                    Interview Success Tips
                  </Link>
                  <Link
                    to="/resources/portfolio-optimization"
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                  >
                    Portfolio Optimization
                  </Link>
                </div>
              )}
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button
              variant="ghost"
              className="text-gray-700 hover:text-blue-600 hover:bg-blue-50"
            >
              <User className="w-4 h-4 mr-2" />
              Login
            </Button>
            <Button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-gray-700 hover:text-blue-600 transition-colors"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-4 bg-white border-t border-gray-100">
            <div className="flex flex-col space-y-4">
              <Link
                to="/how-it-works"
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
              >
                How it Works
              </Link>
              <Link
                to="/success-stories"
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
              >
                Success Stories
              </Link>
              <Link
                to="/faq"
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
              >
                FAQ
              </Link>
              <Link
                to="/resources"
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
              >
                Resources
              </Link>
              <Button variant="ghost" className="justify-start">
                <User className="w-4 h-4 mr-2" />
                Login
              </Button>
              <Button className="bg-gradient-to-r from-blue-600 to-blue-700 text-white">
                Get Started
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;