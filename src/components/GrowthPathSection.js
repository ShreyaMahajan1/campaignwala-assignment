import React from 'react';

const GrowthPathSection = () => {
  const positions = [
    {
      level: "Entry-Level Positions",
      role: "HR / Customer Service Representative",
      icon: "👤",
      color: "from-blue-500 to-blue-600"
    },
    {
      level: "Mid-Level Positions", 
      role: "Team Lead / Relationship Manager",
      icon: "👥",
      color: "from-green-500 to-green-600"
    },
    {
      level: "Senior-Level Positions",
      role: "Assistant Manager / Manager", 
      icon: "👔",
      color: "from-purple-500 to-purple-600"
    }
  ];

  return (
    <section className="section-padding bg-dark-800">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative animate-slide-in-left mt-10">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&h=500&fit=crop"
                alt="Career Growth Path"
                className="w-full rounded-2xl shadow-2xl"
              />
              
              {/* Decorative Elements */}
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-br from-[#2a97d4]/20 to-[#1e7ab8]/20 rounded-full"></div>
              <div className="absolute -bottom-6 -left-6 w-24 h-24 border-4 border-[#2a97d4]/30 rounded-2xl rotate-12"></div>
              
              {/* Floating Card */}
              <div className="absolute top-8 -right-8 bg-dark-900/90 backdrop-blur-sm rounded-xl p-4 border border-[#2a97d4]/20">
                <div className="text-lg font-bold text-[#2a97d4] mb-1">Career Growth</div>
                <div className="text-sm text-gray-300">Multiple Levels</div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="animate-slide-in-right">
            <div className="text-[#2a97d4] text-sm font-semibold tracking-wider uppercase mb-4">
              GROWTH PATH
            </div>
            
            <h2 className="text-xl lg:text-3xl font-bold font-heading mb-6">
              Your Path to Flexible Work and a Better Work-Life Balance Starts Here!
            </h2>
            
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              Welcome to FreeLancer Waala – Your Gateway to Flexible Work! Whether you seek part-time, 
              full-time, or freelance roles, we've got you covered. Join us for a fulfilling career, 
              bid farewell to commuting, and embrace the advantages of remote work.
            </p>

            {/* Position Cards */}
            <div className="space-y-4">
              {positions.map((position, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-4 p-4  transition-all duration-300 group"
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${position.color} rounded-full flex items-center justify-center text-2xl shadow-lg`}>
                    {position.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1 group-hover:text-[#2a97d4] transition-colors duration-300">
                      {position.level}
                    </h4>
                    <p className="text-gray-400 text-sm">
                      {position.role}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            
          </div>
        </div>
      </div>
    </section>
  );
};

export default GrowthPathSection;