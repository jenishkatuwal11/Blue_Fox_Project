import React, { useState } from "react";
import { FaBed, FaBath, FaExpandArrowsAlt,FaChevronLeft, FaChevronRight } from "react-icons/fa";  // Importing icons for Bedroom, Bathroom, and Area
import HeroSection from '../../assets/HeroSection.png';  // Image for House property
import House from '../../assets/House.png'; 
import ApartmentPic from '../../assets/ApartmentPic.png'; 
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import SearchBar from "./SearchBar";
import Filter from "../FindRoom/Filter";
import Scroll from "../Components/Scroll";
const FindRoom = () => {
  // Array of properties, each having an array of images
  const properties = [
    {
      id: 1,
      title: "Modern House in Kathmandu",
      images: [HeroSection, House, ApartmentPic],  // Array of images for this property
      price: "Rs 15,000,000",
      description: "A luxurious and modern house located in Kathmandu, offering a serene environment with all modern amenities. Ideal for family living with close proximity to schools and shopping centers.",
      type: "House",
      bedrooms: 5,
      bathrooms: 4,
      area: "4000 sq ft",
    },
    {
      id: 2,
      title: "Cozy Room in Bhaktapur",
      images: [HeroSection, House, ApartmentPic],  // Array of images for this property
      price: "Rs 25,000/month",
      description: "A fully furnished, cozy room located in the heart of Bhaktapur. Perfect for singles or students, with access to local heritage sites and vibrant street life.",
      type: "Room",
      bedrooms: 1,
      bathrooms: 1,
      area: "600 sq ft",
    },
    {
      id: 3,
      title: "Spacious Apartment in Patan",
      images: [ApartmentPic, HeroSection, House],  // Array of images for this property
      price: "Rs 35,000,000",
      description: "A spacious and elegant apartment located in Patan, offering a perfect blend of modern living and historical charm. Ideal for families looking for comfort in a prime location.",
      type: "Apartment",
      bedrooms: 3,
      bathrooms: 3,
      area: "2800 sq ft",
    },
    {
    id: 4,
    title: "Charming House in Bhaktapur",
    images: [HeroSection, House, ApartmentPic],
    price: "Rs 20,000,000",
    description: "A beautiful and spacious house located in Bhaktapur with traditional architecture and modern facilities. Perfect for family living in a calm neighborhood.",
    type: "House",
    bedrooms: 4,
    bathrooms: 3,
    area: "3500 sq ft",
  },
  
  {
    id: 5,
    title: "Spacious Family House in Kathmandu",
    images: [HeroSection, House, ApartmentPic],
    price: "Rs 22,000,000",
    description: "A large family home in the suburbs of Kathmandu with a garden and terrace. Ideal for families looking for space and comfort in a residential area.",
    type: "House",
    bedrooms: 5,
    bathrooms: 4,
    area: "4000 sq ft",
  },
  
  {
    id: 6,
    title: "Affordable Room in Bhaktapur",
    images: [HeroSection, House, ApartmentPic],
    price: "Rs 18,000/month",
    description: "A cozy and affordable room in a shared apartment in Bhaktapur. Ideal for students or young professionals.",
    type: "Room",
    bedrooms: 1,
    bathrooms: 1,
    area: "500 sq ft",
  },
  
  {
    id: 7,
    title: "Furnished Room in Kathmandu",
    images: [HeroSection, House, ApartmentPic],
    price: "Rs 30,000/month",
    description: "A fully furnished room located in the heart of Kathmandu. Perfect for those looking for a convenient and comfortable living arrangement.",
    type: "Room",
    bedrooms: 1,
    bathrooms: 1,
    area: "650 sq ft",
  },
  
  {
    id: 8,
    title: "Modern Apartment in Bhaktapur",
    images: [HeroSection, House, ApartmentPic],
    price: "Rs 28,000,000",
    description: "A newly built modern apartment in Bhaktapur with top-of-the-line amenities. Ideal for families looking for contemporary living.",
    type: "Apartment",
    bedrooms: 3,
    bathrooms: 3,
    area: "2800 sq ft",
  },
  
  {
    id: 9,
    title: "Luxury Apartment in Kathmandu",
    images: [HeroSection, House, ApartmentPic],
    price: "Rs 50,000,000",
    description: "A luxurious apartment in Kathmandu with breathtaking views of the city. Offering state-of-the-art facilities for upscale living.",
    type: "Apartment",
    bedrooms: 4,
    bathrooms: 4,
    area: "3500 sq ft",
  },
];
  

  // State to manage the current image index for each property
  const [currentImageIndex, setCurrentImageIndex] = useState(
    properties.map(() => 0) // Initialize image index to 0 for each property
  );

  // Handle Next Image
  const handleNextImage = (index) => {
    setCurrentImageIndex((prevIndexes) =>
      prevIndexes.map((imgIndex, i) =>
        i === index ? (imgIndex + 1) % properties[i].images.length : imgIndex
      )
    );
  };

  // Handle Previous Image
  const handlePreviousImage = (index) => {
    setCurrentImageIndex((prevIndexes) =>
      prevIndexes.map((imgIndex, i) =>
        i === index ? (imgIndex - 1 + properties[i].images.length) % properties[i].images.length : imgIndex
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
            Explore Premium Properties in Kathmandu & Bhaktapur
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-600 lg:mx-auto">
            Discover top-notch real estate options in Nepal’s iconic cities, offering the perfect blend of modern living and rich heritage.
          </p>
        </div>

        {/* Property Cards */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
          {properties.map((property, index) => (
            <div 
              key={property.id} 
              className="bg-white shadow-lg rounded-lg overflow-hidden relative group"
            >
              <div className="relative">
                <img
                  src={property.images[currentImageIndex[index]]} // Display the current image for each property
                  alt={property.title}
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
                <h3 className="text-xl font-semibold text-gray-900">{property.title}</h3>
                <p className="text-black-500 text-lg font-bold mt-2">{property.price}</p>
                <p className="mt-2 text-gray-600">{property.description}</p>
                <ul className="mt-4 text-sm text-gray-500">
                  <li>Type: {property.type}</li>
                  <li className="flex items-center">
                    <FaBed className="text-black w-5 h-5 mr-2" />
                    {property.bedrooms} Bedrooms
                  </li>
                  <li className="flex items-center">
                    <FaBath className="text-black w-5 h-5 mr-2" />
                    {property.bathrooms} Bathrooms
                  </li>
                  <li className="flex items-center">
                    <FaExpandArrowsAlt className="text-black w-5 h-5 mr-2" />
                    {property.area}
                  </li>
                </ul>
                <button className="mt-4 border border-gray-400 px-6 py-2 rounded-full hover:bg-black hover:text-white">
                  View Details
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

export default FindRoom;