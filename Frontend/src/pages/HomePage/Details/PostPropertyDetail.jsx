import React, { useState } from "react";
import {
  FaHandshake,
  FaBars,
  FaTv,
  FaUser,
  FaMicrophone,
  FaDollarSign,
} from "react-icons/fa";

const PostPropertyDetail = () => {
  const [step, setStep] = useState(1);

  const handleContinue = (e) => {
    e.preventDefault();
    if (step < 3) {
      setStep(step + 1);
    }
  };
  

  return (
    <div className="flex flex-col items-center bg-gray-100 min-h-screen py-10">
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-2xl font-bold text-gray-800">
          Sell or Rent Your Property Online in Nepal{" "}
          <span className="text-blue-500">for Free!</span>
        </h1>
        <p className="text-gray-600">
          Post Your Property to Sell, Rent or Lease of Flat, House, Plot online
          in just 3 steps.
        </p>
      </div>

      {/* Progress Bar */}
      <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-3xl mb-8">
        <div className="flex justify-center items-center mb-8">
          <div className="flex items-center space-x-4">
            <div className="flex flex-col items-center">
              <div
                className={`rounded-full ${
                  step >= 1 ? "bg-blue-500" : "bg-gray-300"
                } text-white w-8 h-8 flex items-center justify-center`}
              >
                1
              </div>
              <p
                className={`text-sm mt-2 ${
                  step >= 1 ? "text-gray-800" : "text-gray-600"
                }`}
              >
                Create Account
              </p>
            </div>
            <div
              className={`w-20 border-t-2 ${
                step >= 2 ? "border-blue-500" : "border-gray-300"
              }`}
            ></div>
            <div className="flex flex-col items-center">
              <div
                className={`rounded-full ${
                  step >= 2 ? "bg-blue-500" : "bg-gray-300"
                } text-white w-8 h-8 flex items-center justify-center`}
              >
                2
              </div>
              <p
                className={`text-sm mt-2 ${
                  step >= 2 ? "text-gray-800" : "text-gray-600"
                }`}
              >
                Property Details
              </p>
            </div>
            <div
              className={`w-20 border-t-2 ${
                step >= 3 ? "border-blue-500" : "border-gray-300"
              }`}
            ></div>
            <div className="flex flex-col items-center">
              <div
                className={`rounded-full ${
                  step >= 3 ? "bg-blue-500" : "bg-gray-300"
                } text-white w-8 h-8 flex items-center justify-center`}
              >
                3
              </div>
              <p
                className={`text-sm mt-2 ${
                  step >= 3 ? "text-gray-800" : "text-gray-600"
                }`}
              >
                Completed
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Form Section */}
      <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-3xl">
        {step === 1 && (
          <form>
            <div className="text-center mb-6">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                Create an account now
              </h2>
              <p className="text-lg text-gray-600">
                or already registered?{" "}
                <a href="#" className="text-blue-500">
                  Login Now
                </a>
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email ID
                </label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label
                  htmlFor="mobile"
                  className="block text-sm font-medium text-gray-700"
                >
                  Mobile Number
                </label>
                <div className="flex">
                  <select className="block w-20 border-gray-300 rounded-l-md shadow-sm focus:ring-blue-500 focus:border-blue-500">
                    <option value="+977">NE+977</option>
                  </select>
                  <input
                    type="text"
                    id="mobile"
                    className="flex-1 block w-full border-gray-300 rounded-r-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter mobile number"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="location"
                  className="block text-sm font-medium text-gray-700"
                >
                  Choose your location
                </label>
                <input
                  type="text"
                  id="location"
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter your location"
                />
              </div>
            </div>
            <div className="mt-4">
              <label className="flex items-center text-sm text-gray-600">
                <input
                  type="checkbox"
                  className="mr-2 rounded border-gray-300 text-blue-500 focus:ring-blue-500"
                />
                I agree to all the{" "}
                <a href="#" className="text-blue-500 ml-1">
                  Terms & Conditions.
                </a>
              </label>
            </div>
            <div className="mt-6">
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 rounded-lg"
                onClick={handleContinue}
              >
                CONTINUE
              </button>
            </div>
          </form>
        )}

{step === 2 && (
  <form>
    <div className="text-center mb-6">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800">
        Fill in Property Details
      </h2>
    </div>
    {/* Property Details Section */}
    <div className="mb-4">
      <h3 className="text-xl font-semibold text-gray-800"><u>Property details:</u></h3>
    </div>

    <div className="grid grid-cols-2 gap-6">
      <div>
        <label
          htmlFor="property-type"
          className="block text-sm font-medium text-gray-700"
        >
          Property Type
        </label>
        <select
          id="property-type"
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
        >
          <option value="apartment">Apartment</option>
          <option value="house">House</option>
          <option value="flat">Flat</option>
        </select>
      </div>
      <div>
        <label
          htmlFor="property-name"
          className="block text-sm font-medium text-gray-700"
        >
          Property Name
        </label>
        <input
          type="text"
          id="property-name"
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          placeholder="Enter property name"
        />
      </div>
      <div>
        <label
          htmlFor="address"
          className="block text-sm font-medium text-gray-700"
        >
          Address
        </label>
        <input
          type="text"
          id="address"
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          placeholder="Enter address"
        />
      </div>
      <div>
        <label
          htmlFor="city"
          className="block text-sm font-medium text-gray-700"
        >
          City
        </label>
        <input
          type="text"
          id="city"
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          placeholder="Enter city"
        />
      </div>
    </div>
    {/* Pricing and Availability Section */}
    <div className="mt-8">
      <h3 className="text-xl font-semibold text-gray-800">
      <u>Pricing and Availability:</u>
      </h3>
    </div>
    <div className="grid grid-cols-2 gap-6 mt-4">
      <div>
        <label
          htmlFor="rent-or-sell"
          className="block text-sm font-medium text-gray-700"
        >
          Rent or Sell
        </label>
        <select
          id="rent-or-sell"
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
        >
          <option value="rent">Rent</option>
          <option value="sell">Sell</option>
        </select>
      </div>
      <div>
        <label
          htmlFor="price"
          className="block text-sm font-medium text-gray-700"
        >
          Price 
        </label>
        <input
          type="number"
          id="price"
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          placeholder="Enter price"
        />
      </div>
      <div>
        <label
          htmlFor="price-negotiable"
          className="block text-sm font-medium text-gray-700"
        >
          Price Negotiable
        </label>
        <select
          id="price-negotiable"
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
        >
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
      </div>
      <div>
        <label
          htmlFor="available-from"
          className="block text-sm font-medium text-gray-700"
        >
          Available From
        </label>
        <input
          type="date"
          id="available-from"
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
        />
      </div>
      <div>
        <label
          htmlFor="lease-duration"
          className="block text-sm font-medium text-gray-700"
        >
          Lease Duration (For Renting)
        </label>
        <select
          id="lease-duration"
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
        >
          <option value="month-to-month">Month-to-Month</option>
          <option value="6-months">6 Months</option>
          <option value="1-year">1 Year</option>
        </select>
      </div>
    </div>
    {/* Property Features Section */}
    <div className="mt-8">
      <h3 className="text-xl font-semibold text-gray-800">
      <u>Property Features:</u>
      </h3>
    </div>
    <div className="grid grid-cols-2 gap-6 mt-4">
      <div>
        <label
          htmlFor="num-bedrooms"
          className="block text-sm font-medium text-gray-700"
        >
          Number of Bedrooms
        </label>
        <input
          type="number"
          id="num-bedrooms"
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          placeholder="Enter number of bedrooms"
        />
      </div>
      <div>
        <label
          htmlFor="num-bathrooms"
          className="block text-sm font-medium text-gray-700"
        >
          Number of Bathrooms
        </label>
        <input
          type="number"
          id="num-bathrooms"
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          placeholder="Enter number of bathrooms"
        />
      </div>
      <div>
        <label
          htmlFor="num-kitchen"
          className="block text-sm font-medium text-gray-700"
        >
          Number of Kitchens
        </label>
        <input
          type="number"
          id="num-kitchen"
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          placeholder="Enter number of kitchen"
        />
      </div>
      <div>
        <label
          htmlFor="num-Hall"
          className="block text-sm font-medium text-gray-700"
        >
          Number of Hall
        </label>
        <input
          type="number"
          id="num-Hall"
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          placeholder="Enter number of Hall"
        />
      </div>
      <div>
        <label
          htmlFor="num-living room"
          className="block text-sm font-medium text-gray-700"
        >
          Number of Hall
        </label>
        <input
          type="number"
          id="num-living room"
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          placeholder="Enter number of living room"
        />
      </div>
      <div>
        <label
          htmlFor="furnished-status"
          className="block text-sm font-medium text-gray-700"
        >
          Furnished Status
        </label>
        <select
          id="furnished-status"
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
        >
          <option value="fully-furnished">Fully Furnished</option>
          <option value="semi-furnished">Semi-Furnished</option>
          <option value="unfurnished">Unfurnished</option>
        </select>
      </div>
      <div>
        <label
          htmlFor="property-size"
          className="block text-sm font-medium text-gray-700"
        >
          Property Size (sq. ft.)
        </label>
        <input
          type="number"
          id="property-size"
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          placeholder="Enter property size"
        />
      </div>
      <div>
        <label
          htmlFor="num-balconies"
          className="block text-sm font-medium text-gray-700"
        >
          Number of Balconies
        </label>
        <input
          type="number"
          id="num-balconies"
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          placeholder="Enter number of balconies"
        />
      </div>
      <div>
        <label
          htmlFor="parking-spaces"
          className="block text-sm font-medium text-gray-700"
        >
          Parking Spaces
        </label>
        <input
          type="number"
          id="parking-spaces"
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          placeholder="Enter parking slots"
        />
      </div>
      <div>
        <label
          htmlFor="floor-number"
          className="block text-sm font-medium text-gray-700"
        >
          Floor Number
        </label>
        <input
          type="number"
          id="floor-number"
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          placeholder="Enter floor number"
        />
      </div>
      <div>
        <label
          htmlFor="total-floors"
          className="block text-sm font-medium text-gray-700"
        >
          Total Floors in Building
        </label>
        <input
          type="number"
          id="total-floors"
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          placeholder="Enter total floors"
        />
      </div>
      <div>
        <label
          htmlFor="age-of-property"
          className="block text-sm font-medium text-gray-700"
        >
          Age of Property
        </label>
        <select
          id="age-of-property"
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
        >
          <option value="new">New</option>
          <option value="<5-years">Less than 5 years</option>
          <option value=">5-years">More than 5 years</option>
        </select>
      </div>
      <div>
        <label
          htmlFor="facing-direction"
          className="block text-sm font-medium text-gray-700"
        >
          Facing Direction
        </label>
        <select
          id="facing-direction"
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
        >
          <option value="east">East</option>
          <option value="west">West</option>
          <option value="north">North</option>
          <option value="south">South</option>
        </select>
      </div>
    </div>

     {/* Amenities Section */}
     <div className="mt-8">
      <h3 className="text-xl font-semibold text-gray-800"><u>Amenities:</u></h3>
    </div>
    <div className="mt-4 grid grid-cols-3 gap-4">
      <label className="flex items-center">
        <input
          type="checkbox"
          className="mr-2 rounded border-gray-300 focus:ring-blue-500"
        />
        Gym
      </label>
      <label className="flex items-center">
        <input
          type="checkbox"
          className="mr-2 rounded border-gray-300 focus:ring-blue-500"
        />
        Swimming Pool
      </label>
      <label className="flex items-center">
        <input
          type="checkbox"
          className="mr-2 rounded border-gray-300 focus:ring-blue-500"
        />
        Security/24x7 Guard
      </label>
      <label className="flex items-center">
        <input
          type="checkbox"
          className="mr-2 rounded border-gray-300 focus:ring-blue-500"
        />
        CCTV
      </label>
      <label className="flex items-center">
        <input
          type="checkbox"
          className="mr-2 rounded border-gray-300 focus:ring-blue-500"
        />
        Near School/College
      </label>
      <label className="flex items-center">
        <input
          type="checkbox"
          className="mr-2 rounded border-gray-300 focus:ring-blue-500"
        />
        Near Hospital
      </label>
      <label className="flex items-center">
        <input
          type="checkbox"
          className="mr-2 rounded border-gray-300 focus:ring-blue-500"
        />
        Children’s Play Area
      </label>
      <label className="flex items-center">
        <input
          type="checkbox"
          className="mr-2 rounded border-gray-300 focus:ring-blue-500"
        />
        Power Backup
      </label>
      <label className="flex items-center">
        <input
          type="checkbox"
          className="mr-2 rounded border-gray-300 focus:ring-blue-500"
        />
        Elevator/Lift
      </label>
      <label className="flex items-center">
        <input
          type="checkbox"
          className="mr-2 rounded border-gray-300 focus:ring-blue-500"
        />
        Water Supply
      </label>
    </div>

    {/* Legal Details Section */}
<div className="mt-8">
  <h3 className="text-xl font-semibold text-gray-800"><u>Legal Details:</u></h3>
</div>
<div className="grid grid-cols-2 gap-6 mt-4">
  <div>
    <label
      htmlFor="ownership-type"
      className="block text-sm font-medium text-gray-700"
    >
      Ownership Type
    </label>
    <select
      id="ownership-type"
      className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
    >
      <option value="individual">Individual</option>
      <option value="partnership">Partnership</option>
    </select>
  </div>
  <div>
    <label
      htmlFor="registered-status"
      className="block text-sm font-medium text-gray-700"
    >
      Registered Status
    </label>
    <select
      id="registered-status"
      className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
    >
      <option value="yes">Yes</option>
      <option value="no">No</option>
    </select>
  </div>
  <div>
    <label
      htmlFor="documents-available"
      className="block text-sm font-medium text-gray-700"
    >
      Documents Available
    </label>
    <select
      id="documents-available"
      className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
    >
      <option value="yes">Yes</option>
      <option value="no">No</option>
    </select>
  </div>
  <div>
    <label
      htmlFor="current-loan-status"
      className="block text-sm font-medium text-gray-700"
    >
      Current Loan Status
    </label>
    <select
      id="current-loan-status"
      className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
    >
      <option value="yes">Yes</option>
      <option value="no">No</option>
    </select>
  </div>
</div>
    {/* More Details Section */}
<div className="mt-8">
  <h3 className="text-xl font-semibold text-gray-800"><u>More Details:</u></h3>
</div>
<div className="grid grid-cols-2 gap-6 mt-4">
  <div>
    <label
      htmlFor="security-deposit"
      className="block text-sm font-medium text-gray-700"
    >
      Security Deposit
    </label>
    <input
      type="number"
      id="security-deposit"
      className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
      placeholder="Enter amount"
    />
  </div>
  <div>
    <label
      htmlFor="preferred-tenants"
      className="block text-sm font-medium text-gray-700"
    >
      Preferred Tenants
    </label>
    <select
      id="preferred-tenants"
      className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
    >
      <option value="family">Family</option>
      <option value="bachelors">Bachelors</option>
      <option value="couples">Couples</option>
    </select>
  </div>
  <div>
    <label
      htmlFor="pets-allowed"
      className="block text-sm font-medium text-gray-700"
    >
      Pets Allowed
    </label>
    <select
      id="pets-allowed"
      className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
    >
      <option value="yes">Yes</option>
      <option value="no">No</option>
    </select>
  </div>
  <div>
    <label
      htmlFor="maintenance-charges"
      className="block text-sm font-medium text-gray-700"
    >
      Maintenance Charges (Monthly)
    </label>
    <input
      type="number"
      id="maintenance-charges"
      className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
      placeholder="Enter amount"
    />
  </div>
</div>
    
    {/* Property Description Section */}
<div className="mt-8">
  <h3 className="text-xl font-semibold text-gray-800"><u>Property Description:</u></h3>
</div>
<div className="mt-4">
  <div>
    <label
      htmlFor="description"
      className="block text-sm font-medium text-gray-700"
    >
      Description
    </label>
    <textarea
      id="description"
      rows="4"
      className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
      placeholder="Write a detailed description of the property"
    ></textarea>
  </div>
  <div className="mt-4">
    <label
      htmlFor="photos"
      className="block text-sm font-medium text-gray-700"
    >
      Photos
    </label>
    <input
      type="file"
      id="photos"
      multiple
      className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:border file:border-gray-300 file:text-gray-700 file:rounded-md file:bg-gray-50 file:hover:bg-gray-100"
    />
  </div>
</div>

{/* Contact Information Section */}
<div className="mt-8">
  <h3 className="text-xl font-semibold text-gray-800"><u>Contact Information:</u></h3>
</div>
<div className="grid grid-cols-2 gap-6 mt-4">
  <div>
    <label
      htmlFor="owner-name"
      className="block text-sm font-medium text-gray-700"
    >
      Owner/Agent Name
    </label>
    <input
      type="text"
      id="owner-name"
      className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
      placeholder="Enter name"
    />
  </div>
  <div>
    <label
      htmlFor="contact-number"
      className="block text-sm font-medium text-gray-700"
    >
      Contact Number
    </label>
    <input
      type="tel"
      id="contact-number"
      className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
      placeholder="Enter contact number"
    />
  </div>
  <div>
    <label
      htmlFor="email-address"
      className="block text-sm font-medium text-gray-700"
    >
      Email Address
    </label>
    <input
      type="email"
      id="email-address"
      className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
      placeholder="Enter email address"
    />
  </div>
  <div>
    <label
      htmlFor="preferred-contact-time"
      className="block text-sm font-medium text-gray-700"
    >
      Preferred Contact Time
    </label>
    <select
      id="preferred-contact-time"
      className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
    >
      <option value="morning">Morning</option>
      <option value="afternoon">Afternoon</option>
      <option value="evening">Evening</option>
    </select>
  </div>
  <div>
  <div className="mt-4">
              <label className="flex items-center text-sm text-gray-600">
                <input
                  type="checkbox"
                  className="mr-2 rounded border-gray-300 text-blue-500 focus:ring-blue-500"
                />
                I agree to all the{" "}
                <a href="#" className="text-blue-500 ml-1">
                  Terms & Conditions.
                </a>
              </label>
            </div>  
  </div>
</div>

    {/* Action Button */}
    <div className="mt-6">
      <button
        className="w-full bg-blue-500 text-white py-2 rounded-lg"
        onClick={handleContinue}
      >
        CONTINUE
      </button>
    </div>
  </form>
)}


        {step === 3 && (
          <div className="text-center">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">
              Congratulations!
            </h2>
            <p>Your property has been sent for review.</p>
          </div>
        )}
      </div>

      {/* Benefits Section */}
      <div className="bg-gray-50 w-full py-10 mt-10">
        <h2 className="text-center text-2xl font-bold text-gray-800 mb-8">
          Post Free Property Ads on{" "}
          <span className="text-blue-500">RealEstateNepal</span>
        </h2>
        <div className="grid grid-cols-3 gap-8 px-10">
          <div className="text-center">
            <FaHandshake className="text-blue-500 text-3xl mx-auto mb-4" />
            <h3 className="font-semibold text-gray-800">Generate More Leads</h3>
            <p className="text-sm text-gray-600">
              Turn prospective customers into genuine leads.
            </p>
          </div>
          <div className="text-center">
            <FaBars className="text-blue-500 text-3xl mx-auto mb-4" />
            <h3 className="font-semibold text-gray-800">Manage Dashboard</h3>
            <p className="text-sm text-gray-600">
              Manage properties with our user-friendly panel.
            </p>
          </div>
          <div className="text-center">
            <FaTv className="text-blue-500 text-3xl mx-auto mb-4" />
            <h3 className="font-semibold text-gray-800">Smart Advertisement</h3>
            <p className="text-sm text-gray-600">
              Advertise your property to reach more buyers.
            </p>
          </div>
          <div className="text-center">
            <FaUser className="text-blue-500 text-3xl mx-auto mb-4" />
            <h3 className="font-semibold text-gray-800">
              Great Customer Support
            </h3>
            <p className="text-sm text-gray-600">
              Excellent support to make you more approachable.
            </p>
          </div>
          <div className="text-center">
            <FaMicrophone className="text-blue-500 text-3xl mx-auto mb-4" />
            <h3 className="font-semibold text-gray-800">
              Marketing & Promotion
            </h3>
            <p className="text-sm text-gray-600">
              Promote your properties through our platform.
            </p>
          </div>
          <div className="text-center">
            <FaDollarSign className="text-blue-500 text-3xl mx-auto mb-4" />
            <h3 className="font-semibold text-gray-800">Higher Profits</h3>
            <p className="text-sm text-gray-600">
              No brokerage charges for advertisements.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostPropertyDetail;

