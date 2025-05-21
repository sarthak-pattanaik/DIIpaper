import React from 'react';
import { 
  DocumentIcon, 
  LightningBoltIcon, 
  ClipboardListIcon, 
  BuildingOfficeIcon, 
  BookmarkIcon, 
  ChartBarIcon 
} from '@/lib/icons';

const features = [
  {
    icon: <DocumentIcon className="h-6 w-6 text-[#4E93BC]" />,
    title: "Get introduced to Interaction Data",
    description: "Understand the invaluable benefits of harnessing human-machine interaction data."
  },
  {
    icon: <LightningBoltIcon className="h-6 w-6 text-[#54A2A6]" />,
    title: "Embrace Digital Interaction Intelligence",
    description: "Discover how DII surpasses traditional task/process mining with advanced AI capabilities, across industries and functions."
  },
  {
    icon: <ClipboardListIcon className="h-6 w-6 text-[#6b73b2]" />,
    title: "Step-by-Step Implementation Guide",
    description: "Follow a detailed guide to launching and accelerating your DII journey."
  },
  {
    icon: <BuildingOfficeIcon className="h-6 w-6 text-[#7FB27F]" />,
    title: "Learn How to Set up a DII CoE",
    description: "Understand the pivotal role of a Centre of Excellence (CoE) in driving DII success."
  },
  {
    icon: <BookmarkIcon className="h-6 w-6 text-[#E5CF73]" />,
    title: "Customer Case Studies",
    description: "Gain inspiration from real-world case studies of successful DII implementations."
  },
  {
    icon: <ChartBarIcon className="h-6 w-6 text-[#E9AA9B]" />,
    title: "Market Data & Insights",
    description: "Gain insights into the market size, growth trends, and adoption rates of DII solutions."
  }
];

const FeaturesSection: React.FC = () => {
  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-heading font-semibold text-2xl md:text-3xl mb-3 text-[#0F2D44]">Why You Should Download This Paper</h2>
          <p className="text-[#6b7385] max-w-2xl mx-auto">
            Discover how Digital Interaction Intelligence can transform your enterprise operations and drive competitive advantage
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 bg-[#F6F2ED] rounded-lg flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="font-heading font-medium text-lg mb-2 text-[#0F2D44]">{feature.title}</h3>
              <p className="text-[#6b7385]">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
