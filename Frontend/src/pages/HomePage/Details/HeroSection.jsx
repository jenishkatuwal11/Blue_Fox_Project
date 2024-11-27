import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import heroImage1 from "../../../assets/HeroSection.png";
import heroImage2 from "../../../assets/RoomPic.png";
import heroImage3 from "../../../assets/ApartmentPic.png";

const HeroSection = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [activeTab, setActiveTab] = useState("BUY"); // Default active tab
  const navigate = useNavigate();

  const images = [heroImage1, heroImage2, heroImage3];

  const handleNextImage = () => {
    setCurrentImage((prevImage) => (prevImage + 1) % images.length);
  };

  const handlePreviousImage = () => {
    setCurrentImage((prevImage) =>
      prevImage === 0 ? images.length - 1 : prevImage - 1
    );
  };

  // Filters based on the active tab
  const getFilters = () => {
    switch (activeTab) {
      case "BUY":
        return [
          "Flats/Apartments",
          "Houses/Villas",
          "Builder Floors",
          "Farm Houses",
          "Residential Plots",
          "Penthouses",
          "Studio Apartments",
        ];
      case "RENT / PG":
        return ["Shared Rooms", "PGs", "Hostels", "Apartments for Rent"];
      case "PROJECTS":
        return ["Upcoming Projects", "Ongoing Projects", "Completed Projects"];
      case "COMMERCIAL":
        return [
          "Office Spaces",
          "Shops/Showrooms",
          "Warehouses",
          "Hotels/Resorts",
          "Co-working Spaces",
        ];
      case "DEALERS":
        return ["Trusted Agents", "Top Agencies", "Individual Dealers"];
      default:
        return [];
    }
  };

  // Handle dropdown option click
  const handleOptionClick = (option) => {
    const formattedOption = option.toLowerCase().replace(/ /g, "-"); // Format option for URL
    navigate(`/properties/${formattedOption}`); // Navigate to dynamic property page
  };

  useEffect(() => {
    AOS.init({ duration: 1200, easing: "ease-in-out" });
  }, []);

  return (
    <div className="flex justify-center px-12 md:px-20">
      <div
        className="relative bg-cover bg-center w-full h-[30vh]"
        style={{ backgroundImage: `url(${images[currentImage]})` }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black opacity-50"></div>

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
          <h1 className="text-3xl md:text-4xl font-bold mb-6" data-aos="fade-up">
            Explore Real Estate in Nepal
          </h1>

          {/* Tabs */}
          <div
            className="flex space-x-4 bg-white p-4 rounded-md shadow-lg max-w-4xl w-full justify-between"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            {["BUY", "RENT / PG", "PROJECTS", "COMMERCIAL", "DEALERS"].map(
              (tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-2 rounded-md font-semibold transition ${
                    activeTab === tab
                      ? "bg-blue-500 text-white"
                      : "bg-blue-100 text-blue-600 hover:bg-blue-200"
                  }`}
                >
                  {tab}
                </button>
              )
            )}
          </div>

          {/* Filters Section */}
          <div
            className="flex mt-4 bg-white p-4 rounded-md shadow-lg max-w-4xl w-full"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            {/* Dropdown to show filters */}
            <select
              className="p-3 rounded-md bg-blue-100 text-blue-600 focus:outline-none"
              onChange={(e) => handleOptionClick(e.target.value)} // Navigate on dropdown change
            >
              <option>{`Select ${activeTab} Type`}</option>
              {getFilters().map((filter) => (
                <option key={filter}>{filter}</option>
              ))}
            </select>

            {/* Input for locality */}
            <input
              type="text"
              placeholder="Search Locality"
              className="w-full mx-3 p-3 bg-blue-100 text-blue-600 rounded-md focus:outline-none"
            />

            {/* Search Button */}
            <button className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 transition">
              SEARCH
            </button>
          </div>
        </div>

        {/* Slider Controls */}
        <div className="absolute inset-y-0 left-0 flex items-center">
          <button onClick={handlePreviousImage}>
            <FaChevronLeft className="text-2xl text-blue-500" />
          </button>
        </div>
        <div className="absolute inset-y-0 right-0 flex items-center">
          <button onClick={handleNextImage}>
            <FaChevronRight className="text-2xl text-blue-500" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
