import React from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";
import { assets } from "../assets/assets";

const ThankYou = () => {
  return (
    <div
      className="flex flex-col items-center justify-center h-screen bg-cover bg-center text-white text-center px-6 relative"
      style={{ backgroundImage: `url(${assets.ThankYou})` }}
    >
      {/* Google Fonts */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
      <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300..700&family=Raleway:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&display=swap" rel="stylesheet" />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      <motion.h2 
        className="relative z-10 text-xl font-semibold uppercase tracking-widest text-gray-300 drop-shadow-lg flex items-center before:w-32 before:h-1 before:bg-gray-300 before:inline-block before:mr-4 after:w-32 after:h-1 after:bg-gray-300 after:inline-block after:ml-4 mt-8"
        style={{ fontFamily: 'Raleway, sans-serif' }}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        We have received your enquiry
      </motion.h2>

      <motion.h1 
        className="relative z-10 text-7xl font-extrabold my-12 text-white drop-shadow-xl italic"
        style={{ fontFamily: 'Dancing Script, cursive' }}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        Thank You!
      </motion.h1>

      <p className="relative z-10 text-lg text-gray-200 leading-relaxed max-w-3xl mt-6" style={{ fontFamily: 'Quicksand, sans-serif' }}>
        We have sent an acknowledgment of receipt of your enquiry to your email.
        Please check your junk email box if you have not received it.
      </p>
      <p className="relative z-10 text-lg text-gray-200 mt-6 leading-relaxed max-w-3xl" style={{ fontFamily: 'Quicksand, sans-serif' }}>
        We will get back to you within two working days. In the meantime, why not
        check us out on Facebook and Instagram in the links below?
      </p>

      <motion.div 
        className="relative z-10 mt-10 flex justify-center gap-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        <a
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-yellow-500 text-white px-8 py-3 rounded-lg flex items-center gap-2 hover:bg-yellow-600 transition-transform transform hover:scale-105 shadow-lg"
        >
          <FaFacebook size={24} /> Facebook
        </a>
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-yellow-500 text-white px-8 py-3 rounded-lg flex items-center gap-2 hover:bg-yellow-600 transition-transform transform hover:scale-105 shadow-lg"
        >
          <FaInstagram size={24} /> Instagram
        </a>
      </motion.div>
    </div>
  );
};

export default ThankYou;
