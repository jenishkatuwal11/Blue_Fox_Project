import PropTypes from "prop-types";
import { useRef } from "react";

const AddProperty = ({ darkMode }) => {
  const fileInputRef = useRef(null);

  const handleUploadClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const files = event.target.files;
    if (files.length > 0) {
      console.log(
        "Selected files:",
        Array.from(files).map((file) => file.name)
      );
    }
  };

  const provinces = [
    "Province No. 1",
    "Province No. 2",
    "Province No. 3",
    "Gandaki Pradesh",
    "Province No. 5",
    "Karnali Pradesh",
    "Sudurpashchim Pradesh",
  ];

  const cities = [
    "Kathmandu",
    "Bhaktapur",
    "Lalitpur",
    "Pokhara",
    "Chitwan",
    "Butwal",
    "Biratnagar",
    "Janakpur",
    "Birgunj",
    "Dhangadi",
    "Nepalgunj",
    "Palpa",
    "Illam",
    "Dharan",
    "Dhankuta",
    "Namche Bazaar",
    "Mahendranagar",
    "Besisahar",
  ];

  const amenities = [
    "A/C & Heating",
    "Garages",
    "Swimming Pool",
    "Parking",
    "Lake View",
    "Garden",
    "Disabled Access",
    "Pet Friendly",
    "Ceiling Height",
    "Outdoor Shower",
    "Refrigerator",
    "Fireplace",
    "Wifi",
    "TV Cable",
    "Barbeque",
    "Laundry",
    "Dryer",
    "Lawn",
    "Elevator",
  ];

  return (
    <div
      className={`max-w-4xl mx-auto p-8 rounded-lg shadow-md mt-6 ${
        darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"
      }`}
    >
      <h2 className="text-3xl font-bold mb-6">Add New Property</h2>

      {/* Overview Section */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-4">Overview</h3>
        <form className="space-y-6">
          <div>
            <label
              className={`block text-sm font-medium ${
                darkMode ? "text-gray-300" : ""
              }`}
            >
              Property Title<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="Your Property Name"
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
              Description<span className="text-red-500">*</span>
            </label>
            <textarea
              placeholder="Write about property..."
              rows="4"
              className={`w-full mt-1 px-3 py-2 border rounded-md ${
                darkMode
                  ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                  : "bg-white border-gray-300 text-gray-900"
              }`}
            ></textarea>
          </div>
          {/* New Section: Category, Listed In, Price, Yearly Tax Rate */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label
                className={`block text-sm font-medium ${
                  darkMode ? "text-gray-300" : ""
                }`}
              >
                Category<span className="text-red-500">*</span>
              </label>
              <select
                className={`w-full mt-1 px-3 py-2 border rounded-md ${
                  darkMode
                    ? "bg-gray-700 border-gray-600 text-white"
                    : "bg-white border-gray-300 text-gray-900"
                }`}
              >
                <option value="Apartments">Apartments</option>
                <option value="House">House</option>
                <option value="Villa">Villa</option>
                <option value="Commercial">Commercial</option>
                <option value="Land">Land</option>
              </select>
            </div>
            <div>
              <label
                className={`block text-sm font-medium ${
                  darkMode ? "text-gray-300" : ""
                }`}
              >
                Listed in<span className="text-red-500">*</span>
              </label>
              <select
                className={`w-full mt-1 px-3 py-2 border rounded-md ${
                  darkMode
                    ? "bg-gray-700 border-gray-600 text-white"
                    : "bg-white border-gray-300 text-gray-900"
                }`}
              >
                <option value="Buy">Buy</option>
                <option value="Sell">Sell</option>
                <option value="Rent">Rent</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label
                className={`block text-sm font-medium ${
                  darkMode ? "text-gray-300" : ""
                }`}
              >
                Price<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Your Price"
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
                Yearly Tax Rate<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Tax Rate"
                className={`w-full mt-1 px-3 py-2 border rounded-md ${
                  darkMode
                    ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                    : "bg-white border-gray-300 text-gray-900"
                }`}
              />
            </div>
          </div>
        </form>
      </div>

      {/* Listing Details Section */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-4">Listing Details</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label
              className={`block text-sm font-medium ${
                darkMode ? "text-gray-300" : ""
              }`}
            >
              Size in ft<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="Ex: 3,210 sqft"
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
              Bedrooms<span className="text-red-500">*</span>
            </label>
            <select
              className={`w-full mt-1 px-3 py-2 border rounded-md ${
                darkMode
                  ? "bg-gray-700 border-gray-600 text-white"
                  : "bg-white border-gray-300 text-gray-900"
              }`}
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5+">5+</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label
              className={`block text-sm font-medium ${
                darkMode ? "text-gray-300" : ""
              }`}
            >
              Bathrooms<span className="text-red-500">*</span>
            </label>
            <select
              className={`w-full mt-1 px-3 py-2 border rounded-md ${
                darkMode
                  ? "bg-gray-700 border-gray-600 text-white"
                  : "bg-white border-gray-300 text-gray-900"
              }`}
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5+">5+</option>
            </select>
          </div>
          <div>
            <label
              className={`block text-sm font-medium ${
                darkMode ? "text-gray-300" : ""
              }`}
            >
              Kitchens<span className="text-red-500">*</span>
            </label>
            <select
              className={`w-full mt-1 px-3 py-2 border rounded-md ${
                darkMode
                  ? "bg-gray-700 border-gray-600 text-white"
                  : "bg-white border-gray-300 text-gray-900"
              }`}
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5+">5+</option>
            </select>
          </div>
        </div>
      </div>

      {/* Address & Location Section */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-4">Address & Location</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div>
            <label
              className={`block text-sm font-medium ${
                darkMode ? "text-gray-300" : ""
              }`}
            >
              Address<span className="text-red-500">*</span>
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
              City<span className="text-red-500">*</span>
            </label>
            <select
              className={`w-full mt-1 px-3 py-2 border rounded-md ${
                darkMode
                  ? "bg-gray-700 border-gray-600 text-white"
                  : "bg-white border-gray-300 text-gray-900"
              }`}
            >
              {cities.map((city, index) => (
                <option key={index} value={city}>
                  {city}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label
              className={`block text-sm font-medium ${
                darkMode ? "text-gray-300" : ""
              }`}
            >
              Province<span className="text-red-500">*</span>
            </label>
            <select
              className={`w-full mt-1 px-3 py-2 border rounded-md ${
                darkMode
                  ? "bg-gray-700 border-gray-600 text-white"
                  : "bg-white border-gray-300 text-gray-900"
              }`}
            >
              {provinces.map((province, index) => (
                <option key={index} value={province}>
                  {province}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Select Amenities Section */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-4">Select Amenities</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {amenities.map((amenity, index) => (
            <div key={index} className="flex items-center">
              <input
                type="checkbox"
                id={`amenity-${index}`}
                name={amenity}
                className={`w-5 h-5 ${
                  darkMode ? "text-orange-500 bg-gray-700 border-gray-600" : ""
                }`}
              />
              <label
                htmlFor={`amenity-${index}`}
                className={`ml-2 ${
                  darkMode ? "text-gray-300" : "text-gray-800"
                }`}
              >
                {amenity}
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* Upload Property Images Section */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-4">Upload Property Images</h3>
        <div
          className={`border-dashed border-2 rounded-md p-6 flex flex-col items-center justify-center cursor-pointer ${
            darkMode
              ? "border-gray-600 text-gray-300"
              : "border-gray-400 text-gray-600"
          }`}
          onClick={handleUploadClick}
        >
          <p className="text-lg mb-2">
            Drag & Drop images here or{" "}
            <span
              className={`text-blue-500 underline ${
                darkMode ? "hover:text-blue-400" : "hover:text-blue-600"
              }`}
            >
              click to upload
            </span>
          </p>
          <p className="text-sm">
            Supported formats: JPG, PNG. Maximum file size: 10MB.
          </p>
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileChange}
            style={{ display: "none" }}
            accept="image/*"
            multiple
          />
        </div>
      </div>

      {/* Submit and Cancel Buttons */}
      <div className="flex justify-end space-x-4">
        <button className="bg-orange-500 text-white px-6 py-2 rounded-md hover:bg-orange-600">
          Submit Property
        </button>
        <button
          type="button"
          className={`px-6 py-2 rounded-md ${
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

AddProperty.propTypes = {
  darkMode: PropTypes.bool,
};

export default AddProperty;
