import PropTypes from "prop-types";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AdminLogin = ({ darkMode }) => {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleLogin = (e) => {
    e.preventDefault();

    // Mock validation
    if (
      credentials.username === "admin" &&
      credentials.password === "admin123"
    ) {
      // Redirect to admin dashboard
      navigate("/admin-dashboard");
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <div
      className={`min-h-screen flex items-center justify-center ${
        darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"
      }`}
    >
      <div
        className={`w-full max-w-sm p-8 rounded-lg shadow-lg ${
          darkMode ? "bg-gray-800" : "bg-white"
        }`}
      >
        {/* Key Icon */}
        <div className="flex justify-center mb-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`w-12 h-12 ${
              darkMode ? "text-teal-400" : "text-teal-500"
            }`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 7a4 4 0 11-8 0 4 4 0 018 0zM9 11a4 4 0 100 8h3m-1-5l2 2-2 2m1-2H9"
            />
          </svg>
        </div>

        {/* Title */}
        <h2 className="text-2xl font-bold text-center mb-6">Admin Panel</h2>

        {/* Login Form */}
        <form onSubmit={handleLogin} className="space-y-4">
          {/* Username */}
          <div>
            <label
              htmlFor="username"
              className={`block text-sm font-medium ${
                darkMode ? "text-gray-300" : "text-gray-600"
              }`}
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={credentials.username}
              onChange={handleInputChange}
              className={`w-full px-4 py-2 mt-1 border-b-2 focus:outline-none ${
                darkMode
                  ? "bg-gray-800 border-teal-400 text-white placeholder-gray-400"
                  : "bg-white border-teal-500 text-gray-900 placeholder-gray-500"
              }`}
              placeholder="Enter your username"
            />
          </div>

          {/* Password */}
          <div>
            <label
              htmlFor="password"
              className={`block text-sm font-medium ${
                darkMode ? "text-gray-300" : "text-gray-600"
              }`}
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={credentials.password}
              onChange={handleInputChange}
              className={`w-full px-4 py-2 mt-1 border-b-2 focus:outline-none ${
                darkMode
                  ? "bg-gray-800 border-teal-400 text-white placeholder-gray-400"
                  : "bg-white border-teal-500 text-gray-900 placeholder-gray-500"
              }`}
              placeholder="Enter your password"
            />
          </div>

          {/* Error Message */}
          {error && <p className="text-red-500 text-sm text-center">{error}</p>}

          {/* Login Button */}
          <button
            type="submit"
            className="w-full py-2 bg-teal-500 text-white rounded-md hover:bg-teal-600 focus:outline-none"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

AdminLogin.propTypes = {
  darkMode: PropTypes.bool,
};

export default AdminLogin;
