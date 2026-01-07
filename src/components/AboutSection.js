import React from 'react';

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-dark-800">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="animate-slide-in-left">
            <div className="text-[#2a97d4] text-sm font-semibold tracking-wider uppercase mb-4">
              ABOUT US
            </div>
            
            <h2 className="text-3xl lg:text-5xl font-bold font-heading mb-6">
              Free Earnings via Phone Calls
            </h2>
            
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              Are you tired of the daily commute? Seeking part-time, full-time, or freelance work? 
              FreeLancer Waala is your solution! Whether you're a stay-at-home parent or a student, 
              our platform offers remote job opportunities, providing flexibility and work-life balance. 
              Say goodbye to commuting hassles and hello to a rewarding, flexible career. Ready to make the switch? Join us today!
            </p>

          
          </div>

          {/* Image */}
          <div className="relative animate-slide-in-right">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?w=600&h=500&fit=crop"
                alt="Professional working from home"
                className="w-full rounded-2xl shadow-2xl"
              />
              
              {/* Decorative Elements */}
              {/* <div className="absolute -top-8 -left-8 w-32 h-32 bg-gradient-to-br from-[#2a97d4]/20 to-[#1e7ab8]/20 rounded-full"></div>
              <div className="absolute -bottom-8 -right-8 w-24 h-24 border-4 border-[#2a97d4]/30 rounded-2xl rotate-45"></div>
               */}
              {/* Stats Card */}
              <div className="absolute -bottom-6 -left-6 bg-dark-900/90 backdrop-blur-sm rounded-xl p-6 border border-[#2a97d4]/20">
                <div className="text-2xl font-bold text-[#2a97d4] mb-1">100%</div>
                <div className="text-sm text-gray-300">Job Guarantee</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;