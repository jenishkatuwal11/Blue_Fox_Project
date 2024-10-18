import React from "react";
import agentImage from "../../assets/Agent1.png"; // Using Agent1.png as the team image
import missionImage from "../../assets/House.png"; // Using House.png for the mission image
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const AboutUs = () => {
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
            <h2 className="text-3xl font-semibold text-gray-900">Meet the Team</h2>
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
                <h3 className="text-2xl font-semibold text-gray-900">
                  Trust
                </h3>
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
