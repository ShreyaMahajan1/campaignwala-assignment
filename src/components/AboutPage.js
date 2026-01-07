import React from 'react';
import CTASection from './CTASection';

const AboutPage = () => {
  const companies = [
    { 
      name: 'UPSTOX', 
      icon: '📊',
      bgColor: 'bg-blue-600',
      description: "Since our partnership with Upstox in 2021, we've proudly assisted 5000+ customers in seamlessly opening their accounts with Upstox."
    },
    { 
      name: 'Angel one', 
      icon: '👼',
      bgColor: 'bg-white',
      textColor: 'text-gray-900',
      description: "In addition to our strong partnerships with Upstox and AU Finance Bank since 2021, we've also assisted over 7000 customers in opening accounts with Angle One."
    },
    { 
      name: 'ICICI Direct', 
      icon: '🏦',
      bgColor: 'bg-orange-500',
      description: "Building on our track record of success, our collaboration with ICICI Direct since 2021 has resulted in aiding over 8000 customers in seamlessly opening their accounts."
    },
    { 
      name: 'M Stock', 
      icon: 'Ⓜ️',
      bgColor: 'bg-orange-600',
      description: "Our dedicated service has contributed to the successful opening of 7000+ accounts, emphasizing our role as a reliable partner in the financial journey of our customers."
    },
    { 
      name: 'Groww', 
      icon: '🌱',
      bgColor: 'bg-blue-500',
      description: "As part of our ongoing commitment to providing excellent financial services, our collaboration with Groww has resulted in helping over 3000 individuals seamlessly open accounts since 2021."
    },
    { 
      name: 'AU Finance Bank', 
      icon: '🏛️',
      bgColor: 'bg-red-600',
      description: "Since our collaboration with AU Finance Bank in 2021, we've successfully aided over 4000 customers in opening their accounts with AU Finance Bank."
    },
    { 
      name: 'Kotak Mahindra Bank', 
      icon: '🔴',
      bgColor: 'bg-red-500',
      description: "Highlighting our dedication to facilitating seamless financial solutions, we've successfully assisted in opening 4000+ Kotak Bank Demat accounts."
    },
    { 
      name: 'Yes Bank', 
      icon: '✓',
      bgColor: 'bg-blue-400',
      description: "In a recent collaboration, we've partnered with Yes Bank in 2023, and we're thrilled to share that we've assisted in opening 1000+ demat accounts."
    },
    { 
      name: 'HDFC Bank', 
      icon: '🏢',
      bgColor: 'bg-purple-600',
      description: "As part of our commitment to facilitating financial access, our collaboration with HDFC has led to the successful opening of 5500+ demat accounts."
    },
    { 
      name: '5 Paisa', 
      icon: '5₹',
      bgColor: 'bg-pink-600',
      description: "Highlighting our dedication to accessible financial services, we're proud to share that we've successfully assisted in opening 7000+ demat accounts with 5 Paisa."
    }
  ];

  const stats = [
    { number: '256+', title: 'Premium Clients' },
    { number: '736+', title: 'Professional Team' },
    { number: '753+', title: 'Winning Awards' },
    { number: '100+', title: '5 Star Reviews' }
  ];

  return (
    <div className="min-h-screen bg-dark-900">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1920&q=80")',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-teal-900/80"></div>
        </div>
        <div className="relative z-10 text-center">
          <h1 className="text-6xl md:text-7xl font-bold text-white tracking-wider">
            ABOUT US
          </h1>
        </div>
      </section>

      {/* About Company Section */}
      <section className="py-20 bg-dark-800">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div>
                <p className="text-[#2a97d4] font-semibold text-sm uppercase tracking-wider mb-4">
                  About FreeLancer Waala
                </p>
                <h2 className="text-4xl font-bold text-white mb-6">
                  #1 Telecalling Company
                </h2>
              </div>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  We're the top telecalling company, helping banks and customers easily open demat accounts. 
                  Our team guides you every step, making the process simple and efficient. Join us for 
                  hassle-free demat account services, where clarity and support come first.
                </p>
                <p>
                  Our dedicated team has successfully guided over 20,000+ members in 2023 alone. Join the 
                  growing community who trust us to make their account-opening experience seamless and straightforward.
                </p>
              </div>
              <a href="/#blog" className="relative overflow-hidden bg-[#2a97d4] text-white px-8 py-3 rounded font-semibold transition-all duration-300 flex items-center justify-center gap-2 group hover:text-black inline-flex">
                <span className="absolute inset-0 bg-white translate-x-[-100%] translate-y-[-100%] group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-700"></span>
                <span className="relative">Our Blog</span>
                <svg className="w-5 h-5 relative" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
            <div className="lg:pl-8">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80" 
                  alt="Team collaboration"
                  className="w-full h-96 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Purpose Section */}
      <section className="py-20 bg-dark-900 relative overflow-hidden">
        {/* Decorative dots */}
        <div className="absolute top-20 left-10 w-2 h-2 bg-purple-500 rounded-full"></div>
        <div className="absolute top-40 left-20 w-2 h-2 bg-purple-500 rounded-full"></div>
        <div className="absolute bottom-20 right-10 w-2 h-2 bg-purple-500 rounded-full"></div>
        <div className="absolute bottom-40 right-20 w-2 h-2 bg-purple-500 rounded-full"></div>
        
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="relative rounded-2xl overflow-hidden shadow-xl">
                  <img 
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80" 
                    alt="HouseWife"
                    className="w-full h-64 object-cover"
                  />
                </div>
                <div className="relative rounded-2xl overflow-hidden shadow-xl">
                  <img 
                    src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80" 
                    alt="College Girl"
                    className="w-full h-64 object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="relative rounded-2xl overflow-hidden shadow-xl">
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80" 
                    alt="Young Boy"
                    className="w-full h-64 object-cover"
                  />
                </div>
                <div className="relative rounded-2xl overflow-hidden shadow-xl">
                  <img 
                    src="https://images.unsplash.com/photo-1556157382-97eda2d62296?w=400&q=80" 
                    alt="Part Time Job"
                    className="w-full h-64 object-cover"
                  />
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div>
                <p className="text-[#2a97d4] font-semibold text-sm uppercase tracking-wider mb-4">
                  OUR PURPOSE
                </p>
                <h2 className="text-4xl font-bold text-white mb-6">
                  Why we have started?
                </h2>
              </div>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  Our primary purpose is to combat unemployment by offering jobs that accommodate 
                  diverse skill sets and qualifications.
                </p>
                <div className="space-y-3">
                  <p>
                    <span className="font-semibold text-white">→ Inclusive Job Opportunities:</span> 
                    {' '}Inclusive employment for diverse education levels, offering roles matching skills, talents, and aspirations.
                  </p>
                  <p>
                    <span className="font-semibold text-white">→ Nationwide Reach:</span> 
                    {' '}Nationwide services combat regional unemployment, contributing to India's economic growth and community development.
                  </p>
                  <p>
                    <span className="font-semibold text-white">→ Reducing Unemployment:</span> 
                    {' '}Combatting unemployment, we empower individuals through jobs, fostering financial independence, stability, and growth.
                  </p>
                </div>
              </div>
              <a href="/" className="relative overflow-hidden bg-[#2a97d4] text-white px-8 py-3 rounded font-semibold transition-all duration-300 flex items-center justify-center gap-2 group hover:text-black inline-flex">
                <span className="absolute inset-0 bg-white translate-x-[-100%] translate-y-[-100%] group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-700"></span>
                <span className="relative">OUR TEAM MEMBERS</span>
                <svg className="w-5 h-5 relative" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Mission Values Section */}
      <section className="py-20 bg-dark-800">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div>
                <p className="text-[#2a97d4] font-semibold text-sm uppercase tracking-wider mb-4">
                  ABOUT FREELANCER WAALA
                </p>
                <h2 className="text-4xl font-bold text-white mb-6">
                  Vision, Mission, and Values
                </h2>
              </div>
              <div className="space-y-6 text-gray-300 leading-relaxed">
                <div>
                  <p>
                    <span className="font-semibold text-white">→ Vision :</span> 
                    {' '}Empowering individuals nationwide through accessible and innovative financial solutions 
                    for a brighter and financially secure future.
                  </p>
                </div>
                <div>
                  <p>
                    <span className="font-semibold text-white">→ Mission :</span> 
                    {' '}Foster financial inclusion and empowerment across India by providing accessible 
                    financial services and creating diverse job opportunities.
                  </p>
                </div>
                <div>
                  <p>
                    <span className="font-semibold text-white">→ Values :</span> 
                    {' '}We uphold accessibility, job creation, and skill development, fostering collaboration, 
                    supporting entrepreneurship, promoting equality, engaging communities, and embracing 
                    continuous adaptation. Our values drive inclusivity, empowerment, and sustainable growth 
                    in financial services.
                  </p>
                </div>
              </div>
              <a href="/" className="relative overflow-hidden bg-[#2a97d4] text-white px-8 py-3 rounded font-semibold transition-all duration-300 flex items-center justify-center gap-2 group hover:text-black inline-flex">
                <span className="absolute inset-0 bg-white translate-x-[-100%] translate-y-[-100%] group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-700"></span>
                <span className="relative">JOINS US</span>
                <svg className="w-5 h-5 relative" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
            <div className="lg:pl-8">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80" 
                  alt="Vision & Mission"
                  className="w-full h-96 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partner Companies Section */}
      <section className="py-20 bg-dark-900">
        <div className="container-custom">
          <div className="text-center mb-16">
            <p className="text-[#2a97d4] font-semibold text-sm uppercase tracking-wider mb-4">
              Choose Best of
            </p>
            <h2 className="text-4xl font-bold text-white">
              Companies tied with us
            </h2>
          </div>
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-dark-800 rounded-sm border border-gray-700 overflow-hidden">
              {companies.slice(0, 5).map((company, index) => (
                <div key={index} className={`flex items-start gap-6 p-8 hover:bg-dark-700 transition-all duration-300 ${index !== 4 ? 'border-b border-gray-700' : ''}`}>
                  <div className={`w-20 h-20 ${company.bgColor} rounded-xl flex items-center justify-center ${company.textColor || 'text-white'} font-bold text-2xl flex-shrink-0`}>
                    {company.icon}
                  </div>
                  <div>
                    <h5 className="text-xl font-semibold text-white mb-2">{company.name}</h5>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {company.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="bg-dark-800 rounded-sm border border-gray-700 overflow-hidden">
              {companies.slice(5, 10).map((company, index) => (
                <div key={index} className={`flex items-start gap-6 p-8 hover:bg-dark-700 transition-all duration-300 ${index !== 4 ? 'border-b border-gray-700' : ''}`}>
                  <div className={`w-20 h-20 ${company.bgColor} rounded-xl flex items-center justify-center ${company.textColor || 'text-white'} font-bold text-2xl flex-shrink-0`}>
                    {company.icon}
                  </div>
                  <div>
                    <h5 className="text-xl font-semibold text-white mb-2">{company.name}</h5>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {company.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-dark-800">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center bg-dark-900 p-8 rounded-2xl border border-gray-700 hover:border-[#2a97d4] transition-all duration-300">
                <div className="text-4xl font-bold text-[#2a97d4] mb-2">{stat.number}</div>
                <h5 className="text-lg font-semibold text-gray-300">{stat.title}</h5>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />

    </div>
  );
};

export default AboutPage;
