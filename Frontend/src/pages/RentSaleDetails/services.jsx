import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { FaEnvelope, FaPhoneAlt, FaGlobe, FaStar } from "react-icons/fa";

const servicesData = {
  "Property Management": [
    {
      id: 1,
      name: "Everest Property Management",
      location: "Kathmandu, Nepal",
      description:
        "Providing top-notch property management services including rentals, tenant handling, and maintenance.",
      rating: 4.5,
      reviews: 15,
      contactEmail: "contact@everestproperty.com",
      contactNumber: "+977-9801234567",
      website: "https://www.everestproperty.com",
    },
    {
      id: 2,
      name: "Rama Realtors",
      location: "Lalitpur, Nepal",
      description:
        "Offering reliable residential and commercial property management services.",
      rating: 4.8,
      reviews: 20,
      contactEmail: "info@ramarealtors.com",
      contactNumber: "+977-9802345678",
      website: "https://www.ramarealtors.com",
    },
    {
      id: 3,
      name: "Global Property Services",
      location: "Bhaktapur, Nepal",
      description:
        "Expert management for properties across the Kathmandu Valley.",
      rating: 4.7,
      reviews: 18,
      contactEmail: "support@globalproperty.com",
      contactNumber: "+977-9803456789",
      website: "https://www.globalproperty.com",
    },
  ],
  "Legal Assistance": [
    {
      id: 4,
      name: "Kathmandu Legal Experts",
      location: "Kathmandu, Nepal",
      description:
        "Specializing in real estate legal documentation, dispute resolution, and legal consultation.",
      rating: 4.6,
      reviews: 12,
      contactEmail: "legal@kathmandulegal.com",
      contactNumber: "+977-9804567890",
      website: "https://www.kathmandulegal.com",
    },
    {
      id: 5,
      name: "Nepal Real Estate Legal Solutions",
      location: "Lalitpur, Nepal",
      description:
        "Providing comprehensive legal assistance for all property-related issues in Nepal.",
      rating: 4.8,
      reviews: 16,
      contactEmail: "support@nepallegal.com",
      contactNumber: "+977-9805678901",
      website: "https://www.nepallegal.com",
    },
    {
      id: 6,
      name: "Metro Legal Associates",
      location: "Bhaktapur, Nepal",
      description:
        "Experienced legal advisors for real estate transactions, agreements, and disputes.",
      rating: 4.7,
      reviews: 10,
      contactEmail: "metrolegal@gmail.com",
      contactNumber: "+977-9806789012",
      website: "https://www.metrolegal.com",
    },
  ],
  "Home Inspection": [
    {
      id: 7,
      name: "Qube Real Estate Advisory LLP",
      location: "Kathmandu, Nepal",
      description:
        "Expert home inspection services to ensure the safety and quality of your property.",
      rating: 4.4,
      reviews: 5,
      contactEmail: "contact@qubereal.in",
      contactNumber: "+977-9807890123",
      website: "https://www.qubereal.in",
    },
    {
      id: 8,
      name: "Kathmandu Times Realty",
      location: "Lalitpur, Nepal",
      description:
        "Providing comprehensive home inspection services for residential properties.",
      rating: 4.8,
      reviews: 5,
      contactEmail: "info@kathmandutimesrealty.com",
      contactNumber: "+977-9808901234",
      website: "https://www.kathmandutimesrealty.com",
    },
    {
      id: 9,
      name: "Ramakrishna Associates",
      location: "Bhaktapur, Nepal",
      description:
        "Reliable home inspection services for both residential and commercial properties.",
      rating: 4.7,
      reviews: 3,
      contactEmail: "support@ramakrishnaassociates.com",
      contactNumber: "+977-9809012345",
      website: "https://www.ramakrishnaassociates.com",
    },
  ],
  "Vastu Consultant": [
    {
      id: 10,
      name: "Vastu Harmony Nepal",
      location: "Kathmandu, Nepal",
      description:
        "Providing Vastu consultancy to ensure your property aligns with positive energy.",
      rating: 4.9,
      reviews: 22,
      contactEmail: "contact@vastuharmony.com",
      contactNumber: "+977-9810234567",
      website: "https://www.vastuharmony.com",
    },
    {
      id: 11,
      name: "Vastu Experts Nepal",
      location: "Lalitpur, Nepal",
      description:
        "Expert guidance to align your property with Vastu principles and energy flow.",
      rating: 4.7,
      reviews: 15,
      contactEmail: "info@vastuexperts.com",
      contactNumber: "+977-9812345678",
      website: "https://www.vastuexperts.com",
    },
    {
      id: 12,
      name: "Positive Vastu Solutions",
      location: "Bhaktapur, Nepal",
      description:
        "Customized Vastu solutions for residential and commercial spaces.",
      rating: 4.8,
      reviews: 19,
      contactEmail: "support@positivevastu.com",
      contactNumber: "+977-9813456789",
      website: "https://www.positivevastu.com",
    },
  ],
};

const ServiceDetails = () => {
  const { type } = useParams();
  const [services, setServices] = useState([]);

  useEffect(() => {
    const decodedType = decodeURIComponent(type);
    setServices(servicesData[decodedType] || []);
  }, [type]);

  return (
    <div className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-blue-400 mb-4">{type}</h1>
          <p className="text-lg">
            Explore the best {type.toLowerCase()} services in Kathmandu Valley.
          </p>
        </header>
        <div className="grid grid-cols-1 gap-6">
          {services.map((service) => (
            <div key={service.id} className="bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text              -xl font-bold mb-2">{service.name}</h3>
              <p className="text-sm text-gray-400 mb-1">{service.location}</p>
              <p className="mb-2">{service.description}</p>
              <div className="flex items-center mb-2">
                {[...Array(Math.floor(service.rating))].map((_, index) => (
                  <FaStar key={index} className="text-yellow-400" />
                ))}
                {service.rating % 1 !== 0 && <FaStar className="text-gray-400" />}
                <span className="ml-2 text-sm text-gray-300">
                  {service.rating} ({service.reviews} reviews)
                </span>
              </div>
              <div className="flex gap-4">
                <a
                  href={`mailto:${service.contactEmail}`}
                  className="text-blue-400 hover:underline flex items-center gap-2"
                >
                  <FaEnvelope /> Send Email
                </a>
                <a
                  href={`tel:${service.contactNumber}`}
                  className="text-blue-400 hover:underline flex items-center gap-2"
                >
                  <FaPhoneAlt /> View Contact
                </a>
                <a
                  href={service.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline flex items-center gap-2"
                >
                  <FaGlobe /> Visit Website
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;

