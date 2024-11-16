import { useRef, useState } from "react";
import PropTypes from "prop-types";
import { FiEye, FiEyeOff } from "react-icons/fi";
import AdminImg from "../../assets/Agent1.png";

const AccountSettings = ({ darkMode }) => {
  const fileInputRef = useRef(null);

  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleUploadClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      console.log("Selected file:", file.name);
    }
  };

  return (
    <div
      className={`max-w-4xl mx-auto p-8 rounded-lg shadow-md mt-6 ${
        darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"
      }`}
    >
      <h2 className="text-3xl font-bold mb-6">Account Settings</h2>

      {/* Profile Photo Section */}
      <div className="flex items-center space-x-4 mb-6">
        <img
          src={AdminImg}
          alt="Profile"
          className="w-24 h-24 border-4 border-blue-500 rounded-full"
        />
        <div>
          <button
            onClick={handleUploadClick}
            className={`border px-4 py-2 rounded-md hover:bg-opacity-75 ${
              darkMode
                ? "border-orange-400 text-orange-400 hover:bg-orange-600"
                : "border-orange-500 text-orange-500 hover:bg-orange-50"
            }`}
          >
            Upload new photo
          </button>
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileChange}
            style={{ display: "none" }}
            accept="image/*"
          />
        </div>
      </div>

      {/* Edit & Update Section */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-4">Edit & Update</h3>
        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label
                className={`block text-sm font-medium ${
                  darkMode ? "text-gray-300" : ""
                }`}
              >
                First Name
              </label>
              <input
                type="text"
                placeholder="Admin"
                className={`w-full mt-1 px-3 py-2 border rounded-md ${
                  darkMode
                    ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                    : "bg-white border-gray-300 text-gray-900"
                }`}
              />
            </div>
            <div>
              <label
                className={`block text-sm font-medium ${
                  darkMode ? "text-gray-300" : ""
                }`}
              >
                Last Name
              </label>
              <input
                type="text"
                placeholder="Admin"
                className={`w-full mt-1 px-3 py-2 border rounded-md ${
                  darkMode
                    ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                    : "bg-white border-gray-300 text-gray-900"
                }`}
              />
            </div>
          </div>

          <div>
            <label
              className={`block text-sm font-medium ${
                darkMode ? "text-gray-300" : ""
              }`}
            >
              Email
            </label>
            <input
              type="email"
              placeholder="admin365@gmail.com"
              className={`w-full mt-1 px-3 py-2 border rounded-md ${
                darkMode
                  ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                  : "bg-white border-gray-300 text-gray-900"
              }`}
            />
          </div>
          <div>
            <label
              className={`block text-sm font-medium ${
                darkMode ? "text-gray-300" : ""
              }`}
            >
              Phone Number
            </label>
            <input
              type="tel"
              placeholder="+977 981 889 XXXX"
              className={`w-full mt-1 px-3 py-2 border rounded-md ${
                darkMode
                  ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                  : "bg-white border-gray-300 text-gray-900"
              }`}
            />
          </div>
          <div>
            <label
              className={`block text-sm font-medium ${
                darkMode ? "text-gray-300" : ""
              }`}
            >
              Address
            </label>
            <input
              type="text"
              placeholder="Kathmandu, Nepal"
              className={`w-full mt-1 px-3 py-2 border rounded-md ${
                darkMode
                  ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                  : "bg-white border-gray-300 text-gray-900"
              }`}
            />
          </div>
          <div>
            <label
              className={`block text-sm font-medium ${
                darkMode ? "text-gray-300" : ""
              }`}
            >
              About
            </label>
            <textarea
              placeholder="Brief description about yourself."
              className={`w-full mt-1 px-3 py-2 border rounded-md ${
                darkMode
                  ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                  : "bg-white border-gray-300 text-gray-900"
              }`}
              rows="4"
            ></textarea>
          </div>
        </form>
      </div>

      {/* Password Update Section */}
      <div>
        <h3 className="text-xl font-semibold mb-4">Update Password</h3>
        <form className="space-y-6">
          <div className="relative">
            <label
              className={`block text-sm font-medium ${
                darkMode ? "text-gray-300" : ""
              }`}
            >
              Current Password
            </label>
            <input
              type={showCurrentPassword ? "text" : "password"}
              placeholder="Current Password"
              className={`w-full mt-1 px-3 py-2 border rounded-md ${
                darkMode
                  ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                  : "bg-white border-gray-300 text-gray-900"
              }`}
            />
            <span
              className="absolute right-3 top-10 cursor-pointer"
              onClick={() => setShowCurrentPassword(!showCurrentPassword)}
            >
              {showCurrentPassword ? <FiEyeOff /> : <FiEye />}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="relative">
              <label
                className={`block text-sm font-medium ${
                  darkMode ? "text-gray-300" : ""
                }`}
              >
                New Password
              </label>
              <input
                type={showNewPassword ? "text" : "password"}
                placeholder="New Password"
                className={`w-full mt-1 px-3 py-2 border rounded-md ${
                  darkMode
                    ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                    : "bg-white border-gray-300 text-gray-900"
                }`}
              />
              <span
                className="absolute right-3 top-10 cursor-pointer"
                onClick={() => setShowNewPassword(!showNewPassword)}
              >
                {showNewPassword ? <FiEyeOff /> : <FiEye />}
              </span>
            </div>
            <div className="relative">
              <label
                className={`block text-sm font-medium ${
                  darkMode ? "text-gray-300" : ""
                }`}
              >
                Confirm Password
              </label>
              <input
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirm Password"
                className={`w-full mt-1 px-3 py-2 border rounded-md ${
                  darkMode
                    ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                    : "bg-white border-gray-300 text-gray-900"
                }`}
              />
              <span
                className="absolute right-3 top-10 cursor-pointer"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? <FiEyeOff /> : <FiEye />}
              </span>
            </div>
          </div>
        </form>
      </div>

      {/* Save and Cancel Buttons */}
      <div className="flex space-x-4 mt-6">
        <button className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600">
          Save
        </button>
        <button
          className={`px-4 py-2 rounded-md ${
            darkMode
              ? "text-gray-300 hover:text-gray-100"
              : "text-gray-600 hover:text-gray-800"
          }`}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

AccountSettings.propTypes = {
  darkMode: PropTypes.bool,
};

export default AccountSettings;
