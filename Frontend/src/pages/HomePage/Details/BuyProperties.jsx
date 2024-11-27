import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const BuyProperties = () => {
  const { type } = useParams(); // Get the property type from the URL
  const navigate = useNavigate();

  // Mock data for BUY options
  const propertyData = {
    "flats-apartments": [
      { id: 1, name: "Luxury Apartment", price: "$200,000", location: "Kathmandu" },
      { id: 2, name: "Modern Flat", price: "$150,000", location: "Lalitpur" },
    ],
    "houses-villas": [
      { id: 1, name: "Beautiful Villa", price: "$500,000", location: "Bhaktapur" },
      { id: 2, name: "Cozy House", price: "$300,000", location: "Pokhara" },
    ],
    // Add missing options here...
  };

  // Get properties for the selected type
  const currentProperties = propertyData[type] || [];

  console.log("Selected property type:", type);
  console.log("Properties for selected type:", currentProperties);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 text-blue-700">
        {type.replace("-", " ").toUpperCase()} FOR BUY
      </h1>

      {/* Return Button */}
      <button
        onClick={() => navigate(-1)} // Go back to the previous page
        className="mb-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
      >
        Return
      </button>

      {/* Display Property List */}
      {currentProperties.length > 0 ? (
        <div className="space-y-4">
          {currentProperties.map((property) => (
            <div
              key={property.id}
              className="border rounded-md p-4 shadow-md bg-white"
            >
              <h2 className="text-2xl font-semibold text-blue-800">
                {property.name}
              </h2>
              <p className="text-gray-700">Price: {property.price}</p>
              <p className="text-gray-700">Location: {property.location}</p>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-600">
          No properties available for {type.replace("-", " ")}.
        </p>
      )}
    </div>
  );
};

export default BuyProperties;
