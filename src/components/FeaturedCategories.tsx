
import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Users, Zap, Fuel } from 'lucide-react';

const categories = [
  {
    title: 'Economy',
    icon: Fuel,
    description: 'Fuel efficient vehicles at an affordable price',
    image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80',
    color: 'bg-blue-500'
  },
  {
    title: 'Family',
    icon: Users,
    description: 'Spacious vehicles perfect for family trips',
    image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80',
    color: 'bg-green-500'
  },
  {
    title: 'Luxury',
    icon: Shield,
    description: 'Premium vehicles for those special occasions',
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80',
    color: 'bg-kenya-red'
  },
  {
    title: 'Sports',
    icon: Zap,
    description: 'High-performance cars for the thrill seekers',
    image: 'https://images.unsplash.com/photo-1553440569-bcc63803a83d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2525&q=80',
    color: 'bg-yellow-500'
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    }
  }
};

const item = {
  hidden: { y: 20, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { duration: 0.6 } }
};

const FeaturedCategories = () => {
  return (
    <section id="categories" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Vehicle Categories</h2>
          <p className="section-subtitle">Find the perfect car for your journey</p>
        </motion.div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {categories.map((category, index) => (
            <motion.div
              key={index}
              variants={item}
              className="card-hover rounded-xl overflow-hidden shadow-lg bg-white"
            >
              <div className="relative h-48">
                <img 
                  src={category.image} 
                  alt={category.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                  <span className={`${category.color} p-3 rounded-full`}>
                    <category.icon size={24} className="text-white" />
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-cinzel text-xl font-bold mb-2">{category.title}</h3>
                <p className="text-gray-600 mb-4">{category.description}</p>
                <a href="#cars" className="font-rowdies text-kenya-red flex items-center hover:underline">
                  View Cars 
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedCategories;
