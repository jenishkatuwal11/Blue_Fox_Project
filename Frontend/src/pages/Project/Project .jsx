import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Scroll from "../Components/Scroll";

// Import necessary images
import RealEstateNepal from "../../assets/abc.webp";
import KathmanduProject1 from "../../assets/prop2.jpg";
import KathmanduProject2 from "../../assets/prop1.webp";
import BHK3Flats from "../../assets/prop4.jpg";
import BHK2Flats from "../../assets/prop3.jpg";

// Mock data structure
const mockData = {
  Kathmandu: [
    {
      id: 1,
      name: "Luxury Apartments in Kathmandu",
      location: "Thamel, Kathmandu",
      category: "Residential",
      status: "Upcoming",
      builder: "Galaxy Group",
      area: "2000 Sq.ft.",
      price: "1.0 Cr - 2.5 Cr",
      image: KathmanduProject1,
      description:
        "Luxury apartments in the heart of Kathmandu with modern amenities.",
      similarListings: [
        { type: "3 BHK Flats", size: "1500 Sq.ft.", price: "2.0 Cr" },
        { type: "2 BHK Flats", size: "1200 Sq.ft.", price: "1.5 Cr" },
      ],
    },
    {
      id: 2,
      name: "Cozy Residential Flat in Kathmandu",
      location: "Lazimpat, Kathmandu",
      category: "Residential",
      status: "Ongoing",
      builder: "Dream Developers",
      area: "1800 Sq.ft.",
      price: "1.2 Cr",
      image: KathmanduProject2,
      description:
        "Cozy residential flat ideal for small families with modern architecture.",
      similarListings: [
        { type: "2 BHK Flats", size: "1200 Sq.ft.", price: "1.2 Cr" },
      ],
    },
    {
      id: 3,
      name: "Modern Studio Apartments",
      location: "Baneshwor, Kathmandu",
      category: "Residential",
      status: "Completed",
      builder: "Urban Habitat",
      area: "800 Sq.ft.",
      price: "80 L",
      image: BHK2Flats,
      description: "Affordable modern studio apartments in Baneshwor.",
    },
    {
      id: 4,
      name: "High-End Condos in Kathmandu",
      location: "Maharajgunj, Kathmandu",
      category: "Residential",
      status: "Ongoing",
      builder: "Luxe Developers",
      area: "1200 Sq.ft.",
      price: "1.8 Cr",
      image: KathmanduProject1,
      description: "High-end condos with luxury amenities in Maharajgunj.",
    },
    {
      id: 5,
      name: "Budget-Friendly Apartments",
      location: "Koteshwor, Kathmandu",
      category: "Residential",
      status: "Upcoming",
      builder: "City Builders",
      area: "1000 Sq.ft.",
      price: "75 L - 1.0 Cr",
      image: KathmanduProject2,
      description:
        "Budget-friendly apartments perfect for small families in Koteshwor.",
    },
  ],
  Bhaktapur: [
    {
      id: 6,
      name: "Luxury Villa in Bhaktapur",
      location: "Balkumari, Bhaktapur",
      category: "Residential",
      status: "Upcoming",
      builder: "Harmony Builders",
      area: "2500 Sq.ft.",
      price: "2.5 Cr",
      image: BHK3Flats,
      description:
        "Luxury villa in a peaceful area of Bhaktapur with a large garden.",
      similarListings: [
        { type: "4 BHK Flats", size: "1800 Sq.ft.", price: "2.2 Cr" },
        { type: "3 BHK Flats", size: "1500 Sq.ft.", price: "1.8 Cr" },
      ],
    },
    {
      id: 7,
      name: "Affordable Flats in Bhaktapur",
      location: "Thimi, Bhaktapur",
      category: "Residential",
      status: "Completed",
      builder: "Thimi Developers",
      area: "1200 Sq.ft.",
      price: "80 L - 1.0 Cr",
      image: BHK2Flats,
      description: "Affordable flats in the prime area of Thimi, Bhaktapur.",
    },
    {
      id: 8,
      name: "Family Homes in Bhaktapur",
      location: "Suryabinayak, Bhaktapur",
      category: "Residential",
      status: "Ongoing",
      builder: "Green Developers",
      area: "1800 Sq.ft.",
      price: "1.0 Cr - 1.5 Cr",
      image: KathmanduProject2,
      description:
        "Family homes with a scenic view of Bhaktapur's heritage sites.",
    },
    {
      id: 9,
      name: "Exclusive Townhouses",
      location: "Changunarayan, Bhaktapur",
      category: "Residential",
      status: "Upcoming",
      builder: "Elite Estates",
      area: "2000 Sq.ft.",
      price: "2.0 Cr",
      image: BHK3Flats,
      description: "Exclusive townhouses with premium designs in Changunarayan.",
    },
    {
      id: 10,
      name: "Heritage Apartments",
      location: "Durbar Square, Bhaktapur",
      category: "Residential",
      status: "Completed",
      builder: "Heritage Homes",
      area: "1000 Sq.ft.",
      price: "1.2 Cr",
      image: BHK2Flats,
      description:
        "Heritage-style apartments in the cultural heart of Bhaktapur.",
    },
  ],
  Lalitpur: [
    {
      id: 11,
      name: "Luxury Villas in Lalitpur",
      location: "Jawalakhel, Lalitpur",
      category: "Residential",
      status: "Ongoing",
      builder: "ABC Builders",
      area: "3000 Sq.ft.",
      price: "3.0 Cr - 4.0 Cr",
      image: KathmanduProject1,
      description:
        "Premium villas with large living spaces and modern interiors.",
    },
    {
      id: 12,
      name: "Mid-range Apartments in Lalitpur",
      location: "Sanepa, Lalitpur",
      category: "Residential",
      status: "Completed",
      builder: "City Group",
      area: "1500 Sq.ft.",
      price: "1.0 Cr - 1.5 Cr",
      image: BHK2Flats,
      description:
        "Modern apartments with all facilities in the heart of Sanepa.",
    },
    {
      id: 13,
      name: "Studio Flats in Lalitpur",
      location: "Patan, Lalitpur",
      category: "Residential",
      status: "Ongoing",
      builder: "Studio Build",
      area: "1000 Sq.ft.",
      price: "1.2 Cr",
      image: KathmanduProject2,
      description:
        "Contemporary studio flats ideal for young professionals in Patan.",
    },
    {
      id: 14,
      name: "Modern Duplex Homes",
      location: "Lagankhel, Lalitpur",
      category: "Residential",
      status: "Upcoming",
      builder: "Modern Developers",
      area: "2500 Sq.ft.",
      price: "2.8 Cr",
      image: BHK3Flats,
      description: "Modern duplex homes in the peaceful area of Lagankhel.",
    },
    {
      id: 15,
      name: "Budget Apartments in Lalitpur",
      location: "Ekantakuna, Lalitpur",
      category: "Residential",
      status: "Completed",
      builder: "Affordable Estates",
      area: "1200 Sq.ft.",
      price: "80 L - 1.0 Cr",
      image: KathmanduProject1,
      description:
        "Budget-friendly apartments in a convenient location in Ekantakuna.",
    },
  ],
};

// Component
const Project = () => {
  const location = useLocation();
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const locationFilter = params.get("location");
    const filteredProjects = locationFilter
      ? mockData[locationFilter] || []
      : [];
    setProjects(filteredProjects);
  }, [location]);

  return (
    <>
      <Navbar />
      <Scroll />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-6">Projects</h1>
        {projects.length > 0 ? (
          projects.map((project) => (
            <div
              key={project.id}
              className="border rounded-lg p-6 shadow-md mb-6 bg-white"
            >
              <div className="flex">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-48 h-32 rounded-md mr-4"
                />
                <div>
                  <h2 className="text-xl font-bold text-blue-600">
                    {project.name}
                  </h2>
                  <p className="text-sm text-gray-600">{project.location}</p>
                  <p className="text-gray-800 mt-2">{project.description}</p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No projects available for the selected location.</p>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Project;
