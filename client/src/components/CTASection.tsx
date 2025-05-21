import React from 'react';
import { Button } from '@/components/ui/button';

const CTASection: React.FC = () => {
  return (
    <section className="py-16 px-4 bg-primary/5">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-heading font-semibold text-2xl md:text-3xl mb-6">
          Download the playbook now to transform your enterprise
        </h2>
        <p className="text-accent text-lg mb-8 max-w-2xl mx-auto">
          Transform your enterprise with Digital Interaction Intelligence (DII) and stay ahead of the competition!
        </p>
        
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 justify-center">
          <Button
            className="bg-primary hover:bg-primary/90 text-white font-medium py-6 px-8 rounded-full text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-auto"
            asChild
          >
            <a href="#" target="_blank" rel="noopener noreferrer">
              Read the Full Blog
            </a>
          </Button>
          <Button
            variant="outline"
            className="bg-white hover:bg-gray-50 text-primary font-medium py-6 px-8 rounded-full text-lg shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-primary/20 h-auto"
            asChild
          >
            <a href="#" target="_blank" rel="noopener noreferrer">
              Download the Playbook
            </a>
          </Button>
        </div>
        
        <div className="mt-10 flex justify-center items-center">
          <div className="h-px w-16 bg-primary/30"></div>
          <p className="mx-4 text-sm text-accent">
            Soroco named a Leader and Star Performer in Everest Group's first-ever Digital Interaction Intelligence report
          </p>
          <div className="h-px w-16 bg-primary/30"></div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
