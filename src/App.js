import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import GrowthPathSection from './components/GrowthPathSection';
import BlogSection from './components/BlogSection';
import CTASection from './components/CTASection';
import Footer from './components/Footer';
import AboutPage from './components/AboutPage';
import FAQPage from './components/FAQPage';
import BlogPage from './components/BlogPage';
import ContactPage from './components/ContactPage';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    // Handle browser back/forward buttons
    const handlePopState = () => {
      const path = window.location.pathname;
      if (path === '/about') {
        setCurrentPage('about');
      } else if (path === '/faq') {
        setCurrentPage('faq');
      } else if (path === '/blog') {
        setCurrentPage('blog');
      } else if (path === '/contact') {
        setCurrentPage('contact');
      } else {
        setCurrentPage('home');
      }
    };

    // Listen for URL changes
    window.addEventListener('popstate', handlePopState);
    
    // Check initial URL
    handlePopState();

    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Handle navigation
  useEffect(() => {
    const handleNavigation = (e) => {
      const href = e.target.getAttribute('href');
      if (href === '/about') {
        e.preventDefault();
        setCurrentPage('about');
        window.history.pushState(null, '', '/about');
      } else if (href === '/faq') {
        e.preventDefault();
        setCurrentPage('faq');
        window.history.pushState(null, '', '/faq');
      } else if (href === '/blog') {
        e.preventDefault();
        setCurrentPage('blog');
        window.history.pushState(null, '', '/blog');
      } else if (href === '/contact') {
        e.preventDefault();
        setCurrentPage('contact');
        window.history.pushState(null, '', '/contact')
      }
        else if (href === '/') {
        e.preventDefault();
        setCurrentPage('home');
        window.history.pushState(null, '', '/');
      }
    };

    document.addEventListener('click', handleNavigation);
    return () => document.removeEventListener('click', handleNavigation);
  }, []);

  const renderPage = () => {
    switch (currentPage) {
      case 'about':
        return <AboutPage />;
      case 'faq':
        return <FAQPage />;
      case 'blog':
        return <BlogPage />;
        case 'contact':
        return <ContactPage />;
      default:
        return (
          <>
            <HeroSection />
            <AboutSection />
            <ServicesSection />
            <GrowthPathSection />
            <BlogSection />
            <CTASection />
          </>
        );
    }
  };

  return (
    <div className="dark min-h-screen bg-dark-900 text-white">
      <Header />
      {renderPage()}
      <Footer />
    </div>
  );
}

export default App;