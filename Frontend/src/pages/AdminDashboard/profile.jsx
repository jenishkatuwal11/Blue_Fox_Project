import { useRef } from "react";
import PropTypes from "prop-types";
import AdminImg from "../../assets/Agent1.png";

const Profile = ({ darkMode }) => {
  const fileInputRef = useRef(null);

  const handleUploadClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      console.log("Selected file:", file);
    }
  };

  return (
    <div
      className={`max-w-3xl mx-auto p-6 rounded-lg shadow-md mt-6 ${
        darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"
      }`}
    >
      <h2 className="text-3xl font-bold mb-6">Profile</h2>
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
          <button className="ml-4 text-red-500 hover:underline">Delete</button>
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileChange}
            style={{ display: "none" }}
            accept="image/*"
          />
        </div>
      </div>

      <form className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label
              className={`block text-sm font-medium ${
                darkMode ? "text-gray-300" : ""
              }`}
            >
              Username*
            </label>
            <input
              type="text"
              placeholder="JonyRio"
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
              First Name*
            </label>
            <input
              type="text"
              placeholder="MrJohny"
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
              Last Name*
            </label>
            <input
              type="text"
              placeholder="Riolek"
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
              Email*
            </label>
            <input
              type="email"
              placeholder="companyinc@mail.com"
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
              Phone Number*
            </label>
            <input
              type="text"
              placeholder="+997 984558XXXX"
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
              Address*
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
        </div>
        <div>
          <label
            className={`block text-sm font-medium ${
              darkMode ? "text-gray-300" : ""
            }`}
          >
            About*
          </label>
          <textarea
            placeholder="Brief description for your profile. URLs are hyperlinked."
            className={`w-full mt-1 px-3 py-2 border rounded-md ${
              darkMode
                ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                : "bg-white border-gray-300 text-gray-900"
            }`}
            rows="4"
          ></textarea>
        </div>
        <div className="flex space-x-4 mt-6">
          <button
            type="button" // Change to "button" to avoid form submission
            className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600"
          >
            Save
          </button>
          <button
            type="button" // Change to "button" to avoid form submission
            className={`px-4 py-2 rounded-md ${
              darkMode
                ? "text-gray-300 hover:text-gray-100"
                : "text-gray-600 hover:text-gray-800"
            }`}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

Profile.propTypes = {
  darkMode: PropTypes.bool,
};

export default Profile;
