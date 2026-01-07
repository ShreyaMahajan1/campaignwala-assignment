import React from 'react';

const CTASection = () => {
  return (
    <section className="py-16 bg-gray-700 relative overflow-hidden">
      {/* Background Image/Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-64 h-64">
          <svg viewBox="0 0 200 200" className="w-full h-full">
            <path fill="#2a97d4" d="M100,20 L180,180 L20,180 Z" opacity="0.3"/>
            <circle cx="150" cy="80" r="30" fill="#2a97d4" opacity="0.4"/>
            <rect x="120" y="120" width="60" height="40" fill="#2a97d4" opacity="0.3" transform="rotate(45 150 140)"/>
          </svg>
        </div>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="text-center lg:text-left">
            <h2 className="text-3xl lg:text-4xl font-bold text-white">
              Ready to boost your career? Join FreeLancer Waala today!
            </h2>
          </div>
          <div className="flex-shrink-0">
            <button className="bg-[#2a97d4] text-white px-8 py-3 rounded font-semibold hover:bg-[#2a97d4]/90 transition-colors duration-300 flex items-center gap-2 uppercase text-sm">
              GET STARTED
              <i className="fas fa-chevron-right"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;