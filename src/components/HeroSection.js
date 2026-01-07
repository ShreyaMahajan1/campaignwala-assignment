import React, { useState, useEffect } from 'react';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Part Time, Full Time, WFH jobs are available.",
      subtitle: "WELCOME TO THE FREELANCER WAALA",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&h=600&fit=crop&crop=face"
    },
    {
      title: "Jobs for women, men, students, and retirees.",
      subtitle: "WELCOME TO THE FREELANCER WAALA",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=600&fit=crop"
    },
    {
      title: "No Previous Experience or Technical Skills Required.",
      subtitle: "WELCOME TO THE FREELANCER WAALA",
      image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&h=600&fit=crop"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <div 
          key={currentSlide}
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000"
          style={{
            backgroundImage: `url(${slides[currentSlide].image})`
          }}
        />
        <div className="absolute inset-0 bg-dark-900/80"></div>
        
        {/* Geometric Shapes - Hidden on mobile */}
        <div className="hidden md:block absolute top-20 right-20 w-32 h-32 border-4 border-[#2a97d4] rotate-45 opacity-20"></div>
        <div className="hidden md:block absolute bottom-40 left-20 w-24 h-24 bg-[#2a97d4]/20 rounded-full"></div>
        <div className="hidden md:block absolute top-1/2 right-1/3 w-16 h-16 border-2 border-[#2a97d4] opacity-30"></div>
      </div>

      <div className="container-custom relative z-10 px-4">
        <div className="flex flex-col items-start justify-center min-h-screen py-24 md:pt-20">
          {/* Content */}
          <div className="max-w-5xl animate-slide-in-left">
            <div className="flex items-center gap-2 md:gap-4 mb-4 md:mb-6">
              <div className="w-8 md:w-16 h-px bg-white"></div>
              <div className="text-white text-xs md:text-sm font-semibold tracking-wider uppercase">
                {slides[currentSlide].subtitle}
              </div>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold font-heading leading-tight mb-6 md:mb-8">
              {slides[currentSlide].title}
            </h1>

            <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
              <a href="/about" className="relative overflow-hidden bg-[#2a97d4] text-white px-6 md:px-8 py-2.5 md:py-3 rounded font-semibold transition-all duration-300 flex items-center justify-center gap-2 group hover:text-black text-sm md:text-base">
                <span className="absolute inset-0 bg-white translate-x-[-100%] translate-y-[-100%] group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-700"></span>
                <span className="relative">EXPLORE MORE</span>
                <svg className="w-4 h-4 md:w-5 md:h-5 relative" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
              <a href="/contact" className="relative overflow-hidden bg-black text-white px-6 md:px-8 py-2.5 md:py-3 rounded font-semibold transition-all duration-300 flex items-center justify-center gap-2 group hover:text-black text-sm md:text-base">
                <span className="absolute inset-0 bg-white translate-x-[-100%] translate-y-[-100%] group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-700"></span>
                <span className="relative">GET STARTED</span>
                <svg className="w-4 h-4 md:w-5 md:h-5 relative" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button 
        onClick={prevSlide}
        className="absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 bg-dark-800/50 hover:bg-[#2a97d4] text-white p-2 md:p-3 rounded-full transition-all duration-300 z-20"
      >
        <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      
      <button 
        onClick={nextSlide}
        className="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 bg-dark-800/50 hover:bg-[#2a97d4] text-white p-2 md:p-3 rounded-full transition-all duration-300 z-20"
      >
        <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-[#2a97d4] w-6 md:w-8' : 'bg-white/30'
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
