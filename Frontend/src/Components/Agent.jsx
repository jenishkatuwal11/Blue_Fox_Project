import React, { useEffect } from "react";
import AOS from "aos";  // Importing AOS for animations
import "aos/dist/aos.css";  // Importing AOS styles
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa"; // Importing social icons
import agentImage1 from '../assets/Agent1.png';  // Example image for agent 1
import agentImage2 from '../assets/Agent2.png';  // Example image for agent 2
import agentImage3 from '../assets/Agent3.png';  // Example image for agent 3

const Agent = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });  // Initialize AOS with a duration of 1000ms
  }, []);

  const agents = [
    {
      id: 1,
      name: "Suyog Dahal",
      role: "Senior Real Estate Agent",
      image: agentImage1,
      socials: {
        facebook: "#",
        twitter: "#",
        instagram: "#",
        linkedin: "#",
      },
    },
    {
      id: 2,
      name: "Karsang Lama",
      role: "Luxury Property Specialist",
      image: agentImage2,
      socials: {
        facebook: "#",
        twitter: "#",
        instagram: "#",
        linkedin: "#",
      },
    },
    {
      id: 3,
      name: "Jenish Katuwal",
      role: "Commercial Real Estate Agent",
      image: agentImage3,
      socials: {
        facebook: "#",
        twitter: "#",
        instagram: "#",
        linkedin: "#",
      },
    },
  ];

  return (
    <section className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="lg:text-center" data-aos="fade-up">
          <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Meet Our Agents</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Our Dedicated Real Estate Professionals
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-600 lg:mx-auto">
            Our team of highly experienced agents is here to help you with all your real estate needs.
          </p>
        </div>

        {/* Agents Cards */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
          {agents.map((agent) => (
            <div key={agent.id} className="bg-white shadow-lg rounded-lg overflow-hidden" data-aos="zoom-in">
              {/* Image Section */}
              <div className="relative w-full h-72">
                <img 
                  src={agent.image} 
                  alt={agent.name} 
                  className="absolute inset-0 w-full h-full object-cover rounded-t-lg" 
                />
              </div>
              
              {/* Agent Info */}
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold text-gray-900">{agent.name}</h3>
                <p className="text-blue-600 text-lg font-bold mt-2">{agent.role}</p>

                {/* Social Media Icons */}
                <div className="mt-4 flex justify-center space-x-4">
                  <a href={agent.socials.facebook} className="text-blue-600 hover:text-blue-800">
                    <FaFacebookF className="w-6 h-6" />
                  </a>
                  <a href={agent.socials.twitter} className="text-blue-600 hover:text-blue-800">
                    <FaTwitter className="w-6 h-6" />
                  </a>
                  <a href={agent.socials.instagram} className="text-blue-600 hover:text-blue-800">
                    <FaInstagram className="w-6 h-6" />
                  </a>
                  <a href={agent.socials.linkedin} className="text-blue-600 hover:text-blue-800">
                    <FaLinkedinIn className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Agent;
