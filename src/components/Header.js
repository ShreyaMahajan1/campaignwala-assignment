import React, { useState, useEffect } from 'react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'HOME', href: '/', type: 'page' },
    { name: 'ABOUT US', href: '/about', type: 'page' },
    { name: 'FAQ', href: '/faq', type: 'page' },
    { name: 'BLOG', href: '/blog', type: 'page' },
    { name: 'CONTACTS', href: '/contact', type: 'page' },
  ];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-dark-900/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo - Left */}
          <div className="flex items-center">
            <div className="text-2xl font-bold" style={{ color: '#2a97d4' }}>
              FreeLancer Waala
            </div>
          </div>

          {/* Desktop Navigation - Center */}
          <nav className="hidden lg:flex items-center space-x-8 flex-1 justify-center">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-gray-300 hover:text-[#2a97d4] transition-colors duration-300 relative group"
                onClick={item.type === 'scroll' ? (e) => {
                  e.preventDefault();
                  const element = document.querySelector(item.href);
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                } : undefined}
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#2a97d4] transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* CTA Button - Right */}
          <div className="hidden lg:block">
            <a href="/contact">
              <button className="bg-[#2a97d4] text-white px-6 py-2 rounded hover:bg-[#2a97d4]/90 transition-colors duration-300">
                GET STARTED
              </button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 mr-4"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <div className="w-7 h-7 flex flex-col justify-center items-center">
              <span className={`bg-white block transition-all duration-300 ease-out h-0.5 w-7 rounded-sm ${
                isMobileMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'
              }`}></span>
              <span className={`bg-white block transition-all duration-300 ease-out h-0.5 w-7 rounded-sm my-0.5 ${
                isMobileMenuOpen ? 'opacity-0' : 'opacity-100'
              }`}></span>
              <span className={`bg-white block transition-all duration-300 ease-out h-0.5 w-7 rounded-sm ${
                isMobileMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'
              }`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-dark-800 rounded-lg mt-2  p-4 mr-8 shadow-xl">
            <nav className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-300 hover:text-[#2a97d4] transition-colors duration-300 py-3 px-2"
                  onClick={(e) => {
                    setIsMobileMenuOpen(false);
                    if (item.type === 'scroll') {
                      e.preventDefault();
                      const element = document.querySelector(item.href);
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }
                  }}
                >
                  {item.name}
                </a>
              ))}
              <a href="/contact" onClick={() => setIsMobileMenuOpen(false)} className="pt-2">
                <button className="bg-[#2a97d4] text-white px-6 py-3 rounded hover:bg-[#2a97d4]/90 transition-colors duration-300 w-full">
                  GET STARTED
                </button>
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;