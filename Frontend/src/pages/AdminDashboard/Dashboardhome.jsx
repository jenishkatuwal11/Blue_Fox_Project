// src/pages/AdminDashboard.js
import { useState, useMemo } from "react";
import { FiSearch, FiBell, FiLogOut } from "react-icons/fi";
import { HiOutlinePlus } from "react-icons/hi";
import { FaUser, FaBookmark, FaEye, FaHeart } from "react-icons/fa";
import { Bar } from "react-chartjs-2";
import "chart.js/auto";

const AdminDashboard = () => {
  const [sortBy, setSortBy] = useState("Weekly");

  // Memoized bar chart data to prevent re-renders
  const barData = useMemo(
    () => ({
      labels: ["Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri"],
      datasets: [
        {
          label: "Total View",
          data: [18000, 12000, 4000, 16000, 8000, 2000, 14000],
          backgroundColor: "#f97316",
          borderColor: "#f97316",
          borderWidth: 2,
        },
      ],
    }),
    []
  );

  const chartOptions = {
    maintainAspectRatio: true,
    plugins: {
      legend: {
        display: true,
        position: "top",
        labels: {
          color: "#333",
        },
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 4000,
        },
      },
    },
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-gray-100">
      {/* Sidebar */}
      <aside className="w-full lg:w-64 bg-indigo-900 text-white p-5 sticky top-0 h-auto lg:h-screen flex-shrink-0">
        <div className="flex items-center space-x-2 mb-10">
          <span className="text-2xl font-bold">Dash UI</span>
        </div>
        <nav className="space-y-2">
          <a href="#" className="block text-lg font-semibold text-gray-300">
            Dashboard
          </a>
          <a href="#" className="block text-lg font-semibold text-gray-300">
            Message
          </a>
        </nav>
        <div className="mt-10 space-y-2">
          <p className="font-semibold text-gray-400">PROFILE</p>
          <a href="#" className="block text-lg font-semibold text-gray-300">
            Profile
          </a>
          <a href="#" className="block text-lg font-semibold text-gray-300">
            Account Settings
          </a>
          <a href="#" className="block text-lg font-semibold text-gray-300">
            Membership
          </a>
        </div>
        <div className="mt-10 space-y-2">
          <p className="font-semibold text-gray-400">LISTING</p>
          <a href="#" className="block text-lg font-semibold text-gray-300">
            My Properties
          </a>
          <a href="#" className="block text-lg font-semibold text-gray-300">
            Add New Property
          </a>
          <a href="#" className="block text-lg font-semibold text-gray-300">
            Favourites
          </a>
          <a href="#" className="block text-lg font-semibold text-gray-300">
            Saved Search
          </a>
          <a href="#" className="block text-lg font-semibold text-gray-300">
            Reviews
          </a>
        </div>
        <div className="mt-10">
          <p className="font-semibold text-gray-400">82% Profile Complete</p>
          <div className="w-full bg-gray-600 rounded-full h-2 mt-2">
            <div
              className="bg-indigo-400 h-2 rounded-full"
              style={{ width: "82%" }}
            ></div>
          </div>
        </div>
        <button className="flex items-center mt-10 text-lg font-semibold text-red-300">
          <FiLogOut className="mr-2" /> Logout
        </button>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        {/* Top Bar */}
        <div className="flex flex-col lg:flex-row lg:justify-between items-start lg:items-center mb-6 space-y-4 lg:space-y-0 bg-indigo-900 p-4 rounded-lg text-white">
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search here.."
                className="pl-4 pr-10 py-2 border rounded-lg w-full text-gray-700"
              />
              <FiSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
            <FiBell className="text-white" />
            <button className="flex items-center px-4 py-2 bg-indigo-700 text-white rounded-lg">
              <HiOutlinePlus className="mr-2" /> Create New Project
            </button>
            <img
              src="https://via.placeholder.com/40"
              alt="Profile"
              className="w-10 h-10 rounded-full"
            />
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <div className="bg-white p-4 rounded-lg flex items-center space-x-4">
            <FaUser className="text-indigo-900 text-3xl" />
            <div>
              <p className="text-sm text-gray-500">Projects</p>
              <h2 className="text-2xl font-bold">18</h2>
              <p className="text-sm text-gray-400">2 Completed</p>
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg flex items-center space-x-4">
            <FaBookmark className="text-indigo-900 text-3xl" />
            <div>
              <p className="text-sm text-gray-500">Active Task</p>
              <h2 className="text-2xl font-bold">132</h2>
              <p className="text-sm text-gray-400">28 Completed</p>
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg flex items-center space-x-4">
            <FaEye className="text-indigo-900 text-4xl" />
            <div>
              <p className="text-sm text-gray-500">Teams</p>
              <h2 className="text-2xl font-bold">12</h2>
              <p className="text-sm text-gray-400">1 Completed</p>
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg flex items-center space-x-4">
            <FaHeart className="text-indigo-900 text-4xl" />
            <div>
              <p className="text-sm text-gray-500">Productivity</p>
              <h2 className="text-2xl font-bold">76%</h2>
              <p className="text-sm text-gray-400">5% Completed</p>
            </div>
          </div>
        </div>

        {/* Property View Bar Chart */}
        <div className="flex flex-col lg:flex-row gap-6 mb-6">
          <div className="bg-white p-6 rounded-lg w-full lg:w-2/3">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Property View</h2>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="border border-gray-300 rounded-lg p-2 text-gray-700"
              >
                <option>Weekly</option>
                <option>Monthly</option>
                <option>Yearly</option>
              </select>
            </div>
            <Bar data={barData} options={chartOptions} height={150} />
          </div>

          {/* Recent Messages */}
          <div className="bg-white p-6 rounded-lg w-full lg:w-1/3">
            <h2 className="text-xl font-bold mb-4">Recent Message</h2>
            <ul className="space-y-4">
              <li className="cursor-pointer">
                <div className="flex justify-between">
                  <p className="flex items-center">
                    <span className="w-2.5 h-2.5 bg-red-500 rounded-full mr-2"></span>
                    <span className="font-semibold">Jenny Rio.</span>
                  </p>
                  <span className="text-sm text-gray-500">AUG 22</span>
                </div>
                <p className="font-bold text-gray-700">
                  Work inquiry from google.
                </p>
                <p className="text-gray-500 mb-2">
                  Hello, This is Jenny from google. We’re the largest online
                  platform offer...
                </p>
                <button className="text-sm bg-gray-200 px-3 py-1 rounded-md text-gray-600">
                  details.pdf
                </button>
                <hr className="my-4 border-gray-300" />
              </li>

              <li className="cursor-pointer">
                <div className="flex justify-between">
                  <p className="flex items-center">
                    <span className="w-2.5 h-2.5 bg-blue-500 rounded-full mr-2"></span>
                    <span className="font-semibold">Hasan Islam.</span>
                  </p>
                  <span className="text-sm text-gray-500">MAY 22</span>
                </div>
                <p className="font-bold text-gray-700">
                  Product Designer Opportunities
                </p>
                <p className="text-gray-500 mb-2">
                  Hello, Greeting from Uber. Hope you doing great. I am
                  approcing to you for...
                </p>
                <button className="text-sm bg-gray-200 px-3 py-1 rounded-md text-gray-600">
                  details.pdf
                </button>
                <hr className="my-4 border-gray-300" />
              </li>

              <li className="cursor-pointer">
                <div className="flex justify-between">
                  <p className="flex items-center">
                    <span className="w-2.5 h-2.5 bg-green-500 rounded-full mr-2"></span>
                    <span className="font-semibold">Jakie Chan.</span>
                  </p>
                  <span className="text-sm text-gray-500">JULY 22</span>
                </div>
                <p className="font-bold text-gray-700">
                  Hunting Marketing Specialist
                </p>
                <p className="text-gray-500">
                  Hello, This is Jannat from HuntX. We offer business solutions
                  to our client...
                </p>
                <button className="text-sm bg-gray-200 px-3 py-1 rounded-md text-gray-600">
                  details.pdf
                </button>
              </li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
