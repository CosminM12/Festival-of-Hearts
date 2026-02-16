import React from 'react';
import Header from '../../components/Header/Header';
import HeroSection from '../../components/HeroSection';
import AboutSection from '../../components/AboutSection';
import CountriesSection from '../../components/CountriesSection';
import SchedulePreview from '../../components/SchedulePreview';
import Footer from '../../components/Footer/Footer';
import './Home.css';

const Home = () => {
  return (
    <div className="home-page min-h-screen bg-background">
      <Header />
      <HeroSection />
      <AboutSection />
      <CountriesSection />
      <SchedulePreview />
      <Footer />
    </div>
  );
};

export default Home;