import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Scroll from "../Components/Scroll";
import FiltersBar from "./FiltersBar";

// Import agent images
import RealEstateNepal from "../../assets/Agents/abc.webp";
import SharmaProperties from "../../assets/Agents/aa1.webp";
import NepalPropertyHub from "../../assets/Agents/abc.webp";
import BhaktapurRealty from "../../assets/Agents/ang1.png";
import LalitpurHomes from "../../assets/Agents/bbx.jpg";

// Import project images
import KathmanduProject1 from "../../assets/property/prop2.jpg";
import KathmanduProject2 from "../../assets/property/prop1.webp";

// Import similar listing images
import BHK3Flats from "../../assets/property/prop4.jpg";
import BHK2Flats from "../../assets/property/prop3.jpg";

const mockData = {
  Kathmandu: [
    {
      id: 1,
      name: "Luxury Apartments in Kathmandu",
      location: "Thamel, Kathmandu",
      category: "Residential",
      status: "Upcoming",
      builder: "Galaxy Group",
      locality: "Thamel",
      area: "2000 Sq.ft.",
      price: "1.0 Cr - 2.5 Cr",
      budget: "Above 1Cr",
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
      name: "Office Complex in Kathmandu",
      location: "New Baneshwor, Kathmandu",
      category: "Commercial",
      status: "Ongoing",
      builder: "Sawadee",
      locality: "New Baneshwor",
      area: "5000 Sq.ft.",
      price: "25 L - 75 L",
      budget: "Below 50",
      image: BHK3Flats,
      description:
        "State-of-the-art office spaces in a prime location in Kathmandu.",
      similarListings: [
        { type: "Office Space", size: "2000 Sq.ft.", price: "50 L" },
        { type: "Retail Space", size: "1000 Sq.ft.", price: "30 L" },
      ],
    },
  ],
  Bhaktapur: [
    {
      id: 1,
      name: "Luxury Villa in Bhaktapur",
      location: "Balkumari, Bhaktapur",
      type: "Residential",
      status: "Upcoming",
      builder: "Galaxy Group",
      area: "2000 Sq.ft.",
      price: "2.5 Cr",
      image: KathmanduProject2,
      description:
        "Luxury apartments in the heart of Bhaktapur with modern amenities.",
      similarListings: [
        { type: "3 BHK Flats", size: "1500 Sq.ft.", price: "2.0 Cr" },
        { type: "2 BHK Flats", size: "1200 Sq.ft.", price: "1.5 Cr" },
      ],
    },
    {
      id: 2,
      name: "Office Complex in Bhaktapur",
      location: "Thimi, Bhaktapur",
      type: "Commercial",
      status: "Ongoing",
      builder: "Sawadee",
      area: "5000 Sq.ft.",
      price: "75 L",
      image: BHK2Flats,
      description:
        "State-of-the-art office spaces in a prime location in Bhaktapur.",
      similarListings: [
        { type: "Office Space", size: "2000 Sq.ft.", price: "50 L" },
        { type: "Retail Space", size: "1000 Sq.ft.", price: "30 L" },
      ],
    },
  ],
  Lalitpur: [
    {
      id: 1,
      name: "Luxury Villa in Lalitpur",
      location: "Balkumari, Bhaktapur",
      type: "Residential",
      status: "Upcoming",
      builder: "Galaxy Group",
      area: "2000 Sq.ft.",
      price: "2.5 Cr",
      image: KathmanduProject2,
      description:
        "Luxury apartments in the heart of Bhaktapur with modern amenities.",
      similarListings: [
        { type: "3 BHK Flats", size: "1500 Sq.ft.", price: "50 L - 2 Cr" },
        { type: "2 BHK Flats", size: "1200 Sq.ft.", price: "1.5 Cr" },
      ],
    },
    {
      id: 2,
      name: "Office Complex in Lalitpur",
      location: "Thimi, Bhaktapur",
      type: "Commercial",
      status: "Ongoing",
      builder: "Sawadee",
      area: "5000 Sq.ft.",
      price: "75 L",
      image: BHK2Flats,
      description:
        "State-of-the-art office spaces in a prime location in Bhaktapur.",
      similarListings: [
        { type: "Office Space", size: "2000 Sq.ft.", price: "50 L" },
        { type: "Retail Space", size: "1000 Sq.ft.", price: "30 L" },
      ],
    },
  ],
};

const agentsData = [
  {
    name: "Real Estate Nepal",
    location: "Thamel, Kathmandu",
    city: "Kathmandu",
    image: RealEstateNepal,
  },
  {
    name: "Sharma Properties",
    location: "Baneshwor, Kathmandu",
    city: "Kathmandu",
    image: SharmaProperties,
  },
  {
    name: "Nepal Property Hub",
    location: "Jawalakhel, Lalitpur",
    city: "Lalitpur",
    image: NepalPropertyHub,
  },
  {
    name: "Bhaktapur Realty",
    location: "Durbar Square, Bhaktapur",
    city: "Bhaktapur",
    image: BhaktapurRealty,
  },
  {
    name: "Lalitpur Homes",
    location: "Patan, Lalitpur",
    city: "Lalitpur",
    image: LalitpurHomes,
  },
];

const Projects = () => {
  const { city } = useParams();
  const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);

  useEffect(() => {
    const newProjects = mockData[city] || [];
    setProjects(newProjects);
    setFilteredProjects(newProjects);
  }, [city]);

  const filteredAgents = agentsData.filter((agent) => agent.city === city);

  const handleFilterChange = (name, value) => {
    const filtered = projects.filter((project) =>
      value ? project[name]?.includes(value) : true
    );
    setFilteredProjects(filtered);
  };

  return (
    <>
      <Navbar />
      <Scroll />
      <div className="container mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-4 gap-8 bg-slate-100">
        {/* Main Content */}
        <div className="lg:col-span-3 space-y-8">
          <h1 className="text-2xl font-bold mb-4">Projects in {city}</h1>

          <FiltersBar onFilterChange={handleFilterChange} />

          {filteredProjects.length ? (
            <div className="space-y-6">
              {filteredProjects.map((project) => (
                <div
                  key={project.id}
                  className="border rounded-lg p-6 shadow-md bg-white space-y-4"
                >
                  <div className="flex justify-between items-start">
                    <div className="flex">
                      <img
                        src={project.image}
                        alt={project.name}
                        className="w-48 h-32 rounded-md mr-6"
                      />
                      <div>
                        <h2 className="text-xl font-bold text-blue-800 hover:underline">
                          {project.name}
                        </h2>
                        <p className="text-sm text-gray-600">
                          {project.location}
                        </p>
                        <div className="grid grid-cols-3 gap-4 text-sm mt-2">
                          <div>
                            <p className="font-semibold">Configs:</p>
                            <p>{project.type}</p>
                          </div>
                          <div>
                            <p className="font-semibold">Total Area:</p>
                            <p>{project.area}</p>
                          </div>
                          <div>
                            <p className="font-semibold">Possession Status:</p>
                            <p>{project.status}</p>
                          </div>
                        </div>
                        <p className="mt-2 text-gray-700 line-clamp-2">
                          {project.description}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-semibold text-blue-600 flex items-center">
                        ₹ <span className="ml-1">{project.price}</span>
                      </p>
                    </div>
                  </div>
                  <div className="mt-4 bg-gray-100 p-4 rounded-lg shadow">
                    <h3 className="text-sm font-semibold text-blue-800 mb-4">
                      {project.similarListings.length} Similar listings by{" "}
                      {project.builder} in this area
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {project.similarListings.map((listing, index) => (
                        <div
                          key={index}
                          className="flex flex-col bg-white p-4 rounded-lg border border-gray-200 hover:shadow-md transition-shadow"
                        >
                          <div className="flex justify-between items-center">
                            <p className="font-semibold text-gray-800">
                              {listing.type}
                            </p>
                            <p className="text-sm text-gray-600">
                              {listing.size}
                            </p>
                          </div>
                          <p className="text-lg font-bold text-green-600">
                            {listing.price}
                          </p>
                          <a
                            href="#"
                            className="text-blue-600 hover:underline mt-2 text-sm font-medium"
                          >
                            Get Quote
                          </a>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-700 mt-6">
              No projects available in {city}.
            </p>
          )}
        </div>

        {/* Sidebar */}
        <div className="p-6 shadow-md rounded-lg space-y-6 bg-white">
          <h2 className="text-lg font-bold text-purple-600">
            Top Real Estate Agents in {city}
          </h2>
          <p className="text-sm text-gray-600">
            If you're considering buying or investing{" "}
            <span className="text-blue-500">More..</span>
          </p>
          <div className="space-y-4">
            {filteredAgents.map((agent, index) => (
              <div
                key={index}
                className="flex items-center space-x-4 p-4 rounded-lg border border-gray-200 bg-white hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 rounded-full overflow-hidden">
                  <img
                    src={agent.image}
                    alt={agent.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-semibold text-sm">{agent.name}</p>
                  <p className="text-xs text-gray-600">{agent.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Projects;
