import React from 'react';
import { Link } from 'react-router-dom';

const BlogSection = () => {
  const blogs = [
    {
      id: 1,
      image: '/assets/expand.jpg', 
      title: 'The definition of a kitchen garden has dramatically evolved with the CAAX unit',
      description: 'The definition of a kitchen garden has dramatically evolved with the CAAX unit, merging traditional gardening with cutting-edge technology. Unlike traditional soil-based gardens, hydroponics allows plants to grow in nutrient-rich water solutions, enabling efficient space usage and year-round cultivation.'
    },
    {
      id: 2,
      image: '/assets/WEB2.jpg',
      title: 'History of Hydroponics',
      description: 'Hydroponics, or the manner of growing plants in the absence of soil, has roots that extend back to ancient civilizations. One of the oldest examples of hydroponic farming could be thought to be the Hanging Gardens of Babylon, dating back to approximately 600 BCE, where watering systems should have supported the growth of plants without ordinary soil.'
    },
    {
      id: 3,
      image: '/assets/WEB3.jpg',
      title: 'Why CAAX?',
      description: 'Contrasted with conventional soil-based farming, CAAX has enormous advantages that make it one of the lead methods in modern agriculture. The first striking advantage that CAAX has over traditional farming is its water efficiency. When compared to conventional farming techniques that usually apply large amounts of water, let alone evaporation and high amounts of runoff, it actually uses about 90% less water.'
    }
  ];

  return (
    <section className="px-6 py-12">
      <div className="container mx-auto">
        <h2 className="mb-8 text-4xl font-bold text-center text-white">
          <span style={{
              background: 'linear-gradient(88.52deg, #1263AF 29.11%, #06CCBC 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>Our</span> Latest Blog
        </h2>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {blogs.map((blog) => (
            <Link to={`/blog/${blog.id}`} key={blog.id}>
              <div 
                className="relative p-4 overflow-hidden transition-transform duration-300 transform bg-transparent rounded-[50px] border-2 border-[#39baff] shadow-lg hover:shadow-xl hover:scale-105" 
                style={{ borderRadius: '30px', height: '500px' }}  
              >
                <img 
                  src={blog.image} 
                  alt={blog.title} 
                  className="object-cover w-full h-48 rounded-lg"
                />
                <div className="p-4">
                  <h3 className="mb-2 text-xl font-bold text-white">{blog.title}</h3>
                  <div 
                    className="overflow-y-auto text-sm text-gray-300"
                    style={{ maxHeight: '140px' }}  
                  >
                    {blog.description}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
