import { FiLogOut } from "react-icons/fi";
import PropTypes from "prop-types";
import LogoImg from "../../assets/logo.png";

const sidenav = ({ darkMode }) => (
  <aside
    className={`${
      darkMode ? "bg-gray-800" : "bg-indigo-900"
    } w-full lg:w-64 p-5 sticky top-0 h-auto lg:h-screen flex-shrink-0`}
  >
    <div className="flex items-center space-x-2 mb-10">
      <img
        src={LogoImg}
        alt="Logo"
        className="w-12 h-12 border-4 border-white rounded-full"
      />
      <span className="text-white text-2xl font-bold">Room Finder</span>
    </div>
    <nav className="space-y-2">
      <a href="#" className="block text-lg font-semibold text-gray-300">
        Dashboard
      </a>
      <a href="#" className="block text-lg font-semibold text-gray-300">
        Message
      </a>
      <p className="font-semibold text-gray-400 mt-10 pt-5">PROFILE</p>
      <a href="#" className="block text-lg font-semibold text-gray-300">
        Profile
      </a>
      <a href="#" className="block text-lg font-semibold text-gray-300">
        Account Settings
      </a>
      <a href="#" className="block text-lg font-semibold text-gray-300">
        Membership
      </a>
      {/* Add other links as necessary */}
      <div className="mt-10 pt-5 space-y-2">
        <p className="font-semibold text-gray-400">LISTING</p>
        <a href="#" className="block text-lg font-semibold text-gray-300">
          My Properties
        </a>
        <a href="#" className="block text-lg font-semibold text-gray-300">
          Add New Property
        </a>
        <a href="#" className="block text-lg font-semibold text-gray-300">
          Favourites
        </a>
        <a href="#" className="block text-lg font-semibold text-gray-300">
          Saved Search
        </a>
        <a href="#" className="block text-lg font-semibold text-gray-300">
          Reviews
        </a>
      </div>
    </nav>
    <div className="mt-10">
      <p className="font-semibold text-gray-400">82% Profile Complete</p>
      <div className="w-full bg-gray-600 rounded-full h-2 mt-2">
        <div
          className="bg-indigo-400 h-2 rounded-full"
          style={{ width: "82%" }}
        ></div>
      </div>
    </div>
    <button className="flex items-center mt-10 text-lg font-semibold text-red-300">
      <FiLogOut className="mr-2" /> Logout
    </button>
  </aside>
);

sidenav.propTypes = {
  darkMode: PropTypes.bool,
};

export default sidenav;
