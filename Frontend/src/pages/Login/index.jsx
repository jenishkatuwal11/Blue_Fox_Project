import { useState } from "react";
import { Link } from "react-router-dom"; // Import Link to enable routing
import { FaEye, FaEyeSlash } from "react-icons/fa"; // Import icons from react-icons
import loginImg from "../../assets/loginImg.png"; // Update this path to your image
import { FaHome } from "react-icons/fa"; // Import home icon

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center px-4 md:px-0"
      style={{ backgroundImage: `url(${loginImg})` }}
    >
      {/* Return to Home Link */}
      <div className="text-xl absolute top-4 left-4">
        <Link
          to="/"
          className="flex items-center text-white hover:text-purple-400 transition duration-300"
        >
          <FaHome className="mr-2" />
          Return Home
        </Link>
      </div>

      {/* Transparent Form Container */}
      <div className="bg-white/5 backdrop-blur-sm p-6 md:p-10 rounded-lg shadow-lg max-w-sm md:max-w-md w-full border border-white/10">
        <h2 className="text-center text-2xl md:text-3xl font-semibold text-white mb-6 md:mb-8 tracking-wide">
          Login
        </h2>

        <form>
          {/* Username or Email Field */}
          <div className="mb-4 md:mb-6 relative">
            <input
              className="w-full px-4 py-3 rounded-full bg-white/10 border border-gray-300 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-300 ease-in-out"
              id="username"
              type="text"
              placeholder="Username or Email"
            />
            <span className="absolute inset-y-0 right-4 flex items-center text-gray-300">
              <i className="fas fa-user"></i>
            </span>
          </div>

          {/* Password Field */}
          <div className="mb-4 md:mb-6 relative">
            <input
              className="w-full px-4 py-3 rounded-full bg-white/10 border border-gray-300 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-300 ease-in-out"
              id="password"
              type={showPassword ? "text" : "password"} // Toggle between password and text
              placeholder="Password"
            />
            <span
              className="absolute inset-y-0 right-4 flex items-center text-gray-300 cursor-pointer"
              onClick={() => setShowPassword(!showPassword)} // Toggle visibility on click
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />} {/* Eye Icon */}
            </span>
          </div>

          {/* Remember me & Forgot Password */}
          <div className="flex items-center justify-between mb-4 md:mb-6 text-sm text-white">
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                className="form-checkbox h-4 w-4 text-purple-500"
              />
              <span className="ml-2">Remember me</span>
            </label>
            <a
              href="#"
              className="hover:text-purple-400 transition duration-300"
            >
              Forgot Password?
            </a>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-full shadow-md transition duration-300 ease-in-out"
          >
            LOGIN
          </button>

          {/* Sign Up Link */}
          <p className="mt-4 md:mt-6 text-center text-white">
            Don’t have an account?{" "}
            <Link
              to="/register" // Link to the Register form
              className="text-purple-400 hover:underline hover:text-purple-500 transition duration-300"
            >
              REGISTER
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
