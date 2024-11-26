import { useState } from "react";
import {
  FaCheck,
  FaUser,
  FaHome,
  FaTag,
  FaCalendarAlt,
  FaClock,
  FaThLarge,
  FaMoon,
  FaBath,
  FaCouch,
} from "react-icons/fa";
import VerifiedFilter from "../FindRoom/Filter/VerifiedFilter";
import AgeFilter from "../FindRoom/Filter/AgeFilter";
import GenderFilter from "../FindRoom/Filter/GenderFilter";
import TypeFilter from "../FindRoom/Filter/TypeFilter";
import PriceFilter from "../FindRoom/Filter/PriceFilter";
import MoveInDateFilter from "../FindRoom/Filter/MoveInDataFilter";
import DurationFilter from "../FindRoom/Filter/DurationFilter";
import LayoutFilter from "../FindRoom/Filter/LayoutFilter";
import BedroomsFilter from "../FindRoom/Filter/BedroomFilter";
import BathroomsFilter from "../FindRoom/Filter/BathroomFilter";
import AmenitiesFilter from "../FindRoom/Filter/AmenitiesFilter";

const Filter = () => {
  const [activeFilter, setActiveFilter] = useState(null);

  const toggleFilter = (filterName) => {
    if (activeFilter === filterName) {
      setActiveFilter(null); // Close the filter if it's already open
    } else {
      setActiveFilter(filterName); // Open the new filter
    }
  };

  return (
    <div className="flex justify-center space-x-4 mb-8">
      {/* Verified Filter */}
      <div className="relative">
        <button
          className="flex items-center justify-center border border-black rounded-md w-32 h-12 px-4 text-black hover:bg-black hover:text-white transition"
          onClick={() => toggleFilter("verified")}
        >
          <FaCheck className="mr-2" />
          Verified
        </button>
        {activeFilter === "verified" && (
          <div className="absolute top-full mt-2 bg-white shadow-lg z-50">
            <VerifiedFilter />
          </div>
        )}
      </div>

      {/* Age Filter */}
      <div className="relative">
        <button
          className="flex items-center justify-center border border-black rounded-md w-32 h-12 px-4 text-black hover:bg-black hover:text-white transition"
          onClick={() => toggleFilter("age")}
        >
          <FaUser className="mr-2" />
          Age
        </button>
        {activeFilter === "age" && (
          <div className="absolute top-full mt-2 bg-white shadow-lg z-50">
            <AgeFilter />
          </div>
        )}
      </div>

      {/* Gender Filter */}
      <div className="relative">
        <button
          className="flex items-center justify-center border border-black rounded-md w-32 h-12 px-4 text-black hover:bg-black hover:text-white transition"
          onClick={() => toggleFilter("gender")}
        >
          <FaUser className="mr-2" />
          Gender
        </button>
        {activeFilter === "gender" && (
          <div className="absolute top-full mt-2 bg-white shadow-lg z-50">
            <GenderFilter />
          </div>
        )}
      </div>

      {/* Type Filter */}
      <div className="relative">
        <button
          className="flex items-center justify-center border border-black rounded-md w-32 h-12 px-4 text-black hover:bg-black hover:text-white transition"
          onClick={() => toggleFilter("type")}
        >
          <FaHome className="mr-2" />
          Type
        </button>
        {activeFilter === "type" && (
          <div className="absolute top-full mt-2 bg-white shadow-lg z-50">
            <TypeFilter />
          </div>
        )}
      </div>

      {/* Price Filter */}
      <div className="relative">
        <button
          className="flex items-center justify-center border border-black rounded-md w-32 h-12 px-4 text-black hover:bg-black hover:text-white transition"
          onClick={() => toggleFilter("price")}
        >
          <FaTag className="mr-2" />
          Price
        </button>
        {activeFilter === "price" && (
          <div className="absolute top-full mt-2 bg-white shadow-lg z-50">
            <PriceFilter />
          </div>
        )}
      </div>

      {/* Move-in Date Filter */}
      <div className="relative">
        <button
          className="flex items-center justify-center border border-black rounded-md w-32 h-12 px-4 text-black hover:bg-black hover:text-white transition"
          onClick={() => toggleFilter("moveInDate")}
        >
          <FaCalendarAlt className="mr-2" />
          Move-in Date
        </button>
        {activeFilter === "moveInDate" && (
          <div className="absolute top-full mt-2 bg-white shadow-lg z-50">
            <MoveInDateFilter />
          </div>
        )}
      </div>

      {/* Duration Filter */}
      <div className="relative">
        <button
          className="flex items-center justify-center border border-black rounded-md w-32 h-12 px-4 text-black hover:bg-black hover:text-white transition"
          onClick={() => toggleFilter("duration")}
        >
          <FaClock className="mr-2" />
          Duration
        </button>
        {activeFilter === "duration" && (
          <div className="absolute top-full mt-2 bg-white shadow-lg z-50">
            <DurationFilter />
          </div>
        )}
      </div>

      {/* Layout Filter */}
      <div className="relative">
        <button
          className="flex items-center justify-center border border-black rounded-md w-32 h-12 px-4 text-black hover:bg-black hover:text-white transition"
          onClick={() => toggleFilter("layout")}
        >
          <FaThLarge className="mr-2" />
          Layout
        </button>
        {activeFilter === "layout" && (
          <div className="absolute top-full mt-2 bg-white shadow-lg z-50">
            <LayoutFilter />
          </div>
        )}
      </div>

      {/* Bedrooms Filter */}
      <div className="relative">
        <button
          className="flex items-center justify-center border border-black rounded-md w-32 h-12 px-4 text-black hover:bg-black hover:text-white transition"
          onClick={() => toggleFilter("bedrooms")}
        >
          <FaMoon className="mr-2" />
          Bedrooms
        </button>
        {activeFilter === "bedrooms" && (
          <div className="absolute top-full mt-2 bg-white shadow-lg z-50">
            <BedroomsFilter />
          </div>
        )}
      </div>

      {/* Bathrooms Filter */}
      <div className="relative">
        <button
          className="flex items-center justify-center border border-black rounded-md w-32 h-12 px-4 text-black hover:bg-black hover:text-white transition"
          onClick={() => toggleFilter("bathrooms")}
        >
          <FaBath className="mr-2" />
          Bathrooms
        </button>
        {activeFilter === "bathrooms" && (
          <div className="absolute top-full mt-2 bg-white shadow-lg z-50">
            <BathroomsFilter />
          </div>
        )}
      </div>

      {/* Amenities Filter */}
      <div className="relative">
        <button
          className="flex items-center justify-center border border-black rounded-md w-32 h-12 px-4 text-black hover:bg-black hover:text-white transition"
          onClick={() => toggleFilter("amenities")}
        >
          <FaCouch className="mr-2" />
          Amenities
        </button>
        {activeFilter === "amenities" && (
          <div className="absolute top-full mt-2 bg-white shadow-lg z-50">
            <AmenitiesFilter />
          </div>
        )}
      </div>
    </div>
  );
};

export default Filter;
