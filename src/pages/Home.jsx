import React from 'react';
import Header from '../components/Header';
import Features from '../components/Features';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';

const Home = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <Features />
      <Footer />
    </div>
  );
};

export default Home;
