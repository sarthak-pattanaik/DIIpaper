import React from 'react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const CTASection: React.FC = () => {
  return (
    <section className="py-16 px-4 bg-[#4E93BC]/5 relative overflow-hidden">
      {/* Decorative background elements */}
      <motion.div 
        className="absolute top-10 left-5 w-64 h-64 rounded-full bg-[#54A2A6]/5 -z-10"
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
      />
      <motion.div 
        className="absolute bottom-10 right-5 w-48 h-48 rounded-full bg-[#E5CF73]/10 -z-10"
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, delay: 0.3 }}
        viewport={{ once: true }}
      />

      <div className="max-w-4xl mx-auto text-center relative">
        <motion.h2 
          className="font-heading font-semibold text-2xl md:text-3xl mb-6 text-[#0F2D44]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          Download the playbook now to transform your enterprise
        </motion.h2>
        <motion.p 
          className="text-[#6b7385] text-lg mb-8 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Transform your enterprise with Digital Interaction Intelligence (DII) and stay ahead of the competition!
        </motion.p>
        
        <motion.div 
          className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          viewport={{ once: true }}
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
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              variant="outline"
              className="bg-white hover:bg-[#F6F2ED]/80 text-[#4E93BC] font-medium py-6 px-8 rounded-full text-lg shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-[#4E93BC]/20 h-auto"
              asChild
            >
              <a href="#" target="_blank" rel="noopener noreferrer">
                Download the Playbook
              </a>
            </Button>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="mt-10 flex justify-center items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div 
            className="h-px bg-[#4E93BC]/30"
            initial={{ width: 0 }}
            whileInView={{ width: 64 }}
            transition={{ duration: 1, delay: 1 }}
            viewport={{ once: true }}
          />
          <p className="mx-4 text-sm text-[#6b7385]">
            Soroco named a Leader and Star Performer in Everest Group's first-ever Digital Interaction Intelligence report
          </p>
          <motion.div 
            className="h-px bg-[#4E93BC]/30"
            initial={{ width: 0 }}
            whileInView={{ width: 64 }}
            transition={{ duration: 1, delay: 1 }}
            viewport={{ once: true }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
