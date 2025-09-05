// Import React and routing dependencies
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import components

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

/**
 * App Component
 * Main component that handles routing and layout structure
 */
function App() {
  return (
  
      <Router>
        {/* Main layout container with gradient background */}
        <div className="flex flex-col min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
          {/* Navigation bar */}
          <Navbar />

          {/* Hero section */}
          <section className="mb-3 text-center px-4 py-5">
            <h1 className="text-4xl font-bold text-white mb-4">
              BattleBoardCP
            </h1>
            <p className="text-xl text-gray-300">
              Stay updated with the latest coding competitions
            </p>
          </section>

          {/* Main content area with routes */}
          

          {/* Footer */}
          <Footer />
        </div>
      </Router>
  
  );
}

export default App;