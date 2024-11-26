//Roommates

import { useState } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Scroll from "../Components/Scroll";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaTimes } from "react-icons/fa";
import { HiCheckCircle } from "react-icons/hi";
import CalebImage from "../../assets/RoommatesImg/1.webp";
import JamesBond from "../../assets/RoommatesImg/2.webp";
import Michael from "../../assets/RoommatesImg/3.webp";
import John from "../../assets/RoommatesImg/4.png";
import William from "../../assets/RoommatesImg/5.webp";
import Thomas from "../../assets/RoommatesImg/6.jpg";
import Charles from "../../assets/RoommatesImg/8.jpg";
import Rebecca from "../../assets/RoommatesImg/9.jpg";

const FindRoommates = () => {
  const roommates = [
    {
      id: 1,
      name: "Caleb",
      image: CalebImage,
      location: "Kathmandu",
      moveInDate: "Immediately",
      description:
        "Looking for a place to stay, I will be attending GMU and I want something to experience some form of the college 'experience'.",
      price: "$1100 USD / month",
      validations: { email: true, phone: true },
    },
    {
      id: 2,
      name: "James Bond",
      image: JamesBond,
      location: "Bhaktapur",
      moveInDate: "Oct 2024",
      description:
        "Looking for a tidy, non-smoking roommate to share a 2-bedroom apartment. Prefers a calm and quiet environment.",
      price: "$500 USD / month",
      validations: { email: true, phone: true },
    },
    {
      id: 3,
      name: "Michael Guragain",
      image: Michael,
      location: "Lalitpur",
      moveInDate: "Nov 2024",
      description:
        "Seeking a friendly and outgoing roommate. Enjoys hosting small gatherings and values cleanliness.",
      price: "$700 USD / month",
      validations: { email: true, phone: false },
    },
    {
      id: 4,
      name: "John Cena Tamang",
      image: John,
      location: "Kathmandu",
      moveInDate: "Immediately",
      description:
        "Looking for a place to stay, I will be attending GMU and I want something to experience some form of the college 'experience'.",
      price: "$1100 USD / month",
      validations: { email: true, phone: true },
    },
    {
      id: 5,
      name: "William Tamang",
      image: William,
      location: "Bhaktapur",
      moveInDate: "Immediately",
      description:
        "Looking for a place to stay, I will be attending GMU and I want something to experience some form of the college 'experience'.",
      price: "$1100 USD / month",
      validations: { email: true, phone: true },
    },
    {
      id: 6,
      name: "Thomas Katuwal",
      image: Thomas,
      location: "Lalitpur",
      moveInDate: "Immediately",
      description:
        "Looking for a place to stay, I will be attending GMU and I want something to experience some form of the college 'experience'.",
      price: "$1100 USD / month",
      validations: { email: true, phone: true },
    },
    {
      id: 7,
      name: "Charles Bista",
      image: Charles,
      location: "Kathmandu",
      moveInDate: "Immediately",
      description:
        "Looking for a place to stay, I will be attending GMU and I want something to experience some form of the college 'experience'.",
      price: "$1100 USD / month",
      validations: { email: true, phone: true },
    },
    {
      id: 8,
      name: "Rebecca Thapa",
      image: Rebecca,
      location: "Bhaktapur",
      moveInDate: "Immediately",
      description:
        "Looking for a place to stay, I will be attending GMU and I want something to experience some form of the college 'experience'.",
      price: "$1100 USD / month",
      validations: { email: true, phone: true },
    },
    {
      id: 9,
      name: "Alan Bhandari",
      image: "https://via.placeholder.com/150",
      location: "Lalitpur",
      moveInDate: "Immediately",
      description:
        "Looking for a place to stay, I will be attending GMU and I want something to experience some form of the college 'experience'.",
      price: "$1100 USD / month",
      validations: { email: true, phone: true },
    },
    {
      id: 10,
      name: "Mr. Beast",
      image: "Katumandu",
      location: "University Drive, Fairfax, VA, USA",
      moveInDate: "Immediately",
      description:
        "Looking for a place to stay, I will be attending GMU and I want something to experience some form of the college 'experience'.",
      price: "$1100 USD / month",
      validations: { email: true, phone: true },
    },
  ];

  const [selectedFilter, setSelectedFilter] = useState(null);
  const [budget, setBudget] = useState({ min: 0, max: 5000 });
  const [selectedPets, setSelectedPets] = useState([]);
  const [selectedZodiacSigns, setSelectedZodiacSigns] = useState([]);
  const [sortOption, setSortOption] = useState("lastActivity");
  const [setRoommatePreference] = useState("");

  const toggleFilter = (filter) => {
    setSelectedFilter(selectedFilter === filter ? null : filter);
  };

  const toggleSelection = (item, setSelectedItems, selectedItems) => {
    if (selectedItems.includes(item)) {
      setSelectedItems(selectedItems.filter((i) => i !== item));
    } else {
      setSelectedItems([...selectedItems, item]);
    }
  };

  const handleBudgetChange = (e, type) => {
    setBudget((prev) => ({
      ...prev,
      [type]: parseInt(e.target.value, 10),
    }));
  };

  const applyFilters = () => {};
  const applyBudgetFilter = () => {};

  return (
    <div>
      <Navbar />
      <Scroll />
      <section className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <p className="pt-1 mt-1 text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Roommate Finder in Kathmandu, Bhaktapur & Lalitpur
            </p>
            <p className="pb-10 mt-3 max-w-2xl text-xl text-gray-600 lg:mx-auto">
              Explore options to find your ideal roommate that matches your
              preferences.
            </p>
          </div>

          {/* Filters Section */}
          <div className="bg-white sticky top-0 z-50 shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
              <div className="flex space-x-4">
                <button
                  className="border rounded-lg px-4 py-2 text-sm font-medium hover:bg-slate-100"
                  onClick={() => toggleFilter("roommate")}
                >
                  Roommate
                </button>
                <button
                  className="border rounded-lg px-4 py-2 text-sm font-medium hover:bg-slate-100"
                  onClick={() => toggleFilter("budget")}
                >
                  Budget
                </button>
                <button
                  className="border rounded-lg px-4 py-2 text-sm font-medium hover:bg-slate-100"
                  onClick={() => toggleFilter("filters")}
                >
                  Filters
                </button>
                <button
                  className="border rounded-lg px-4 py-2 text-sm font-medium hover:bg-slate-100"
                  onClick={() => toggleFilter("sort")}
                >
                  Sort By
                </button>
              </div>
              <button className="bg-gray-800 text-white px-4 py-2 rounded-md text-sm">
                + Add listing
              </button>
            </div>

            {/* Roommate Filter */}
            {selectedFilter === "roommate" && (
              <div className="absolute bg-white shadow-lg border rounded-lg w-80 top-full left-0 mt-2 p-4 z-50">
                <button
                  className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
                  onClick={() => toggleFilter(null)}
                >
                  <FaTimes size={16} />
                </button>
                <p className="text-sm font-bold mb-4">I&#39;m looking for:</p>
                <div className="flex flex-col space-y-2">
                  <label>
                    <input
                      type="radio"
                      name="roommate"
                      value="room"
                      onChange={(e) => setRoommatePreference(e.target.value)}
                    />{" "}
                    A room
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="roommate"
                      value="entirePlace"
                      onChange={(e) => setRoommatePreference(e.target.value)}
                    />{" "}
                    An entire place
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="roommate"
                      value="roommate"
                      onChange={(e) => setRoommatePreference(e.target.value)}
                    />{" "}
                    A roommate
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="roommate"
                      value="tenant"
                      onChange={(e) => setRoommatePreference(e.target.value)}
                    />{" "}
                    A tenant
                  </label>
                </div>
                <button
                  className="bg-blue-600 text-white px-4 py-2 rounded mt-4"
                  onClick={applyFilters}
                >
                  Show Results
                </button>
              </div>
            )}

            {selectedFilter === "budget" && (
              <div className="absolute bg-white shadow-lg border rounded-lg w-80 top-full left-0 mt-2 p-4 z-50">
                {/* Close Button */}
                <button
                  className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
                  onClick={() => toggleFilter(null)}
                >
                  <FaTimes size={16} />
                </button>

                <p className="text-sm font-bold mb-4">Select Budget</p>
                <div className="flex items-center space-x-2 mb-4">
                  <input
                    type="number"
                    value={budget.min}
                    onChange={(e) => handleBudgetChange(e, "min")}
                    className="border rounded p-2 text-sm w-1/2"
                    placeholder="Min"
                  />
                  <span className="text-gray-500">-</span>
                  <input
                    type="number"
                    value={budget.max}
                    onChange={(e) => handleBudgetChange(e, "max")}
                    className="border rounded p-2 text-sm w-1/2"
                    placeholder="Max"
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="range"
                    min="0"
                    max="5000"
                    value={budget.max}
                    onChange={(e) => handleBudgetChange(e, "max")}
                    className="w-full"
                  />
                  <p className="text-gray-500 text-xs mt-1 text-center">
                    Current Max: ${budget.max}
                  </p>
                </div>
                <div className="flex justify-between">
                  <button
                    onClick={() => setBudget({ min: 0, max: 5000 })} // Reset budget
                    className="text-gray-500 text-sm"
                  >
                    Clear
                  </button>
                  <button
                    onClick={applyBudgetFilter}
                    className="bg-blue-600 text-white px-4 py-2 rounded text-sm"
                  >
                    Show results
                  </button>
                </div>
              </div>
            )}
            {/* Sort Filter */}
            {selectedFilter === "sort" && (
              <div className="absolute bg-white shadow-lg border rounded-lg w-80 top-full left-0 mt-2 p-4 z-50">
                <button
                  className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
                  onClick={() => toggleFilter(null)}
                >
                  <FaTimes size={16} />
                </button>
                <p className="text-sm font-bold mb-4">Sort By</p>
                <div className="flex flex-col space-y-2">
                  <label>
                    <input
                      type="radio"
                      name="sort"
                      value="lastActivity"
                      checked={sortOption === "lastActivity"}
                      onChange={(e) => setSortOption(e.target.value)}
                    />{" "}
                    Last Activity
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="sort"
                      value="newest"
                      checked={sortOption === "newest"}
                      onChange={(e) => setSortOption(e.target.value)}
                    />{" "}
                    Newest
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="sort"
                      value="rent"
                      checked={sortOption === "rent"}
                      onChange={(e) => setSortOption(e.target.value)}
                    />{" "}
                    Rent
                  </label>
                </div>
                <button
                  className="bg-blue-600 text-white px-4 py-2 rounded mt-4"
                  onClick={applyFilters}
                >
                  Show Results
                </button>
              </div>
            )}

            {/* Filters for Zodiac and Pets */}
            {selectedFilter === "filters" && (
              <div className="absolute bg-white shadow-lg border rounded-lg w-80 top-full left-0 mt-2 p-4 z-50 max-h-[400px] overflow-y-auto">
                <button
                  className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
                  onClick={() => toggleFilter(null)}
                >
                  <FaTimes size={16} />
                </button>
                <p className="text-sm font-bold mb-4">Filters</p>
                {/* Age Filter */}
                <div className="mb-4">
                  <p className="text-sm font-bold">Age</p>
                  <div className="flex items-center space-x-2 mt-2">
                    <input
                      type="number"
                      className="border rounded p-2 text-sm w-1/2"
                      placeholder="18"
                      min="0"
                    />
                    <span className="text-gray-500">-</span>
                    <input
                      type="number"
                      className="border rounded p-2 text-sm w-1/2"
                      placeholder="99"
                      min="0"
                    />
                  </div>
                  <input
                    type="range"
                    min="18"
                    max="99"
                    className="w-full mt-2"
                  />
                </div>

                {/* Gender Filter */}
                <div className="mb-4">
                  <p className="text-sm font-bold">Gender</p>
                  <div className="flex flex-col space-y-2">
                    <label>
                      <input
                        type="radio"
                        name="gender"
                        value="female"
                        className="mr-2"
                      />{" "}
                      Female
                    </label>
                    <label>
                      <input
                        type="radio"
                        name="gender"
                        value="male"
                        className="mr-2"
                      />{" "}
                      Male
                    </label>
                    <label>
                      <input
                        type="radio"
                        name="gender"
                        value="everyone"
                        className="mr-2"
                        defaultChecked
                      />{" "}
                      Everyone
                    </label>
                  </div>
                </div>

                {/* Zodiac Filter */}
                <div className="mb-4">
                  <p className="text-sm font-bold">Zodiac</p>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      "Capricorn",
                      "Aquarius",
                      "Pisces",
                      "Aries",
                      "Taurus",
                      "Gemini",
                      "Cancer",
                      "Leo",
                      "Virgo",
                      "Libra",
                      "Scorpio",
                      "Sagittarius",
                    ].map((zodiac) => (
                      <button
                        key={zodiac}
                        onClick={() =>
                          toggleSelection(
                            zodiac,
                            setSelectedZodiacSigns,
                            selectedZodiacSigns
                          )
                        }
                        className={`border rounded-lg text-sm p-2 ${
                          selectedZodiacSigns.includes(zodiac)
                            ? "bg-blue-600 text-white"
                            : "hover:bg-gray-200"
                        }`}
                      >
                        {zodiac}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Pets Filter */}
                <div className="mb-4">
                  <p className="text-sm font-bold">Pets</p>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      "Cats",
                      "Dogs",
                      "Small Pets",
                      "Birds",
                      "Fish",
                      "Reptiles",
                    ].map((pet) => (
                      <button
                        key={pet}
                        onClick={() =>
                          toggleSelection(pet, setSelectedPets, selectedPets)
                        }
                        className={`border rounded-lg text-sm p-2 ${
                          selectedPets.includes(pet)
                            ? "bg-blue-600 text-white"
                            : "hover:bg-gray-200"
                        }`}
                      >
                        {pet}
                      </button>
                    ))}
                  </div>
                </div>

                <button
                  className="bg-blue-600 text-white px-4 py-2 rounded mt-4"
                  onClick={applyFilters}
                >
                  Show Results
                </button>
              </div>
            )}
          </div>

          {/* Roommate Cards */}
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {roommates.map((roommate) => (
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
                  <div>
                    <h3 className="text-lg font-semibold">{roommate.name}</h3>
                    <div className="flex items-center text-sm text-gray-600 mt-1">
                      <FaMapMarkerAlt className="text-gray-500 w-4 h-4 mr-2" />
                      {roommate.location}
                    </div>
                    <p className="mt-2 text-gray-700">{roommate.description}</p>
                    <p className="mt-2 text-lg font-bold text-gray-800">
                      {roommate.price}
                    </p>
                    <div className="flex space-x-4 mt-2 items-center">
                      <div className="flex items-center text-gray-600">
                        <FaEnvelope className="text-gray-500 w-4 h-4 mr-2" />
                        Email Validated{" "}
                        {roommate.validations.email && (
                          <HiCheckCircle className="text-green-500 w-4 h-4 ml-1" />
                        )}
                      </div>
                      <div className="flex items-center text-gray-600">
                        <FaPhone className="text-gray-500 w-4 h-4 mr-2" />
                        Phone Validated{" "}
                        {roommate.validations.phone && (
                          <HiCheckCircle className="text-green-500 w-4 h-4 ml-1" />
                        )}
                      </div>
                    </div>
                  </div>
                  <button className="mt-4 w-full bg-blue-500 text-white py-2 rounded-md hover:bg-gray-800">
                    Message
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
