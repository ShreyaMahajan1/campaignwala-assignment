import React from 'react';

const BlogSection = () => {
  const blogs = [
    {
      title: "How To Do Withdrawal Section Free In M Stock Account In Just 10 Rs",
      date: "27 Dec 2023",
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400&h=250&fit=crop",
      category: "Finance"
    },
    {
      title: "How To Do Withdrawal Section Free In ICICI Direct Account In just 10 Rs",
      date: "27 Dec 2023", 
      image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=400&h=250&fit=crop",
      category: "Banking"
    },
    {
      title: "How To Open Account In Bajaj MF In Just 3 Mins",
      date: "20 Dec 2023",
      image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=400&h=250&fit=crop",
      category: "Investment"
    }
  ];

  return (
    <section id="blog" className="section-padding bg-dark-800">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="text-[#2a97d4] text-sm font-semibold tracking-wider uppercase mb-4">
            GET EVERY SINGLE UPDATE
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold font-heading mb-6">
            Read Some Latest Blog & News
          </h2>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 max-w-5xl mx-auto">
          {blogs.map((blog, index) => (
            <article 
              key={index}
              className="group relative h-96 rounded-sm overflow-hidden card-hover"
            >
              {/* Full Background Image */}
              <img 
                src={blog.image}
                alt={blog.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              
              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/30"></div>
              
              {/* Content on Image */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <h3 className="text-xl font-semibold mb-3 leading-tight text-white  transition-colors duration-300">
                  {blog.title}
                </h3>
                
                <div className="flex items-center text-white text-sm font-medium">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  {blog.date}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <button className="bg-[#2a97d4] text-white px-8 py-3 rounded-sm font-semibold hover:bg-[#2a97d4]/90 transition-all duration-300 inline-flex items-center gap-2">
            VIEW ALL
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;