import React, { useState } from 'react';
import Navbar from "./Components/Navbar";
import HeroSection from "./Components/HeroSection";
import AboutUs from "./Components/AboutUs";
import PropertyListing from "./Components/PropertyListing";
import Testimonial from "./Components/Testimonial";
import Agent from "./Components/Agent";
import Footer from "./Components/Footer";
import Service from "./Components/Service";
import PhotoSection from "./Components/PhotoSection";
import Scroll from './Components/Scroll';  
import ColorPicker from './Components/ColorPicker'; // Import the ColorPicker component

function App() {
  const [showColorPicker, setShowColorPicker] = useState(false); // State to show/hide ColorPicker

  return (
    <div>
      <Navbar />
      <HeroSection />

      {/* Floating Settings Icon */}
      <button
        onClick={() => setShowColorPicker(!showColorPicker)}  // Toggle color picker visibility
        className="fixed left-4 top-1/4 bg-blue-600 p-4 text-white rounded-full shadow-lg hover:bg-blue-700 z-50"
      >
        <i className="fas fa-cog"></i> {/* Settings Icon */}
      </button>

      {/* Conditionally render the Color Picker */}
      {showColorPicker && <ColorPicker />}

      <AboutUs />
      <Service />
      <PropertyListing />
      <Testimonial />
      <Agent />
      <PhotoSection />
      <Scroll /> 
      <Footer />
    </div>
  );
}

export default App;
