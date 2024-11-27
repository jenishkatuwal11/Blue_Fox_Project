import React from "react";
import {
  FaCheckCircle,
  FaDollarSign,
  FaCalendarAlt,
  FaListAlt,
  FaBroom,
  FaUserFriends,
  FaGlassCheers,
  FaClock,
  FaUtensils,
  FaSmoking,
  FaBriefcase,
  FaUserTie,
  FaMale,
} from "react-icons/fa";
import Navbar from "../Components/Navbar"; // Import Navbar
import Footer from "../Components/Footer"; // Import Footer
import Scroll from "../Components/Scroll"; // Import Scroll
import Agent2 from "../../assets/Agent2.png"; // Example asset

const RoommateDetail = () => {
  return (
    <div>
      <Navbar /> {/* Navbar */}
      <Scroll /> {/* Scroll Component */}
      <div className="max-w-[1200px] my-5 mx-auto p-6 bg-white rounded-md shadow-lg">
        {/* Profile Image Section */}
        <div className="w-full">
          <img
            src={Agent2}
            alt="Profile"
            className="w-full h-[500px] object-cover rounded-md"
          />
          <p className="text-sm text-gray-500 mt-2">about 7 hours ago</p>
        </div>

        {/* Content Section */}
        <div className="flex flex-col lg:flex-row mt-4 gap-6">
          {/* Left Section */}
          <div className="lg:w-1/2">
            <h1 className="text-2xl font-bold mb-4">Karsang Lama</h1>

            {/* Price and Listing Type Section */}
            <div className="border p-4 rounded-md shadow-sm mb-6 flex justify-between items-start">
              {/* Left Section of the Box */}
              <div>
                <p className="text-gray-500 flex items-center">
                  <FaDollarSign className="mr-2 text-blue-500" />
                  Price/month
                </p>
                <p className="font-bold text-lg ">Rs. 10,000 </p>
                <p className="text-gray-500 mt-2 flex items-center">
                  <FaCalendarAlt className="mr-2 text-blue-500" />
                  Move-in date
                </p>
                <p className="font-bold">Immediately</p>
              </div>

              {/* Right Section of the Box */}
              <div>
                <p className="text-gray-500 flex items-center">
                  <FaListAlt className="mr-2 text-blue-500" />
                  Listing Type
                </p>
                <p className="font-bold">Roommate looking for a room</p>
              </div>
            </div>

            {/* ID, Email, and Phone Validation Section */}
            <div className="border p-4 rounded-md shadow-sm mb-6">
              <div className="flex items-center mb-2">
                <FaCheckCircle className="text-blue-500 w-5 h-5 mr-2" />
                <span>ID Checked</span>
              </div>
              <div className="flex items-center mb-2">
                <FaCheckCircle className="text-blue-500 w-5 h-5 mr-2" />
                <span>Email Validated</span>
              </div>
              <div className="flex items-center">
                <FaCheckCircle className="text-blue-500 w-5 h-5 mr-2" />
                <span>Phone Validated</span>
              </div>
            </div>

            {/* Description Section */}
            <div className="border p-4 rounded-md shadow-sm mb-6">
              <h2 className="font-bold text-lg mb-2">Description</h2>
              <p className="text-gray-600">
                Hi, my name is Karsang. I am a 24-year-old. I am looking for a
                room to rent in Kathmandu. My budget is Rs. 10,000, and I would
                like to move immediately.
              </p>
            </div>

            {/* Lifestyle Section */}
            <div className="border p-4 rounded-md shadow-sm mb-6">
              <h2 className="font-bold text-lg mb-2">Lifestyle</h2>
              <ul className="text-gray-600">
                <li className="flex items-center mb-2">
                  <FaBroom className="mr-2 text-blue-500" />
                  <span className="font-bold">My Cleanliness:</span> Clean
                </li>
                <li className="flex items-center  mb-2">
                  <FaUserFriends className="mr-2 text-blue-500" />
                  <span className="font-bold">Overnight Guests:</span>{" "}
                  Occasionally
                </li>
                <li className="flex items-center mb-2">
                  <FaGlassCheers className="mr-2 text-blue-500" />
                  <span className="font-bold">Party Habits:</span> Weekends
                </li>
                <li className="flex items-center mb-2">
                  <FaClock className="mr-2 text-blue-500" />
                  <span className="font-bold">I Get Up / I Get Up:</span> Before
                  6AM / 8PM-10PM
                </li>
                <li className="flex items-center mb-2">
                  <FaUtensils className="mr-2 text-blue-500" />
                  <span className="font-bold">Food Preference:</span> Almost
                  Anything
                </li>
                <li className="flex items-center mb-2">
                  <FaSmoking className="mr-2 text-blue-500" />
                  <span className="font-bold">Smoker:</span> Outside only
                </li>
                <li className="flex items-center mb-2">
                  <FaBriefcase className="mr-2 text-blue-500" />
                  <span className="font-bold">Work Schedule:</span> Professional
                  (9-5)
                </li>
                <li className="flex items-center mb-2">
                  <FaUserTie className="mr-2 text-blue-500" />
                  <span className="font-bold">Occupation:</span> Beauty/Fashion
                </li>
              </ul>
            </div>
          </div>

          {/* Right Section */}
          <div className="lg:w-1/2 border p-4 rounded-md shadow-sm h-[330px] sticky top-10">
            <div className="flex items-center gap-4 mb-4">
              <img
                src={Agent2}
                alt="User"
                className="w-16 h-16 rounded-full object-cover"
              />
              <div className="flex items-center mb-2">
                <h2 className="font-bold text-lg">Karsang Lama</h2>
                <FaMale className="mr-2 text-blue-500" />
              </div>
            </div>
            <textarea
              placeholder="Write message to Karsang Lama..."
              className="w-full border rounded-md p-2 h-[150px] focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
            <button className="bg-blue-500 text-white py-2 px-4 rounded-md mt-4 w-full hover:bg-blue-600 transition">
              Send Message
            </button>
          </div>
        </div>
      </div>
      <Footer /> {/* Footer */}
    </div>
  );
};

export default RoommateDetail;
