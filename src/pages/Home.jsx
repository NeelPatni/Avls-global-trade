import React from "react";
import Slider from "../components/Slider";
import {
  FaLeaf,
  FaShippingFast,
  FaAward,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";
import { assets } from "../assets/assets.js";
import Testimonials from "../components/Testimonials.jsx";
import FAQSection from "../components/FAQSection.jsx";
import { products } from "../assets/assets.js";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-800 overflow-auto">
      {/* Hero Slider */}
      <section className="h-[60vh] md:h-[70vh] lg:h-[80vh] overflow-hidden">
        <Slider />
      </section>

      {/* Welcome Section */}
      <section className="text-center py-12 px-4 md:px-16 bg-white">
        <div className="flex gap-1 items-center justify-center">
          <h2 className="text-3xl md:text-4xl font-bold text-green-700">
            AROMA International
          </h2>
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

      {/* Product Highlights Section */}
      <section className="flex flex-col items-center py-12 px-4 md:px-16 bg-gray-100">
        <h3 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-8">
          Our Premium Products
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.slice(0, 5).map((product, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-md overflow-hidden"
            >
              <img
                src={product.img}
                alt={product.name}
                className="object-cover h-48 w-full hover:scale-105 cursor-pointer"
              />
              <div className="p-4">
                <h4 className="text-lg font-semibold text-gray-700">
                  {product.name}
                </h4>
              </div>
            </div>
          ))}
        </div>
        <button className="px-4 py-2 my-4 rounded-md font-semibold border-2 border-[#184b44] hover:bg-[#184b44] hover:text-white">
          <Link to="/products">All Products</Link>
        </button>
      </section>

      {/* Benefits Section */}
      <section className="py-12 px-4 md:px-16 bg-white">
        <h3 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-8">
          Why Choose Us?
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: <FaLeaf size={40} className="text-green-700" />,
              title: "Sustainably Sourced",
              description:
                "We ensure sustainable farming and ethical sourcing for all our products.",
            },
            {
              icon: <FaShippingFast size={40} className="text-green-700" />,
              title: "Timely Delivery",
              description:
                "Global shipping with prompt and reliable delivery schedules.",
            },
            {
              icon: <FaAward size={40} className="text-green-700" />,
              title: "Unmatched Quality",
              description:
                "We deliver products that meet international quality standards.",
            },
            {
              icon: <FaLeaf size={40} className="text-green-700" />,
              title: "Organic & Fresh",
              description:
                "Our products are fresh, organic, and handpicked for excellence.",
            },
          ].map((benefit, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center"
            >
              <div className="mb-4">{benefit.icon}</div>
              <h4 className="text-lg font-bold text-gray-700">
                {benefit.title}
              </h4>
              <p className="text-sm text-gray-600 mt-2">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-12 px-4 md:px-16 bg-gray-100">
        <h3 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-8">
          Our Certifications
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "ISO 9001:2015",
              description: "Certified for Quality Management Systems.",
              img: assets.ISO_9001,
            },
            {
              title: "FSSAI Certified",
              description: "Ensuring food safety and hygiene standards.",
              img: assets.FSSAI_certificate,
            },
            {
              title: "Global GAP",
              description:
                "Good Agricultural Practices certification for safe and sustainable agriculture.",
              img: assets.Global_GAP,
            },
          ].map((certification, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-md overflow-hidden"
            >
              <div className="flex items-center justify-center">
                <img
                  src={certification.img}
                  alt={certification.title}
                  className="object-cover h-48 w-fit"
                />
              </div>
              <div className="p-4">
                <h4 className="text-lg font-semibold text-gray-700">
                  {certification.title}
                </h4>
                <p className="text-sm text-gray-600 mt-2">
                  {certification.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <Testimonials />
      {/* FAQ Section */}
      <FAQSection />
      {/* Contact CTA Section */}
      <section className="py-12 px-4 md:px-16 bg-[#184b44] text-white">
        <h3 className="text-2xl md:text-3xl font-bold text-center mb-8">
          Ready to Get Started?
        </h3>
        <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8">
          <div className="flex items-center space-x-4">
            <FaPhoneAlt size={24} />
            <p className="text-lg">+91 82380 82910</p>
          </div>
          <div className="flex items-center space-x-4">
            <FaEnvelope size={24} />
            <p className="text-lg">info@aroma-international.co.in</p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
