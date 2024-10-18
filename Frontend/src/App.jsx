import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landingpage from './pages/HomePage/Landingpage'; // Landing page component
import FindRoom from './pages/FindRoom/FindRoom'; // FindRoom component
import FindRoommates from './pages/FindRoommates/FindRoommates';
import AboutUs from './pages/AboutUs/AboutUs';
import ContactUs from './pages/ContactUs/ContactUs';

function App() {
  return (
    <BrowserRouter>
      <main>
        <Routes>
          <Route path="/" element={<Landingpage />} /> {/* Route for the Landingpage */}
          <Route path="/FindRoom" element={<FindRoom />} /> {/* Route for the FindRoom page */}
          <Route path="/FindRoommates" element={<FindRoommates />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/ContactUs" element={<ContactUs />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
