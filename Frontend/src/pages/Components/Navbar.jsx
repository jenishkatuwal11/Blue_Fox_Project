import React, { useState } from "react";
import { FaCaretDown } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaEnvelope, FaPhone, FaSignInAlt, FaUserPlus, FaHome } from "react-icons/fa";
const Navbar = () => {
  const [dropdown, setDropdown] = useState(null); // Tracks the currently open dropdown
  const [activeModal, setActiveModal] = useState(null); // Tracks which modal is open
  
  // Toggles dropdown visibility
  const toggleDropdown = (dropdownName) => {
    setDropdown(dropdown === dropdownName ? null : dropdownName);
  };

  // Handles modal toggle
  const handleFilterClick = (filter) => {
    setActiveModal(filter); // Set active modal to "Sign In" or "Join Free"
    setDropdown(null); // Close any open dropdowns
  };

  // Closes the modal
  const closeModal = () => {
    setActiveModal(null);
  };

  return (
    <nav className="bg-white py-2 shadow-md relative">
      <div className="container mx-auto flex justify-between items-center px-4">
        {/* Logo and Location Selector */}
        <div className="flex items-center space-x-2">
          <h1 className="text-blue-800 text-2xl font-bold">RealEstateNepal</h1>
          
        </div>


               {/* Navbar Links */}
               <div className="flex items-center space-x-6 text-blue-800">
          {/* Buy Dropdown */}
          <div className="relative">
            <button
              onClick={() => toggleDropdown("Buy")}
              className="flex items-center space-x-1 focus:outline-none"
            >
              <span>Buy</span>
              <FaCaretDown />
            </button>
            {dropdown === "Buy" && (
              <div
                className="absolute bg-white border border-gray-300 text-gray-800 py-4 px-6 rounded shadow-lg mt-1 z-50 w-[600px] grid grid-cols-3 gap-4"
                role="menu"
                aria-labelledby="buy-menu"
              >
                <div>
                  <h4 className="font-bold text-blue-600 mb-2">Property By Locality</h4>
                  <Link
                    to="/buy?location=Kathmandu"
                    className="block py-1 hover:text-blue-500"
                  >
                    Property for Sale in Kathmandu
                  </Link>
                  <Link
                    to="/buy?location=Bhaktapur"
                    className="block py-1 hover:text-blue-500"
                  >
                    Property for Sale in Bhaktapur
                  </Link>
                  <Link
                    to="/buy?location=Lalitpur"
                    className="block py-1 hover:text-blue-500"
                  >
                    Property for Sale in Lalitpur
                  </Link>
                </div>
                <div>
                  <h4 className="font-bold text-blue-600 mb-2">Property By Type</h4>
                  <Link
                    to="/buy?type=Residential%20Plots"
                    className="block py-1 hover:text-blue-500"
                  >
                    Residential Plots
                  </Link>
                  <Link
                    to="/buy?type=Flats%20%2F%20Apartments"
                    className="block py-1 hover:text-blue-500"
                  >
                    Flats / Apartments
                  </Link>
                  <Link
                    to="/buy?type=Office%20Space"
                    className="block py-1 hover:text-blue-500"
                  >
                    Office Space
                  </Link>
                  <Link
                    to="/buy?type=Commercial%20Shops"
                    className="block py-1 hover:text-blue-500"
                  >
                    Commercial Shops
                  </Link>
                </div>
                <div>
                  <h4 className="font-bold text-blue-600 mb-2">Property By BHK</h4>
                  <Link
                    to="/buy?bhk=1%20BHK"
                    className="block py-1 hover:text-blue-500"
                  >
                    1 BHK Property
                  </Link>
                  <Link
                    to="/buy?bhk=2%20BHK"
                    className="block py-1 hover:text-blue-500"
                  >
                    2 BHK Property
                  </Link>
                  <Link
                    to="/buy?bhk=3%20BHK"
                    className="block py-1 hover:text-blue-500"
                  >
                    3 BHK Property
                  </Link>
                  <Link
                    to="/buy?bhk=4%2B%20BHK"
                    className="block py-1 hover:text-blue-500"
                  >
                    4+ BHK Property
                  </Link>
                </div>
              </div>
            )}
          </div>

          {/* Rent Dropdown */}
          <div className="relative">
            <button
              onClick={() => toggleDropdown("Rent")}
              className="flex items-center space-x-1 focus:outline-none"
            >
              <span>Rent</span>
              <FaCaretDown />
            </button>
            {dropdown === "Rent" && (
              <div
                className="absolute bg-white border border-gray-300 text-gray-800 py-4 px-6 rounded shadow-lg mt-1 z-50 w-[600px] grid grid-cols-3 gap-4"
                role="menu"
                aria-labelledby="rent-menu"
              >
                <div>
                  <h4 className="font-bold text-blue-600 mb-2">
                    Rental Property By Locality
                  </h4>
                  <Link
                    to="/rent?location=Kathmandu"
                    className="block py-1 hover:text-blue-500"
                  >
                    Rental in Kathmandu
                  </Link>
                  <Link
                    to="/rent?location=Bhaktapur"
                    className="block py-1 hover:text-blue-500"
                  >
                    Rental in Bhaktapur
                  </Link>
                  <Link
                    to="/rent?location=Lalitpur"
                    className="block py-1 hover:text-blue-500"
                  >
                    Rental in Lalitpur
                  </Link>
                </div>
                <div>
                  <h4 className="font-bold text-blue-600 mb-2">
                    Rental Property By Type
                  </h4>
                  <Link
                    to="/rent?type=Office%20Space"
                    className="block py-1 hover:text-blue-500"
                  >
                    Office Space
                  </Link>
                  <Link
                    to="/rent?type=Apartments"
                    className="block py-1 hover:text-blue-500"
                  >
                    Apartments
                  </Link>
                  <Link
                    to="/rent?type=Shops"
                    className="block py-1 hover:text-blue-500"
                  >
                    Shops
                  </Link>
                </div>
                <div>
                  <h4 className="font-bold text-blue-600 mb-2">
                    Rental Property By BHK
                  </h4>
                  <Link
                    to="/rent?bhk=1%20BHK"
                    className="block py-1 hover:text-blue-500"
                  >
                    1 BHK Rentals
                  </Link>
                  <Link
                    to="/rent?bhk=2%20BHK"
                    className="block py-1 hover:text-blue-500"
                  >
                    2 BHK Rentals
                  </Link>
                  <Link
                    to="/rent?bhk=3%20BHK"
                    className="block py-1 hover:text-blue-500"
                  >
                    3+ BHK Rentals
                  </Link>
                </div>
              </div>
            )}
          </div>

                    {/* Roommates Dropdown */}
                    <div className="relative">
      <button
        onClick={() => toggleDropdown("Roommates")}
        className="flex items-center space-x-1 focus:outline-none"
      >
        <span>Roommates</span>
        <FaCaretDown />
      </button>
      {dropdown === "Roommates" && (
        <div
          className="absolute bg-white border border-gray-300 text-gray-800 py-4 px-6 rounded shadow-lg mt-1 z-50 w-[300px] grid grid-cols-1 gap-4"
          role="menu"
          aria-labelledby="Roommates-menu"
        >
          <div>
            <h4 className="font-bold text-blue-600 mb-2">Find Roommates In</h4>
            <Link
              to="/find-roommates?location=Kathmandu"
              className="block py-1 hover:text-blue-500"
              onClick={() => toggleDropdown(null)} // Close dropdown after click
            >
              Kathmandu
            </Link>
            <Link
              to="/find-roommates?location=Bhaktapur"
              className="block py-1 hover:text-blue-500"
              onClick={() => toggleDropdown(null)}
            >
              Bhaktapur
            </Link>
            <Link
              to="/find-roommates?location=Lalitpur"
              className="block py-1 hover:text-blue-500"
              onClick={() => toggleDropdown(null)}
            >
              Lalitpur
            </Link>
          </div>
        </div>
      )}
    </div>
       
          {/* Projects Dropdown */}
          <div className="relative">
      <button
        onClick={() => toggleDropdown("Projects")}
        className="flex items-center space-x-1 focus:outline-none"
      >
        <span>Projects</span>
        <FaCaretDown />
      </button>
      {dropdown === "Projects" && (
        <div
          className="absolute bg-white border border-gray-300 text-gray-800 py-4 px-6 rounded shadow-lg mt-1 z-50 w-[400px] grid grid-cols-2 gap-4"
          role="menu"
          aria-labelledby="projects-menu"
        >
          {/* Column 1: Current Projects */}
          <div>
            <h4 className="font-bold text-blue-600 mb-2">Current Projects</h4>
            <Link
                to="/project-details?location=Kathmandu"
    className="block py-1 hover:text-blue-500"
            >
              New Projects in Kathmandu
            </Link>
            <Link
               to="/project-details?location=Bhaktapur"
    className="block py-1 hover:text-blue-500"
            >
              Upcoming Projects in Bhaktapur
            </Link>
            <Link
            to="/project-details?location=Lalitpur"
    className="block py-1 hover:text-blue-500"
            >
              Projects in Lalitpur
            </Link>
          </div>

          {/* Column 2: Popular Projects */}
          <div>
            <h4 className="font-bold text-blue-600 mb-2">Popular Projects</h4>
            <Link
              to="/project-details?location=Residential"
              className="block py-1 hover:text-blue-500"
            >
              Residential Projects
            </Link>
            <Link
              to="/project-details?location=Commercial"
              className="block py-1 hover:text-blue-500"
            >
              Commercial Projects
            </Link>
          </div>
        </div>
      )}
    </div>
          {/* Services Dropdown */}
          <div className="relative">
            <button
              onClick={() => toggleDropdown("Services")}
              className="flex items-center space-x-1 focus:outline-none"
            >
              <span>Services</span>
              <FaCaretDown />
            </button>
            {dropdown === "Services" && (
              <div
                className="absolute bg-white border border-gray-300 text-gray-800 py-4 px-6 rounded shadow-lg mt-1 z-50 w-[300px]"
              >
                <Link
                  to="/services/Property%20Management"
                  className="block py-1 hover:text-blue-500"
                >
                  Property Management
                </Link>
                <Link
                  to="/services/Legal%20Assistance"
                  className="block py-1 hover:text-blue-500"
                >
                  Legal Assistance
                </Link>
                <Link
                  to="/services/Home%20Inspection"
                  className="block py-1 hover:text-blue-500"
                >
                  Home Inspection
                </Link>
                <Link
                  to="/services/Vastu%20Consultant"
                  className="block py-1 hover:text-blue-500"
                >
                  Vastu Consultant
                </Link>
              </div>
            )}
          </div>
        </div>


        {/* Action Buttons */}
<div className="flex items-center space-x-4">
  {/* Post Property Detail Button */}
  <Link to="/post-property-detail">
    <button className="bg-blue-600 text-white font-semibold py-2 px-4 rounded hover:bg-blue-700 transition duration-200 flex items-center space-x-2">
      <FaHome />
      <span>Post Property Detail</span>
    </button>
  </Link>

  {/* Contact Us Button */}
  {/* Contact Us */}
  <Link to="/contact-us">
            <button className="bg-white border border-blue-600 text-blue-600 font-semibold py-2 px-4 rounded hover:bg-blue-700 hover:text-white transition duration-200 flex items-center space-x-2">
              <FaEnvelope />
              <span>Contact Us</span>
            </button>
          </Link>

  {/* Sign In Button */}
  <button
    onClick={() => handleFilterClick("Sign In")}
    className="text-blue-600 hover:underline flex items-center space-x-1"
  >
    <FaSignInAlt />
    <span>Sign In</span>
  </button>

  {/* Join Free Button */}
  <button
    onClick={() => handleFilterClick("Join Free")}
    className="text-blue-600 hover:underline flex items-center space-x-1"
  >
    <FaUserPlus />
    <span>Join Free</span>
  </button>
</div>

{/* Sign In Modal */}
{activeModal === "Sign In" && (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
    <div className="bg-white rounded-lg shadow-lg w-96 p-6 relative">
      <h2 className="text-lg font-bold text-blue-700 mb-4">Login</h2>
      <label className="block mb-2 text-sm font-medium text-gray-700">
        Email ID or Mobile Number
      </label>
      <input
        type="text"
        placeholder="Enter Email ID or Mobile Number"
        className="w-full px-3 py-2 border border-blue-300 rounded-md mb-4 focus:ring-blue-500 focus:border-blue-500"
      />
      <button className="bg-blue-600 w-full py-2 text-white rounded-md hover:bg-blue-700">
        Continue
      </button>
      <div className="mt-4 text-center text-sm">
        <p className="text-gray-600">
          Not a Member yet?{" "}
          <span
            onClick={() => handleFilterClick("Join Free")}
            className="text-blue-500 cursor-pointer hover:underline"
          >
            Join Free Now!
          </span>
        </p>
      </div>
      <button
        onClick={() => setActiveModal(null)}
        className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
      >
        ✕
      </button>
    </div>
  </div>
)}

{/* Join Free Modal */}
{activeModal === "Join Free" && (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
    <div className="bg-white rounded-lg shadow-lg w-96 p-6 relative">
      <h2 className="text-lg font-bold text-blue-700 mb-4">Join Free</h2>
      <label className="block mb-2 text-sm font-medium text-gray-700">
        Full Name
      </label>
      <input
        type="text"
        placeholder="Enter your full name"
        className="w-full px-3 py-2 border border-blue-300 rounded-md mb-4 focus:ring-blue-500 focus:border-blue-500"
      />
      <label className="block mb-2 text-sm font-medium text-gray-700">
        Email
      </label>
      <input
        type="email"
        placeholder="Enter your email"
        className="w-full px-3 py-2 border border-blue-300 rounded-md mb-4 focus:ring-blue-500 focus:border-blue-500"
      />
      <label className="block mb-2 text-sm font-medium text-gray-700">
        Password
      </label>
      <input
        type="password"
        placeholder="Enter your password"
        className="w-full px-3 py-2 border border-blue-300 rounded-md mb-4 focus:ring-blue-500 focus:border-blue-500"
      />
      <button className="bg-blue-600 w-full py-2 text-white rounded-md hover:bg-blue-700">
        Join Now
      </button>
      <div className="mt-4 text-center text-sm">
        <p className="text-gray-600">
          Already a member?{" "}
          <span
            onClick={() => handleFilterClick("Sign In")}
            className="text-blue-500 cursor-pointer hover:underline"
          >
            Sign In
          </span>
        </p>
      </div>
      <button
        onClick={() => setActiveModal(null)}
        className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
      >
        ✕
      </button>
    </div>
  </div>
)}

      </div>
      </nav>
  );
};

export default Navbar;