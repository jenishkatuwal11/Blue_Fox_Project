import { useLocation, useParams } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const ProjectDetail = () => {
  const { city, id } = useParams(); // Get city and id from the URL
  const location = useLocation(); // Access the passed state
  const project = location.state?.project; // Retrieve project data from state

  if (!project) {
    return <div>Loading...</div>; // Fallback in case no data is passed
  }

  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">{project.name}</h1>
          <p className="text-lg text-green-600 font-bold">{project.price}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Section */}
          <div>
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-auto rounded-md"
            />
            <p className="mt-4">{project.description}</p>
          </div>

          {/* Right Section */}
          <div className="border p-4 rounded-md shadow-lg bg-white">
            <h3 className="text-lg font-bold mb-4">
              Get Best Offer on this Project
            </h3>
            <form>
              <input
                type="text"
                placeholder="Enter Your Name"
                className="w-full border p-2 mb-4 rounded-md"
              />
              <input
                type="email"
                placeholder="Enter Your Email"
                className="w-full border p-2 mb-4 rounded-md"
              />
              <input
                type="tel"
                placeholder="Enter Mobile Number"
                className="w-full border p-2 mb-4 rounded-md"
              />
              <button
                type="submit"
                className="w-full bg-red-500 text-white py-2 rounded-md"
              >
                Connect Now
              </button>
            </form>
          </div>
        </div>

        {/* Overview Section */}
        <div className="mt-8">
          <h2 className="text-xl font-bold mb-4">Overview</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            <div className="border p-4 rounded-md text-center">
              <p className="font-bold">Property Type</p>
              <p>{project.type}</p>
            </div>
            <div className="border p-4 rounded-md text-center">
              <p className="font-bold">Area</p>
              <p>{project.area}</p>
            </div>
            <div className="border p-4 rounded-md text-center">
              <p className="font-bold">Price Range</p>
              <p>{project.price}</p>
            </div>
            <div className="border p-4 rounded-md text-center">
              <p className="font-bold">Status</p>
              <p>{project.status}</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProjectDetail;
