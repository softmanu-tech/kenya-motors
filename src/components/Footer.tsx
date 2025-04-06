
import React from 'react';
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-kenya-black text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="font-cinzel text-2xl font-bold mb-4 text-kenya-gold">KENYA<span className="text-white">MOTORS</span></h3>
            <p className="mb-4">Your premier destination for luxury car rentals in Kenya. We provide high-quality vehicles and exceptional service for all your transportation needs.</p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-kenya-gold transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-kenya-gold transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:text-kenya-gold transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-kenya-gold transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-rowdies text-lg font-bold mb-4 text-kenya-gold">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="hover:text-kenya-gold transition-colors">Home</a></li>
              <li><a href="#cars" className="hover:text-kenya-gold transition-colors">Our Fleet</a></li>
              <li><a href="#services" className="hover:text-kenya-gold transition-colors">Services</a></li>
              <li><a href="#testimonials" className="hover:text-kenya-gold transition-colors">Testimonials</a></li>
              <li><a href="#contact" className="hover:text-kenya-gold transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h4 className="font-rowdies text-lg font-bold mb-4 text-kenya-gold">Our Services</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-kenya-gold transition-colors">Airport Transfers</a></li>
              <li><a href="#" className="hover:text-kenya-gold transition-colors">Corporate Car Rental</a></li>
              <li><a href="#" className="hover:text-kenya-gold transition-colors">Self-Drive Rentals</a></li>
              <li><a href="#" className="hover:text-kenya-gold transition-colors">Chauffeur Services</a></li>
              <li><a href="#" className="hover:text-kenya-gold transition-colors">Safari Car Rentals</a></li>
            </ul>
          </div>

          {/* Working Hours */}
          <div>
            <h4 className="font-rowdies text-lg font-bold mb-4 text-kenya-gold">Working Hours</h4>
            <ul className="space-y-2">
              <li className="flex justify-between">
                <span>Monday - Friday:</span>
                <span>8:00 AM - 6:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Saturday:</span>
                <span>9:00 AM - 5:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday:</span>
                <span>10:00 AM - 4:00 PM</span>
              </li>
              <li className="mt-4 pt-4 border-t border-gray-700">
                <span className="block font-bold text-kenya-gold">24/7 Support</span>
                <span>+254 700 123 456</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} Kenya Motors. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
