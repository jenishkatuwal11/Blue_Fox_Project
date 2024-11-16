import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { useState } from "react";
import { FaTrashAlt, FaCog } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";

const UsersList = ({ darkMode }) => {
  const [users] = useState([
    {
      fullName: "John Doe",
      email: "john@example.com",
      address: "123 Main St, Springfield",
      phoneNumber: "+123456789",
      status: "Active",
      created: "Jun 18 2018 08:48",
    },
    {
      fullName: "Jenish Katuwal",
      email: "jenish@example.com",
      address: "Kamal Pokhari-10, Kathmandu",
      phoneNumber: "+977123456789",
      status: "Inactive",
      created: "Nov 11 2024 08:48",
    },
  ]);

  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(50); // Default results per page
  const totalUsers = users.length; // Total number of users
  const [filter, setFilter] = useState("All Users"); // Default filter

  const handleSearch = (e) => {
    console.log("Search for:", e.target.value);
    // Add search logic here
  };

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
    console.log("Filter applied:", e.target.value);
    // Add filter logic here
  };

  const renderStatus = (status) => (
    <div className="flex items-center">
      <span
        className={`inline-block w-3 h-3 rounded-full mr-2 ${
          status === "Active" ? "bg-green-500" : "bg-red-500"
        }`}
      ></span>
      {status}
    </div>
  );

  return (
    <div
      className={`max-w-5xl mx-auto p-6 rounded-lg shadow-md mt-6 ${
        darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"
      }`}
    >
      {/* Header Section */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Manage your Users</h2>
        <Link to="/dashboard/add-user">
          <button
            className={`bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600`}
          >
            Add User
          </button>
        </Link>
      </div>

      {/* Total Users Display */}
      <div className="text-center mb-4">
        <p className="text-lg font-semibold">
          Total Users <br /> {totalUsers}
        </p>
      </div>

      {/* Search and Filter Section */}
      <div className="flex justify-between items-center mb-4">
        <div className="relative flex items-center">
          <input
            type="text"
            placeholder="Search user"
            className={`w-64 px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 ${
              darkMode
                ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                : "bg-white border-gray-300 text-gray-900"
            }`}
            onChange={handleSearch}
          />
          <FiSearch
            className={`absolute right-3 text-xl ${
              darkMode ? "text-white" : "text-gray-400"
            }`}
          />
        </div>
        <div className="flex space-x-4 items-center">
          <select
            value={filter}
            onChange={handleFilterChange}
            className={`border px-4 py-2 rounded-md ${
              darkMode
                ? "bg-gray-700 text-white border-gray-600"
                : "bg-white text-gray-900 border-gray-300"
            }`}
          >
            <option value="All Users">All Users</option>
            <option value="New User">New User</option>
            <option value="Old User">Old User</option>
          </select>
          <div className="flex items-center space-x-2">
            <span>Results per page:</span>
            <select
              className={`border px-4 py-2 rounded-md ${
                darkMode
                  ? "bg-gray-700 border-gray-600 text-white"
                  : "bg-white border-gray-300 text-gray-900"
              }`}
              defaultValue={50}
            >
              <option value={10}>10</option>
              <option value={25}>25</option>
              <option value={50}>50</option>
              <option value={100}>100</option>
            </select>
          </div>
        </div>
      </div>

      {/* User Table */}
      <table className="table-auto w-full border-collapse border border-gray-300 shadow-sm rounded-md">
        <thead>
          <tr
            className={`${
              darkMode ? "bg-gray-700 text-white" : "bg-gray-200 text-gray-900"
            }`}
          >
            <th className="px-4 py-2">Full Name</th>
            <th className="px-4 py-2">Email</th>
            <th className="px-4 py-2">Address</th>
            <th className="px-4 py-2">Phone Number</th>
            <th className="px-4 py-2">Status</th>
            <th className="px-4 py-2">Created</th>
            <th className="px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr
              key={index}
              className={`${
                index % 2 === 0
                  ? darkMode
                    ? "bg-gray-800"
                    : "bg-gray-100"
                  : darkMode
                  ? "bg-gray-900"
                  : "bg-white"
              }`}
            >
              <td className="px-4 py-2">{user.fullName}</td>
              <td className="px-4 py-2">{user.email}</td>
              <td className="px-4 py-2">{user.address}</td>
              <td className="px-4 py-2">{user.phoneNumber}</td>
              <td className="px-4 py-2">{renderStatus(user.status)}</td>
              <td className="px-4 py-2">{user.created}</td>
              <td className="px-4 py-2 flex justify-center space-x-2">
                <FaCog className="text-blue-500 cursor-pointer" />
                <FaTrashAlt className="text-red-500 cursor-pointer" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination */}
      <div className="flex justify-between items-center mt-4">
        <div>
          <span>{`Displaying ${(currentPage - 1) * usersPerPage + 1} - ${
            currentPage * usersPerPage > totalUsers
              ? totalUsers
              : currentPage * usersPerPage
          } of ${totalUsers} results`}</span>
        </div>
        <div className="flex space-x-2 items-center">
          {Array.from(
            { length: Math.ceil(totalUsers / usersPerPage) },
            (_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i + 1)}
                className={`px-3 py-1 rounded-md ${
                  currentPage === i + 1
                    ? "bg-blue-500 text-white"
                    : darkMode
                    ? "bg-gray-700 text-white"
                    : "bg-gray-200 text-gray-900"
                }`}
              >
                {i + 1}
              </button>
            )
          )}
        </div>
      </div>
    </div>
  );
};

UsersList.propTypes = {
  darkMode: PropTypes.bool,
};

export default UsersList;
