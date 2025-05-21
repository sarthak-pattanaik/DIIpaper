import React from 'react';
import { QuoteIcon } from '@/lib/icons';

const testimonials = [
  {
    quote: "The most comprehensive playbook ever",
    name: "Industry Expert",
    title: "Technology Strategist"
  },
  {
    quote: "All you need, to get started on AI and Interaction Data",
    name: "AI Researcher",
    title: "Leading University"
  },
  {
    quote: "Simply put! Enterprises that do not adopt to Digital Interaction Intelligence asap, are at an existential risk",
    name: "Enterprise CIO",
    title: "Fortune 500 Company"
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-12 px-4 bg-[#F6F2ED]/80">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-heading font-semibold text-2xl md:text-3xl mb-2 text-[#0F2D44]">What Experts Are Saying</h2>
          <div className="w-24 h-1 bg-[#4E93BC]/30 mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="mb-4">
                <QuoteIcon className="h-6 w-6 text-[#6b73b2]" />
              </div>
              <p className="text-[#6b7385] mb-4 italic">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center">
                <div className="w-8 h-8 bg-[#D6C8BD] rounded-full mr-3"></div>
                <div>
                  <p className="font-medium text-[#0F2D44]">{testimonial.name}</p>
                  <p className="text-xs text-[#6b7385]">{testimonial.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
