import React, { useEffect } from "react";
import AOS from "aos";  // Importing AOS for animations
import "aos/dist/aos.css";  // Importing AOS styles
import roomiImage from '../assets/roomi.png';  // Assuming roomi.png is already in the assets folder
import easyToUseImage from '../assets/easy to use.png';  // Path to Easy to Use image
import verifiedImage from '../assets/Verified.png';  // Path to Verified image

const AboutUs = () => {
  useEffect(() => {
    AOS.init({ duration: 1200 });  // Initialize AOS with a duration of 1200ms
  }, []);

  return (
    <section className="bg-white text-gray-900 py-16 px-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Image Section with Clean Design */}
        <div className="relative" data-aos="fade-right">
          <img
            src={roomiImage}  // Using the roomi.png image
            alt="Modern Room"
            className="w-full object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Text Section */}
        <div data-aos="fade-left">
          <h2 className="text-blue-600 text-lg font-semibold mb-2">Who We Are</h2>
          <h1 className="text-4xl font-bold mb-6">
            Find Your Perfect Roommate with iRoomit
          </h1>
          <p className="text-lg mb-8">
            We are a platform dedicated to helping people find their ideal roommate or shared living space. With thousands of verified listings and over 100,000 successful connections, we are here to simplify your search.
          </p>

          {/* Features Section */}
          <div className="space-y-6">
            {/* Verified Listings Feature */}
            <div className="flex items-center space-x-4 bg-gray-100 p-4 rounded-md shadow-sm" data-aos="zoom-in">
              <div className="p-4 bg-gray-200 rounded-md">
                <img
                  src={verifiedImage}  // Using the Verified image
                  alt="Verified Listings Icon"
                  className="w-8 h-8"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold">Verified Listings</h3>
                <p className="text-gray-600">
                  Our listings are verified to provide you peace of mind during your search for shared spaces.
                </p>
              </div>
            </div>

            {/* Easy to Use Feature */}
            <div className="flex items-center space-x-4 bg-gray-100 p-4 rounded-md shadow-sm" data-aos="zoom-in">
              <div className="p-4 bg-gray-200 rounded-md">
                <img
                  src={easyToUseImage}  // Using the Easy to Use image
                  alt="Easy to Use Icon"
                  className="w-8 h-8"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold">Easy to Use</h3>
                <p className="text-gray-600">
                  We prioritize simplicity and efficiency, allowing you to easily connect with potential roommates.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Us Button */}
      <div className="text-center mt-10" data-aos="fade-up">
        <button className="bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600 transition duration-300 ease-in-out">
          Contact Us
        </button>
      </div>
    </section>
  );
};

export default AboutUs;
