import React, { useState } from "react";
import { certificates } from "../assets/assets";

const Certifications = () => {
  const [selectedCert, setSelectedCert] = useState(null);

  const handleLearnMore = (cert) => {
    setSelectedCert(cert);
  };

  const closePopup = () => {
    setSelectedCert(null);
  };

  return (
    <div className="bg-gradient-to-br from-green-50 to-green-100 py-12">
      <div className="max-w-screen-lg mx-auto px-6">
        <h1 className="text-5xl font-bold text-center mb-12 text-green-800">
          Our Certifications
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {certificates.map((cert, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-md overflow-hidden transform transition-transform hover:scale-105 hover:shadow-2xl duration-300"
              style={{ height: "350px", width: "300px" }}
            >
              <img
                src={cert.image}
                alt={cert.title}
                className="w-full h-44 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-green-700 mb-3">
                  {cert.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                  {cert.description}
                </p>
              </div>
              <button
                onClick={() => handleLearnMore(cert)}
                className="bg-green-100 text-green-700 text-center py-2 font-medium w-full hover:bg-blue-700 hover:text-white transition-colors"
              >
                Learn More
              </button>
            </div>
          ))}
        </div>

        {selectedCert && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg shadow-xl max-w-lg w-full p-6 relative">
              <button
                className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
                onClick={closePopup}
              >
                ✖
              </button>
              <img
                src={selectedCert.image}
                alt={selectedCert.title}
                className="w-full h-44 object-cover rounded"
              />
              <h2 className="text-3xl font-semibold text-green-700 mt-4">
                {selectedCert.title}
              </h2>
              <p className="text-gray-600 mt-3">{selectedCert.description}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Certifications;
