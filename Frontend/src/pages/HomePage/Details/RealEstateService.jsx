import React from "react";

const services = [
  {
    title: "Buy",
    description: "Find your dream property to buy in Nepal hassle-free.",
    icon: "🏠", // Replace with an actual icon
    link: "/buy",
  },
  {
    title: "Rent",
    description: "Discover rental properties that suit your lifestyle.",
    icon: "💰", // Replace with an actual icon
    link: "/rent",
  },
  {
    title: "Find Roommates",
    description: "Connect with like-minded roommates easily in Nepal.",
    icon: "🤝", // Replace with an actual icon
    link: "/find-roommates",
  },
  {
    title: "Projects",
    description: "Explore ongoing and upcoming property projects in Nepal.",
    icon: "📊", // Replace with an actual icon
    link: "//project-details?location=Bhaktapur", // Ensure correct relative path
  },
  {
    title: "Vastu Consultant",
    description: "Connect with expert Vastu consultants for better guidance.",
    icon: "🧭", // Replace with an actual icon
    link: "/services/Vastu%20Consultant",
  },
];

const RealEstateService = () => {
  return (
    <div className="bg-white py-12 px-6 md:px-16">
      <h2 className="text-center text-2xl md:text-3xl font-bold mb-8 text-blue-600">
        Property Services in Nepal
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-blue-50 p-4 rounded-md shadow-md hover:shadow-lg hover:bg-blue-100 transition-all duration-300 cursor-pointer border border-blue-200"
            onClick={() => (window.location.href = service.link)}
          >
            <div className="flex items-center justify-center text-4xl text-blue-500 mb-4">
              {service.icon}
            </div>
            <h3 className="text-lg font-semibold text-gray-800 text-center mb-2">
              {service.title}
            </h3>
            <p className="text-sm text-gray-600 text-center">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RealEstateService;
