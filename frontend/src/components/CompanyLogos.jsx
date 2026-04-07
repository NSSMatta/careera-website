import React from 'react';

const CompanyLogos = () => {
  const companies = [
    { name: 'Citibank', logo: 'https://cdn.worldvectorlogo.com/logos/citi-bank.svg' },
    { name: 'Wipro', logo: 'https://cdn.worldvectorlogo.com/logos/wipro.svg' },
    { name: 'Deloitte', logo: 'https://cdn.worldvectorlogo.com/logos/deloitte-1.svg' },
    { name: 'Capgemini', logo: 'https://cdn.worldvectorlogo.com/logos/capgemini-1.svg' },
    { name: 'Cognizant', logo: 'https://cdn.worldvectorlogo.com/logos/cognizant.svg' },
    { name: 'Google', logo: 'https://cdn.worldvectorlogo.com/logos/google-icon.svg' },
    { name: 'Microsoft', logo: 'https://cdn.worldvectorlogo.com/logos/microsoft-5.svg' },
    { name: 'Amazon', logo: 'https://cdn.worldvectorlogo.com/logos/amazon-icon-1.svg' },
    { name: 'Meta', logo: 'https://cdn.worldvectorlogo.com/logos/meta-icon.svg' },
    { name: 'Netflix', logo: 'https://cdn.worldvectorlogo.com/logos/netflix-3.svg' },
    { name: 'Spotify', logo: 'https://cdn.worldvectorlogo.com/logos/spotify-2.svg' },
    { name: 'Apple', logo: 'https://cdn.worldvectorlogo.com/logos/apple-14.svg' },
    { name: 'Tesla', logo: 'https://cdn.worldvectorlogo.com/logos/tesla-9.svg' },
    { name: 'Oracle', logo: 'https://cdn.worldvectorlogo.com/logos/oracle-6.svg' },
    { name: 'Crunch Fitness', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Crunch_Fitness_logo.svg/320px-Crunch_Fitness_logo.svg.png' },
  ];

  // Triple the array for seamless infinite scroll
  const allCompanies = [...companies, ...companies, ...companies];

  return (
    <section className="py-20 bg-gradient-to-b from-white via-blue-50/30 to-white relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(59,130,246,0.1),transparent_50%)]"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <p className="text-center text-sm font-semibold text-gray-500 uppercase tracking-wider">
          Trusted by professionals at
        </p>
      </div>

      <div className="relative">
        {/* Enhanced gradient overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-40 bg-gradient-to-r from-white via-white/80 to-transparent z-10"></div>
        <div className="absolute right-0 top-0 bottom-0 w-40 bg-gradient-to-l from-white via-white/80 to-transparent z-10"></div>

        {/* Scrolling logos */}
        <div className="flex animate-scroll-fast items-center">
          {allCompanies.map((company, index) => (
            <div
              key={index}
              className="flex-shrink-0 mx-8 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-500 transform hover:scale-110"
            >
              <img
                src={company.logo}
                alt={`${company.name} logo`}
                className="h-12 w-auto object-contain"
                style={{ maxWidth: '140px' }}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = `https://via.placeholder.com/140x48/3b82f6/ffffff?text=${encodeURIComponent(company.name)}`;
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompanyLogos;