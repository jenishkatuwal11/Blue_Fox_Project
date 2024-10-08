import React, { useState } from 'react';
import { FaCog } from 'react-icons/fa'; // Import the settings cog icon
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
  const [themeColor, setThemeColor] = useState("#000000"); // State to manage theme color

  // Function to update the theme color
  const updateColor = (color) => {
    setThemeColor(color); // Update state
    document.documentElement.style.setProperty('--primary-color', color); // Update CSS variable globally
  };

  return (
    <div style={{ backgroundColor: 'var(--primary-color)' }}> {/* Apply theme color using CSS variable */}
      <Navbar themeColor={themeColor} /> {/* Pass the theme color to Navbar */}
      <HeroSection themeColor={themeColor} /> {/* Pass the theme color to HeroSection */}

      {/* Floating Settings Icon */}
      <button
        onClick={() => setShowColorPicker(!showColorPicker)}  // Toggle color picker visibility
        className="fixed left-4 top-1/4 bg-blue-600 p-4 text-white rounded-full shadow-lg hover:bg-blue-700 z-50"
      >
        <FaCog size={24} /> {/* Settings Icon using react-icons */}
      </button>

      {/* Conditionally render the Color Picker */}
      {showColorPicker && <ColorPicker onColorChange={updateColor} />} {/* Pass the updateColor function */}

      <AboutUs themeColor={themeColor} /> {/* Pass the theme color to AboutUs */}
      <Service themeColor={themeColor} /> {/* Pass the theme color to Service */}
      <PropertyListing themeColor={themeColor} /> {/* Pass the theme color to PropertyListing */}
      <Testimonial themeColor={themeColor} /> {/* Pass the theme color to Testimonial */}
      <Agent themeColor={themeColor} /> {/* Pass the theme color to Agent */}
      <PhotoSection themeColor={themeColor} /> {/* Pass the theme color to PhotoSection */}
      <Scroll themeColor={themeColor} /> {/* Pass the theme color to Scroll */}
      <Footer themeColor={themeColor} /> {/* Pass the theme color to Footer */}
    </div>
  );
}

export default App;
