import React from "react";
import { FaFacebookSquare, FaLinkedin, FaInstagram } from "react-icons/fa";
import { MdOutlineMail, MdLocationOn } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-4 md:px-36">
        {/* Grid for Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* General Links Section */}
          <div>
            <h2 className="text-lg font-bold mb-4">General Links</h2>
            <ul>
              <li className="mb-2">
                <a href="/" className="hover:underline">
                  Home
                </a>
              </li>
              <li className="mb-2">
                <a href="/about" className="hover:underline">
                  About Us
                </a>
              </li>
              <li className="mb-2">
                <a href="/certifications" className="hover:underline">
                  Certifications
                </a>
              </li>
              <li className="mb-2">
                <a href="/contact" className="hover:underline">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Our Products Section */}
          <div>
            <h2 className="text-lg font-bold mb-4">Our Products</h2>
            <ul>
              <li className="mb-2">
                <Link
                  to="/product-detail/jeera"
                  className="hover:underline"
                >
                  Jeera
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="/product-detail/turmeric-powder"
                  className="hover:underline"
                >
                  Turmeric
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="/product-detail/makhana"
                  className="hover:underline"
                >
                  Makhana
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/product-detail/cardamom" className="hover:underline">
                  Cardamom
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/product-detail/guar_gum" className="hover:underline">
                  Guar Gum
                </Link>
              </li>

              <li className="mb-2">
                <Link
                  to="/product-detail/red-chillies"
                  className="hover:underline"
                >
                  Black Pepper
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="/product-detail/rice"
                  className="hover:underline"
                >
                  Rice
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details Section */}
          <div>
            <h2 className="text-lg font-bold mb-4">AVLS Global Trade</h2>
            <p className="mb-2 flex items-center hover:cursor-pointer">
              <MdLocationOn className="mr-2 text-orange-500" size={24} />
              Address:B-33, Rameshwari Society, Near Vinay Society, Ajwa Road, Vadodara-390019.
            </p>
            <p>
              {/* Phone Number */}
              <a
                href="tel:+918200349770"
                className="mb-2 flex items-center hover:cursor-pointer"
              >
                <FaPhoneAlt className="mr-2 text-blue-500" size={24} />
                +91 82003 49770
              </a>

              {/* Email */}
              <a
                href="mailto:info@avlsglobaltrade.com"
                className="mb-2 flex items-center hover:cursor-pointer"
              >
                <MdOutlineMail className="mr-2 text-blue-500" size={24} />
                info@avlsglobaltrade.com
              </a>
            </p>
            {/* Social Media Links */}
            <div className="flex mt-4">
              <span className="font-bold">Follow Us:</span>
              <Link to="#" className="ml-2 text-blue-600 hover:text-blue-400">
                <FaFacebookSquare size={24} />
              </Link>
              <Link to="#" className="ml-2 text-blue-500 hover:text-blue-300">
                <FaLinkedin size={24} />
              </Link>
              <Link to="#" className="ml-2 text-pink-500 hover:text-pink-300">
                <FaInstagram size={24} />
              </Link>
            </div>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="flex items-center justify-center gap-2 mt-8 text-center text-sm">
          <p>
            All Rights Reserved{" "}
            <span className="font-bold">AVLS Global Trade </span>Managed By{" "}
            <a
              href="https://www.taniyawebfix.com/"
              target="_blank"
              className="hover:cursor-pointer hover:underline text-blue-600"
            >
              TaniyaWebfix Pvt.Ltd
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
