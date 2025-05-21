import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import Testimonials from '@/components/Testimonials';
import FeaturesSection from '@/components/FeaturesSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#F6F2ED] text-[#0F2D44] font-sans">
      <Header />
      <main>
        <HeroSection />
        <Testimonials />
        <FeaturesSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
