
import React from 'react';
import { Box } from '@mui/material';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Team from './pages/Team';
import Publications from './pages/Publications';
import Contact from './pages/Contact';
import Research from './pages/Research';
import './App.css';
import Teaching from './pages/Teaching';

const App = () => {
  return (
    <Router>
      <Box>
        {/* Navigation bar */}
        <Navbar />

        {/* Main Content */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/team" element={<Team />} />
          <Route path="/research" element={<Research />} />
          <Route path="/teaching" element={<Teaching />} />
          <Route path="/publications" element={<Publications />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        {/* Footer */}
      </Box>
      <Footer />
    </Router>
  );
};

export default App;