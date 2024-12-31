import React from "react";
import Slider from "../components/Slider";
import {
  FaLeaf,
  FaShippingFast,
  FaAward,
  FaPhoneAlt,
  FaEnvelope,
  FaWhatsapp,
} from "react-icons/fa";
import { assets } from "../assets/assets.js";
import Testimonials from "../components/Testimonials.jsx";
import FAQSection from "../components/FAQSection.jsx";
import { products } from "../assets/assets.js";
import { Link } from "react-router-dom";
import { certificates } from "../assets/assets";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Home = () => {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-800 overflow-auto">
      {/* Hero Slider */}
      <section className="h-[60vh] md:h-[70vh] lg:h-[80vh] overflow-hidden">
        <Slider />
      </section>

      {/* Welcome Section */}
      <section className="text-center py-12 px-4 md:px-16 bg-white">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          {/* Image Section */}
          <div className="w-full md:w-1/2 md:py-4 flex justify-center">
            <img
              src={assets.About_Image}
              alt="About_Image"
              className="object-cover rounded-lg shadow-lg max-w-full h-96 md:h-auto"
            />
          </div>
          {/* Text Section */}
          <div className="w-full md:w-1/2 text-justify md:pl-4">
            {/* Title Section */}
            <div className="flex gap-1 items-center justify-start mb-6">
              <h2 className="text-3xl md:text-4xl font-bold text-green-700">
                AROMA International
              </h2>
              <div className="bg-green-700 w-16 md:w-20 h-1 rounded-full"></div>
            </div>
            {/* Text Content */}
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              AROMA International is an export-focused company based in Padra,
              Vadodara, motivated by government initiatives and goals for
              imports and exports. With our global business partners, we trade
              in the export of premium quality Indian-origin "Spices," and
              "Grains and Pulses" at the best prices.
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
          {products.slice(0, 6).map((product, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-md overflow-hidden border border-gray-200 p-4 min-h-[400px]" // Set a minimum height
            >
              <img
                src={product.img[1]}
                alt={product.name}
                className="object-cover h-96 w-full hover:scale-105 transition-transform duration-300 cursor-pointer" // Increased image height
              />
              <div className="flex flex-col items-center justify-center p-4 text-center">
                <h4 className="text-lg font-semibold text-gray-800">
                  {product.name}
                </h4>
                <p className="text-sm text-gray-600 my-2">
                  {product.description.trim().split(".")[0] + "."}
                </p>
                <div className="flex items-center justify-center gap-3">
                  <Link
                    to={`/product-detail/${product.id}`}
                    className="bg-[#184b44] text-white font-medium py-2 px-4 rounded hover:bg-[#0f312d] transition-colors duration-300 text-nowrap"
                  >
                    Read More
                  </Link>
                  <a
                    href={`https://api.whatsapp.com/send?phone=918238082910&text=I want to buy this ${product.id}`}
                    className="flex gap-2 bg-[#41a752] text-white font-medium py-2 px-4 rounded hover:bg-[#32b347] transition-colors duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaWhatsapp
                      className="text-xl hover:cursor-pointer"
                      size={24}
                    />
                    Order
                  </a>
                </div>
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
              className="flex flex-col items-center text-center p-4 border border-gray-200 shadow-lg rounded-lg"
            >
              <div className="mb-4 flex justify-center items-center">
                {benefit.icon}
              </div>
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
      <section className="py-12 px-4 md:px-16">
        <div className="flex flex-col md:flex-row items-center max-w-screen-lg mx-auto space-y-6 md:space-y-0">
          {/* Left Side: Text Section */}
          <div className="md:w-1/3 flex flex-col justify-center items-center text-center md:text-left">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">
              Our Certifications
            </h3>
            <p className="text-gray-500 text-base md:text-lg">
              We are FSSAI & ISO certified.
            </p>
          </div>

          {/* Right Side: Carousel Section */}
          <div className="md:w-2/3 w-full">
            <Carousel
              showThumbs={false}
              showStatus={false}
              infiniteLoop
              autoPlay
              interval={3000}
              centerMode
              centerSlidePercentage={90} // Larger percentage for smaller devices
              className="rounded-lg"
            >
              {certificates.map((cert, index) => (
                <a
                  href={cert.link} // Official link to the certificate
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full"
                  key={index}
                >
                  <div
                    
                    className="flex flex-col items-center px-2 sm:px-4" // Adjusted padding for small devices
                  >
                    <div className="border-2 border-gray-300 rounded-lg p-4 shadow-lg bg-white max-w-xs sm:max-w-sm w-full">
                      <img
                        src={cert.image}
                        alt={cert.title}
                        className="h-40 sm:h-48 md:h-64 object-contain w-full"
                      />
                    </div>
                    <p className="mt-4 text-center text-gray-700 font-medium text-sm md:text-base">
                      {cert.title}
                    </p>
                  </div>
                </a>
              ))}
            </Carousel>
          </div>
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
          {/* Phone Number */}
          <a
            href="tel:+918238082910"
            className="flex items-center space-x-4 hover:cursor-pointer"
          >
            <FaPhoneAlt size={24} />
            <p className="text-lg">+91 82380 82910</p>
          </a>

          {/* Email Address */}
          <a
            href="mailto:info@aroma-international.com"
            className="flex items-center space-x-4 hover:cursor-pointer"
          >
            <FaEnvelope size={24} />
            <p className="text-lg">info@aroma-international.com</p>
          </a>
        </div>
      </section>
    </main>
  );
};

export default Home;
