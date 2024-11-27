import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { FaBed, FaBath, FaExpandArrowsAlt } from "react-icons/fa";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Scroll from "../Components/Scroll";

// Import necessary images
import apartmentImage from "../../assets/Apartment.png";
import houseImage from "../../assets/House.png";
import roomImage from "../../assets/Room.png";
import roomPicImage from "../../assets/RoomPic.png";

const FeatureProperties = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  // Determine the category (Buy or Rent) from query parameters
  const category = queryParams.get("category") || "Buy";

  const [filters, setFilters] = useState({
    propertyType: "All",
    bhk: "All",
    minPrice: "",
    maxPrice: "",
  });

  // Mock property data for Buy and Rent
  const properties = [
    {
      id: 1,
      title: "Suyog's Luxury Apartment",
      image: apartmentImage,
      price: 20000000,
      description:
        "A luxurious apartment in the heart of Kathmandu with modern facilities.",
      location: "Kathmandu",
      type: "Apartment",
      bhk: "4 BHK",
      bedrooms: 4,
      bathrooms: 3,
      area: "2400 sq ft",
      category: "Buy",
    },
    {
      id: 2,
      title: "Karsang's Grand House",
      image: houseImage,
      price: 50000000,
      description:
        "A spacious and elegant house in Kathmandu, perfect for large families.",
      location: "Kathmandu",
      type: "House",
      bhk: "6 BHK",
      bedrooms: 6,
      bathrooms: 5,
      area: "5000 sq ft",
      category: "Buy",
    },
    {
      id: 3,
      title: "2 BHK Apartment in Kathmandu",
      image: apartmentImage,
      price: 5000000,
      description: "A cozy 2 BHK apartment in the heart of Kathmandu.",
      location: "Kathmandu",
      type: "Apartment",
      bhk: "2 BHK",
      bedrooms: 2,
      bathrooms: 1,
      area: "1200 sq ft",
      category: "Rent",
    },
    {
      id: 4,
      title: "3 BHK Villa in Pokhara",
      image: houseImage,
      price: 12000000,
      description: "A luxurious 3 BHK villa in Pokhara with modern amenities.",
      location: "Pokhara",
      type: "Villa",
      bhk: "3 BHK",
      bedrooms: 3,
      bathrooms: 2,
      area: "2000 sq ft",
      category: "Rent",
    },
  ];

  // Handle input changes for filters
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  // Filter properties dynamically based on filters and category
  const filteredProperties = properties.filter((property) => {
    const matchesCategory = property.category === category;
    const matchesType =
      filters.propertyType === "All" || property.type === filters.propertyType;
    const matchesBHK = filters.bhk === "All" || property.bhk === filters.bhk;
    const matchesMinPrice =
      !filters.minPrice || property.price >= parseInt(filters.minPrice, 10);
    const matchesMaxPrice =
      !filters.maxPrice || property.price <= parseInt(filters.maxPrice, 10);

    return (
      matchesCategory &&
      matchesType &&
      matchesBHK &&
      matchesMinPrice &&
      matchesMaxPrice
    );
  });

  // Render property cards
  const renderProperties = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {filteredProperties.map((property) => (
        <div
          key={property.id}
          className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition"
        >
          <img
            src={property.image}
            alt={property.title}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-lg font-bold text-gray-700">{property.title}</h3>
            <p className="text-sm text-gray-500">Area: {property.area}</p>
            <p className="text-sm text-gray-500">Price: ₹{property.price}</p>
            <p className="text-sm text-gray-500">Type: {property.type}</p>
            <a
              href="#"
              className="mt-2 inline-block text-blue-600 font-medium hover:underline"
            >
              View Details
            </a>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <>
      <Navbar />
      <Scroll />
      <div className="min-h-screen bg-blue-50">
        {/* Header */}
        <header className="bg-blue-600 text-white py-6">
          <h1 className="text-3xl font-bold text-center">
            Explore Properties for {category}
          </h1>
        </header>

        {/* Search Filters */}
        <section className="bg-white shadow-md p-6 rounded-lg mx-4 md:mx-20 mt-6">
          <h2 className="text-xl font-semibold text-blue-600 mb-4">
            Search Filters
          </h2>
          <form className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <label
                htmlFor="propertyType"
                className="block text-sm font-medium text-gray-700"
              >
                Property Type
              </label>
              <select
                id="propertyType"
                name="propertyType"
                value={filters.propertyType}
                onChange={handleInputChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              >
                <option value="All">All</option>
                <option value="Apartment">Apartment</option>
                <option value="Villa">Villa</option>
                <option value="House">House</option>
              </select>
            </div>
            <div className="flex-1">
              <label
                htmlFor="bhk"
                className="block text-sm font-medium text-gray-700"
              >
                BHK
              </label>
              <select
                id="bhk"
                name="bhk"
                value={filters.bhk}
                onChange={handleInputChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              >
                <option value="All">All</option>
                <option value="1 BHK">1 BHK</option>
                <option value="2 BHK">2 BHK</option>
                <option value="3 BHK">3 BHK</option>
                <option value="4 BHK">4 BHK</option>
              </select>
            </div>
            <div className="flex-1">
              <label
                htmlFor="minPrice"
                className="block text-sm font-medium text-gray-700"
              >
                Min Price (₹)
              </label>
              <input
                id="minPrice"
                name="minPrice"
                type="number"
                value={filters.minPrice}
                onChange={handleInputChange}
                placeholder="e.g., 500000"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
            <div className="flex-1">
              <label
                htmlFor="maxPrice"
                className="block text-sm font-medium text-gray-700"
              >
                Max Price (₹)
              </label>
              <input
                id="maxPrice"
                name="maxPrice"
                type="number"
                value={filters.maxPrice}
                onChange={handleInputChange}
                placeholder="e.g., 2000000"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
          </form>
        </section>

        {/* Property Listings */}
        <section className="mt-8 mx-4 md:mx-20">
          <h2 className="text-xl font-semibold text-blue-600 mb-4">
            Available Properties
          </h2>
          {renderProperties()}
        </section>
      </div>
      <Footer />
    </>
  );
};

export default FeatureProperties;
