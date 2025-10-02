import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Services from "./pages/Services";
import ProductPage from "./pages/ProductPage";
import FloatingDownload from "./components/FloatingDownload";
import FloatingProductBanner from "./components/FloatingProductBanner";


// Wrapper to handle FloatingDownload visibility
function AppWrapper() {
  const location = useLocation();

  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products" element={<ProductPage />} />
      </Routes>

      {/* Show FloatingDownload on all pages except ProductPage */}
      {location.pathname !== "/products" && <FloatingDownload />}

      {/* Show FloatingProductBanner only on homepage */}
      {location.pathname === "/" && <FloatingProductBanner />}

    </div>
  );
}

function App() {
  return (
    <Router>
      <AppWrapper />
    </Router>
  );
}

export default App;
