import React from "react";
import { Link } from "react-router-dom";
import ApartmentPic from "../../../assets/ApartmentPic.png";
import House from "../../../assets/House.png";
import RoomPic from "../../../assets/RoomPic.png";
import Apartment from "../../../assets/Apartment.png";

const PropertiesForRent = () => {
  const filters = ["Most Popular", "By Property Type", "By BHK"];
  const properties = [
    { id: 1, image: ApartmentPic, title: "2 BHK Apartments" },
    { id: 2, image: RoomPic, title: "Office Space" },
    { id: 3, image: House, title: "3 BHK Apartments" },
    { id: 4, image: Apartment, title: "Flats / Apartments" },
    { id: 5, image: House, title: "Commercial Shops" },
  ];

  return (
    <div className="bg-white text-blue-700 flex flex-col items-center">
      {/* Header */}
      <header className="text-center py-4">
        <h1 className="text-3xl font-bold">Properties for Rent in Nepal</h1>
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
      <section className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 px-8">
        {properties.map((property) => (
          <Link
            to={`/rent?type=${encodeURIComponent(property.title)}`} // Pass the title as query parameter
            key={property.id}
            className="bg-white border border-blue-200 rounded-md overflow-hidden shadow-md hover:shadow-lg transition"
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
      <div className="w-full h-8 bg-white"></div>
    </div>
  );
};

export default PropertiesForRent;
