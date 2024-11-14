// src/pages/AdminDashboard/AdminDashboard.js
import { useState, useMemo } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { FaUser, FaBookmark, FaEye, FaHeart } from "react-icons/fa";
import Sidebar from "./sidenav";
import TopBar from "./TopBar";
import { Outlet, useLocation } from "react-router-dom";

// Register necessary components in Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const AdminDashboard = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [sortBy, setSortBy] = useState("Weekly");
  const location = useLocation(); // Get current location

  const toggleDarkMode = () => setDarkMode(!darkMode);

  // Bar chart data based on sortBy value
  const barData = useMemo(() => {
    let data;
    switch (sortBy) {
      case "Monthly":
        data = [60000, 45000, 30000, 70000, 50000, 25000, 40000];
        break;
      case "Yearly":
        data = [200000, 150000, 180000, 220000, 170000, 140000, 210000];
        break;
      default: // Weekly
        data = [18000, 12000, 4000, 16000, 8000, 2000, 14000];
    }

    return {
      labels: ["Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri"],
      datasets: [
        {
          label: "Total View",
          data: data,
          backgroundColor: "#f97316",
          borderColor: "#f97316",
          borderWidth: 2,
        },
      ],
    };
  }, [sortBy]);

  const chartOptions = {
    maintainAspectRatio: true,
    plugins: {
      legend: {
        display: true,
        position: "top",
        labels: {
          color: darkMode ? "#fff" : "#333",
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: { stepSize: 40000, color: darkMode ? "#fff" : "#333" },
      },
    },
  };

  return (
    <div
      className={`${
        darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"
      } min-h-screen flex`}
    >
      <Sidebar darkMode={darkMode} />
      <main className="flex-1">
        <TopBar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

        {/* Only show Dashboard content if on the main /dashboard route */}
        {location.pathname === "/dashboard" && (
          <>
            {/* Stats Cards */}

            <div className="grid grid-cols-2 p-8 pt-4 md:grid-cols-4 gap-4 mb-6">
              <div
                className={`${
                  darkMode ? "bg-gray-800 text-white" : "bg-white text-gray-900"
                } p-4 rounded-lg flex items-center space-x-4`}
              >
                <FaUser className="text-indigo-900 text-3xl" />
                <div>
                  <p className="text-sm">Projects</p>
                  <h2 className="text-2xl font-bold">18</h2>
                  <p className="text-sm text-gray-400">2 Completed</p>
                </div>
              </div>
              <div
                className={`${
                  darkMode ? "bg-gray-800 text-white" : "bg-white text-gray-900"
                } p-4 rounded-lg flex items-center space-x-4`}
              >
                <FaBookmark className="text-indigo-900 text-3xl" />
                <div>
                  <p className="text-sm">Active Task</p>
                  <h2 className="text-2xl font-bold">132</h2>
                  <p className="text-sm text-gray-400">28 Completed</p>
                </div>
              </div>
              <div
                className={`${
                  darkMode ? "bg-gray-800 text-white" : "bg-white text-gray-900"
                } p-4 rounded-lg flex items-center space-x-4`}
              >
                <FaEye className="text-indigo-900 text-4xl" />
                <div>
                  <p className="text-sm">Teams</p>
                  <h2 className="text-2xl font-bold">12</h2>
                  <p className="text-sm text-gray-400">1 Completed</p>
                </div>
              </div>
              <div
                className={`${
                  darkMode ? "bg-gray-800 text-white" : "bg-white text-gray-900"
                } p-4 rounded-lg flex items-center space-x-4`}
              >
                <FaHeart className="text-indigo-900 text-4xl" />
                <div>
                  <p className="text-sm">Productivity</p>
                  <h2 className="text-2xl font-bold">76%</h2>
                  <p className="text-sm text-gray-400">5% Completed</p>
                </div>
              </div>
            </div>

            {/* Property View Bar Chart and Recent Messages */}
            <div className="flex flex-col p-8 pt-4 lg:flex-row gap-6 mb-6">
              <div
                className={`${
                  darkMode ? "bg-gray-800 text-white" : "bg-white"
                } p-6 rounded-lg w-full lg:w-2/3 h-[500px]`}
              >
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
              <div
                className={`${
                  darkMode ? "bg-gray-800 text-white" : "bg-white"
                } p-6 rounded-lg w-full lg:w-1/3`}
              >
                <h2 className="text-xl font-bold mb-4">Recent Messages</h2>
                <ul className="space-y-4">
                  <li className="cursor-pointer">
                    <div className="flex justify-between">
                      <p className="flex items-center">
                        <span className="w-2.5 h-2.5 bg-green-500 rounded-full mr-2"></span>
                        <span className="font-semibold">Jakie Chan.</span>
                      </p>
                      <span className="text-sm text-gray-500">JULY 22</span>
                    </div>
                    <p className="font-bold text-gray-700 dark:text-gray-200">
                      Hunting Marketing Specialist
                    </p>
                    <p className="text-gray-500 dark:text-gray-400">
                      Hello, This is Jannat from HuntX. We offer business
                      solutions to our client...
                    </p>
                    <button className="text-sm bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded-md text-gray-600 dark:text-gray-300">
                      details.pdf
                    </button>
                    <hr className="my-4 border-gray-300 dark:border-gray-600" />
                  </li>

                  {/* Additional Messages */}
                  <li className="cursor-pointer">
                    <div className="flex justify-between">
                      <p className="flex items-center">
                        <span className="w-2.5 h-2.5 bg-purple-500 rounded-full mr-2"></span>
                        <span className="font-semibold">Amelia Brown.</span>
                      </p>
                      <span className="text-sm text-gray-500">SEP 10</span>
                    </div>
                    <p className="font-bold text-gray-700 dark:text-gray-200">
                      Freelance Web Developer Role
                    </p>
                    <p className="text-gray-500 dark:text-gray-400 mb-2">
                      Hi, Amelia here. I wanted to discuss a freelance
                      opportunity for web development...
                    </p>
                    <button className="text-sm bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded-md text-gray-600 dark:text-gray-300">
                      details.pdf
                    </button>
                    <hr className="my-4 border-gray-300 dark:border-gray-600" />
                  </li>

                  <li className="cursor-pointer">
                    <div className="flex justify-between">
                      <p className="flex items-center">
                        <span className="w-2.5 h-2.5 bg-blue-500 rounded-full mr-2"></span>
                        <span className="font-semibold">Jenish Katuwal.</span>
                      </p>
                      <span className="text-sm text-gray-500">OCT 05</span>
                    </div>
                    <p className="font-bold text-gray-700 dark:text-gray-200">
                      Marketing Strategy Collaboration
                    </p>
                    <p className="text-gray-500 dark:text-gray-400 mb-2">
                      Hi there, looking forward to collaborate on marketing
                      strategies. Lets connect...
                    </p>
                    <button className="text-sm bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded-md text-gray-600 dark:text-gray-300">
                      details.pdf
                    </button>
                    <hr className="my-4 border-gray-300 dark:border-gray-600" />
                  </li>
                </ul>
              </div>
            </div>
          </>
        )}

        {/* Render nested routes content like Profile here */}
        <Outlet />
      </main>
    </div>
  );
};

export default AdminDashboard;
