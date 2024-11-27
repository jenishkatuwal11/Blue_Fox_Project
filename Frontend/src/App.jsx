// src/App.js
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landingpage from "./pages/HomePage/Landingpage";
import FindRoommates from "./pages/FindRoommates/FindRoommates";
import ContactUs from "./pages/ContactUs/ContactUs";
import LoginForm from "./pages/Login/index"; // Login form component
import RegisterForm from "./pages/Register/index"; // Register form component
import AdminDashboard from "./pages/AdminDashboard/Dashboardhome";
import Profile from "./pages/AdminDashboard/profile";
import AccountSettings from "./pages/AdminDashboard/accountSetting";
import ActiveUsers from "./pages/AdminDashboard/UsersList";
import AddUserForm from "./pages/AdminDashboard/AddUserForm";
import AddProperty from "./pages/AdminDashboard/addProperty";
import Review from "./pages/AdminDashboard/Reviews";
import AdminLogin from "./pages/AdminLogin/adminLogin"; // Admin Login Form
import Rent from "./pages/RentSaleDetails/Rent";
import PostPropertyDetail from "./pages/HomePage/Details/PostPropertyDetail";
import Buy from "./pages/RentSaleDetails/Buy";
import ServiceDetails from "./pages/RentSaleDetails/services";
import BuyProperties from "./pages/HomePage/Details/BuyProperties";
import FeatureProperties from "./pages/RentSaleDetails/FetureProperties";
import Project from "./pages/Project/Project ";
import ProjectDetail from "./pages/Project/ProjectDetails";
import RoomDetails from "./pages/RentSaleDetails/RoomDetails";
import RoommateDetail from "./pages/RentSaleDetails/RoommateDetail";
import Roommates from "./pages/HomePage/Details/Roommates";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/post-property-detail" element={<PostPropertyDetail />} />
        <Route path="/find-roommates" element={<FindRoommates />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/Rent" element={<Rent />} />
        <Route path="/Buy" element={<Buy />} />
        <Route path="/services/:type" element={<ServiceDetails />} />
        <Route path="/project-details" element={<Project />} />
        <Route path="/projects/:city/:id" element={<ProjectDetail />} />
        {/* Admin Login Route */}
        <Route path="/roommates" element={<Roommates />} />
        <Route path="/roommatedetail/:id" element={<RoommateDetail />} />
        <Route path="/roomdetails/:id" element={<RoomDetails />} />
        <Route path="/project" element={<Project />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/feature-proper
        ties" element={<FeatureProperties />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/properties/:type" element={<BuyProperties />} />
        <Route path="/Buy" element={<buy />} /> {/* Dynamic route */}
        {/* Admin Routes with nested structure */}
        <Route path="/dashboard/*" element={<AdminDashboard />}>
          <Route path="profile" element={<Profile />} />
          <Route path="account-settings" element={<AccountSettings />} />
          <Route path="active-users" element={<ActiveUsers />} />
          <Route path="add-user" element={<AddUserForm />} />
          <Route path="add-property" element={<AddProperty />} />
          <Route path="reviews" element={<Review />} />
          {/* Additional nested routes can be added here */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
