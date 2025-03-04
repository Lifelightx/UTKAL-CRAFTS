import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Package, 
  ShoppingCart, 
  DollarSign, 
  Globe,
  UserPlus
} from 'lucide-react';

const Home = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        delayChildren: 0.3,
        staggerChildren: 0.2 
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    },
    hover: {
      scale: 1.05,
      transition: { duration: 0.2 }
    }
  };

  const featureData = [
    {
      icon: Package,
      title: "Easy Product Management",
      description: "Seamlessly add, edit, and manage your products with our intuitive interface."
    },
    {
      icon: ShoppingCart,
      title: "Real-Time Order Tracking",
      description: "Monitor and update order statuses in real-time, ensuring smooth customer experience."
    },
    {
      icon: DollarSign,
      title: "Comprehensive Earnings Dashboard",
      description: "Track your sales, pending payouts, and withdrawal history at a glance."
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12 bg-soft-cream">
      <motion.div 
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-center mb-16"
      >
        <h1 className="text-5xl font-bold mb-6 text-deep-indigo flex justify-center items-center">
          <Globe className="mr-4 text-terra-cotta" /> Welcome to Our Seller Platform
        </h1>
        <p className="text-xl text-sage-green max-w-2xl mx-auto">
          Empower your business with our comprehensive seller management platform. 
          Streamline your operations, increase sales, and grow your online presence.
        </p>
      </motion.div>
      
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid md:grid-cols-3 gap-8"
      >
        {featureData.map((feature, index) => (
          <motion.div 
            key={index}
            variants={itemVariants}
            whileHover="hover"
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 border border-light-gray"
          >
            <div className="flex items-center mb-4">
              <feature.icon className="text-terra-cotta mr-4 w-12 h-12" />
              <h2 className="text-2xl font-semibold text-deep-indigo">{feature.title}</h2>
            </div>
            <p className="text-gray-600">{feature.description}</p>
          </motion.div>
        ))}
      </motion.div>
      
      <div className="text-center mt-12">
        <Link 
          to="/seller/register" 
          className="bg-terra-cotta text-white px-8 py-3 rounded-lg text-xl hover:bg-warm-yellow transition inline-flex items-center"
        >
          <UserPlus className="mr-2" /> Start Selling Now
        </Link>
      </div>
    </div>
  );
};

export default Home;
