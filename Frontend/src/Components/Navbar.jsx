import {
  FaUser,
  FaHome,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaPhoneAlt,
} from "react-icons/fa";

const Navbar = () => {
  return (
    <div>
      {/* Top Bar */}
      <div className="bg-gray-900 text-white py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          {/* Left Section (Login, Submit Property, Language) */}
          <div className="flex items-center space-x-6">
            <a href="#" className="flex items-center hover:text-gray-400">
              <FaUser className="mr-2" /> Login or Register
            </a>
            <a href="#" className="flex items-center hover:text-gray-400">
              <FaHome className="mr-2" /> Submit Property
            </a>
            <div className="flex items-center space-x-2">
              <img
                src="/assets/flag-icon.png"
                alt="Language"
                className="h-4 w-6"
              />
              <span className="hover:text-gray-400">English</span>
            </div>
          </div>

          {/* Right Section (Social Media and Buy Now Button) */}
          <div className="flex items-center space-x-4">
            <a href="#" className="hover:text-gray-400">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-gray-400">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-gray-400">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-gray-400">
              <FaLinkedinIn />
            </a>
            <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-1 px-3 rounded">
              Buy now
            </button>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
          {/* Left Section: Blue Background with Logo */}
          <div className="flex items-center bg-blue-600 h-full px-6 space-x-3">
            {/* Logo */}
            <img
              className="h-10 w-auto"
              src="https://via.placeholder.com/40"
              alt="Logo"
            />
            {/* Brand Name */}
            <div className="flex flex-col">
              <span className="text-xl font-bold text-white">Alexis</span>
              <span className="text-sm text-white">Real Estate</span>
            </div>
          </div>

          {/* Centered Navigation Links */}
          <div className="flex-1 flex justify-center space-x-6 text-lg font-semibold">
            <a href="#" className="text-gray-700 hover:text-blue-600">
              Demo
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-600">
              Properties
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-600">
              Team
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-600">
              Pages
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-600">
              Blog
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-600">
              Contact Us
            </a>
          </div>

          {/* Right Section: Call Us */}
          <div className="flex items-center space-x-2">
            <FaPhoneAlt className="text-blue-600" />
            <span className="text-blue-600 font-semibold">
              CALL US NOW (+01)-000-0000
            </span>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
