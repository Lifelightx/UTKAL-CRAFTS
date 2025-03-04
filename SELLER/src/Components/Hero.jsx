import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

import bambooImg from '../assets/bamboo.png';
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
      className="relative h-[90vh] w-full bg-cover bg-[#ffffff] bg-center flex items-center justify-center"
      style={{
       
        
        backgroundBlendMode: 'multiply'
      }}
    >
       {/* <img src={konarkTemple}
        className='absolute h-100 left-0 bottom-0'
        style={{
            
            filter: 'drop-shadow(2px 2px 4px rgba(0,0,0,0.2))',
            
        }}
       alt="" />  */}
       
      <motion.div 
        className="text-center max-w-4xl px-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 
          className="text-6xl text-[#391300] font-caesar-dressing font-bold mb-6"
          
          variants={textVariants}
        >
          Crafting Traditions of Odisha
        </motion.h1>
        
        <motion.p 
          className="text-2xl font-sourgummy mb-8"
          style={{ color: '#E07A5F' }}
          variants={textVariants}
        >
          Discover the Timeless Art of Handmade Craftsmanship
        </motion.p>
        
        <motion.div 
          variants={textVariants}
        >
          <button 
            onClick={() => navigate('/seller/register')}
            className="px-8 py-4 text-lg font-semibold text-gray-700 cursor-pointer bg-green-100 rounded-lg"
            
            
          >
            Get Started
            <ArrowRight className="ml-2 inline-block" size={20} />
          </button>
        </motion.div>
      </motion.div>
      <img src={bambooImg}
        className='h-100 absolute right-0 bottom-0'
        style={{
            
            filter: 'drop-shadow(2px 2px 4px rgba(0,0,0,0.2))',
        }}
       alt="" />
      <img src={bambooImg}
        className='h-100 absolute right-0 bottom-65 z-10'
        style={{
            
            filter: 'drop-shadow(2px 2px 4px rgba(0,0,0,0.2))',
        }}
       alt="" />
    </div>
  );
};

export default Hero;