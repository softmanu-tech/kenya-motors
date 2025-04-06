
import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'James Mwangi',
    role: 'Business Executive',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
    stars: 5,
    text: 'The service was exceptional. The car was in perfect condition and the staff were extremely helpful and professional. Will definitely use Kenya Motors again!'
  },
  {
    name: 'Sarah Nduta',
    role: 'Travel Blogger',
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
    stars: 5,
    text: 'I\'ve rented from many companies across Kenya but none match the quality and service of Kenya Motors. The prices are fair and the vehicles are top-notch.'
  },
  {
    name: 'Michael Omondi',
    role: 'Tourist',
    image: 'https://randomuser.me/api/portraits/men/22.jpg',
    stars: 4,
    text: 'Great experience traveling through Kenya with a rental from Kenya Motors. The 4x4 handled all terrains perfectly and customer support was always available.'
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

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Customer Testimonials</h2>
          <p className="section-subtitle">What our customers say about us</p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={item}
              className="bg-white p-8 rounded-xl shadow-lg card-hover"
            >
              <div className="flex items-center mb-6">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-16 h-16 rounded-full mr-4 object-cover"
                />
                <div>
                  <h4 className="font-cinzel font-bold">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                  <div className="flex mt-1">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        size={16} 
                        fill={i < testimonial.stars ? '#D4AF37' : 'none'} 
                        stroke={i < testimonial.stars ? '#D4AF37' : '#D1D5DB'}
                        className="mr-1"
                      />
                    ))}
                  </div>
                </div>
              </div>
              <p className="italic text-gray-600">"{testimonial.text}"</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
