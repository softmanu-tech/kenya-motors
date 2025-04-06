
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Users, Fuel, Cog, Gauge } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { 
  Pagination, 
  PaginationContent, 
  PaginationEllipsis, 
  PaginationItem, 
  PaginationLink, 
  PaginationNext, 
  PaginationPrevious 
} from '@/components/ui/pagination';
import { useIsMobile } from '@/hooks/use-mobile';

// Additional car data
const carData = [
  {
    id: 1,
    name: 'Toyota Land Cruiser Prado',
    category: 'SUV',
    image: '/images/tyt.jpeg',
    price: 15000,
    seats: 7,
    transmission: 'Automatic',
    fuelType: 'Diesel',
    speed: '180 km/h',
    featured: true,
  },
  {
    id: 2,
    name: 'Mercedes-Benz E-Class',
    category: 'Luxury',
    image: '/images/kali.jpg',
    price: 25000,
    seats: 5,
    transmission: 'Automatic',
    fuelType: 'Petrol',
    speed: '240 km/h',
    featured: true,
  },
  {
    id: 3,
    name: 'Suzuki Swift',
    category: 'Economy',
    image: 'https://images.unsplash.com/photo-1550355291-bbee04a92027?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2536&q=80',
    price: 6000,
    seats: 5,
    transmission: 'Manual',
    fuelType: 'Petrol',
    speed: '160 km/h',
    featured: false,
  },
  {
    id: 4,
    name: 'Range Rover Sport',
    category: 'Luxury SUV',
    image: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80',
    price: 30000,
    seats: 5,
    transmission: 'Automatic',
    fuelType: 'Diesel',
    speed: '210 km/h',
    featured: true,
  },
  {
    id: 5,
    name: 'Toyota Corolla',
    category: 'Sedan',
    image: 'images/corola.jpg',
    price: 8000,
    seats: 5,
    transmission: 'Automatic',
    fuelType: 'Petrol',
    speed: '180 km/h',
    featured: false,
  },
  {
    id: 6,
    name: 'Porsche 911',
    category: 'Sports',
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80',
    price: 40000,
    seats: 2,
    transmission: 'Automatic',
    fuelType: 'Petrol',
    speed: '330 km/h',
    featured: true,
  },
  // New cars added below
  {
    id: 7,
    name: 'BMW X5',
    category: 'Luxury SUV',
    image: 'https://images.unsplash.com/photo-1556189250-72ba954cfc2b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80',
    price: 28000,
    seats: 5,
    transmission: 'Automatic',
    fuelType: 'Diesel',
    speed: '230 km/h',
    featured: true,
  },
  {
    id: 8,
    name: 'Toyota Hilux',
    category: 'Pickup',
    image: 'https://images.unsplash.com/photo-1601581875309-fafbab567a38?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2574&q=80',
    price: 12000,
    seats: 5,
    transmission: 'Manual',
    fuelType: 'Diesel',
    speed: '175 km/h',
    featured: false,
  },
  {
    id: 9,
    name: 'Audi A8',
    category: 'Luxury',
    image: 'https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2669&q=80',
    price: 35000,
    seats: 5,
    transmission: 'Automatic',
    fuelType: 'Petrol',
    speed: '250 km/h',
    featured: true,
  },
  {
    id: 10,
    name: 'Honda Civic',
    category: 'Sedan',
    image: 'https://images.unsplash.com/photo-1606016159991-dfe4f2746ad5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2574&q=80',
    price: 7500,
    seats: 5,
    transmission: 'Automatic',
    fuelType: 'Petrol',
    speed: '190 km/h',
    featured: false,
  },
  {
    id: 11,
    name: 'Volkswagen Golf',
    category: 'Hatchback',
    image: 'https://images.unsplash.com/photo-1589750602846-60028879da78?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2574&q=80',
    price: 6800,
    seats: 5,
    transmission: 'Manual',
    fuelType: 'Petrol',
    speed: '185 km/h',
    featured: false,
  },
  {
    id: 12,
    name: 'Ford Mustang',
    category: 'Sports',
    image: 'https://images.unsplash.com/photo-1584345604476-8ec5f82d661h?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80',
    price: 22000,
    seats: 4,
    transmission: 'Automatic',
    fuelType: 'Petrol',
    speed: '250 km/h',
    featured: true,
  },
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

const formatPrice = (price: number) => {
  return `KES ${price.toLocaleString()}`;
};

const ITEMS_PER_PAGE = 6;

const PopularCars = () => {
  const [filter, setFilter] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const isMobile = useIsMobile();
  
  const filteredCars = filter === 'all' 
    ? carData 
    : filter === 'featured' 
      ? carData.filter(car => car.featured) 
      : carData.filter(car => car.category.toLowerCase() === filter.toLowerCase());

  // Calculate pagination info
  const totalItems = filteredCars.length;
  const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentItems = filteredCars.slice(startIndex, endIndex);
  
  // Reset to page 1 when filter changes
  useEffect(() => {
    setCurrentPage(1);
  }, [filter]);
  
  const handleBookNow = (carId: number) => {
    console.log('Booking car with ID:', carId);
    // In a real app, this would navigate to a booking page or show a booking modal
    const bookNowSection = document.getElementById('book-now');
    if (bookNowSection) {
      bookNowSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const renderPaginationItems = () => {
    // Simplified pagination for mobile
    if (isMobile) {
      return (
        <>
          <PaginationItem>
            <PaginationPrevious 
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              className={currentPage === 1 ? 'pointer-events-none opacity-50' : ''}
            />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink isActive>{currentPage}</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationNext 
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
              className={currentPage === totalPages ? 'pointer-events-none opacity-50' : ''}
            />
          </PaginationItem>
        </>
      );
    }
    
    // Desktop pagination with more options
    const items = [];
    
    // Previous button
    items.push(
      <PaginationItem key="prev">
        <PaginationPrevious 
          onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
          className={currentPage === 1 ? 'pointer-events-none opacity-50' : ''}
        />
      </PaginationItem>
    );
    
    // First page
    items.push(
      <PaginationItem key={1}>
        <PaginationLink 
          isActive={currentPage === 1}
          onClick={() => setCurrentPage(1)}
        >
          1
        </PaginationLink>
      </PaginationItem>
    );
    
    // Ellipsis and middle pages
    if (totalPages > 5) {
      if (currentPage > 3) {
        items.push(
          <PaginationItem key="ellipsis-1">
            <PaginationEllipsis />
          </PaginationItem>
        );
      }
      
      // Middle pages
      const startPage = Math.max(2, currentPage - 1);
      const endPage = Math.min(totalPages - 1, currentPage + 1);
      
      for (let i = startPage; i <= endPage; i++) {
        if (i === 1 || i === totalPages) continue; // Skip first and last pages as they're handled separately
        items.push(
          <PaginationItem key={i}>
            <PaginationLink 
              isActive={currentPage === i}
              onClick={() => setCurrentPage(i)}
            >
              {i}
            </PaginationLink>
          </PaginationItem>
        );
      }
      
      if (currentPage < totalPages - 2) {
        items.push(
          <PaginationItem key="ellipsis-2">
            <PaginationEllipsis />
          </PaginationItem>
        );
      }
    } else {
      // For small number of pages, show all
      for (let i = 2; i < totalPages; i++) {
        items.push(
          <PaginationItem key={i}>
            <PaginationLink 
              isActive={currentPage === i}
              onClick={() => setCurrentPage(i)}
            >
              {i}
            </PaginationLink>
          </PaginationItem>
        );
      }
    }
    
    // Last page (if more than 1 page)
    if (totalPages > 1) {
      items.push(
        <PaginationItem key={totalPages}>
          <PaginationLink 
            isActive={currentPage === totalPages}
            onClick={() => setCurrentPage(totalPages)}
          >
            {totalPages}
          </PaginationLink>
        </PaginationItem>
      );
    }
    
    // Next button
    items.push(
      <PaginationItem key="next">
        <PaginationNext 
          onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
          className={currentPage === totalPages ? 'pointer-events-none opacity-50' : ''}
        />
      </PaginationItem>
    );
    
    return items;
  };
  
  return (
    <section id="cars" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Our Fleet</h2>
          <p className="section-subtitle">Discover our wide range of premium vehicles</p>
          
          {/* Filter buttons */}
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            <Button 
              onClick={() => setFilter('all')}
              variant={filter === 'all' ? 'default' : 'outline'}
              className={filter === 'all' ? 'bg-kenya-red hover:bg-kenya-red/90' : ''}
            >
              All Vehicles
            </Button>
            <Button 
              onClick={() => setFilter('featured')} 
              variant={filter === 'featured' ? 'default' : 'outline'}
              className={filter === 'featured' ? 'bg-kenya-red hover:bg-kenya-red/90' : ''}
            >
              Featured
            </Button>
            <Button 
              onClick={() => setFilter('suv')} 
              variant={filter === 'suv' ? 'default' : 'outline'}
              className={filter === 'suv' ? 'bg-kenya-red hover:bg-kenya-red/90' : ''}
            >
              SUVs
            </Button>
            <Button 
              onClick={() => setFilter('luxury')} 
              variant={filter === 'luxury' ? 'default' : 'outline'}
              className={filter === 'luxury' ? 'bg-kenya-red hover:bg-kenya-red/90' : ''}
            >
              Luxury
            </Button>
            <Button 
              onClick={() => setFilter('economy')} 
              variant={filter === 'economy' ? 'default' : 'outline'}
              className={filter === 'economy' ? 'bg-kenya-red hover:bg-kenya-red/90' : ''}
            >
              Economy
            </Button>
            <Button 
              onClick={() => setFilter('sports')} 
              variant={filter === 'sports' ? 'default' : 'outline'}
              className={filter === 'sports' ? 'bg-kenya-red hover:bg-kenya-red/90' : ''}
            >
              Sports
            </Button>
          </div>
        </motion.div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {currentItems.map((car) => (
            <motion.div
              key={car.id}
              variants={item}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="bg-white rounded-xl overflow-hidden shadow-lg"
            >
              <div className="relative">
                <motion.img 
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                  src={car.image} 
                  alt={car.name} 
                  className="w-full h-64 object-cover"
                />
                {car.featured && (
                  <motion.div 
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className="absolute top-4 right-4 bg-kenya-gold text-kenya-black py-1 px-3 rounded-full font-rowdies text-sm"
                  >
                    Featured
                  </motion.div>
                )}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                  <div className="flex justify-between items-end">
                    <div>
                      <h3 className="font-cinzel text-xl font-bold text-white">{car.name}</h3>
                      <p className="text-sm text-gray-200">{car.category}</p>
                    </div>
                    <motion.div 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.4 }}
                      className="text-white text-right"
                    >
                      <span className="block text-sm">per day</span>
                      <span className="text-xl font-bold">{formatPrice(car.price)}</span>
                    </motion.div>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <motion.div 
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center"
                  >
                    <Users size={18} className="text-kenya-red mr-2" />
                    <span className="text-sm">{car.seats} Seats</span>
                  </motion.div>
                  <motion.div 
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center"
                  >
                    <Cog size={18} className="text-kenya-red mr-2" />
                    <span className="text-sm">{car.transmission}</span>
                  </motion.div>
                  <motion.div 
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center"
                  >
                    <Fuel size={18} className="text-kenya-red mr-2" />
                    <span className="text-sm">{car.fuelType}</span>
                  </motion.div>
                  <motion.div 
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center"
                  >
                    <Gauge size={18} className="text-kenya-red mr-2" />
                    <span className="text-sm">{car.speed}</span>
                  </motion.div>
                </div>
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <Button 
                    className="w-full bg-kenya-red hover:bg-kenya-red/90 text-white"
                    onClick={() => handleBookNow(car.id)}
                  >
                    Book Now
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {totalPages > 1 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mt-12"
          >
            <Pagination>
              <PaginationContent>
                {renderPaginationItems()}
              </PaginationContent>
            </Pagination>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default PopularCars;
