import React, { useState } from "react";
import { MdOutlineMail } from "react-icons/md";
import { FaPhoneVolume } from "react-icons/fa";
import { FaBars, FaTimes } from "react-icons/fa";
import { FaFileDownload } from "react-icons/fa";
import { Link } from "react-router-dom";
import { assets } from "../assets/assets";

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
          {/* Email Address */}
          <a
            href="mailto:info@avlsglobaltrade.com"
            className="flex items-center gap-2 hover:cursor-pointer"
          >
            <MdOutlineMail size={18} color="#4A90E2" />
            {/* Light Blue for email */}
            <span className="text-center sm:text-left">
              info@avlsglobaltrade.com
            </span>
          </a>

          {/* Phone Number */}
          <a
            href="tel:+918200349770"
            className="flex items-center gap-2 hover:cursor-pointer"
          >
            <FaPhoneVolume size={18} color="4A90E2" />
            {/* Green for phone */}
            <span>+91 82003 49770</span>
          </a>
        </div>

        {/* GST Information */}
        <div className="flex flex-col md:flex-row gap-6 text-center sm:text-left">
          <p>
            GST No.<span className="font-semibold"> 24ANIPD5711A1ZR</span>
          </p>
          {/* <h1 className="hidden md:flex items-center gap-2  hover:underline hover:text-yellow-400 cursor-pointer">
            <FaFileDownload size={18} color="#1D4ED8" />{" "}
             Blue for download 
            <a
              href="../assets/Brochure.pdf"
              download="Brochure.pdf"
              className="text-inherit"
            >
              Download Brochure
            </a>
          </h1> */}
        </div>
      </div>

      {/* Main Header */}
      <div className="flex justify-between items-center px-4 md:px-12 py-2 bg-orange-200">
        {/* Logo */}
        <div className="flex items-center space-x-4 ">
          <div>
            <Link to="/">
              <img
                src={assets.Logo}
                alt="AVLS Global Trade Logo"
                className="h-32 w-auto" // Adjust height and width as needed
              />
            </Link>
          </div>
        </div>

        {/* Hamburger Menu Button */}
        <button
          className="md:hidden text-black text-2xl"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Navigation Links */}
        <nav
          className={`fixed top-0 right-0 h-full bg-red-700 text-white z-20 transition-transform duration-300 ease-in-out md:static md:flex md:space-x-6 md:h-auto md:bg-transparent md:translate-x-0 ${isMenuOpen ? "translate-x-0 w-64" : "translate-x-full"
            }`}
        >
          <ul className="flex flex-col items-center justify-center space-y-6 mt-20 md:flex-row md:space-y-0 md:mt-0">
            <li>
              <Link
                to="/"
                className="block px-4 py-2 md:inline-block font-semibold text-white md:text-blue-900  rounded-lg"
                onClick={closeMenu}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="block px-4 py-2 md:inline-block font-semibold text-white md:text-blue-900  rounded-lg"
                onClick={closeMenu}
              >
                About Us
              </Link>
            </li>
            <li
              className="relative block px-4 py-2 md:inline-block font-semibold cursor-pointer text-white md:text-blue-900  rounded-lg"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <Link to="/products">Products</Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="block px-4 py-2 md:inline-block font-semibold text-white md:text-blue-900  rounded-lg "
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
