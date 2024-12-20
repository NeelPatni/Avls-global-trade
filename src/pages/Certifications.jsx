import React from "react";

const Certifications = () => {
  // Sample certifications data
  const certifications = [
    {
      title: "ISO 9001:2015",
      image: "path_to_image/iso-9001.png", // Replace with actual image path
      description: "International Standard for Quality Management.",
    },
    {
      title: "CE Certification",
      image: "path_to_image/ce-certification.png", // Replace with actual image path
      description: "Compliance with European Union product safety standards.",
    },
    {
      title: "FDA Approved",
      image: "path_to_image/fda.png", // Replace with actual image path
      description: "Approval from the Food and Drug Administration.",
    },
    {
      title: "ISO 14001",
      image: "path_to_image/iso-14001.png", // Replace with actual image path
      description: "International Standard for Environmental Management.",
    },
  ];

  return (
    <div className="max-w-screen-lg mx-auto p-6">
      <h1 className="text-4xl font-semibold text-center mb-8 text-green-700">
        Our Certifications
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {certifications.map((cert, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform hover:scale-105 duration-300"
          >
            <img
              src={cert.image}
              alt={cert.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-2xl font-semibold text-green-600 mb-2">
                {cert.title}
              </h3>
              <p className="text-gray-700 text-sm">{cert.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certifications;
