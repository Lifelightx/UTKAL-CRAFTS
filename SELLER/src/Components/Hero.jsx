import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();

  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

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

  return (
    <div 
      className="relative h-[90vh] w-full bg-cover bg-center flex items-center justify-center"
      style={{
       
        backgroundColor: '#ffffff',
        backgroundBlendMode: 'multiply'
      }}
    >
      <motion.div 
        className="text-center max-w-4xl px-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 
          className="text-6xl font-bold mb-6"
          style={{ color: '#3D405B' }}
          variants={textVariants}
        >
          Crafting Traditions of Odisha
        </motion.h1>
        
        <motion.p 
          className="text-2xl mb-8"
          style={{ color: '#E07A5F' }}
          variants={textVariants}
        >
          Discover the Timeless Art of Handmade Craftsmanship
        </motion.p>
        
        <motion.div 
          variants={textVariants}
        >
          <button 
            onClick={() => navigate('/seller/signup')}
            className="px-8 py-4 text-lg font-semibold bg-amber-600 rounded-lg"
            style={{
              
              color: 'white',
              boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
              transition: 'transform 0.2s',
            }}
            
          >
            Get Started
            <ArrowRight className="ml-2 inline-block" size={20} />
          </button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;