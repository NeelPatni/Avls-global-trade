import React, { useState } from "react";
import { assets } from "../assets/assets.js";
import { MdOutlineMail } from "react-icons/md";
import { FaPhoneVolume } from "react-icons/fa6";
import { FaBars, FaTimes } from "react-icons/fa";
import { FaFileDownload } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false); // Close the side menu
    setIsDropdownOpen(false); // Close the dropdown menu
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Adds a smooth scrolling effect
    });
  };

  return (
    <header className="sticky top-0 z-50">
      {/* Top Header */}
      <div className="bg-gray-700 text-white flex flex-col sm:flex-row flex-wrap justify-center sm:justify-around items-center p-3 text-sm space-y-2 sm:space-y-0">
        {/* Contact Information */}
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <div className="flex items-center gap-2">
            <MdOutlineMail size={18} color="#4A90E2" />{" "}
            {/* Light Blue for email */}
            <span className="text-center sm:text-left">
              info@aroma-international.co.in
            </span>
          </div>
          <div className="flex items-center gap-2">
            <FaPhoneVolume size={18} color="#34D399" /> {/* Green for phone */}
            <span>+91 82380 82910</span>
          </div>
        </div>

        {/* GST Information */}
        <div className="flex flex-col md:flex-row gap-6 text-center sm:text-left">
          <p>
            GST No.<span className="font-semibold"> 27AADCP3082B1ZQ</span>
          </p>
          <h1 className="hidden md:flex items-center gap-2  hover:underline hover:text-yellow-400 cursor-pointer">
            <FaFileDownload size={18} color="#1D4ED8" />{" "}
            {/* Blue for download */}
            <a
              href="../assets/Brochure.pdf"
              download="Brochure.pdf"
              className="text-inherit"
            >
              Download Brochure
            </a>
          </h1>
        </div>
      </div>

      {/* Main Header */}
      <div className="flex justify-between items-center px-4 md:px-12 py-2 bg-[#184b44]">
        {/* Logo */}
        <div className="flex items-center space-x-4">

          <div>
            <Link to="/">
              <h1 className="text-3xl font-bold text-white">AROMA</h1>
              <p className="text-white">International</p>
            </Link>
          </div>
        </div>

        {/* Hamburger Menu Button */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Navigation Links */}
        <nav
          className={`fixed top-0 right-0 h-full bg-[#184b44] text-white z-20 transition-transform duration-300 ease-in-out md:static md:flex md:space-x-6 md:h-auto md:bg-transparent md:translate-x-0 ${
            isMenuOpen ? "translate-x-0 w-64" : "translate-x-full"
          }`}
        >
          <ul className="flex flex-col items-center justify-center space-y-6 mt-20 md:flex-row md:space-y-0 md:mt-0">
            <li>
              <Link
                to="/"
                className="block px-4 py-2 md:inline-block font-semibold md:hover:bg-white hover:text-black rounded-lg"
                onClick={closeMenu}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="block px-4 py-2 md:inline-block font-semibold md:hover:bg-white hover:text-black rounded-lg"
                onClick={closeMenu}
              >
                About Us
              </Link>
            </li>
            <li
              className="relative block px-4 py-2 md:inline-block font-semibold cursor-pointer md:hover:bg-white hover:text-black rounded-lg"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              <span>
                Our Products <i className="fas fa-caret-down"></i>
              </span>
              {/* Dropdown Menu */}
              {isDropdownOpen && (
                <ul className="absolute left-0 mt-2 bg-white text-black shadow-md font-medium">
                  <li className="px-4 py-2 hover:bg-gray-200">
                    <Link to="/products" onClick={closeMenu}>
                      Fruits & Vegetables
                    </Link>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-200">
                    <Link to="/products" onClick={closeMenu}>
                      Spices
                    </Link>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-200">
                    <Link to="/products" onClick={closeMenu}>
                      Grains & Pulses
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <Link
                to="/certifications"
                className="block px-4 py-2 md:inline-block font-semibold md:hover:bg-white hover:text-black rounded-lg"
                onClick={closeMenu}
              >
                Certifications
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="block px-4 py-2 md:inline-block font-semibold md:hover:bg-white hover:text-black rounded-lg"
                onClick={closeMenu}
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* Overlay for Menu */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-10"
          onClick={closeMenu}
        />
      )}
    </header>
  );
};

export default Header;
