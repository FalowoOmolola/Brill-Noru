import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import Components
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

// Import Pages
import Home from './Pages/HomePage';
import Services from './Pages/Services';
import About from './Pages/About';
import Contact from './Pages/Contact';

function App() {
  return (
    <Router>
      {/* We wrap everything in a div with a white background to prevent the "black screen" */}
      <div className="flex flex-col min-h-screen bg-white">
        <Navbar />
        
        {/* main needs a top padding so it's not hidden under the fixed Navbar */}
        <main className="flex grow pt-20"> 
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            {/* Catch-all for typos */}
            <Route path="*" element={<Home />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;