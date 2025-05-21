import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import Testimonials from '@/components/Testimonials';
import FeaturesSection from '@/components/FeaturesSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-[#f5efe6] via-[#f1f1e9] to-[#e8f3f7] text-[#0F2D44] font-sans">
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
