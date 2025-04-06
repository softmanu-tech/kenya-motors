
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import FeaturedCategories from '@/components/FeaturedCategories';
import PopularCars from '@/components/PopularCars';
import WhyChooseUs from '@/components/WhyChooseUs';
import Testimonials from '@/components/Testimonials';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="min-h-screen"
      >
        <Navbar />
        <Hero />
        <FeaturedCategories />
        <PopularCars />
        <WhyChooseUs />
        <Testimonials />
        <ContactSection />
        <Footer />
      </motion.div>
    </AnimatePresence>
  );
};

export default Index;
