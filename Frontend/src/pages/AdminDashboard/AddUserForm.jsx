import PropTypes from "prop-types";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const AddUserForm = ({ darkMode }) => {
  const fileInputRef = useRef(null);
  const navigate = useNavigate(); // For navigation
  const [status, setStatus] = useState("Active"); // Default status

  const handleUploadClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      console.log("Selected file:", file.name);
    }
  };

  const handleStatusChange = (event) => {
    setStatus(event.target.value);
  };

  const renderStatus = (status) => {
    return (
      <div className="flex items-center mt-2">
        <span
          className={`inline-block w-3 h-3 rounded-full mr-2 ${
            status === "Active" ? "bg-green-500" : "bg-red-500"
          }`}
        ></span>
        {status}
      </div>
    );
  };

  return (
    <div
      className={`max-w-4xl mx-auto p-8 rounded-lg shadow-md mt-6 ${
        darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"
      }`}
    >
      <h2 className="text-3xl font-bold mb-6">Add New User</h2>

      {/* Profile Photo Section */}
      <div className="flex items-center space-x-4 mb-6">
        <img
          src="https://via.placeholder.com/150"
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
            Upload Photo
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

      {/* User Details Form */}
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
              placeholder="Enter first name"
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
              placeholder="Enter last name"
              className={`w-full mt-1 px-3 py-2 border rounded-md ${
                darkMode
                  ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                  : "bg-white border-gray-300 text-gray-900"
              }`}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
              placeholder="Enter email"
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
              placeholder="Enter phone number"
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
            Password
          </label>
          <input
            type="password"
            placeholder="Enter password"
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
            placeholder="Enter address"
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
            placeholder="Write a short description about the user"
            rows="4"
            className={`w-full mt-1 px-3 py-2 border rounded-md ${
              darkMode
                ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                : "bg-white border-gray-300 text-gray-900"
            }`}
          ></textarea>
        </div>

        <div>
          <label
            className={`block text-sm font-medium ${
              darkMode ? "text-gray-300" : ""
            }`}
          >
            Status
          </label>
          {renderStatus(status)}
          <select
            value={status}
            onChange={handleStatusChange}
            className={`w-full mt-1 px-3 py-2 border rounded-md ${
              darkMode
                ? "bg-gray-700 border-gray-600 text-white"
                : "bg-white border-gray-300 text-gray-900"
            }`}
          >
            <option>Active</option>
            <option>Inactive</option>
          </select>
        </div>
      </form>

      {/* Add and Cancel Buttons */}
      <div className="flex space-x-4 mt-6">
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
          Add
        </button>
        <button
          type="button"
          onClick={() => navigate(-1)}
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

AddUserForm.propTypes = {
  darkMode: PropTypes.bool,
};

export default AddUserForm;
