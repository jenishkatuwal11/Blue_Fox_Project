import { useState } from "react";
import { FaCaretDown } from "react-icons/fa";
import { Link } from "react-router-dom"; // Import the Link component q

const Navbar = () => {
  const [dropdown, setDropdown] = useState(null); // Tracks the currently open dropdown
  const [selectedFilter, setSelectedFilter] = useState(""); // Tracks the selected filter option

  // Toggles dropdown visibility
  const toggleDropdown = (dropdownName) => {
    setDropdown(dropdown === dropdownName ? null : dropdownName);
  };

  // Handles filter option click
  const handleFilterClick = (filter) => {
    setSelectedFilter(filter);
    console.log(`Filtered by: ${filter}`);
    setDropdown(null); // Close the dropdown after selection
  };

  return (
    <nav className="bg-white py-2 shadow-md relative">
      <div className="container mx-auto flex justify-between items-center px-4">
        {/* Logo and Location Selector */}
        <div className="flex items-center space-x-2">
          <h1 className="text-blue-800 text-2xl font-bold">RealEstateNepal</h1>
          <select
            className="bg-blue-100 text-blue-800 text-sm px-2 rounded"
            onChange={(e) => handleFilterClick(`Location: ${e.target.value}`)}
          >
            <option value="Kathmandu">Kathmandu</option>
            <option value="Bhaktapur">Bhaktapur</option>
            <option value="Lalitpur">Lalitpur</option>
          </select>
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
                  <h4 className="font-bold text-blue-600 mb-2">
                    Property By Locality
                  </h4>
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
                  <h4 className="font-bold text-blue-600 mb-2">
                    Property By Type
                  </h4>
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
                  <h4 className="font-bold text-blue-600 mb-2">
                    Property By BHK
                  </h4>
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
          {/* Agents Dropdown */}
          <div className="relative">
            <button
              onClick={() => toggleDropdown("Agents")}
              className="flex items-center space-x-1 focus:outline-none"
            >
              <span>Agents</span>
              <FaCaretDown />
            </button>
            {dropdown === "Agents" && (
              <div
                className="absolute bg-white border border-gray-300 text-gray-800 py-4 px-6 rounded shadow-lg mt-1 z-50 w-[300px] grid grid-cols-1 gap-4"
                role="menu"
                aria-labelledby="agents-menu"
              >
                <div>
                  <h4 className="font-bold text-blue-600 mb-2">Find Agents</h4>
                  <button
                    onClick={() => handleFilterClick("Agents in Kathmandu")}
                    className="block py-1 hover:text-blue-500"
                  >
                    Agents in Kathmandu
                  </button>
                  <button
                    onClick={() => handleFilterClick("Agents in Bhaktapur")}
                    className="block py-1 hover:text-blue-500"
                  >
                    Agents in Bhaktapur
                  </button>
                  <button
                    onClick={() => handleFilterClick("Agents in Lalitpur")}
                    className="block py-1 hover:text-blue-500"
                  >
                    Agents in Lalitpur
                  </button>
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
                  <h4 className="font-bold text-blue-600 mb-2">
                    Current Projects
                  </h4>
                  <button
                    onClick={() =>
                      handleFilterClick("New Projects in Kathmandu")
                    }
                    className="block py-1 hover:text-blue-500"
                  >
                    New Projects in Kathmandu
                  </button>
                  <button
                    onClick={() =>
                      handleFilterClick("Upcoming Projects in Bhaktapur")
                    }
                    className="block py-1 hover:text-blue-500"
                  >
                    Upcoming Projects in Bhaktapur
                  </button>
                  <button
                    onClick={() => handleFilterClick("Projects in Lalitpur")}
                    className="block py-1 hover:text-blue-500"
                  >
                    Projects in Lalitpur
                  </button>
                </div>

                {/* Column 2: Popular Projects */}
                <div>
                  <h4 className="font-bold text-blue-600 mb-2">
                    Popular Projects
                  </h4>
                  <button
                    onClick={() => handleFilterClick("Residential Projects")}
                    className="block py-1 hover:text-blue-500"
                  >
                    Residential Projects
                  </button>
                  <button
                    onClick={() => handleFilterClick("Commercial Projects")}
                    className="block py-1 hover:text-blue-500"
                  >
                    Commercial Projects
                  </button>
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
                className="absolute bg-white border border-gray-300 text-gray-800 py-4 px-6 rounded shadow-lg mt-1 z-50 w-[300px] grid grid-cols-1 gap-4"
                role="menu"
                aria-labelledby="services-menu"
              >
                <div>
                  <h4 className="font-bold text-blue-600 mb-2">Our Services</h4>
                  <button
                    onClick={() => handleFilterClick("Property Management")}
                    className="block py-1 hover:text-blue-500"
                  >
                    Property Management
                  </button>
                  <button
                    onClick={() => handleFilterClick("Legal Assistance")}
                    className="block py-1 hover:text-blue-500"
                  >
                    Legal Assistance
                  </button>
                  <button
                    onClick={() => handleFilterClick("Home Inspection")}
                    className="block py-1 hover:text-blue-500"
                  >
                    Home Inspection
                  </button>
                  <button
                    onClick={() => handleFilterClick("Vastu Consultant")}
                    className="block py-1 hover:text-blue-500"
                  >
                    Vastu Consultant
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center space-x-4">
          <Link to="/post-property-detail">
            <button className="bg-blue-600 text-white font-semibold py-2 px-4 rounded hover:bg-blue-700 transition duration-200">
              PostPropertyDetail
            </button>
          </Link>
          <button
            onClick={() => handleFilterClick("Sign In")}
            className="text-blue-800 hover:underline"
          >
            Sign In
          </button>
          <button
            onClick={() => handleFilterClick("Join Free")}
            className="text-blue-600 hover:underline"
          >
            Join Free
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
