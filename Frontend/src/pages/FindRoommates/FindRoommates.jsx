import React, { useState } from "react";
import { FaUserFriends, FaMapMarkerAlt, FaCalendarAlt, FaChevronLeft, FaChevronRight } from "react-icons/fa";  // Icons for the new context
import Agent1 from '../../assets/Agent1.png';  // Images for the roommates
import Agent2 from '../../assets/Agent2.png';
import Agent3 from '../../assets/Agent3.png';
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import SearchBar from "../FindRoom/SearchBar";
import Filter from "../FindRoom/Filter";
import Scroll from "../Components/Scroll";

const FindRoommates = () => {
  // Array of roommates, each having an array of images
  const roommates = [
    {
      id: 1,
      name: "Suyog Dahal",
      images: [Agent1],  // Image for this roommate
      location: "Kathmandu, Nepal",
      moveInDate: "Oct 2024",
      description: "Looking for a tidy, non-smoking roommate to share a 2-bedroom apartment. Prefers a calm and quiet environment.",
      type: "Shared Apartment",
    },
    {
      id: 2,
      name: "Karsang Lama",
      images: [Agent2],  // Image for this roommate
      location: "Bhaktapur, Nepal",
      moveInDate: "Nov 2024",
      description: "Seeking a friendly and outgoing roommate. Enjoys hosting small gatherings and values cleanliness.",
      type: "Private House",
    },
    {
      id: 3,
      name: "Jenish Katuwal",
      images: [Agent3],  // Image for this roommate
      location: "Patan, Nepal",
      moveInDate: "Dec 2024",
      description: "Searching for a tech-savvy roommate to share a modern apartment. Quiet hours after 10 PM appreciated.",
      type: "Modern Apartment",
    },
  ];

  // State to manage the current image index for each roommate
  const [currentImageIndex, setCurrentImageIndex] = useState(
    roommates.map(() => 0) // Initialize image index to 0 for each roommate
  );

  // Handle Next Image
  const handleNextImage = (index) => {
    setCurrentImageIndex((prevIndexes) =>
      prevIndexes.map((imgIndex, i) =>
        i === index ? (imgIndex + 1) % roommates[i].images.length : imgIndex
      )
    );
  };

  // Handle Previous Image
  const handlePreviousImage = (index) => {
    setCurrentImageIndex((prevIndexes) =>
      prevIndexes.map((imgIndex, i) =>
        i === index ? (imgIndex - 1 + roommates[i].images.length) % roommates[i].images.length : imgIndex
      )
    );
  };

  return (
    <div>
      <Navbar />
      <SearchBar />
      <Filter />
      <Scroll />
      <section className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Title */}
          <div className="lg:text-center">
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Find Your Ideal Roommate in Kathmandu & Bhaktapur
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-600 lg:mx-auto">
              Discover roommates that match your preferences and make living together enjoyable.
            </p>
          </div>

          {/* Roommate Cards */}
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
            {roommates.map((roommate, index) => (
              <div 
                key={roommate.id} 
                className="bg-white shadow-lg rounded-lg overflow-hidden relative group"
              >
                <div className="relative">
                  <img
                    src={roommate.images[currentImageIndex[index]]} // Display the current image for each roommate
                    alt={roommate.name}
                    className="w-full h-64 object-cover"
                  />
                  {/* Buttons for toggling images - shown on hover */}
                  <button
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 bg-white border border-gray-300 rounded-full hidden group-hover:block p-2 hover:bg-gray-200 transition-colors"
                    onClick={() => handlePreviousImage(index)}
                  >
                    <FaChevronLeft />
                  </button>
                  <button
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-white border border-gray-300 rounded-full hidden group-hover:block p-2 hover:bg-gray-200 transition-colors"
                    onClick={() => handleNextImage(index)}
                  >
                    <FaChevronRight />
                  </button>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900">{roommate.name}</h3>
                  <p className="text-black-500 text-lg font-bold mt-2">{roommate.location}</p>
                  <p className="mt-2 text-gray-600">{roommate.description}</p>
                  <ul className="mt-4 text-sm text-gray-500">
                    <li>Type: {roommate.type}</li>
                    <li className="flex items-center">
                      <FaMapMarkerAlt className="text-black w-5 h-5 mr-2" />
                      Location: {roommate.location}
                    </li>
                    <li className="flex items-center">
                      <FaCalendarAlt className="text-black w-5 h-5 mr-2" />
                      Move-in Date: {roommate.moveInDate}
                    </li>
                  </ul>
                  <button className="mt-4 border border-gray-400 px-6 py-2 rounded-full hover:bg-black hover:text-white">
                    Contact Roommate
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default FindRoommates;
