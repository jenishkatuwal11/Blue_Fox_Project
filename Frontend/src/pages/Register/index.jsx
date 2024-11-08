import { useState } from "react";
import registerImg from "../../assets/registerImg.png"; // Update this path to your image
import { FaEye, FaEyeSlash } from "react-icons/fa"; // Import icons from react-icons

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted: ", formData);
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center px-4 md:px-0"
      style={{
        backgroundImage: `url(${registerImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Transparent Form Container */}
      <div className="bg-white/10 backdrop-blur-sm p-6 md:p-10 rounded-lg shadow-lg max-w-sm md:max-w-md w-full border border-white/10">
        <h2 className="text-center text-2xl md:text-3xl font-semibold text-white mb-6 md:mb-8 tracking-wide">
          Register
        </h2>
{/* example */}
        <form onSubmit={handleSubmit}>
          {/* Full Name Field */}
          <div className="mb-4 md:mb-6 relative">
            <input
              className="w-full px-4 py-3 rounded-full bg-white/20 border border-gray-300 text-white placeholder-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-300 ease-in-out"
              id="fullName"
              name="fullName"
              type="text"
              placeholder="Full Name"
              value={formData.fullName}
              onChange={handleChange}
            />
          </div>

          {/* Email Field */}
          <div className="mb-4 md:mb-6 relative">
            <input
              className="w-full px-4 py-3 rounded-full bg-white/20 border border-gray-300 text-white placeholder-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-300 ease-in-out"
              id="email"
              name="email"
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          {/* Phone Number Field (without country code) */}
          <div className="mb-4 md:mb-6 relative">
            <input
              className="w-full px-4 py-3 rounded-full bg-white/20 border border-gray-300 text-white placeholder-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-300 ease-in-out"
              id="phone"
              name="phone"
              type="text"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>

          {/* Password Field */}
          <div className="mb-4 md:mb-6 relative">
            <input
              className="w-full px-4 py-3 rounded-full bg-white/20 border border-gray-300 text-white placeholder-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-300 ease-in-out"
              id="password"
              name="password"
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
            />
            <span
              className="absolute inset-y-0 right-4 flex items-center text-gray-300 cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>

          {/* Confirm Password Field */}
          <div className="mb-4 md:mb-6 relative">
            <input
              className="w-full px-4 py-3 rounded-full bg-white/20 border border-gray-300 text-white placeholder-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-300 ease-in-out"
              id="confirmPassword"
              name="confirmPassword"
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
            />
            <span
              className="absolute inset-y-0 right-4 flex items-center text-gray-300 cursor-pointer"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>

          {/* Register Button */}
          <button
            type="submit"
            className="w-full py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-full shadow-md transition duration-300 ease-in-out"
          >
            REGISTER
          </button>

          {/* Link to Login */}
          <p className="mt-4 md:mt-6 text-center text-white">
            Already have an account?{" "}
            <a
              href="/login"
              className="text-black-400 hover:underline hover:text-black-500 transition duration-300"
            >
              LOGIN
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
