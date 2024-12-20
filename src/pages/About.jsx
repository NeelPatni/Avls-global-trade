import React from "react";
import { FaRegStar, FaRegHandPointRight, FaShieldAlt } from "react-icons/fa"; // React Icons for enhancements
import { assets } from "../assets/assets";
import Testimonials from "../components/Testimonials";
import { certificates } from "../assets/assets";

const About = () => {
  return (
    <>
      {/* Welcome Section */}
      <section className="text-center py-12 px-4 md:px-16 bg-white">
        <div className="flex gap-1 items-center justify-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-green-700">
              About Us
            </h2>
          </div>
          <div className="bg-green-700 w-16 md:w-20 h-1 rounded-full"></div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center mt-10">
          {/* Image Section */}
          <div className="w-full md:w-1/2 md:py-4 flex justify-center">
            <img
              src={assets.About_Image}
              alt="About_Image"
              className="object-cover rounded-lg shadow-lg max-w-full h-96 md:h-auto"
            />
          </div>
          {/* Text Section */}
          <div className="w-full md:w-1/2 text-justify mt-8 md:mt-0 md:pl-4">
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              AROMA International is an export-focused company based in Padra,
              Vadodara, motivated by government initiatives and goals for
              imports and exports. With our global business partners, we trade
              in the export of premium quality Indian-origin "Fruits and
              Vegetables," "Spices," and "Grains and Pulses" at the best prices.
            </p>
            <p className="mt-4 text-lg md:text-xl text-gray-600 leading-relaxed">
              Our products are clean and free of contamination, and the market
              is constantly seeing an increase in demand for them. Customers
              adore them for their rich aroma, high biological process value,
              proper sanitary nature, mouthwatering style, physiological state,
              and most importantly normal quality. We also uphold business
              ethics, which helps ensure transparent business transactions with
              our international partners.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="bg-gray-100 py-12">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-green-700">
            Our Mission & Vision
          </h2>
          <div className="bg-green-700 w-16 h-1 rounded-full mx-auto my-4"></div>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto">
            Our mission is to be a global leader in the export of
            premium-quality agricultural products, offering the freshest and
            most aromatic fruits, vegetables, and spices to every corner of the
            world.
          </p>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto mt-4">
            We envision a sustainable future where farmers, customers, and
            international partners thrive together, powered by innovation and
            ethical business practices.
          </p>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-12 px-4 md:px-16">
        <h2 className="text-3xl font-bold text-center text-green-700">
          Our Core Values
        </h2>
        <div className="bg-green-700 w-16 h-1 rounded-full mx-auto my-4"></div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center mt-8">
          <div>
            <FaRegStar className="text-green-700 text-3xl mx-auto" />
            <h3 className="text-xl font-semibold text-green-700 mt-4">
              Integrity
            </h3>
            <p className="text-gray-600">
              We conduct our business with the utmost honesty and transparency.
            </p>
          </div>
          <div>
            <FaRegHandPointRight className="text-green-700 text-3xl mx-auto" />
            <h3 className="text-xl font-semibold text-green-700 mt-4">
              Quality
            </h3>
            <p className="text-gray-600">
              We ensure that our products meet the highest quality standards.
            </p>
          </div>
          <div>
            <FaShieldAlt className="text-green-700 text-3xl mx-auto" />
            <h3 className="text-xl font-semibold text-green-700 mt-4">
              Sustainability
            </h3>
            <p className="text-gray-600">
              We are committed to sustainable practices in sourcing and
              exporting.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <Testimonials />

      {/* Certifications Section */}
      <section className="py-12 px-4 md:px-16 bg-gray-100">
        <h2 className="text-3xl font-bold text-center text-green-700">
          Our Certifications
        </h2>
        <div className="bg-green-700 w-16 h-1 rounded-full mx-auto my-4"></div>
        <div className="flex flex-wrap justify-center gap-8 mt-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {certificates.map((cert, index) => (
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
      </section>

      {/* FAQ Section */}
      <section className="py-12 px-4 md:px-16 bg-white">
        <h2 className="text-3xl font-bold text-center text-green-700">
          Frequently Asked Questions
        </h2>
        <div className="bg-green-700 w-16 h-1 rounded-full mx-auto my-4"></div>
        <div className="space-y-6 mt-8">
          <div>
            <h3 className="text-xl font-semibold text-green-700">
              What products do you export?
            </h3>
            <p className="text-gray-600">
              We export a variety of agricultural products, including fruits,
              vegetables, spices, grains, and pulses.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-green-700">
              Where are your products sourced from?
            </h3>
            <p className="text-gray-600">
              Our products are sourced from certified farms and producers across
              India.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
