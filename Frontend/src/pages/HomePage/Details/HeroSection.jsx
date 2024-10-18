import React, { useEffect, useState } from "react";
import AOS from "aos";  // Importing AOS for animations
import "aos/dist/aos.css";  // Importing AOS styles
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";  // Importing icons for the toggle buttons

// Assuming the correct relative paths for the images
import heroImage1 from '../../../assets/HeroSection.png';
import heroImage2 from '../../../assets/RoomPic.png';
import heroImage3 from '../../../assets/ApartmentPic.png';

const HeroSection = () => {
  const [currentImage, setCurrentImage] = useState(0);

  // Array of images for the background slider
  const images = [
    heroImage1,
    heroImage2,
    heroImage3,
  ];

  // Function to manually change image
  const handleNextImage = () => {
    setCurrentImage((prevImage) => (prevImage + 1) % images.length);
  };

  const handlePreviousImage = () => {
    setCurrentImage((prevImage) =>
      prevImage === 0 ? images.length - 1 : prevImage - 1
    );
  };

  // Automatic image slider (every 5 seconds)
  useEffect(() => {
    const imageTimer = setInterval(handleNextImage, 5000);  // Change image every 5 seconds

    // Cleanup timer on component unmount
    return () => clearInterval(imageTimer);
  }, []);

  // Initialize AOS for animation
  useEffect(() => {
    AOS.init({ duration: 1200, easing: "ease-in-out" });
  }, []);

  return (
    <div
      className="relative bg-cover bg-center h-screen transition-all duration-500 ease-in-out"
      style={{ backgroundImage: `url(${images[currentImage]})` }}
    >
      {/* Dark overlay to make text readable */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
        {/* Hero Title */}
        <h1
          className="text-5xl md:text-6xl font-bold tracking-wide"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Find Your Perfect Room
        </h1>

        {/* Hero Subtitle */}
        <p
          className="mt-4 text-xl md:text-2xl max-w-2xl"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          We help you find the best rooms and roommates, from affordable options to luxurious spaces.
        </p>

        {/* Buttons */}
        <div
          className="mt-8 flex justify-center space-x-4"
          data-aos="fade-up"
          data-aos-delay="500"
        >
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-md shadow-md transition duration-300">
            Explore Now
          </button>
          <button className="bg-gray-100 hover:bg-gray-200 text-black px-6 py-3 rounded-md shadow-md transition duration-300">
            Learn More
          </button>
        </div>
      </div>

      {/* Toggle Buttons */}
      <div className="absolute inset-y-0 left-0 flex items-center justify-center z-20">
        <button
          className="text-blue-500 text-2xl bg-black bg-opacity-50 p-4 rounded-full focus:outline-none hover:bg-opacity-75 transition"
          onClick={handlePreviousImage}
        >
          <FaChevronLeft />
        </button>
      </div>

      <div className="absolute inset-y-0 right-0 flex items-center justify-center z-20">
        <button
          className="text-blue-500 text-2xl bg-black bg-opacity-50 p-4 rounded-full focus:outline-none hover:bg-opacity-75 transition"
          onClick={handleNextImage}
        >
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
