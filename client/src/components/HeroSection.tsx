import React from 'react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const HeroSection: React.FC = () => {
  return (
    <section className="py-10 px-4 md:py-16 overflow-hidden">
      <div className="max-w-4xl mx-auto text-center relative">
        {/* Main content with animations */}
        <motion.h1 
          className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl mb-6 leading-tight text-[#0F2D44]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          What is Digital Interaction Intelligence?
        </motion.h1>
        <motion.p 
          className="text-[#6b7385] text-xl md:text-2xl font-medium mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          And why should your enterprise absolutely adopt it today!
        </motion.p>
        
        <motion.div 
          className="mt-8 mb-12 flex justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="relative w-full max-w-lg">
            <motion.div 
              className="absolute -inset-1 bg-[#4E93BC]/20 rounded-lg blur"
              animate={{ 
                scale: [1, 1.05, 1],
                opacity: [0.5, 0.7, 0.5]
              }}
              transition={{ 
                duration: 4, 
                repeat: Infinity,
                repeatType: "reverse" 
              }}
            />
            <motion.div 
              className="relative bg-white rounded-lg shadow-xl p-6 md:p-8 z-10"
              whileHover={{ 
                rotate: [1, -1, 1],
                transition: { duration: 0.5 }
              }}
              initial={{ rotate: 1 }}
            >
              <div className="font-heading font-bold text-xl md:text-2xl text-[#4E93BC] mb-2">DII PLAYBOOK</div>
              <div className="w-16 h-1 bg-[#4E93BC] mb-4"></div>
              <p className="text-sm md:text-base mb-3 text-[#0F2D44]">The complete guide to transforming your enterprise</p>
              <p className="text-xs text-[#6b7385] italic">by Everest Group</p>
            </motion.div>
          </div>
        </motion.div>
        
        <motion.p 
          className="text-lg max-w-3xl mx-auto mb-10 text-[#6b7385]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          The Digital Interaction Intelligence (DII) Playbook empowers enterprises at various stages of their transformation journeys. It provides insights, methodologies, and practical advice to achieve best-in-class outcomes from digital interaction intelligence.
        </motion.p>

        <motion.div 
          className="flex flex-col items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              className="bg-[#4E93BC] hover:bg-[#4E93BC]/90 text-white font-medium py-6 px-8 rounded-full text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-auto"
              asChild
            >
              <a href="#" target="_blank" rel="noopener noreferrer">
                Read the Full Blog
              </a>
            </Button>
          </motion.div>
          <motion.p 
            className="mt-4 text-sm text-[#6b7385]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            Or download the Everest Group Playbook for free
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
