
import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Clock, HeartHandshake, DollarSign } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Safe & Reliable',
    description: 'All our vehicles are regularly serviced and maintained to the highest standards for your safety.'
  },
  {
    icon: Clock,
    title: '24/7 Support',
    description: 'Our customer support team is available round the clock to assist you with any queries.'
  },
  {
    icon: HeartHandshake,
    title: 'Experienced Team',
    description: 'Our team has years of experience in the car rental industry to provide you with the best service.'
  },
  {
    icon: DollarSign,
    title: 'Best Rates',
    description: 'We offer competitive pricing with no hidden charges. What you see is what you pay.'
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

const WhyChooseUs = () => {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Why Choose Us</h2>
          <p className="section-subtitle">We pride ourselves on offering the best car rental experience</p>
        </motion.div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={item}
              className="bg-white p-8 rounded-xl shadow-lg text-center card-hover"
            >
              <div className="mx-auto bg-kenya-red/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <feature.icon size={28} className="text-kenya-red" />
              </div>
              <h3 className="font-cinzel text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 bg-kenya-red text-white p-8 md:p-12 rounded-xl"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="font-cinzel text-2xl md:text-3xl font-bold mb-4">Need Help Choosing the Right Vehicle?</h3>
              <p className="mb-6">Our team of experts is ready to help you find the perfect car for your needs, whether it's a business trip, family vacation, or special occasion.</p>
              <a href="#contact" className="inline-block btn-secondary">
                Contact Us Now
              </a>
            </div>
            <div className="hidden md:block">
              <img 
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2574&q=80" 
                alt="Customer Service" 
                className="rounded-lg w-full h-64 object-cover"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
