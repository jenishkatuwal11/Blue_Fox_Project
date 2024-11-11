import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landingpage from "./pages/HomePage/Landingpage";
import FindRoom from "./pages/FindRoom/FindRoom";
import FindRoommates from "./pages/FindRoommates/FindRoommates";
import AboutUs from "./pages/AboutUs/AboutUs";
import ContactUs from "./pages/ContactUs/ContactUs";
import LoginForm from "./pages/Login/index"; // Login form component
import RegisterForm from "./pages/Register/index"; // Register form component
import AdminDashboard from "./pages/AdminDashboard/Dashboardhome";

function App() {
  return (
    <BrowserRouter>
      <main>
        <Routes>
          <Route path="/" element={<Landingpage />} />
          <Route path="/FindRoom" element={<FindRoom />} />
          <Route path="/FindRoommates" element={<FindRoommates />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/ContactUs" element={<ContactUs />} />
          {/* Route for LoginForm */}
          <Route path="/login" element={<LoginForm />} />{" "}
          {/* New route for RegisterForm */}
          <Route path="/register" element={<RegisterForm />} />{" "}
          {/* Admin Routes */}
          <Route path="/dashboard" element={<AdminDashboard />} />{" "}
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
