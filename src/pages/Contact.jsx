import React from "react";
import { assets } from "../assets/assets.js";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { FiGlobe, FiTwitter, FiInstagram } from "react-icons/fi";

const Contact = () => {
  return (
    <main
      className="relative bg-gradient-to-br from-green-200 to-green-500 min-h-screen p-6 flex items-center justify-center"
      style={{
        backgroundImage: `url(${assets.Contact_Img})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-70 -z-10"></div>

      <div className="w-full max-w-6xl bg-white bg-opacity-90 rounded-lg shadow-2xl p-6 md:p-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Contact Form */}
        <div className="flex flex-col justify-between">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">
              Get in Touch
            </h1>
            <p className="text-gray-700 mb-8">
              We'd love to hear from you. Please fill out the form, and our team
              will get back to you as soon as possible!
            </p>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full border-gray-300 rounded-lg p-3 shadow-sm focus:ring-green-500 focus:border-green-500"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full border-gray-300 rounded-lg p-3 shadow-sm focus:ring-green-500 focus:border-green-500"
                    placeholder="Your Email"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="contact"
                  className="block text-sm font-medium text-gray-700"
                >
                  Contact Number
                </label>
                <input
                  type="tel"
                  id="contact"
                  className="w-full border-gray-300 rounded-lg p-3 shadow-sm focus:ring-green-500 focus:border-green-500"
                  placeholder="Your Contact Number"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  className="w-full border-gray-300 rounded-lg p-3 shadow-sm focus:ring-green-500 focus:border-green-500"
                  placeholder="Write your message"
                  rows="5"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold px-4 py-2 rounded-lg shadow-lg hover:from-green-600 hover:to-green-700 transition-transform transform hover:-translate-y-1"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Contact Details */}
        <div className="flex flex-col justify-center text-center bg-green-50 p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-green-800 mb-4">
            Contact Information
          </h2>
          <p className="text-gray-800 mb-8">
            You can also reach us directly using the details below.
          </p>
          <div className="space-y-4">
            <div className="flex items-center justify-center gap-2">
              <FaPhoneAlt className="text-green-700 text-xl" size={24}/>
              <p className="text-gray-800">+91 82380 82910</p>
            </div>
            <div className="flex items-center justify-center gap-2">
              <FaEnvelope className="text-green-700 text-xl" size={24}/>
              <p className="text-gray-800">info@aroma-international.com</p>
            </div>
            <div className="flex items-center justify-center gap-2">
              <FaMapMarkerAlt className="text-green-700 text-xl" size={24} />
              <p className="text-gray-800 text-wrap">
                GF-8, Akshar Plaza, Govindpura Jakatnaka, Padra Vadodara, India
                - 391440
              </p>
            </div>
          </div>
          <div className="mt-8">
            <h3 className="text-lg font-medium text-green-800">Follow Us</h3>
            <div className="flex justify-center gap-6 mt-4">
              <a href="#" className="text-blue-500 hover:text-blue-600">
                <FiGlobe size={24} />
              </a>
              <a href="#" className="text-blue-400 hover:text-blue-500">
                <FiTwitter size={24} />
              </a>
              <a href="#" className="text-pink-500 hover:text-pink-600">
                <FiInstagram size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contact;
