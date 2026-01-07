import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import BlogSection from './BlogSection';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    tel: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus('');

    try {
      // EmailJS configuration
      const serviceId = 'service_2en6bfi';
      const templateId = 'template_ext2i42';
      const publicKey = 'EyDF-cgWPg-1ZQ7eI';

      // Template parameters
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.tel,
        subject: formData.subject,
        message: formData.message,
        to_email: 'info@freelancerwaala.com'
      };

      // Send email using EmailJS
      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      
      setStatus('success');
      setFormData({
        name: '',
        email: '',
        tel: '',
        subject: '',
        message: ''
      });
      setTimeout(() => setStatus(''), 5000);
    } catch (error) {
      console.error('Error sending email:', error);
      setStatus('error');
      setTimeout(() => setStatus(''), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-dark-900">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1920&q=80")',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-dark-900/80 to-dark-900/60"></div>
        </div>
        <div className="relative z-10 text-center">
          <h1 className="text-6xl md:text-7xl font-bold text-white tracking-wider">
            CONTACT US
          </h1>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20 bg-dark-800">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Location */}
            <div className="bg-dark-900 rounded-2xl p-8 text-center border border-dark-700 hover:border-[#2a97d4] transition-all duration-300">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-[#2a97d4]/10 flex items-center justify-center">
                <svg className="w-10 h-10 text-[#2a97d4]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h5 className="text-xl font-semibold text-white mb-4">Main Location</h5>
              <p className="text-gray-400">Garh road Jalandhar, Punjab, 144022</p>
            </div>

            {/* Email */}
            <div className="bg-dark-900 rounded-2xl p-8 text-center border border-dark-700 hover:border-[#2a97d4] transition-all duration-300">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-[#2a97d4]/10 flex items-center justify-center">
                <svg className="w-10 h-10 text-[#2a97d4]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h5 className="text-xl font-semibold text-white mb-4">Email Address</h5>
              <a href="mailto:info@freelancerwaala.com" className="text-gray-400 hover:text-[#2a97d4] transition-colors">
                info@freelancerwaala.com
              </a>
            </div>

            {/* Phone */}
            <div className="bg-dark-900 rounded-2xl p-8 text-center border border-dark-700 hover:border-[#2a97d4] transition-all duration-300">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-[#2a97d4]/10 flex items-center justify-center">
                <svg className="w-10 h-10 text-[#2a97d4]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h5 className="text-xl font-semibold text-white mb-4">Phone Number</h5>
              <a href="tel:+918365855029" className="text-gray-400 hover:text-[#2a97d4] transition-colors">
                +91-8365855029
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-dark-900">
        <div className="container-custom max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#2a97d4] font-semibold text-sm uppercase tracking-wider mb-4">
              Contact Us
            </p>
            <h3 className="text-4xl font-bold text-white">
              Send Us Message
            </h3>
          </div>

          <form onSubmit={handleSubmit} className="bg-dark-800 rounded-2xl p-8 border border-dark-700">
            {/* Status Messages */}
            {status === 'success' && (
              <div className="mb-6 p-4 bg-green-500/10 border border-green-500 rounded-lg text-green-500 text-center">
                ✓ Message sent successfully! We'll get back to you soon.
              </div>
            )}
            {status === 'error' && (
              <div className="mb-6 p-4 bg-red-500/10 border border-red-500 rounded-lg text-red-500 text-center">
                ✗ Failed to send message. Please try again or email us directly.
              </div>
            )}

            <div className="grid md:grid-cols-3 gap-6 mb-6">
              <div className="relative">
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-dark-900 text-white px-4 py-3 pl-12 rounded-lg border border-dark-700 focus:border-[#2a97d4] focus:outline-none transition-colors"
                  required
                />
                <svg className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>

              <div className="relative">
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-dark-900 text-white px-4 py-3 pl-12 rounded-lg border border-dark-700 focus:border-[#2a97d4] focus:outline-none transition-colors"
                  required
                />
                <svg className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                </svg>
              </div>

              <div className="relative">
                <input
                  type="tel"
                  name="tel"
                  placeholder="Phone Number"
                  value={formData.tel}
                  onChange={handleChange}
                  maxLength="10"
                  className="w-full bg-dark-900 text-white px-4 py-3 pl-12 rounded-lg border border-dark-700 focus:border-[#2a97d4] focus:outline-none transition-colors"
                  required
                />
                <svg className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
            </div>

            <div className="mb-6">
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full bg-dark-900 text-white px-4 py-3 rounded-lg border border-dark-700 focus:border-[#2a97d4] focus:outline-none transition-colors"
                required
              />
            </div>

            <div className="mb-6">
              <textarea
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
                rows="6"
                className="w-full bg-dark-900 text-white px-4 py-3 rounded-lg border border-dark-700 focus:border-[#2a97d4] focus:outline-none transition-colors resize-none"
                required
              ></textarea>
            </div>

            <div className="text-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-[#2a97d4] text-white px-8 py-3 rounded-lg hover:bg-[#2a97d4]/90 transition-colors duration-300 inline-flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <span>Send us message</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Blog Section */}
      <BlogSection />
    </div>
  );
};

export default ContactPage;
