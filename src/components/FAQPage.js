import React, { useState } from 'react';
import BlogSection from './BlogSection';
import CTASection from './CTASection';

const FAQPage = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: 'Will You Have to pay any charge to work in our company?',
      answer: 'No, there is no charges to work in our company.'
    },
    {
      question: 'Where is our Company Located?',
      answer: 'Garh road Jalandhar, Punjab, 144022.'
    },
    {
      question: 'Do we ever have to go office?',
      answer: 'No we never have to go to visit office. it is totally work from home.'
    },
    {
      question: 'Will you have to give any personal documents to company?',
      answer: "No, you don't have to give any personal documents to us."
    },
    {
      question: 'Will FreeLancer Waala Provide Offer Letter and Official ID Card?',
      answer: "Yes, our company (FreeLancer Waala) will provide it's employer their Offer Letter and their Official ID Card."
    },
    {
      question: 'How Much you can Earn In FreeLancer Waala?',
      answer: 'You can earn unlimited in our company, The harder you work, the more you earn.'
    },
    {
      question: "Will FreeLancer Waala Provide Work From Office job or it's only provide work from home job",
      answer: 'We only Provide Work From Home job.'
    },
    {
      question: 'Why FreeLancer Waala is not giving work from office job?',
      answer: 'Our company is not providing work from office job because not all people can go to office daily, for example: Housewife and Students.'
    },
    {
      question: 'Is there any age limitation to work in FreeLancer Waala?',
      answer: 'There is no age limitation to work in our company anyone can work.'
    },
    {
      question: 'How FreeLancer Waala will pay salary weekly basis or monthly basis?',
      answer: "Our company will give salary on weekly basis as well as on monthly basis it's totally depends on you."
    },
    {
      question: 'Is there any need of Laptop or Computer to work in FreeLancer Waala (company)?',
      answer: "No, there is no need of Laptop or Computer to work in our company, You can use smartphone to work in our company."
    },
    {
      question: 'What are the working hours of FreeLancer Waala?',
      answer: 'You have to work 6 hours daily in our company.'
    },
    {
      question: "Does FreeLancer Waala offer's Part time job or Full time job?",
      answer: 'Yes, Our Company provides Part time job and Full Time job both.'
    },
    {
      question: 'Does FreeLancer Waala provides training to new joiners?',
      answer: 'Yes, our company provides training so that new joiners understand how to work.'
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <div className="min-h-screen bg-dark-900">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1920&q=80")',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-purple-900/80"></div>
        </div>
        <div className="relative z-10 text-center">
          <h1 className="text-6xl md:text-7xl font-bold text-white tracking-wider">
            FAQ
          </h1>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-dark-900">
        <div className="container-custom">
          <div className="text-center mb-16">
            <p className="text-[#2a97d4] font-semibold text-sm uppercase tracking-wider mb-4">
              Have Any Questions?
            </p>
            <h2 className="text-4xl font-bold text-white">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className="bg-dark-800 rounded-xl border border-gray-700 overflow-hidden transition-all duration-300 hover:border-[#2a97d4]"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-6 text-left transition-colors duration-300"
                >
                  <span className="text-lg font-semibold text-white pr-8">
                    {faq.question}
                  </span>
                  <div className={`w-10 h-10 rounded-full border-2 border-white bg-black flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                    openIndex === index ? 'rotate-45 bg-[#2a97d4]' : ''
                  }`}>
                    <span className={`text-2xl font-light transition-colors duration-300 ${
                      openIndex === index ? 'text-white' : 'text-white'
                    }`}>+</span>
                  </div>
                </button>
                <div 
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? 'max-h-96' : 'max-h-0'
                  }`}
                >
                  <div className="border-t border-gray-700"></div>
                  <div className="px-6 py-6">
                    <p className="text-gray-300 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

       {/* Blog Section */}
      <BlogSection />

      {/* CTA Section */}
      <CTASection />
    </div>
  );
};

export default FAQPage;
