import React from "react";
import { assets } from "../assets/assets";

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
    </>
  );
};

export default About;
