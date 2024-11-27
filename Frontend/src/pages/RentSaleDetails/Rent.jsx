import React, { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom"; // Import Link for routing

// Import images from the assets folder
import ApartmentImage from "../../assets/Apartment.png";
import HouseImage from "../../assets/House.png";
import RoomImage from "../../assets/Room.png";
import RoomPicImage from "../../assets/RoomPic.png";

const Rent = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  // Extract query parameters
  const selectedLocation = queryParams.get("location") || "All";
  const selectedType = queryParams.get("type") || "All";
  const selectedBHK = queryParams.get("bhk") || "All";

  // Property data
  const [properties] = useState([
    {
      id: 1,
      title: "2 BHK Apartment in Kathmandu",
      image: ApartmentImage,
      area: "1200 sq.ft.",
      price: "₹50,00,000",
      type: "Apartment",
      bhk: "2 BHK",
      location: "Kathmandu",
    },
    {
      id: 2,
      title: "3 BHK Villa in Pokhara",
      image: HouseImage,
      area: "2000 sq.ft.",
      price: "₹1,20,00,000",
      type: "Villa",
      bhk: "3 BHK",
      location: "Pokhara",
    },
    {
      id: 3,
      title: "4 BHK House in Lalitpur",
      image: RoomImage,
      area: "2500 sq.ft.",
      price: "₹2,50,00,000",
      type: "House",
      bhk: "4 BHK",
      location: "Lalitpur",
    },
    {
      id: 4,
      title: "Residential Land in Bhaktapur",
      image: RoomPicImage,
      area: "3000 sq.ft.",
      price: "₹80,00,000",
      type: "Land",
      bhk: "",
      location: "Bhaktapur",
    },
  ]);

  // State for additional search filters
  const [searchFilters, setSearchFilters] = useState({
    propertyType: "All",
    bhk: "All",
    minPrice: "",
    maxPrice: "",
  });

  // Handle filter input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSearchFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  // Combine all filters for dynamic property filtering
  const filteredProperties = properties.filter((property) => {
    const { propertyType, bhk, minPrice, maxPrice } = searchFilters;
    const propertyPrice = parseInt(property.price.replace(/[^0-9]/g, ""), 10);

    const matchesLocation =
      selectedLocation === "All" || property.location === selectedLocation;
    const matchesType =
      propertyType === "All" || property.type === propertyType;
    const matchesBHK = bhk === "All" || property.bhk === bhk;
    const matchesMinPrice =
      !minPrice || propertyPrice >= parseInt(minPrice, 10);
    const matchesMaxPrice =
      !maxPrice || propertyPrice <= parseInt(maxPrice, 10);

    return (
      matchesLocation &&
      matchesType &&
      matchesBHK &&
      matchesMinPrice &&
      matchesMaxPrice
    );
  });

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
            <p className="text-sm text-gray-500">Price: {property.price}</p>
            <p className="text-sm text-gray-500">Type: {property.type}</p>
            <Link
              to={`/roomdetails/${property.id}`} // Link to RoomDetails page with property ID
              className="mt-2 inline-block text-blue-600 font-medium hover:underline"
            >
              View Details
            </Link>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="min-h-screen bg-blue-50">
      {/* Header */}
      <header className="bg-blue-600 text-white py-6">
        <h1 className="text-3xl font-bold text-center">
          Explore Properties for Rent
        </h1>
        <p className="text-center text-sm mt-2">
          Filtered by: {selectedLocation}, {selectedType}, {selectedBHK}
        </p>
      </header>

      {/* Search Filters */}
      <section className="bg-white shadow-md p-6 rounded-lg mx-4 md:mx-20 mt-6">
        <h2 className="text-xl font-semibold text-blue-600 mb-4">
          Search Filters
        </h2>
        <form className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <label htmlFor="propertyType" className="block text-sm font-medium text-gray-700">
              Property Type
            </label>
            <select
              id="propertyType"
              name="propertyType"
              value={searchFilters.propertyType}
              onChange={handleInputChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            >
              <option value="All">All</option>
              <option value="Apartment">Apartment</option>
              <option value="Villa">Villa</option>
              <option value="House">House</option>
              <option value="Land">Land</option>
            </select>
          </div>
          <div className="flex-1">
            <label htmlFor="bhk" className="block text-sm font-medium text-gray-700">
              BHK
            </label>
            <select
              id="bhk"
              name="bhk"
              value={searchFilters.bhk}
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
            <label htmlFor="minPrice" className="block text-sm font-medium text-gray-700">
              Min Price (₹)
            </label>
            <input
              id="minPrice"
              name="minPrice"
              type="number"
              value={searchFilters.minPrice}
              onChange={handleInputChange}
              placeholder="e.g., 500000"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
          <div className="flex-1">
            <label htmlFor="maxPrice" className="block text-sm font-medium text-gray-700">
              Max Price (₹)
            </label>
            <input
              id="maxPrice"
              name="maxPrice"
              type="number"
              value={searchFilters.maxPrice}
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
  );
};

export default Rent;
