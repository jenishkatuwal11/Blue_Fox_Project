import React from "react";
import { useNavigate } from "react-router-dom";
import { FaClock, FaBuilding, FaHandshake, FaThumbsUp } from "react-icons/fa";

const PropertyFeatures = () => {
  const navigate = useNavigate(); // For navigation

  return (
    <div className="bg-white py-6">
      <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 px-2">
        {/* Card 1 - Post Your Property Ads for Free */}
        <div
          className="bg-blue-500 text-white p-4 rounded-lg shadow-md flex flex-col items-start cursor-pointer hover:shadow-lg"
          onClick={() => navigate("/feature-properties?category=Buy")}
        >
          <h2 className="text-sm font-bold mb-1">Post Your Property Ads for Free</h2>
          <p className="text-xs mb-2">Sell/Rent out your property & get unlimited responses</p>
          <button className="bg-white text-blue-500 text-xs px-3 py-1 rounded font-semibold hover:bg-blue-700 hover:text-white transition duration-200">
            List Your Property
          </button>
          <FaClock size={30} className="text-white opacity-20 mt-3" />
        </div>

        {/* Card 2 - Find Your Dream Property */}
        <div
          className="bg-blue-400 text-white p-4 rounded-lg shadow-md flex flex-col items-start cursor-pointer hover:shadow-lg"
          onClick={() => navigate("/feature-properties?category=Rent")}
        >
          <h2 className="text-sm font-bold mb-1">Find Your Dream Property</h2>
          <p className="text-xs mb-2">Get the list of properties matching your requirement</p>
          <button className="bg-white text-blue-500 text-xs px-3 py-1 rounded font-semibold hover:bg-blue-700 hover:text-white transition duration-200">
            Post Your Requirement
          </button>
          <FaBuilding size={30} className="text-white opacity-20 mt-3" />
        </div>

        {/* Card 3 - Top Property Dealers */}
        <div
          className="bg-blue-600 text-white p-4 rounded-lg shadow-md flex flex-col items-start cursor-pointer hover:shadow-lg"
          onClick={() => navigate("/feature-properties?category=Dealers")}
        >
          <h2 className="text-sm font-bold mb-1">17235+ Top Property Dealers</h2>
          <p className="text-xs mb-2">Connect with genuine property dealers in your city</p>
          <button className="bg-white text-blue-500 text-xs px-3 py-1 rounded font-semibold hover:bg-blue-700 hover:text-white transition duration-200">
            Explore Now
          </button>
          <FaHandshake size={30} className="text-white opacity-20 mt-3" />
        </div>

        {/* Card 4 - Verified Property for Sale */}
        <div
          className="bg-blue-300 text-white p-4 rounded-lg shadow-md flex flex-col items-start cursor-pointer hover:shadow-lg"
          onClick={() => navigate("/feature-properties?category=Buy")}
        >
          <h2 className="text-sm font-bold mb-1">31149+ Verified Property for Sale</h2>
          <p className="text-xs mb-2">Search for the best commercial or residential deal</p>
          <button className="bg-white text-blue-500 text-xs px-3 py-1 rounded font-semibold hover:bg-blue-700 hover:text-white transition duration-200">
            Explore Now
          </button>
          <FaThumbsUp size={30} className="text-white opacity-20 mt-3" />
        </div>
      </div>
    </div>
  );
};

export default PropertyFeatures;
