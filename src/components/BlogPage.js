import React from 'react';
import CTASection from './CTASection';

const BlogPage = () => {
  const blogPosts = [
    {
      id: 1,
      title: "How To Do Withrawal Section Free In M Stock Account In Just 10 Rs",
      date: "27 Dec 2023",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
      slug: "blog-1"
    },
    {
      id: 2,
      title: "How To Do Withrawal Section Free In ICICI Direct Account In just 10 Rs",
      date: "27 Dec 2023",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
      slug: "blog-2"
    },
    {
      id: 3,
      title: "How To Open Account In Bajaj MF In Just 3 Mins",
      date: "20 Dec 2023",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
      slug: "blog-3"
    },
    {
      id: 4,
      title: "How to Do Withrawal Section Free in 5 paisa Demat account in just 50 rs",
      date: "29 Nov 2023",
      image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=800&q=80",
      slug: "blog-4"
    },
    {
      id: 5,
      title: "how to open HDFC SKY Demat AC | Without any Charge | with login",
      date: "15 Nov 2023",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80",
      slug: "blog-5"
    },
    {
      id: 6,
      title: "5 Paisa Demat Account Opening Video | Without any Charge",
      date: "25 Oct 2023",
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80",
      slug: "blog-6"
    }
  ];

  return (
    <div className="min-h-screen bg-dark-900">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1455390582262-044cdead277a?w=1920&q=80")',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-dark-900/80 to-dark-900/60"></div>
        </div>
        <div className="relative z-10 text-center">
          <h1 className="text-6xl md:text-7xl font-bold text-white tracking-wider">
            BLOG
          </h1>
        </div>
      </section>

      {/* Blog Grid Section */}
      <section className="py-20 bg-dark-800">
        <div className="container-custom max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#2a97d4] font-semibold text-sm uppercase tracking-wider mb-4">
              Get Every Single Update
            </p>
            <h2 className="text-4xl font-bold text-white">
              Read Some Latest Blog & News
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post) => (
              <div 
                key={post.id}
                className="bg-dark-900 rounded-xl overflow-hidden border border-dark-700 hover:border-[#2a97d4] transition-all duration-300 group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-5">
                  <h5 className="text-lg font-semibold text-white mb-3 group-hover:text-[#2a97d4] transition-colors duration-300 line-clamp-2">
                    {post.title}
                  </h5>
                  <div className="flex items-center gap-2 text-gray-400 text-sm">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span>{post.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />
    </div>
  );
};

export default BlogPage;
