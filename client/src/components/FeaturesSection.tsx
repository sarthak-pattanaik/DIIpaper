import React from 'react';
import { 
  DocumentIcon, 
  LightningBoltIcon, 
  ClipboardListIcon, 
  BuildingOfficeIcon, 
  BookmarkIcon, 
  ChartBarIcon 
} from '@/lib/icons';
import { motion } from 'framer-motion';

const features = [
  {
    icon: <DocumentIcon className="h-6 w-6 text-[#4E93BC]" />,
    title: "Get introduced to Interaction Data",
    description: "Understand the invaluable benefits of harnessing human-machine interaction data.",
    bgColor: "bg-[#4E93BC]/10"
  },
  {
    icon: <LightningBoltIcon className="h-6 w-6 text-[#54A2A6]" />,
    title: "Embrace Digital Interaction Intelligence",
    description: "Discover how DII surpasses traditional task/process mining with advanced AI capabilities, across industries and functions.",
    bgColor: "bg-[#54A2A6]/10"
  },
  {
    icon: <ClipboardListIcon className="h-6 w-6 text-[#6b73b2]" />,
    title: "Step-by-Step Implementation Guide",
    description: "Follow a detailed guide to launching and accelerating your DII journey.",
    bgColor: "bg-[#6b73b2]/10"
  },
  {
    icon: <BuildingOfficeIcon className="h-6 w-6 text-[#7FB27F]" />,
    title: "Learn How to Set up a DII CoE",
    description: "Understand the pivotal role of a Centre of Excellence (CoE) in driving DII success.",
    bgColor: "bg-[#7FB27F]/10"
  },
  {
    icon: <BookmarkIcon className="h-6 w-6 text-[#E5CF73]" />,
    title: "Customer Case Studies",
    description: "Gain inspiration from real-world case studies of successful DII implementations.",
    bgColor: "bg-[#E5CF73]/10"
  },
  {
    icon: <ChartBarIcon className="h-6 w-6 text-[#E9AA9B]" />,
    title: "Market Data & Insights",
    description: "Gain insights into the market size, growth trends, and adoption rates of DII solutions.",
    bgColor: "bg-[#E9AA9B]/10"
  }
];

const FeaturesSection: React.FC = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, type: "spring", stiffness: 100 }
    }
  };

  const iconVariants = {
    hidden: { scale: 0 },
    visible: { 
      scale: 1, 
      transition: { type: "spring", stiffness: 300, delay: 0.3 }
    }
  };

  return (
    <section className="py-16 px-4 relative overflow-hidden">
      
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="font-heading font-semibold text-2xl md:text-3xl mb-3 text-[#0F2D44]">
            Why You Should Download This Paper
          </h2>
          <motion.p 
            className="text-[#6b7385] max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Discover how Digital Interaction Intelligence can transform your enterprise operations and drive competitive advantage
          </motion.p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index} 
              className="bg-white rounded-xl shadow-md p-6 transition-all duration-300"
              variants={cardVariants}
              whileHover={{ 
                y: -8, 
                boxShadow: "0 20px 25px -5px rgba(0,0,0,0.1), 0 10px 10px -5px rgba(0,0,0,0.04)" 
              }}
            >
              <motion.div 
                className={`w-12 h-12 ${feature.bgColor} rounded-lg flex items-center justify-center mb-4`}
                variants={iconVariants}
                whileHover={{ rotate: 360, transition: { duration: 0.6 } }}
              >
                {feature.icon}
              </motion.div>
              <motion.h3 
                className="font-heading font-medium text-lg mb-2 text-[#0F2D44]"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                viewport={{ once: true }}
              >
                {feature.title}
              </motion.h3>
              <motion.p 
                className="text-[#6b7385]"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                viewport={{ once: true }}
              >
                {feature.description}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;
