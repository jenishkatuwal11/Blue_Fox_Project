import React, { useEffect } from "react";
import AOS from "aos"; // AOS for animation
import "aos/dist/aos.css"; // Import AOS styles
import {
  FaHome,
  FaBuilding,
  FaLandmark,
  FaLightbulb,
  FaCity,
  FaWarehouse,
  FaHotel,
  FaIndustry,
} from "react-icons/fa"; // Importing additional icons from react-icons

const PhotoSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  const icons = [
    { id: 1, icon: <FaHome className="w-16 h-16 text-blue-400 group-hover:text-blue-600" />, name: "Trusthouse" },
    { id: 2, icon: <FaBuilding className="w-16 h-16 text-blue-400 group-hover:text-blue-600" />, name: "Propertie" },
    { id: 3, icon: <FaLandmark className="w-16 h-16 text-blue-400 group-hover:text-blue-600" />, name: "Luxury" },
    { id: 4, icon: <FaLightbulb className="w-16 h-16 text-blue-400 group-hover:text-blue-600" />, name: "Creative" },
    { id: 5, icon: <FaCity className="w-16 h-16 text-blue-400 group-hover:text-blue-600" />, name: "Tower" },
    { id: 6, icon: <FaWarehouse className="w-16 h-16 text-blue-400 group-hover:text-blue-600" />, name: "Warehouse" },
    { id: 7, icon: <FaHotel className="w-16 h-16 text-blue-400 group-hover:text-blue-600" />, name: "Hotel" },
    { id: 8, icon: <FaIndustry className="w-16 h-16 text-blue-400 group-hover:text-blue-600" />, name: "Industry" },
  ];

  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-8 gap-8">
          {icons.map((icon, index) => (
            <div
              key={icon.id}
              className="text-center group" // group class for hover effects
              data-aos="fade-up"
              data-aos-delay={index * 100} // Adding a delay to each icon for a staggered animation
            >
              <div className="relative group">
                {/* Icon with transition effect */}
                <div className="transition-transform duration-500 transform group-hover:scale-125">
                  {icon.icon}
                </div>
                {/* Name of the icon */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <span className="text-blue-600 font-bold text-lg">{icon.name}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PhotoSection;
 