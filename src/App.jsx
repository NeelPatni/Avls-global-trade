import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import FloatingContact from "./components/FloatingContact";
import ProductDetail from "./pages/ProductDetail";
import ThankYou from "./pages/ThankYou";
import AnimatedCursor from "react-animated-cursor";

const App = () => {
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Check if device is touch-enabled
    const checkTouchDevice = () => {
      setIsTouchDevice(window.matchMedia("(pointer: coarse)").matches);
    };

    checkTouchDevice();
    window.addEventListener("resize", checkTouchDevice);
    return () => window.removeEventListener("resize", checkTouchDevice);
  }, []);

  return (
    <>
      {/* Show cursor only if it's NOT a touch device */}
      {!isTouchDevice && (
        <AnimatedCursor
          innerSize={10}
          outerSize={35}
          innerScale={1}
          outerScale={2}
          outerAlpha={0.3}
          hasBlendMode={true}
          showSystemCursor={false} // Ensure it replaces the default cursor
          innerStyle={{
            backgroundColor: "#fff",
            display: "block",
          }}
          outerStyle={{
            border: "3px solid red",
            display: "block",
          }}
        />
      )}

      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/product-detail/:id" element={<ProductDetail />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/thankyou" element={<ThankYou />} />
        </Routes>
        <Footer />
        <FloatingContact />
      </Router>
    </>
  );
};

export default App;
