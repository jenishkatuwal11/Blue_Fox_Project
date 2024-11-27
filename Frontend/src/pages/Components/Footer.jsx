import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white text-blue-800 pt-10 border-t border-gray-300">
      <div className="container mx-auto px-6 md:px-12">
        {/* Footer Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-8">
          {/* About Us Section */}
          <div>
            <h4 className="text-xl font-bold mb-4">About RealEstateNepal</h4>
            <p className="text-gray-600 leading-relaxed">
              RealEstateNepal is your go-to platform for buying, renting, and exploring
              real estate across Nepal. We provide verified listings and seamless
              experiences for property seekers.
            </p>
          </div>

          {/* Explore Links Section */}
          <div>
            <h4 className="text-xl font-bold mb-4">Explore</h4>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h5 className="text-blue-600 font-semibold">For Users</h5>
                <ul className="mt-2 space-y-2">
                  <li>
                    <Link to="/buy" className="hover:text-blue-500">
                      Buy Property
                    </Link>
                  </li>
                  <li>
                    <Link to="/rent" className="hover:text-blue-500">
                      Rent Property
                    </Link>
                  </li>
                  <li>
                    <Link to="/projects" className="hover:text-blue-500">
                      Explore Projects
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h5 className="text-blue-600 font-semibold">For Partners</h5>
                <ul className="mt-2 space-y-2">
                  <li>
                    <Link to="/agents" className="hover:text-blue-500">
                      Agents
                    </Link>
                  </li>
                  <li>
                    <Link to="/services" className="hover:text-blue-500">
                      Service Providers
                    </Link>
                  </li>
                  <li>
                    <Link to="/post-property-detail" className="hover:text-blue-500">
                      Post Property
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Social and Contact Section */}
          <div>
            <h4 className="text-xl font-bold mb-4">Connect With Us</h4>
            <div className="flex space-x-4 mb-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-800 hover:text-blue-500"
              >
                <FaFacebookF size={20} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-800 hover:text-blue-500"
              >
                <FaTwitter size={20} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-800 hover:text-blue-500"
              >
                <FaInstagram size={20} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-800 hover:text-blue-500"
              >
                <FaLinkedinIn size={20} />
              </a>
            </div>
            <p className="text-gray-600">
              <FaEnvelope className="inline text-blue-600" />{" "}
              <a href="mailto:support@realestatenepal.com" className="hover:text-blue-500">
                support@realestatenepal.com
              </a>
            </p>
            <p className="text-gray-600 mt-2">
              Phone:{" "}
              <a href="tel:+9779801234567" className="hover:text-blue-500">
                +977-9801234567
              </a>
            </p>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center border-t border-gray-300 pt-4 mt-4">
          <p className="text-gray-600">&copy; {new Date().getFullYear()} RealEstateNepal. All rights reserved.</p>
          <ul className="flex space-x-4 mt-2 md:mt-0">
            <li>
              <Link to="/privacy-policy" className="hover:text-blue-500">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/terms-and-conditions" className="hover:text-blue-500">
                Terms & Conditions
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
