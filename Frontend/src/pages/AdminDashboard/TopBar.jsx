import { FiSearch, FiBell, FiSun, FiMoon } from "react-icons/fi";
import PropTypes from "prop-types";
import AdminImg from "../../assets/Agent1.png";

const TopBar = ({ darkMode, toggleDarkMode }) => (
  <div
    className={`sticky top-0 z-10 flex flex-col lg:flex-row lg:justify-between items-start lg:items-center mb-6 space-y-4 lg:space-y-0 p-4 ${
      darkMode ? "bg-gray-800 text-white" : "bg-indigo-900 text-white"
    }`}
    style={{ borderRadius: 0 }} // Ensures no rounded corners
  >
    <h1 className="text-3xl font-bold">Admin Dashboard</h1>
    <div className="flex items-center space-x-4">
      <div className="relative">
        <input
          type="text"
          placeholder="Search here.."
          className="pl-4 pr-10 py-2 border rounded-lg w-full text-gray-700"
        />
        <FiSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
      </div>
      <FiBell className="text-white text-2xl" />
      <button onClick={toggleDarkMode} className="text-2xl text-white">
        {darkMode ? <FiSun /> : <FiMoon />}
      </button>
      <div className="relative">
        <img
          src={AdminImg}
          alt="Profile"
          className="w-12 h-12 border-4 border-white rounded-full"
        />
        <span className="absolute bottom-0 right-0 w-4 h-4 bg-green-500 border-2 border-white rounded-full"></span>
      </div>
    </div>
  </div>
);

TopBar.propTypes = {
  darkMode: PropTypes.bool,
  toggleDarkMode: PropTypes.func.isRequired,
};

export default TopBar;
