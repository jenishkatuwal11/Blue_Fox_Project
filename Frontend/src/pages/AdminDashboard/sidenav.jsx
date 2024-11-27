import {
  FiLogOut,
  FiHome,
  FiMessageSquare,
  FiSettings,
  FiCreditCard,
  FiPlusSquare,
  FiHeart,
  FiSave,
  FiStar,
} from "react-icons/fi";
import { CgProfile } from "react-icons/cg";
import { FaRegUser } from "react-icons/fa";
import PropTypes from "prop-types";
import { Link, useNavigate } from "react-router-dom";

const Sidenav = ({ darkMode }) => {
  const navigate = useNavigate();

  // Logout function
  const handleLogout = () => {
    // Clear authentication data
    localStorage.removeItem("authToken");
    sessionStorage.removeItem("authToken");

    // Redirect to the admin login page
    navigate("/admin-login");
  };

  return (
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
        {/* Use Link to specify the paths */}
        <Link
          to="/dashboard"
          className="flex items-center text-lg font-semibold text-gray-300 space-x-2"
        >
          <FiHome />
          <span>Dashboard</span>
        </Link>
        <Link
          to="/dashboard/messages"
          className="flex items-center text-lg font-semibold text-gray-300 space-x-2"
        >
          <FiMessageSquare />
          <span>Message</span>
        </Link>
        <p className="font-semibold text-gray-400 mt-10 pt-5">PROFILE</p>
        <Link
          to="/dashboard/profile"
          className="flex items-center text-lg font-semibold text-gray-300 space-x-2"
        >
          <CgProfile />
          <span>Profile</span>
        </Link>
        <Link
          to="/dashboard/account-settings"
          className="flex items-center text-lg font-semibold text-gray-300 space-x-2"
        >
          <FiSettings />
          <span>Account Settings</span>
        </Link>
        <Link
          to="/dashboard/membership"
          className="flex items-center text-lg font-semibold text-gray-300 space-x-2"
        >
          <FiCreditCard />
          <span>Membership</span>
        </Link>

        {/* Add other links as necessary */}
        <div className="mt-10 pt-5 space-y-2">
          <p className="font-semibold text-gray-400">LISTING</p>
          <Link
            to="/dashboard/active-users"
            className="flex items-center text-lg font-semibold text-gray-300 space-x-2"
          >
            <FaRegUser />
            <span>Active Users</span>
          </Link>
          <Link
            to="/dashboard/add-property"
            className="flex items-center text-lg font-semibold text-gray-300 space-x-2"
          >
            <FiPlusSquare />
            <span>Add New Property</span>
          </Link>
          <Link
            to="/dashboard/favourites"
            className="flex items-center text-lg font-semibold text-gray-300 space-x-2"
          >
            <FiHeart />
            <span>Favourites</span>
          </Link>
          <Link
            to="/dashboard/saved-search"
            className="flex items-center text-lg font-semibold text-gray-300 space-x-2"
          >
            <FiSave />
            <span>Saved Search</span>
          </Link>
          <Link
            to="/dashboard/reviews"
            className="flex items-center text-lg font-semibold text-gray-300 space-x-2"
          >
            <FiStar />
            <span>Reviews</span>
          </Link>
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

      {/* Logout Button */}
      <button
        onClick={handleLogout}
        className="flex items-center mt-10 text-lg font-semibold text-red-300 space-x-2 hover:text-red-400"
      >
        <FiLogOut />
        <span>Logout</span>
      </button>
    </aside>
  );
};

Sidenav.propTypes = {
  darkMode: PropTypes.bool,
};

export default Sidenav;
