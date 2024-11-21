import { useState } from "react";
import agentImage from "../../assets/Agent1.png"; // Using Agent1.png as the team image
import missionImage from "../../assets/House.png"; // Using House.png for the mission image
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const AboutUs = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div>
      <Navbar />
      <section className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Introduction */}
          <div className="text-center">
            <h1 className="text-4xl font-extrabold text-gray-900">
              About Roommate Hub
            </h1>
            <p className="mt-4 max-w-2xl text-xl text-gray-600 lg:mx-auto">
              Welcome to Roommate Hub, your trusted platform for finding the
              perfect roommates and shared living spaces in Kathmandu and
              beyond. We strive to connect people who are looking for a
              comfortable, friendly, and affordable living experience.
            </p>
          </div>

          {/* Dropdown for Projects */}
          <div className="mt-12 text-center">
            <div className="relative inline-block text-left">
              <button
                onClick={toggleDropdown}
                className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none"
              >
                Explore Projects
                <svg
                  className="-mr-1 ml-2 h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>

              {isDropdownOpen && (
                <div className="absolute z-10 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                  <div className="py-1">
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Projects in Kathmandu
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Projects in Bhaktapur
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Projects in Lalitpur
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Our Mission */}
          <div className="mt-12 flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 p-6">
              <img
                src={missionImage}
                alt="Our Mission"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="md:w-1/2 p-6">
              <h2 className="text-3xl font-semibold text-gray-900">
                Our Mission
              </h2>
              <p className="mt-4 text-gray-600">
                Our mission is simple: to make finding roommates and shared
                spaces easy, enjoyable, and reliable. We believe that everyone
                deserves a comfortable and compatible living situation, and
                we’re committed to making that happen.
              </p>
            </div>
          </div>

          {/* Our Team */}
          <div className="mt-12 text-center">
            <h2 className="text-3xl font-semibold text-gray-900">
              Meet the Team
            </h2>
            <p className="mt-4 text-gray-600">
              Our team is passionate about creating a platform that puts your
              needs first. With a mix of tech enthusiasts and real estate
              experts, we are here to make your search for roommates as smooth
              as possible.
            </p>
            <div className="mt-8 flex justify-center">
              <img
                src={agentImage}
                alt="Our Team"
                className="rounded-lg shadow-lg w-3/4"
              />
            </div>
          </div>

          {/* Our Values */}
          <div className="mt-12">
            <h2 className="text-3xl font-semibold text-gray-900 text-center">
              Our Values
            </h2>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 bg-white shadow-lg rounded-lg">
                <h3 className="text-2xl font-semibold text-gray-900">Trust</h3>
                <p className="mt-4 text-gray-600">
                  We prioritize your safety by ensuring all listings and users
                  are verified for a trustworthy experience.
                </p>
              </div>
              <div className="p-6 bg-white shadow-lg rounded-lg">
                <h3 className="text-2xl font-semibold text-gray-900">
                  Compatibility
                </h3>
                <p className="mt-4 text-gray-600">
                  Our platform matches you with roommates who share similar
                  values, preferences, and lifestyles to ensure harmonious
                  living.
                </p>
              </div>
              <div className="p-6 bg-white shadow-lg rounded-lg">
                <h3 className="text-2xl font-semibold text-gray-900">
                  Community
                </h3>
                <p className="mt-4 text-gray-600">
                  We’re not just about finding a place to live; we’re about
                  building communities. Discover connections that last a
                  lifetime.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default AboutUs;
