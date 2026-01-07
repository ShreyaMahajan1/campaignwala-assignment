import React from 'react';

const ServicesSection = () => {
  const services = [
    {
      title: "Innovative Technology",
      description: "At our company, the seamless integration of task assignment and earnings tracking is exclusively facilitated through our user-friendly app.",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=300&fit=crop",
      icon: "🚀"
    },
    {
      title: "Flexible Work Arrangements",
      description: "Allowing you to choose your preferred 6-hour shift anytime between 8 am and 8 pm",
      image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=400&h=300&fit=crop",
      icon: "⏰"
    },
    {
      title: "Zero Investment Model",
      description: "At our company, there's zero upfront investment required to kickstart your journey",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=300&fit=crop",
      icon: "💰"
    },
    {
      title: "Training and Development",
      description: "New joiners can expect a comprehensive training program lasting 3-4 days, where you'll delve into essential skills and strategies.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop",
      icon: "📚"
    },
    {
      title: "Our Promotion Scheme",
      description: "If you consistently deliver outstanding performance and maintain a respectful and collaborative relationship with your team leader, you can anticipate a well-deserved promotion.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop",
      icon: "📈"
    },
    {
      title: "Weekly Payouts",
      description: "You have the flexibility to choose the frequency of your salary withdrawals, whether it be on a weekly or monthly basis.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop",
      icon: "💳"
    }
  ];

  return (
    <section id="services" className="section-padding bg-dark-900">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="text-[#2a97d4] text-sm font-semibold tracking-wider uppercase mb-4">
            DISCOVER FREELANCER WAALA DISTINCTION
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold font-heading mb-6">
            FreeLancer Waala Popular For
          </h2>
        </div>

        {/* Services Box */}
        <div className="bg-dark-800 rounded-2xl border border-dark-700 p-8 max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="group flex gap-4"
              >
                {/* Image */}
                <div className="relative w-28 h-28 flex-shrink-0 rounded-lg overflow-hidden">
                  <img 
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-[#2a97d4] transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed text-sm">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;