import React, { useEffect } from "react";
import AOS from "aos";  // Importing AOS for animations
import "aos/dist/aos.css";  // Importing AOS styles
import {
  FaBed,
  FaBath,
  FaExpandArrowsAlt,
} from "react-icons/fa";  // Importing icons for Bedroom, Bathroom, and Area
import houseImage from '../assets/House.png';  // Image for House property
import roomImage from '../assets/Room.png';  // Image for Room property
import apartmentImage from '../assets/Apartment.png';  // Image for Apartment property

const OurProperty = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: 'ease-in-out' });  // Initialize AOS animations
  }, []);

  const properties = [
    {
      id: 1,
      title: "Modern House in Kathmandu",
      image: houseImage,
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
      image: roomImage,
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
      image: apartmentImage,
      price: "Rs 35,000,000",
      description: "A spacious and elegant apartment located in Patan, offering a perfect blend of modern living and historical charm. Ideal for families looking for comfort in a prime location.",
      type: "Apartment",
      bedrooms: 3,
      bathrooms: 3,
      area: "2800 sq ft",
    },
  ];

  return (
    <section className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="lg:text-center" data-aos="fade-up">
          <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Our Properties</h2>
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
              className="bg-white shadow-lg rounded-lg overflow-hidden" 
              data-aos="zoom-in" 
              data-aos-delay={index * 200}  // Adding delay for staggered animation
            >
              <img src={property.image} alt={property.title} className="w-full h-64 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900">{property.title}</h3>
                <p className="text-blue-600 text-lg font-bold mt-2">{property.price}</p>
                <p className="mt-2 text-gray-600">{property.description}</p>
                <ul className="mt-4 text-sm text-gray-500">
                  <li>Type: {property.type}</li>
                  <li className="flex items-center">
                    <FaBed className="text-blue-600 w-5 h-5 mr-2" />
                    {property.bedrooms} Bedrooms
                  </li>
                  <li className="flex items-center">
                    <FaBath className="text-blue-600 w-5 h-5 mr-2" />
                    {property.bathrooms} Bathrooms
                  </li>
                  <li className="flex items-center">
                    <FaExpandArrowsAlt className="text-blue-600 w-5 h-5 mr-2" />
                    {property.area}
                  </li>
                </ul>
                <button className="mt-4 bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition-colors duration-300">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Explore More Button */}
        <div className="text-center mt-10" data-aos="fade-up" data-aos-delay="800">
          <button
            onClick={() => window.location.href = '/properties'}
            className="bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600 transition-colors duration-300"
          >
            Explore All Properties
          </button>
        </div>
      </div>
    </section>
  );
};

export default OurProperty;
