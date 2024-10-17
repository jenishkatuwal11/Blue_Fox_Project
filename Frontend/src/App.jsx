import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landingpage from './pages/HomePage/Landingpage'; // Landing page component
import FindRoom from './pages/FindRoom/FindRoom'; // FindRoom component

function App() {
  return (
    <BrowserRouter>
      <main>
        <Routes>
          <Route path="/" element={<Landingpage />} /> {/* Route for the Landingpage */}
          <Route path="/FindRoom" element={<FindRoom />} /> {/* Route for the FindRoom page */}
          {/* Add more routes for other pages as needed */}
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
