import React, { useEffect, useState } from "react";
import AOS from "aos"; // Importing AOS for animations
import "aos/dist/aos.css"; // Importing AOS styles
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"; // Importing icons for the toggle buttons

// Import images
import heroImage1 from "../../../assets/HeroSection.png";
import heroImage2 from "../../../assets/RoomPic.png";
import heroImage3 from "../../../assets/ApartmentPic.png";

const HeroSection = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [activeTab, setActiveTab] = useState("BUY");

  // Array of images for the background slider
  const images = [heroImage1, heroImage2, heroImage3];

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
    const imageTimer = setInterval(handleNextImage, 5000); // Change image every 5 seconds
    return () => clearInterval(imageTimer); // Cleanup timer on component unmount
  }, []);

  // Initialize AOS for animation
  useEffect(() => {
    AOS.init({ duration: 1200, easing: "ease-in-out" });
  }, []);

  return (
    <div className="flex justify-center px-12 md:px-20">
      <div
        className="relative bg-cover bg-center w-full h-[30vh] transition-all duration-500 ease-in-out"
        style={{ backgroundImage: `url(${images[currentImage]})` }}
      >
        {/* Dark overlay to make text readable */}
        <div className="absolute inset-0 bg-black opacity-50 rounded-lg"></div>

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-blue-800 px-4">
          {/* Title */}
          <h1
            className="text-3xl md:text-4xl font-bold text-white mb-6"
            data-aos="fade-up"
          >
            Search and Buy Real Estate in Nepal
          </h1>

          {/* Tabs */}
          <div
            className="flex space-x-4 bg-gray-900 bg-opacity-90 p-4 rounded-md shadow-lg max-w-4xl w-full justify-between"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            {["BUY", "RENT / PG", "PROJECTS", "COMMERCIAL", "DEALERS"].map(
              (tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-2 rounded-md ${
                    activeTab === tab
                      ? "bg-blue-500 text-white"
                      : "bg-gray-700 text-gray-200 hover:bg-gray-600"
                  } transition duration-200`}
                >
                  {tab}
                </button>
              )
            )}
          </div>

          {/* Search bar */}
          <div
            className="flex mt-4 bg-gray-900 bg-opacity-90 p-4 rounded-md shadow-lg max-w-4xl w-full items-center justify-between"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <select className="p-3 rounded-md bg-gray-800 text-gray-200 focus:outline-none">
              <option>All {activeTab}</option>
              <option>Kathmandu</option>
              <option>Bhaktapur</option>
              <option>Lalitpur</option>
            </select>
            <input
              type="text"
              placeholder="Search Locality"
              className="w-full mx-3 p-3 bg-gray-800 text-gray-200 rounded-md border-none focus:outline-none"
            />
            <button className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 transition">
              SEARCH
            </button>
          </div>
        </div>

        {/* Toggle Buttons */}
        <div className="absolute inset-y-0 left-0 flex items-center justify-center z-20">
          <button
            className="text-blue-500 text-2xl bg-white bg-opacity-75 p-4 rounded-full focus:outline-none hover:bg-opacity-100 transition"
            onClick={handlePreviousImage}
          >
            <FaChevronLeft />
          </button>
        </div>

        <div className="absolute inset-y-0 right-0 flex items-center justify-center z-20">
          <button
            className="text-blue-500 text-2xl bg-white bg-opacity-75 p-4 rounded-full focus:outline-none hover:bg-opacity-100 transition"
            onClick={handleNextImage}
          >
            <FaChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
