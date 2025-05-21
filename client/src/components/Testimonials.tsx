import React from 'react';
import { QuoteIcon } from '@/lib/icons';
import { motion } from 'framer-motion';

const testimonials = [
  {
    quote: "The most comprehensive playbook ever",
    name: "Industry Expert",
    title: "Technology Strategist",
    color: "#6b73b2"
  },
  {
    quote: "All you need, to get started on AI and Interaction Data",
    name: "AI Researcher",
    title: "Leading University",
    color: "#54A2A6"
  },
  {
    quote: "Simply put! Enterprises that do not adopt to Digital Interaction Intelligence asap, are at an existential risk",
    name: "Enterprise CIO",
    title: "Fortune 500 Company",
    color: "#4E93BC"
  }
];

const Testimonials: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
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
    }
  };

  return (
    <section className="py-12 px-4 bg-[#F6F2ED]/80 relative overflow-hidden">
      {/* Decorative elements */}
      <motion.div 
        className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-[#4E93BC]/5"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      />
      <motion.div 
        className="absolute top-1/2 left-0 transform -translate-y-1/2 w-16 h-64 bg-[#0F2D44]/5 rounded-r-full"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      />

      <div className="max-w-5xl mx-auto">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="font-heading font-semibold text-2xl md:text-3xl mb-2 text-[#0F2D44]">
            What Experts Are Saying
          </h2>
          <motion.div 
            className="w-24 h-1 bg-[#4E93BC]/30 mx-auto"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            viewport={{ once: true }}
          />
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index} 
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.02, boxShadow: "0 10px 25px -5px rgba(0,0,0,0.1)" }}
            >
              <motion.div 
                className="mb-4"
                whileHover={{ rotate: [0, 15, 0, -15, 0], transition: { duration: 1 } }}
              >
                <QuoteIcon className={`h-6 w-6`} style={{ color: testimonial.color }} />
              </motion.div>
              <p className="text-[#6b7385] mb-4 italic">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center">
                <motion.div 
                  className="w-8 h-8 bg-[#D6C8BD] rounded-full mr-3 flex items-center justify-center text-white font-bold text-xs"
                  whileHover={{ scale: 1.2 }}
                >
                  {testimonial.name.charAt(0)}
                </motion.div>
                <div>
                  <p className="font-medium text-[#0F2D44]">{testimonial.name}</p>
                  <p className="text-xs text-[#6b7385]">{testimonial.title}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
