import React from 'react';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About us', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Blogs', href: '#blog' },
    { name: 'Contacts', href: '#contact' },
  ];

  const workingHours = [
    { day: 'Monday - Saturday', time: '08:00 am - 08:00pm' },
    { day: 'Attendance Timing', time: '05:00 am - 10:00am' },
    { day: 'Sunday', time: 'Closed', highlight: true },
  ];

  const contactInfo = [
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      label: 'Location:',
      value: 'Garh road Jalandhar, Punjab, 144022'
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      label: 'Email:',
      value: 'info@freelancerwaala.com',
      link: 'mailto:info@freelancerwaala.com'
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      label: 'Phone:',
      value: '+91-8365855029',
      link: 'tel:+918365855029'
    }
  ];

  const brands = [
    "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=200&h=100&fit=crop",
    "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=200&h=100&fit=crop",
    "https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?w=200&h=100&fit=crop",
    "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=200&h=100&fit=crop",
    "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=100&fit=crop",
    "https://images.unsplash.com/photo-1572044162444-ad60f128bdea?w=200&h=100&fit=crop",
    "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=200&h=100&fit=crop",
    "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=200&h=100&fit=crop",
  ];

  return (
    <footer id="contact" className="bg-dark-800 border-t border-dark-700">
      {/* Brands Section */}
      <div className="py-12 border-b border-dark-700">
        <div className="container-custom overflow-hidden">
          <div className="relative">
            <div className="flex animate-slide gap-8">
              {[...brands, ...brands, ...brands].map((brand, index) => (
                <div 
                  key={index} 
                  className="flex-shrink-0 grayscale hover:grayscale-0 transition-all duration-300"
                  style={{ width: '200px' }}
                >
                  <img 
                    src={brand} 
                    alt={`Brand ${(index % brands.length) + 1}`}
                    className="w-full h-auto object-contain opacity-60 hover:opacity-100"
                  />
                </div>
              ))}
            </div>
          </div>
          <style jsx>{`
            @keyframes slide {
              0% {
                transform: translateX(0);
              }
              100% {
                transform: translateX(calc(-200px * ${brands.length} - ${brands.length * 32}px));
              }
            }
            .animate-slide {
              animation: slide 20s linear infinite;
              will-change: transform;
            }
            .animate-slide:hover {
              animation-play-state: paused;
            }
          `}</style>
        </div>
      </div>

      {/* Main Footer */}
      <div className="py-16">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="text-2xl font-bold mb-4" style={{ color: '#2a97d4' }}>
                FreeLancer Waala
              </div>
              <p className="text-gray-400 mb-6 leading-relaxed">
                FreeLancer Waala is a leading telecalling company in India offering work-from-home jobs 
                with a 100% job guarantee and assistance in opening demat accounts.
              </p>
              <div className="flex items-center gap-2 text-gray-400">
                <span>Instagram:</span>
                <a 
                  href="https://www.instagram.com/freelancerwaala/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-[#2a97d4] hover:text-[#2a97d4]/80 transition-colors duration-300"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987s11.987-5.367 11.987-11.987C24.004 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.418-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.928.875 1.418 2.026 1.418 3.323s-.49 2.448-1.418 3.244c-.875.807-2.026 1.297-3.323 1.297zm7.83-9.781c-.49 0-.928-.175-1.297-.49-.367-.315-.49-.753-.49-1.243 0-.49.123-.928.49-1.243.369-.367.807-.49 1.297-.49s.928.123 1.297.49c.367.315.49.753.49 1.243 0 .49-.123.928-.49 1.243-.369.315-.807.49-1.297.49z"/>
                  </svg>
                  freelancerwaala
                </a>
              </div>
            </div>

            {/* Working Hours */}
            <div>
              <h5 className="text-lg font-semibold text-[#2a97d4] mb-6">Working Hours</h5>
              <ul className="space-y-3">
                {workingHours.map((item, index) => (
                  <li key={index} className={`flex flex-col ${item.highlight ? 'text-[#2a97d4] font-semibold' : 'text-gray-400'}`}>
                    <span>{item.day}</span>
                    <span className="text-sm opacity-80">{item.time}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h5 className="text-lg font-semibold text-[#2a97d4] mb-6">Quick Links</h5>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.href}
                      className="text-gray-400 hover:text-[#2a97d4] transition-colors duration-300"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h5 className="text-lg font-semibold text-[#2a97d4] mb-6">Contact Us</h5>
              <ul className="space-y-4">
                {contactInfo.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="text-[#2a97d4] mt-1">
                      {item.icon}
                    </div>
                    <div>
                      <span className="text-[#2a97d4] font-medium">{item.label}</span>
                      {item.link ? (
                        <a 
                          href={item.link}
                          className="text-gray-400 hover:text-[#2a97d4] transition-colors duration-300 block"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <span className="text-gray-400 block">{item.value}</span>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="py-6 border-t border-dark-700">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-sm">
              Copyright © 2024 FreeLancer Waala. All Rights Reserved.
            </div>
            <div className="flex gap-6 text-sm">
              <a href="#privacy" className="text-gray-400 hover:text-[#2a97d4] transition-colors duration-300">
                Privacy Policy
              </a>
              <span className="text-gray-600">|</span>
              <a href="#terms" className="text-gray-400 hover:text-[#2a97d4] transition-colors duration-300">
                Terms and Conditions
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;