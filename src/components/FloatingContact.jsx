import React, { useState } from "react";
import { FaPhoneAlt } from "react-icons/fa"; // Phone icon
import { MdClose } from "react-icons/md"; // Close icon
import { motion } from "framer-motion"; // Animation library for React

const FloatingContact = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleContactForm = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {/* Floating Button */}
      <motion.button
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
        onClick={toggleContactForm}
        className="bg-green-600 text-white w-12 h-12 md:w-14 md:h-14 rounded-full shadow-lg flex items-center justify-center text-xl md:text-2xl hover:bg-green-700 focus:outline-none focus:ring-4 focus:ring-green-400 transition"
        title="Contact Us"
        animate={{
          scale: [1, 1.1, 1],
          boxShadow: [
            "0px 0px 10px rgba(0, 128, 0, 0.5)",
            "0px 0px 20px rgba(0, 128, 0, 0.7)",
            "0px 0px 10px rgba(0, 128, 0, 0.5)",
          ],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
      >
        <FaPhoneAlt />
      </motion.button>

      {/* Contact Form */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          className="absolute bottom-16 right-0 md:bottom-20 md:right-0 w-[90vw] md:w-80 bg-white rounded-lg shadow-xl p-4 border border-gray-300"
        >
          {/* Header */}
          <div className="flex justify-between items-center">
            <h2 className="text-lg md:text-xl font-bold text-green-700">
              Contact Us
            </h2>
            <button
              onClick={toggleContactForm}
              className="text-gray-500 hover:text-gray-700 focus:outline-none"
            >
              <MdClose size={24} />
            </button>
          </div>

          {/* Form */}
          <form className="mt-4 space-y-3 md:space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full border-gray-300 rounded-lg p-2 shadow-sm focus:ring-green-500 focus:border-green-500"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full border-gray-300 rounded-lg p-2 shadow-sm focus:ring-green-500 focus:border-green-500"
                placeholder="Your email"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium">
                Message
              </label>
              <textarea
                id="message"
                className="w-full border-gray-300 rounded-lg p-2 shadow-sm focus:ring-green-500 focus:border-green-500"
                placeholder="Your message"
                rows="3"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-green-600 text-white font-semibold px-4 py-2 rounded-lg shadow-lg hover:bg-green-700 transition"
            >
              Send Message
            </button>
          </form>

          {/* Footer */}
          <div className="mt-4 text-sm text-gray-600">
            <p>📞 +91 9876543210</p>
            <p>📧 info@aromainternational.com</p>
            <p>📍 Padra, Vadodara, Gujarat, India</p>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default FloatingContact;
