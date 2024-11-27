import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router-dom"; // Import Link for routing
import Agent1 from "../../../assets/Agent1.png";
import Agent2 from "../../../assets/Agent2.png";
import Agent3 from "../../../assets/Agent3.png";

const Roommates = () => {
  const roommates = [
    {
      id: 1,
      name: "Karsang Lama",
      location: "Kathmandu",
      description: "Shared flat near Thamel.",
      price: "15,000",
      image: Agent2,
    },
    {
      id: 2,
      name: "Suyog Dahal",
      location: "Kathmandu",
      description: "Spacious apartment in New Baneshwor.",
      price: "20,000",
      image: Agent1,
    },
    {
      id: 3,
      name: "Jenish Katuwal",
      location: "Kathmandu",
      description: "Room in a shared flat in Baluwatar.",
      price: "16,000",
      image: Agent3,
    },
  ];

  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-blue-600">Find Roommates</h2>
          <p className="text-gray-600 mt-3">
            Discover the best shared flats and apartments in your area.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {roommates.map((roommate) => (
            <div
              key={roommate.id}
              className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition transform hover:scale-105"
            >
              <img
                src={roommate.image}
                alt={roommate.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-800">
                  {roommate.name}
                </h3>
                <div className="flex items-center text-sm text-gray-600 my-3">
                  <FaMapMarkerAlt className="mr-2 text-blue-500" />
                  {roommate.location}
                </div>
                <p className="text-base text-gray-500">{roommate.description}</p>
                <p className="mt-6 text-blue-600 font-bold text-xl">
                  Rs. {roommate.price} / month
                </p>
                <Link
                  to={`/roommatedetail/${roommate.id}`} // Link to RoommateDetails page with roommate ID
                  className="block mt-4 bg-blue-500 text-white py-2 px-4 rounded text-center hover:bg-blue-600"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Roommates;
