import { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";

import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Scroll from "../Components/Scroll";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import { HiCheckCircle } from "react-icons/hi";
import CalebImage from "../../assets/Agent2.png";
import JamesBond from "../../assets/2.webp";
import Michael from "../../assets/3.webp";
import John from "../../assets/4.png";
import William from "../../assets/5.webp";
import Thomas from "../../assets/6.jpg";
import Charles from "../../assets/8.jpg";
import Rebecca from "../../assets/9.jpg";

const FindRoommates = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const selectedLocation = queryParams.get("location");

  // Sample roommate data
  const roommates = [
    {
      id: 1,
      name: "Karsang Lama",
      image: CalebImage,
      location: "Kathmandu",
      age: 25,
      price: 15000,
      description: "Shared flat near Thamel.",
      validations: { email: true, phone: true },
    },
    {
      id: 2,
      name: "Sita Khadka",
      image: JamesBond,
      location: "Bhaktapur",
      age: 30,
      price: 10000,
      description: "Cozy apartment near Bhaktapur Durbar Square.",
      validations: { email: true, phone: true },
    },
    {
      id: 3,
      name: "Ramesh Gurung",
      image: Michael,
      location: "Lalitpur",
      age: 28,
      price: 18000,
      description: "Modern apartment in Lalitpur.",
      validations: { email: true, phone: false },
    },
    {
      id: 4,
      name: "John Doe",
      image: John,
      location: "Kathmandu",
      age: 29,
      price: 20000,
      description: "Spacious apartment in New Baneshwor.",
      validations: { email: true, phone: true },
    },
    {
      id: 5,
      name: "William Lama",
      image: William,
      location: "Bhaktapur",
      age: 27,
      price: 12000,
      description: "Comfortable studio apartment near Bhaktapur Gate.",
      validations: { email: true, phone: true },
    },
    {
      id: 6,
      name: "Thomas Karki",
      image: Thomas,
      location: "Lalitpur",
      age: 32,
      price: 17000,
      description: "Single room available in Pulchowk.",
      validations: { email: false, phone: true },
    },
    {
      id: 7,
      name: "Charles Maharjan",
      image: Charles,
      location: "Kathmandu",
      age: 26,
      price: 16000,
      description: "Room in a shared flat in Baluwatar.",
      validations: { email: true, phone: true },
    },
    {
      id: 8,
      name: "Rebecca Shrestha",
      image: Rebecca,
      location: "Lalitpur",
      age: 24,
      price: 14000,
      description: "Single room available near Jawalakhel.",
      validations: { email: true, phone: false },
    },
  ];

  // State for filtering
  const [filteredRoommates, setFilteredRoommates] = useState(roommates);
  const [filters, setFilters] = useState({
    location: "",
    minAge: "",
    maxAge: "",
    minPrice: "",
    maxPrice: "",
  });

  // Update filteredRoommates when filters or selectedLocation change
  useEffect(() => {
    const { location, minAge, maxAge, minPrice, maxPrice } = filters;

    const filtered = roommates.filter((roommate) => {
      const matchesLocation =
        (selectedLocation && roommate.location === selectedLocation) || // Query param
        (!selectedLocation &&
          (location === "" || roommate.location.toLowerCase().includes(location.toLowerCase()))); // Manual input
      const matchesAge =
        (!minAge || roommate.age >= parseInt(minAge, 10)) &&
        (!maxAge || roommate.age <= parseInt(maxAge, 10));
      const matchesPrice =
        (!minPrice || roommate.price >= parseInt(minPrice, 10)) &&
        (!maxPrice || roommate.price <= parseInt(maxPrice, 10));

      return matchesLocation && matchesAge && matchesPrice;
    });

    setFilteredRoommates(filtered);
  }, [filters, selectedLocation]);

  // Handle input changes for filters
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  return (
    <div>
      <Navbar />
      <Scroll />
      <section className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold mb-6">
            Roommates in {selectedLocation || "All Locations"}
          </h1>

          {/* Filters Section */}
          <div className="bg-white shadow-md p-6 rounded-lg mb-8">
            <h2 className="text-xl font-bold text-blue-600 mb-4">Search Filters</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div>
                <label htmlFor="location" className="block text-sm font-medium text-gray-700">
                  Location
                </label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  value={filters.location}
                  onChange={handleInputChange}
                  placeholder="Enter location"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
              <div>
                <label htmlFor="minAge" className="block text-sm font-medium text-gray-700">
                  Minimum Age
                </label>
                <input
                  type="number"
                  id="minAge"
                  name="minAge"
                  value={filters.minAge}
                  onChange={handleInputChange}
                  placeholder="e.g., 20"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
              <div>
                <label htmlFor="maxAge" className="block text-sm font-medium text-gray-700">
                  Maximum Age
                </label>
                <input
                  type="number"
                  id="maxAge"
                  name="maxAge"
                  value={filters.maxAge}
                  onChange={handleInputChange}
                  placeholder="e.g., 30"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
              <div>
                <label htmlFor="minPrice" className="block text-sm font-medium text-gray-700">
                  Minimum Price
                </label>
                <input
                  type="number"
                  id="minPrice"
                  name="minPrice"
                  value={filters.minPrice}
                  onChange={handleInputChange}
                  placeholder="e.g., 10000"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
              <div>
                <label htmlFor="maxPrice" className="block text-sm font-medium text-gray-700">
                  Maximum Price
                </label>
                <input
                  type="number"
                  id="maxPrice"
                  name="maxPrice"
                  value={filters.maxPrice}
                  onChange={handleInputChange}
                  placeholder="e.g., 20000"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
            </div>
          </div>

          {/* Roommates Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredRoommates.length > 0 ? (
              filteredRoommates.map((roommate) => (
                <div
                  key={roommate.id}
                  className="bg-white shadow-lg rounded-lg flex flex-col h-full"
                >
                  <img
                    src={roommate.image}
                    alt={roommate.name}
                    className="w-full h-60 object-cover"
                  />
                  <div className="p-4 flex flex-col justify-between h-full">
                    <h3 className="text-lg font-semibold">{roommate.name}</h3>
                    <div className="flex items-center text-sm text-gray-600 mt-1">
                      <FaMapMarkerAlt className="text-gray-500 w-4 h-4 mr-2" />
                      {roommate.location}
                    </div>
                    <p className="mt-2 text-gray-700">{roommate.description}</p>
                    <p className="mt-2 text-lg font-bold text-gray-800">
                      Rs. {roommate.price} / month
                    </p>
                    <Link
                      to={`/roommatedetail/${roommate.id}`}
                      className="mt-4 block text-center bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              ))
            ) : (
              <p>No roommates found matching your criteria.</p>
            )}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default FindRoommates;
