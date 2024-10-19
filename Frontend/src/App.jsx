import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landingpage from "./pages/HomePage/Landingpage";
import FindRoom from "./pages/FindRoom/FindRoom";
import FindRoommates from "./pages/FindRoommates/FindRoommates";
import AboutUs from "./pages/AboutUs/AboutUs";
import ContactUs from "./pages/ContactUs/ContactUs";
import LoginForm from "./pages/Login/index"; // Login form component
import RegisterForm from "./pages/Register/index"; // Register form component

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
          <Route path="/login" element={<LoginForm />} />{" "}
          {/* Route for LoginForm */}
          <Route path="/register" element={<RegisterForm />} />{" "}
          {/* New route for RegisterForm */}
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
