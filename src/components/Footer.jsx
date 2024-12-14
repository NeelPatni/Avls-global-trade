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
                <a href="#" className="hover:underline">
                  Home
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:underline">
                  About Us
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:underline">
                  Our Products
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:underline">
                  Contact Us
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:underline">
                  Current Jobs
                </a>
              </li>
            </ul>
          </div>

          {/* Our Products Section */}
          <div>
            <h2 className="text-lg font-bold mb-4">Our Products</h2>
            <ul>
              <li className="mb-2">
                <a href="#" className="hover:underline">
                  Powder Spices
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:underline">
                  Blended Spices
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:underline">
                  Whole Spices
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details Section */}
          <div>
            <h2 className="text-lg font-bold mb-4">Aroma International</h2>
            <p className="mb-2 flex items-center hover:cursor-pointer hover:underline hover:text-blue-600">
              <MdLocationOn className="mr-2 text-orange-500" size={24}/>
              GF-8, Akshar Plaza, Govindpura Jakatnaka, Padra Vadodara, India - 391440
            </p>
            <p className="mb-2 flex items-center hover:cursor-pointer hover:underline hover:text-blue-600">
              <FaPhoneAlt className="mr-2 text-green-500" size={24}/>
              +91 82380 82910
            </p>
            <p className="mb-2 flex items-center hover:cursor-pointer hover:underline hover:text-blue-600">
              <MdOutlineMail className="mr-2 text-blue-500" size={24}/>
              info@aroma-international.co.in
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
        <div className="mt-8 text-center text-sm">
          <p>
            All Rights Reserved. <span className="font-bold">Aroma International</span>
          </p>
          <p>
            Managed By <a href="#" className="hover:cursor-pointer hover:underline hover:text-blue-600">TaniyaWebfix</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
