
import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Contact Us</h2>
          <p className="section-subtitle">We're here to answer any questions</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="font-cinzel text-2xl font-bold mb-6">Get In Touch</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-kenya-red/10 p-3 rounded-full mr-4">
                  <MapPin size={20} className="text-kenya-red" />
                </div>
                <div>
                  <h4 className="font-bold font-rowdies mb-1">Our Location</h4>
                  <p className="text-gray-600">Riverside Drive, Westlands</p>
                  <p className="text-gray-600">Nairobi, Kenya</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-kenya-red/10 p-3 rounded-full mr-4">
                  <Phone size={20} className="text-kenya-red" />
                </div>
                <div>
                  <h4 className="font-bold font-rowdies mb-1">Phone Number</h4>
                  <p className="text-gray-600">+254 700 123 456</p>
                  <p className="text-gray-600">+254 733 987 654</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-kenya-red/10 p-3 rounded-full mr-4">
                  <Mail size={20} className="text-kenya-red" />
                </div>
                <div>
                  <h4 className="font-bold font-rowdies mb-1">Email Address</h4>
                  <p className="text-gray-600">info@kenyamotors.co.ke</p>
                  <p className="text-gray-600">booking@kenyamotors.co.ke</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-kenya-red/10 p-3 rounded-full mr-4">
                  <Clock size={20} className="text-kenya-red" />
                </div>
                <div>
                  <h4 className="font-bold font-rowdies mb-1">Working Hours</h4>
                  <p className="text-gray-600">Monday - Friday: 8:00 AM - 6:00 PM</p>
                  <p className="text-gray-600">Saturday: 9:00 AM - 5:00 PM</p>
                  <p className="text-gray-600">Sunday: 10:00 AM - 4:00 PM</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-xl shadow-lg"
          >
            <h3 className="font-cinzel text-2xl font-bold mb-6">Send Us a Message</h3>
            
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1 font-rowdies">Full Name</label>
                  <input 
                    type="text" 
                    id="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-kenya-red"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1 font-rowdies">Email Address</label>
                  <input 
                    type="email" 
                    id="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-kenya-red"
                    placeholder="Your email"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-1 font-rowdies">Phone Number</label>
                <input 
                  type="tel" 
                  id="phone"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-kenya-red"
                  placeholder="Your phone number"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-1 font-rowdies">Subject</label>
                <input 
                  type="text" 
                  id="subject"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-kenya-red"
                  placeholder="Subject of your message"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1 font-rowdies">Message</label>
                <textarea 
                  id="message"
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-kenya-red"
                  placeholder="Write your message here..."
                ></textarea>
              </div>

              <Button type="submit" className="btn-primary w-full">
                Send Message
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
