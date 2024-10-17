import React, { useEffect } from "react";
import AOS from "aos";  // Importing AOS for animations
import "aos/dist/aos.css";  // Importing AOS styles
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";  // Social media icons

const Footer = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: 'ease-in-out' });  // Initialize AOS animations
  }, []);

  return (
    <footer className="bg-gray-900 text-gray-300 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8" data-aos="fade-up">
          {/* Column 1: About Us */}
          <div>
            <h3 className="text-white font-bold text-xl mb-4">About Us</h3>
            <p className="text-gray-400">
              We offer high-quality real estate services to help you find your perfect home or property. Our professional team is here to guide you through every step of the process.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-white font-bold text-xl mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-[var(--primary-color)]">Home</a></li>
              <li><a href="#" className="hover:text-[var(--primary-color)]">About Us</a></li>
              <li><a href="#" className="hover:text-[var(--primary-color)]">Properties</a></li>
              <li><a href="#" className="hover:text-[var(--primary-color)]">Services</a></li>
              <li><a href="#" className="hover:text-[var(--primary-color)]">Contact</a></li>
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div>
            <h3 className="text-white font-bold text-xl mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li>123 Real Estate Street, Kathmandu</li>
              <li>Email: info@realestate.com</li>
              <li>Phone: +977-01-555-5555</li>
            </ul>
          </div>

          {/* Column 4: Social Media & Newsletter */}
          <div>
            <h3 className="text-white font-bold text-xl mb-4">Follow Us</h3>
            <div className="flex space-x-4 mb-6">
              <a href="#" className="text-gray-400 hover:text-[var(--primary-color)]"><FaFacebookF /></a>
              <a href="#" className="text-gray-400 hover:text-[var(--primary-color)]"><FaTwitter /></a>
              <a href="#" className="text-gray-400 hover:text-[var(--primary-color)]"><FaInstagram /></a>
              <a href="#" className="text-gray-400 hover:text-[var(--primary-color)]"><FaLinkedinIn /></a>
            </div>
            <h3 className="text-white font-bold text-xl mb-4">Newsletter</h3>
            <p className="text-gray-400 mb-4">Subscribe to our newsletter to get the latest updates.</p>
            <form className="flex space-x-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded-md text-gray-900 focus:outline-none"
              />
              <button
                type="submit"
                className="bg-[var(--primary-color)] text-white px-4 py-2 rounded-md hover:bg-opacity-90"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center" data-aos="fade-up" data-aos-delay="200">
          <p className="text-gray-500">&copy; {new Date().getFullYear()} Renting Room. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
