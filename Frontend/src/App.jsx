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
          {/* Additional nested routes can be added here */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
