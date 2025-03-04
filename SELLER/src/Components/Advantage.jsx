import React from 'react';
import { motion } from 'framer-motion';
import { 
  PaletteIcon, 
  GlobeIcon, 
  DollarSignIcon, 
  HeartHandshakeIcon, 
  AwardIcon,
  CheckCircle2Icon
} from 'lucide-react';

function Advantage() {
  const advantageVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const advantageContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const advantages = [
    {
      icon: <PaletteIcon size={48} color="#E07A5F" />,
      title: "Showcase Your Craft",
      description: "Reach a global audience and share your unique artistic creations with the world."
    },
    {
      icon: <GlobeIcon size={48} color="#E07A5F" />,
      title: "Global Marketplace",
      description: "Connect with art lovers and collectors from around the globe who appreciate traditional craftsmanship."
    },
    {
      icon: <DollarSignIcon size={48} color="#E07A5F" />,
      title: "Fair Compensation",
      description: "Get fair pricing for your intricate work and receive direct support from art enthusiasts."
    },
    {
      icon: <HeartHandshakeIcon size={48} color="#E07A5F" />,
      title: "Community Support",
      description: "Join a supportive network of artisans who share your passion and preserve traditional crafts."
    }
  ];

  return (
    <div 
      className="min-h-screen bg-[#fffdf2] py-16 px-4"
    >
      <motion.div 
        className="container mx-auto"
        initial="hidden"
        animate="visible"
        variants={advantageContainerVariants}
      >
        <motion.h1 
          className="text-5xl font-bold text-center mb-12"
          style={{ color: '#3D405B' }}
          variants={advantageVariants}
        >
          Why Join Our Handcraft Community?
        </motion.h1>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Advantages Section */}
          <motion.div 
            className="space-y-6"
            variants={advantageContainerVariants}
          >
            {advantages.map((advantage, index) => (
              <motion.div 
                key={index}
                className="bg-white p-6 rounded-lg shadow-md flex items-center space-x-6"
                variants={advantageVariants}
                whileHover={{ scale: 1.05 }}
              >
                <div>{advantage.icon}</div>
                <div>
                  <h3 
                    className="text-2xl font-semibold mb-2"
                    style={{ color: '#3D405B' }}
                  >
                    {advantage.title}
                  </h3>
                  <p className="text-gray-600">{advantage.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Image Section */}
          <motion.div 
            className="flex items-center justify-center"
            variants={advantageVariants}
          >
            <div 
              className="w-full h-[600px] bg-cover bg-center rounded-lg shadow-lg"
              style={{ 
                backgroundImage: `url('/api/placeholder/800/600')`,
                backgroundColor: '#81B29A',
                backgroundBlendMode: 'multiply'
              }}
            >
              <div className="h-full flex flex-col justify-end p-8 text-white">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1, duration: 0.5 }}
                >
                  <div className="flex items-center space-x-4 mb-4">
                    <AwardIcon size={32} />
                    <span className="text-xl font-semibold">
                      Certified Artisan Platform
                    </span>
                  </div>
                  <p className="text-lg">
                    Every artisan is verified and celebrated for their unique skills and cultural heritage.
                  </p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Additional Benefits */}
        <motion.div 
          className="mt-16 bg-white rounded-lg p-8 shadow-md"
          variants={advantageVariants}
        >
          <h2 
            className="text-3xl font-bold text-center mb-8"
            style={{ color: '#3D405B' }}
          >
            Additional Benefits
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              "Zero Platform Fees",
              "Worldwide Shipping Support",
              "Marketing Assistance",
              "Skill Development Workshops",
              "Cultural Preservation Initiative",
              "Community Networking"
            ].map((benefit, index) => (
              <motion.div 
                key={index} 
                className="flex items-center space-x-3"
                variants={advantageVariants}
              >
                <CheckCircle2Icon size={24} color="#81B29A" />
                <span className="text-lg">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Advantage;