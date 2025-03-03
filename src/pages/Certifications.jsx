import React from "react";
// import { certificates } from "../assets/assets";

const Certifications = () => {
  return (
    <div className="bg-gradient-to-br from-green-50 to-green-100 py-16">
      <div className="max-w-screen-xl mx-auto px-6">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 text-green-800">
          Our Certifications
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <div
              key={index}
              className="flex justify-center items-center bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform hover:scale-105 hover:shadow-2xl duration-300"
            >
              <a
                href={cert.link} // Official link to the certificate
                target="_blank"
                rel="noopener noreferrer"
                className="w-full"
              >
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-auto object-contain" // Adjust image to be responsive
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Certifications;
