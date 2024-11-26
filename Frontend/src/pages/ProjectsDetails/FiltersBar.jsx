import { useState } from "react";
import {
  FaBuilding,
  FaDollarSign,
  FaMapMarkerAlt,
  FaUserTie,
  FaCheckCircle,
  FaRedo,
} from "react-icons/fa"; // Import icons

const FiltersBar = ({ onFilterChange }) => {
  const defaultFilters = {
    category: "",
    budget: "",
    locality: "",
    builder: "",
    status: "",
  };

  const [filters, setFilters] = useState(defaultFilters);

  const handleFilterChange = (name, value) => {
    const updatedFilters = { ...filters, [name]: value };
    setFilters(updatedFilters);
    onFilterChange(name, value); // Notify parent about the change
  };

  const resetFilters = () => {
    setFilters(defaultFilters);
    // Notify parent to reset all filters
    Object.keys(defaultFilters).forEach((key) => onFilterChange(key, ""));
  };

  return (
    <div className="bg-white shadow-md p-4 flex flex-wrap items-center space-x-4">
      {/* Category Type */}
      <div className="flex items-center space-x-2">
        <FaBuilding className="text-blue-500" />
        <select
          value={filters.category}
          onChange={(e) => handleFilterChange("category", e.target.value)}
          className="border rounded px-3 py-2 text-gray-700"
        >
          <option value="">Category Type</option>
          <option value="Residential">Residential</option>
          <option value="Commercial">Commercial</option>
        </select>
      </div>

      {/* Budget */}
      <div className="flex items-center space-x-2">
        <FaDollarSign className="text-green-500" />
        <select
          value={filters.budget}
          onChange={(e) => handleFilterChange("budget", e.target.value)}
          className="border rounded px-3 py-2 text-gray-700"
        >
          <option value="">Budget</option>
          <option value="Below 50L">Below 50L</option>
          <option value="50L-1Cr">50L - 1Cr</option>
          <option value="Above 1Cr">Above 1Cr</option>
        </select>
      </div>

      {/* Locality */}
      <div className="flex items-center space-x-2">
        <FaMapMarkerAlt className="text-red-500" />
        <select
          value={filters.locality}
          onChange={(e) => handleFilterChange("locality", e.target.value)}
          className="border rounded px-3 py-2 text-gray-700"
        >
          <option value="">Locality</option>
          <option value="Thamel">Thamel</option>
          <option value="New Baneshwor">New Baneshwor</option>
        </select>
      </div>

      {/* Builder */}
      <div className="flex items-center space-x-2">
        <FaUserTie className="text-purple-500" />
        <select
          value={filters.builder}
          onChange={(e) => handleFilterChange("builder", e.target.value)}
          className="border rounded px-3 py-2 text-gray-700"
        >
          <option value="">Builder</option>
          <option value="Galaxy Group">Galaxy Group</option>
          <option value="Sawadee">Sawadee</option>
        </select>
      </div>

      {/* Project Status */}
      <div className="flex items-center space-x-2">
        <FaCheckCircle className="text-teal-500" />
        <select
          value={filters.status}
          onChange={(e) => handleFilterChange("status", e.target.value)}
          className="border rounded px-3 py-2 text-gray-700"
        >
          <option value="">Project Status</option>
          <option value="Ongoing">Ongoing</option>
          <option value="Upcoming">Upcoming</option>
          <option value="Completed">Completed</option>
        </select>
      </div>

      {/* Reset Filters Button */}
      <div className="flex items-center space-x-2">
        <button
          onClick={resetFilters}
          className="flex items-center text-blue-500"
        >
          <FaRedo className="mr-2" />
          Reset Filters
        </button>
      </div>
    </div>
  );
};

export default FiltersBar;
