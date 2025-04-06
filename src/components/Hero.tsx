
import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Hero = () => {
  const scrollToCars = () => {
    const carsSection = document.getElementById('cars');
    if (carsSection) {
      carsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToServices = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSearchCars = (e: React.FormEvent) => {
    e.preventDefault();
    // Scroll to cars section after form submission
    scrollToCars();
    // In a real app, you would use the form data to filter cars
    console.log('Search form submitted');
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center">
      {/* Background Image with Parallax Effect */}
      <motion.div 
        className="absolute inset-0 bg-cover bg-center z-0" 
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80')" }}
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2 }}
      >
        <div className="absolute inset-0 hero-gradient"></div>
      </motion.div>

      <div className="container mx-auto px-4 z-10 pt-24">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="font-rowdies text-kenya-gold text-xl md:text-2xl mb-3"
            >
              PREMIUM CAR RENTAL IN KENYA
            </motion.h2>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="font-cinzel text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
            >
              Drive Your <motion.span 
                className="gold-gradient"
                animate={{ 
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] 
                }}
                transition={{ 
                  duration: 5,
                  repeat: Infinity,
                  repeatType: "reverse" 
                }}
              >Dreams</motion.span> Today
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="text-lg md:text-xl mb-8 max-w-lg"
            >
              Experience the ultimate luxury and comfort with our premium fleet of vehicles. Perfect for business trips, family vacations, or special occasions.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg" className="btn-primary text-lg" onClick={scrollToCars}>
                  View Our Fleet
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button variant="outline" size="lg" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-kenya-red transition-all text-lg" onClick={scrollToServices}>
                  Learn More
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Booking Form Card */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="bg-white rounded-xl shadow-2xl p-6 md:p-8 max-w-md mx-auto w-full"
            id="book-now"
          >
            <h3 className="font-cinzel text-2xl font-bold text-kenya-red mb-6">Quick Reservation</h3>
            <form className="space-y-5" onSubmit={handleSearchCars}>
              <div>
                <label className="block text-sm font-medium mb-1 font-rowdies">Pick-up Location</label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-3 text-gray-400" size={18} />
                  <select className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-kenya-red">
                    <option>Nairobi - Jomo Kenyatta Airport</option>
                    <option>Nairobi - City Center</option>
                    <option>Mombasa</option>
                    <option>Kisumu</option>
                  </select>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1 font-rowdies">Pick-up Date</label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-3 text-gray-400" size={18} />
                    <input type="date" className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-kenya-red" required />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1 font-rowdies">Return Date</label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-3 text-gray-400" size={18} />
                    <input type="date" className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-kenya-red" required />
                  </div>
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1 font-rowdies">Vehicle Type</label>
                <div className="relative">
                  <ChevronDown className="absolute right-3 top-3 text-gray-400" size={18} />
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-kenya-red appearance-none">
                    <option>Economy</option>
                    <option>Standard</option>
                    <option>SUV</option>
                    <option>Luxury</option>
                    <option>Sports</option>
                  </select>
                </div>
              </div>
              
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                <Button type="submit" className="btn-primary w-full text-lg">
                  Search Available Cars
                </Button>
              </motion.div>
            </form>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll Down Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-white"
      >
        <span className="text-sm mb-2">Scroll to explore</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <ChevronDown size={24} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
