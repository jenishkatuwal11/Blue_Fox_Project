import React, { useEffect } from "react";
import AOS from "aos";  // Importing AOS for animations
import "aos/dist/aos.css";  // Importing AOS styles
import houseIcon from '../assets/House.png';  // Icon for House-related services
import roomIcon from '../assets/Room.png';  // Icon for Room-related services
import apartmentIcon from '../assets/Apartment.png';  // Icon for Apartment-related services

const Service = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: 'ease-in-out' });  // Initialize AOS with animation settings
  }, []);

  const handleExploreSolutions = () => {
    // Redirect to a hypothetical "Explore Solutions" page
    window.location.href = '/explore-solutions';
  };

  return (
    <section className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="lg:text-center" data-aos="fade-up">
          <h2 className="text-base font-semibold tracking-wide uppercase" style={{ color: 'var(--primary-color)' }}>
            Our Services
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Explore Our Real Estate Solutions
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-600 lg:mx-auto">
            We provide high-quality services to meet your residential and commercial real estate needs, whether you're looking for a house, room, or apartment.
          </p>
        </div>

        {/* Service Blocks */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Service 1: House Services */}
          <div className="bg-white shadow-lg rounded-lg p-6 text-center" data-aos="zoom-in" data-aos-delay="200">
            <img src={houseIcon} alt="House Services Icon" className="mx-auto h-16 w-16" />
            <h3 className="mt-4 text-xl font-semibold text-gray-900">House Services</h3>
            <p className="mt-2 text-base text-gray-600">
              We offer comprehensive solutions for buying, selling, and managing houses, ensuring all your needs are met.
            </p>
          </div>

          {/* Service 2: Room Services */}
          <div className="bg-white shadow-lg rounded-lg p-6 text-center" data-aos="zoom-in" data-aos-delay="400">
            <img src={roomIcon} alt="Room Services Icon" className="mx-auto h-16 w-16" />
            <h3 className="mt-4 text-xl font-semibold text-gray-900">Room Services</h3>
            <p className="mt-2 text-base text-gray-600">
              Whether you're searching for a room to rent or need help managing your rental space, we've got you covered.
            </p>
          </div>

          {/* Service 3: Apartment Services */}
          <div className="bg-white shadow-lg rounded-lg p-6 text-center" data-aos="zoom-in" data-aos-delay="600">
            <img src={apartmentIcon} alt="Apartment Services Icon" className="mx-auto h-16 w-16" />
            <h3 className="mt-4 text-xl font-semibold text-gray-900">Apartment Services</h3>
            <p className="mt-2 text-base text-gray-600">
              Our apartment services include everything from leasing to managing multi-unit properties with top-tier support.
            </p>
          </div>
        </div>

        {/* Explore Solutions Button */}
        <div className="text-center mt-10" data-aos="fade-up" data-aos-delay="800">
          <button
            onClick={handleExploreSolutions}
            className="px-6 py-3 rounded-full hover:bg-blue-600 transition-colors duration-300"
            style={{ backgroundColor: 'var(--primary-color)', color: 'white' }}  // Applying theme color
          >
            Explore Solutions
          </button>
        </div>
      </div>
    </section>
  );
};

export default Service;
