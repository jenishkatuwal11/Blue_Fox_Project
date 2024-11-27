import React from 'react';
import Navbar from "../Components/Navbar";
import HeroSection from "./Details/HeroSection";
import Roommates from "./Details/Roommates";
import Footer from "../Components/Footer";
import PhotoSection from "./Details/PhotoSection";
import Scroll from "../Components/Scroll";
import PropertyFeatures from './Details/PropertyFeatures';
import PropertiesForRent from './Details/PropertiesForRent';
import PropertiesForSale from './Details/PropertiesForSale';
import RealEstateService from './Details/RealEstateService';

const Landingpage = () => {
  return (
    <div style={{ minHeight: '100vh' }}> {/* Set a simple layout */}
      <Navbar />
      <HeroSection />
      <PropertyFeatures />
      <PropertiesForRent />
      <PropertiesForSale />
      <RealEstateService />
      <Roommates />
      <PhotoSection />
      <Scroll />
      <Footer />
    </div>
  );
};

export default Landingpage;
