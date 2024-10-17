import React, { useState } from "react";
import {
  FaUser,
  FaHome,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaPhoneAlt,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import logo from '../../assets/logo.png';  // Logo import

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {/* Top Bar */}
      <div className="bg-[var(--primary-color)] text-black py-2"> {/* Default color is white */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          {/* Left Section (Login, Submit Property) */}
          <div className="flex items-center space-x-6">
            <a href="/login" className="flex items-center hover:text-gray-400">
              <FaUser className="mr-2" /> Login / Register
            </a>
            <a href="/submit-property" className="flex items-center hover:text-gray-400">
              <FaHome className="mr-2" /> List Your Room
            </a>
          </div>

          {/* Right Section (Social Media) */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
              <FaFacebookF />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
              <FaTwitter />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
              <FaInstagram />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
              <FaLinkedinIn />
            </a>
            <a href="/contact-us" className="bg-green-500 hover:bg-green-600 text-white font-semibold py-1 px-3 rounded">
              Contact Support
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
          {/* Left Section: Logo */}
          <div className="flex items-center h-full px-6 space-x-3">
            <img className="h-10 w-auto" src={logo} alt="Logo" />
            <div className="flex flex-col">
              <span className="text-xl font-bold text-[var(--primary-color)]">Room Finder</span>
              <span className="text-sm text-gray-600">Find your perfect space</span>
            </div>
          </div>

          {/* Centered Navigation Links */}
          <div className="hidden md:flex flex-1 justify-center space-x-6 text-lg font-semibold">
            <a href="/" className="text-[var(--primary-color)] hover:text-blue-600">
              Home
            </a>
            <a href="/rooms" className="text-[var(--primary-color)] hover:text-blue-600">
              Find Rooms
            </a>
            <a href="/roommates" className="text-[var(--primary-color)] hover:text-blue-600">
              Find Roommates
            </a>
            <a href="/about" className="text-[var(--primary-color)] hover:text-blue-600">
              About Us
            </a>
            <a href="/blog" className="text-[var(--primary-color)] hover:text-blue-600">
              Blog
            </a>
            <a href="/contact-us" className="text-[var(--primary-color)] hover:text-blue-600">
              Contact Us
            </a>
          </div>

          {/* Right Section: Call Us */}
          <div className="hidden md:flex items-center space-x-2">
            <FaPhoneAlt className="text-[var(--primary-color)]" />
            <span className="text-[var(--primary-color)] font-semibold">Call Us Now: (+01)-000-0000</span>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-[var(--primary-color)] focus:outline-none"
            >
              {isOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-white shadow-md">
            <div className="flex flex-col space-y-4 p-4">
              <a href="/" className="text-[var(--primary-color)] hover:text-blue-600">
                Home
              </a>
              <a href="/rooms" className="text-[var(--primary-color)] hover:text-blue-600">
                Find Rooms
              </a>
              <a href="/roommates" className="text-[var(--primary-color)] hover:text-blue-600">
                Find Roommates
              </a>
              <a href="/about" className="text-[var(--primary-color)] hover:text-blue-600">
                About Us
              </a>
              <a href="/blog" className="text-[var(--primary-color)] hover:text-blue-600">
                Blog
              </a>
              <a href="/contact-us" className="text-[var(--primary-color)] hover:text-blue-600">
                Contact Us
              </a>
              <div className="flex items-center space-x-4">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
                  <FaFacebookF />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
                  <FaTwitter />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
                  <FaInstagram />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
                  <FaLinkedinIn />
                </a>
              </div>
              <a href="/contact-us" className="bg-green-500 hover:bg-green-600 text-white font-semibold py-1 px-3 rounded text-center">
                Contact Support
              </a>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
