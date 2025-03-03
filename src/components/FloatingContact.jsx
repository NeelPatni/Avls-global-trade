import React from "react";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

const FloatingContactIcons = () => {
  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-50">
      <a
        href="tel:+918200349770"
        className="w-12 h-12 bg-[#32346a] text-white flex items-center justify-center rounded-full shadow-lg transition-transform transform hover:scale-110"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaPhoneAlt className="text-xl hover:cursor-pointer" size={24} />
      </a>

      <a
        href="https://wa.me/918200349770"
        className="w-12 h-12 bg-[#41a752] text-white flex items-center justify-center rounded-full shadow-lg transition-transform transform hover:scale-110"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaWhatsapp className="text-xl hover:cursor-pointer" size={24} />
      </a>
    </div>
  );
};

export default FloatingContactIcons;
