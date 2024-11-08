import { useState } from "react";
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
import { NavLink } from "react-router-dom"; // Import NavLink for active link styling
import logo from "../../assets/logo.png"; // Logo import

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {/* Top Bar */}
      <div className="bg-[var(--primary-color)] text-black py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          {/* Left Section (Login, Submit Property) */}
          <div className="flex items-center space-x-6">
            <NavLink
              to="/login"
              className="flex items-center hover:text-gray-400"
            >
              <FaUser className="mr-2" /> Login / Register
            </NavLink>
            <NavLink
              to="/submit-property"
              className="flex items-center hover:text-gray-400"
            >
              <FaHome className="mr-2" /> List Your Room
            </NavLink>
          </div>

          {/* Right Section (Social Media) */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400"
            >
              <FaTwitter />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400"
            >
              <FaInstagram />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400"
            >
              <FaLinkedinIn />
            </a>
            <NavLink
              to="/contact-us"
              className="bg-green-500 hover:bg-green-600 text-white font-semibold py-1 px-3 rounded"
            >
              Contact Support
            </NavLink>
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
              <span className="text-xl font-bold text-[var(--primary-color)]">
                Room Finder
              </span>
              <span className="text-sm text-gray-600">
                Find your perfect space
              </span>
            </div>
          </div>

          {/* Centered Navigation Links */}
          <div className="hidden md:flex flex-1 justify-center space-x-6 text-lg font-semibold">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-600"
                  : "text-[var(--primary-color)] hover:text-blue-600"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/FindRoom"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-600"
                  : "text-[var(--primary-color)] hover:text-blue-600"
              }
            >
              Find Rooms
            </NavLink>
            <NavLink
              to="/FindRoommates"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-600"
                  : "text-[var(--primary-color)] hover:text-blue-600"
              }
            >
              Find Roommates
            </NavLink>
            <NavLink
              to="/AboutUs"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-600"
                  : "text-[var(--primary-color)] hover:text-blue-600"
              }
            >
              About Us
            </NavLink>

            <NavLink
              to="/ContactUs"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-600"
                  : "text-[var(--primary-color)] hover:text-blue-600"
              }
            >
              Contact Us
            </NavLink>
          </div>

          {/* Right Section: Call Us */}
          <div className="hidden md:flex items-center space-x-2">
            <FaPhoneAlt className="text-[var(--primary-color)]" />
            <span className="text-[var(--primary-color)] font-semibold">
              Call Us Now: (+01)-000-0000
            </span>
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
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "text-blue-600"
                    : "text-[var(--primary-color)] hover:text-blue-600"
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/FindRoom"
                className={({ isActive }) =>
                  isActive
                    ? "text-blue-600"
                    : "text-[var(--primary-color)] hover:text-blue-600"
                }
              >
                Find Rooms
              </NavLink>
              <NavLink
                to="/roommates"
                className={({ isActive }) =>
                  isActive
                    ? "text-blue-600"
                    : "text-[var(--primary-color)] hover:text-blue-600"
                }
              >
                Find Roommates
              </NavLink>
              <NavLink
                to="/about-us"
                className={({ isActive }) =>
                  isActive
                    ? "text-blue-600"
                    : "text-[var(--primary-color)] hover:text-blue-600"
                }
              >
                About Us
              </NavLink>
              <NavLink
                to="/blog"
                className={({ isActive }) =>
                  isActive
                    ? "text-blue-600"
                    : "text-[var(--primary-color)] hover:text-blue-600"
                }
              >
                Blog
              </NavLink>
              <NavLink
                to="/contact-us"
                className={({ isActive }) =>
                  isActive
                    ? "text-blue-600"
                    : "text-[var(--primary-color)] hover:text-blue-600"
                }
              >
                Contact Us
              </NavLink>
              <div className="flex items-center space-x-4">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-400"
                >
                  <FaFacebookF />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-400"
                >
                  <FaTwitter />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-400"
                >
                  <FaInstagram />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-400"
                >
                  <FaLinkedinIn />
                </a>
              </div>
              <NavLink
                to="/contact-us"
                className="bg-green-500 hover:bg-green-600 text-white font-semibold py-1 px-3 rounded text-center"
              >
                Contact Support
              </NavLink>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
