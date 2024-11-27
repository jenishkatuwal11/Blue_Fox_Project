import React from "react";
import { useParams } from "react-router-dom";
import {
  FaBed,
  FaBath,
  FaExpandArrowsAlt,
  FaMapMarkerAlt,
  FaWifi,
  FaHome,
  FaRulerCombined,
  FaUserFriends,
} from "react-icons/fa";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import HeroSection from "../../assets/HeroSection.png";
import House from "../../assets/House.png";
import ApartmentPic from "../../assets/ApartmentPic.png";

// Mock data (replace with API call or real data)
const propertiesData = [
  {
    id: 1,
    title: "Modern House in Kathmandu",
    images: [HeroSection, House, ApartmentPic],
    price: "Rs 15,000,000",
    monthlyRent: "Rs 150,000/month",
    description:
      "A luxurious and modern house located in Kathmandu, offering a serene environment with all modern amenities.",
    type: "House",
    bedrooms: 5,
    bathrooms: 4,
    area: "4000 sq ft",
    location: "Kathmandu, Nepal",
    coordinates: "27.7172,85.3240", // Coordinates for Kathmandu, Nepal
    features: [
      "Air Conditioning",
      "Free Wi-Fi",
      "Swimming Pool",
      "Gym",
      "Parking Space",
    ],
    additionalInfo: {
      deposit: "Rs 450,000",
      leaseTerm: "Minimum 1 year",
      petsAllowed: "No",
      smokingAllowed: "No",
    },
  },
  // Add other properties here with different coordinates...
];

const RoomDetails = () => {
  const { id } = useParams();
  const property = propertiesData.find((p) => p.id === parseInt(id));

  if (!property) {
    return <div>Property not found</div>;
  }

  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <div className="max-w-6xl mx-auto px-6 py-8 text-gray-800">
        <div className="flex flex-col lg:flex-row">
          {/* Image carousel */}
          <div className="lg:w-1/2">
            <img src={property.images[0]} alt={property.title} className="rounded-lg shadow-md mb-4 w-full" />
            <div className="flex space-x-4 mt-4">
              {property.images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Image ${index + 1}`}
                  className="w-24 h-24 object-cover rounded-lg cursor-pointer border border-gray-200"
                />
              ))}
            </div>
          </div>

          {/* Property details */}
          <div className="lg:w-1/2 lg:pl-10 mt-6 lg:mt-0">
            <h1 className="text-3xl font-bold text-blue-900">{property.title}</h1>
            <p className="text-blue-700 font-semibold text-2xl mt-2">{property.price}</p>
            <p className="text-gray-500 font-medium mt-1">{property.monthlyRent}</p>
            <p className="text-gray-700 mt-4">{property.description}</p>
            <div className="flex items-center text-gray-600 mt-4">
              <FaMapMarkerAlt className="text-blue-500 mr-2" />
              <span>{property.location}</span>
            </div>

            {/* Features Section */}
            <div className="mt-6">
              <h3 className="text-xl font-semibold text-blue-800">Features</h3>
              <ul className="list-disc list-inside mt-2 text-gray-600">
                {property.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>

            {/* Property Specifications */}
            <div className="mt-6 grid grid-cols-3 gap-4 text-center text-gray-700">
              <div className="flex items-center justify-center">
                <FaBed className="text-blue-500 mr-2" />
                <span>{property.bedrooms} Beds</span>
              </div>
              <div className="flex items-center justify-center">
                <FaBath className="text-blue-500 mr-2" />
                <span>{property.bathrooms} Baths</span>
              </div>
              <div className="flex items-center justify-center">
                <FaExpandArrowsAlt className="text-blue-500 mr-2" />
                <span>{property.area}</span>
              </div>
            </div>

            {/* Additional Information */}
            <div className="mt-6">
              <h3 className="text-xl font-semibold text-blue-800">Additional Information</h3>
              <ul className="mt-2 text-gray-600 space-y-1">
                <li><strong>Deposit:</strong> {property.additionalInfo.deposit}</li>
                <li><strong>Lease Term:</strong> {property.additionalInfo.leaseTerm}</li>
                <li><strong>Pets Allowed:</strong> {property.additionalInfo.petsAllowed}</li>
                <li><strong>Smoking Allowed:</strong> {property.additionalInfo.smokingAllowed}</li>
              </ul>
            </div>

            <button
              className="mt-8 w-full py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition duration-300"
            >
              Contact Seller
            </button>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-10">
          <h2 className="text-2xl font-semibold text-blue-800">Location</h2>
          <div className="mt-4">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.2985247539567!2d85.3173217753093!3d27.70903192455519!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1933899db1bd%3A0x8283ac842ae0352e!2sKathmandu%20Durbar%20Square!5e0!3m2!1sen!2snp!4v1697649023590!5m2!1sen!2snp"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="Kathmandu Map"
              className="rounded-lg shadow-md"
            ></iframe>
          </div>
        </div>

        {/* Extra Details Section */}
        <div className="mt-10">
          <h2 className="text-2xl font-semibold text-gray-800">Description</h2>
          <p className="text-gray-700 mt-4">
            {property.description}
          </p>

          {/* Room Features */}
          <h2 className="text-2xl font-semibold text-gray-800 mt-10">Room Features</h2>
          <div className="text-gray-700 grid grid-cols-2 gap-4 mt-4">
            <p><strong>Room Type:</strong> Room</p>
            <p><strong>Free from:</strong> 13 Nov 2024</p>
            <p><strong>Room Size:</strong> 10 m²</p>
            <p><strong>Amenities:</strong> Desk, Closet, Furnished, Bed Linen</p>
          </div>

          {/* Property Features */}
          <h2 className="text-2xl font-semibold text-gray-800 mt-10">Property Features</h2>
          <div className="text-gray-700 grid grid-cols-2 gap-4 mt-4">
            <p><FaHome className="inline mr-2" /> House Type: Apartment</p>
            <p><FaRulerCombined className="inline mr-2" /> Size: 84 m²</p>
            <p><FaBed className="inline mr-2" /> Rooms: 4</p>
            <p><FaBath className="inline mr-2" /> Bathrooms: 1</p>
            <p><FaUserFriends className="inline mr-2" /> Roommates: 4</p>
          </div>

          {/* House Amenities */}
          <h2 className="text-2xl font-semibold text-gray-800 mt-10">House Amenities</h2>
          <ul className="text-gray-700 space-y-1 mt-4">
            <li><FaWifi className="inline mr-2" /> WiFi</li>
            <li>Independent Heating, Washing Machine, Furnished, Kitchen, Alarm</li>
            <li>Equipped Kitchen, Freezer, Fridge, etc.</li>
          </ul>

          {/* Rental Conditions */}
          <h2 className="text-2xl font-semibold text-gray-800 mt-10">Rental Conditions</h2>
          <div className="text-gray-700 mt-4">
            <p>Minimum Rent: 1 month</p>
            <p>Notice of Cancellation: 1 month</p>
            <p>Accepted Age: 18-40</p>
            <p>Accepts Couples: No</p>
            <p>Residence Allowed: Yes</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default RoomDetails;
