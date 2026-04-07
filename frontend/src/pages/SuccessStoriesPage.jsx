import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { MapPin, Briefcase, TrendingUp } from 'lucide-react';

const SuccessStoriesPage = () => {
  const stories = [
    { name: 'Priya S.', role: 'Software Engineer', company: 'Google', location: 'Mountain View, CA', timeline: '2.5 months', salary: '$145,000', story: 'After struggling with applications, Careera helped me optimize my profile and connected me with recruiters. Got my offer in 10 weeks!', image: 'https://ui-avatars.com/api/?name=Priya+S&size=200&background=3b82f6&color=fff' },
    { name: 'Rahul M.', role: 'Data Scientist', company: 'Microsoft', location: 'Seattle, WA', timeline: '3 months', salary: '$152,000', story: 'Personalized outreach and prep were game-changers. Went from 0 responses to multiple offers in 3 months.', image: 'https://ui-avatars.com/api/?name=Rahul+M&size=200&background=4f46e5&color=fff' },
    { name: 'Sarah K.', role: 'Full Stack Developer', company: 'Amazon', location: 'Austin, TX', timeline: '2 months', salary: '$138,000', story: 'GitHub enhancement and portfolio website made all the difference. Recruiters were impressed!', image: 'https://ui-avatars.com/api/?name=Sarah+K&size=200&background=6366f1&color=fff' },
    { name: 'Ahmed H.', role: 'DevOps Engineer', company: 'Meta', location: 'Menlo Park, CA', timeline: '3.5 months', salary: '$148,000', story: 'Technical prep and mock sessions gave me confidence. Personal recruiter support was invaluable.', image: 'https://ui-avatars.com/api/?name=Ahmed+H&size=200&background=8b5cf6&color=fff' },
    { name: 'Maria L.', role: 'Product Manager', company: 'Netflix', location: 'Los Angeles, CA', timeline: '4 months', salary: '$155,000', story: 'As a career changer, I needed extensive support. Team helped reposition my experience!', image: 'https://ui-avatars.com/api/?name=Maria+L&size=200&background=ec4899&color=fff' },
    { name: 'Chen W.', role: 'ML Engineer', company: 'Crunch Fitness', location: 'New York, NY', timeline: '2.5 months', salary: '$120,000', story: 'AI-powered emails and direct connections made job search efficient. Highly recommend!', image: 'https://ui-avatars.com/api/?name=Chen+W&size=200&background=10b981&color=fff' }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <section className="pt-32 pb-16 bg-gradient-to-br from-blue-50 via-white to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Real Success Stories
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">From Real People</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">Join hundreds who landed their dream jobs through Careera</p>
        </div>
      </section>
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {stories.map((story, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden">
                <div className="p-8">
                  <div className="flex items-center mb-4">
                    <img src={story.image} alt={story.name} className="w-16 h-16 rounded-full mr-4" />
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{story.name}</h3>
                      <p className="text-gray-600">{story.role}</p>
                    </div>
                  </div>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-gray-600">
                      <Briefcase className="w-4 h-4 mr-2 text-blue-600" />{story.company}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <MapPin className="w-4 h-4 mr-2 text-blue-600" />{story.location}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <TrendingUp className="w-4 h-4 mr-2 text-blue-600" />{story.salary} • {story.timeline}
                    </div>
                  </div>
                  <p className="text-gray-700 italic leading-relaxed">"{story.story}"</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default SuccessStoriesPage;