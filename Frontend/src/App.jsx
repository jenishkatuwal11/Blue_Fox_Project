// src/App.js
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landingpage from "./pages/HomePage/Landingpage";
import FindRoom from "./pages/FindRoom/FindRoom";
import FindRoommates from "./pages/FindRoommates/FindRoommates";
import AboutUs from "./pages/AboutUs/AboutUs";
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

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/FindRoom" element={<FindRoom />} />
        <Route path="/FindRoommates" element={<FindRoommates />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />

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
