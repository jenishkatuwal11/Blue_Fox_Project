import React from "react";
import { Link } from "react-router-dom";
import ApartmentPic from "../../../assets/ApartmentPic.png";
import House from "../../../assets/House.png";
import RoomPic from "../../../assets/RoomPic.png";
import Apartment from "../../../assets/Apartment.png";


const PropertiesForSale = () => {
  const filters = ["Most Popular", "By Budget", "By Property Type", "By BHK"];
  const properties = [
    { id: 1, image: ApartmentPic, title: "Budget above 5 crores", category: "Buy" },
    { id: 2, image: House, title: "Budget within 2 crores", category: "Buy" },
    { id: 3, image: RoomPic, title: "Builder Floor", category: "Rent" },
    { id: 4, image: Apartment, title: "Flats / Apartments", category: "Buy" },
    { id: 5, image: Apartment, title: "3 BHK Apartments", category: "Rent" },
  ];

  return (
    <div className="bg-white text-gray-800 flex flex-col items-center">
      {/* Header */}
      <header className="text-center py-4">
        <h1 className="text-3xl font-bold text-blue-700">
          Properties for Buy in Nepal
        </h1>
      </header>

      {/* Filters */}
      <section className="flex justify-center space-x-3 mb-4">
        {filters.map((filter, index) => (
          <button
            key={index}
            className="px-4 py-1 bg-blue-600 text-white rounded-full text-sm hover:bg-blue-700 transition"
          >
            {filter}
          </button>
        ))}
      </section>

      {/* Property Cards */}
      <section className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 px-6">
        {properties.map((property) => (
          <Link
            // Dynamically set the path to Buy or Rent based on category
            to={`/${property.category.toLowerCase()}?title=${encodeURIComponent(property.title)}`}
            key={property.id}
            className="bg-white rounded-md overflow-hidden shadow-md hover:shadow-lg transition"
          >
            <div className="overflow-hidden group">
              <img
                src={property.image}
                alt={property.title}
                className="w-full h-40 object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="p-3 bg-blue-600">
              <h3 className="text-sm font-medium text-white text-center">
                {property.title}
              </h3>
            </div>
          </Link>
        ))}
      </section>
      {/* Bottom Margin Area */}
      <div className="w-full h-8 bg-white"></div>
    </div>
  );
};

export default PropertiesForSale;
