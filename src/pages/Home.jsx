import React from "react";
import Slider from "../components/Slider";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
import { products } from "../assets/assets.js"; // ✅ Removed duplicate import
import { Link } from "react-router-dom"; // ✅ Removed duplicate import
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import SlickSlider from "react-slick"; 
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";







const Home = () => {
  const NextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <button
        className={`${className} bg-blue-900 text-white p-2 rounded-full absolute right-0 top-1/2 transform -translate-y-1/2 z-10`}
        style={{ ...style, display: "block" }}
        onClick={onClick}
      >
        Next
      </button>
    );
  };
  
  const PrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <button
        className={`${className} bg-blue-900 text-white p-2 rounded-full absolute left-0 top-1/2 transform -translate-y-1/2 z-10`}
        style={{ ...style, display: "block" }}
        onClick={onClick}
      >
        Prev
      </button>
    );
  };
  
  const sliderSettings = {
    arrows: true,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };
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
              <h2 className="text-3xl md:text-4xl font-bold text-blue-700">
                AVLS Global Trade
              </h2>
              <div className="bg-blue-700 w-16 md:w-20 h-1 rounded-full"></div>
            </div>
            {/* Text Content */}
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              AVLS Global Trade is an export-focused company based in Padra,
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
      

      {/* Product Highlights Section 
       <section className="flex flex-col items-center py-12 px-4 md:px-16 bg-gray-100">
        <h3 className="text-2xl md:text-3xl font-bold text-center text-blue-900 mb-8">
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
                    className="bg-blue-900 text-white font-medium py-2 px-4 rounded hover:bg-red-700 transition-colors duration-300 text-nowrap"
                  >
                    Read More
                  </Link>
                  <a
                    href={`https://api.whatsapp.com/send?phone=918200349770&text=I want to buy this ${product.id}`}
                    className="flex gap-2 bg-blue-900 text-white font-medium py-2 px-4 rounded hover:bg-blue-700 transition-colors duration-300"
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
        <button className="px-4 py-2 my-4 rounded-md font-semibold border-2 border-blue-900 hover:bg-blue-900 hover:text-white">
          <Link to="/products">All Products</Link>
        </button>
      </section> */}

{/* Product Highlights Section */}
{/* <section className="py-16 bg-gray-100">
  <div className="container mx-auto text-center">
    <h3 className="text-3xl md:text-4xl font-bold text-blue-900 mb-12">
      Our Premium Products
    </h3> */}

    {/* Product Grid */}
    {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-6">
      {products.slice(0, 6).map((product, index) => (
        <div
          key={index}
          className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105"
        >
          Image */}
          {/* <div className="relative group">
            <img
              src={product.img[1]}
              alt={product.name}
              className="object-cover w-full h-72 transition-opacity duration-300 group-hover:opacity-90"
            />
            <div className="absolute inset-0 bg-black bg-opacity-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div> */}

          {/* Product Info */}
          {/* <div className="p-6 text-center">
            <h4 className="text-xl font-semibold text-gray-800">{product.name}</h4>
            <p className="text-gray-600 my-3">
              {product.description.trim().split(".")[0] + "."}
            </p> */}

            {/* Action Buttons */}
            {/* <div className="flex justify-center gap-4 mt-4">
              <Link
                to={`/product-detail/${product.id}`}
                className="bg-blue-900 text-white font-medium py-2 px-5 rounded-full hover:bg-red-700 transition-all"
              >
                Read More
              </Link>
              <a
                href={`https://api.whatsapp.com/send?phone=918200349770&text=I want to buy this ${product.id}`}
                className="flex items-center gap-2 bg-green-600 text-white font-medium py-2 px-5 rounded-full hover:bg-green-700 transition-all"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp size={20} />
                Order
              </a>
            </div>
          </div>
        </div>
      ))}
    </div> */}

    {/* View All Products Button */}
    {/* <div className="mt-12">
      <Link
        to="/products"
        className="px-6 py-3 text-lg font-semibold border-2 border-blue-900 text-blue-900 rounded-full hover:bg-blue-900 hover:text-white transition-all"
      >
        View All Products
      </Link>
    </div>
  </div>
</section>
 */}

 {/* ..........................................Final....................................... */}


       {/* Product Highlights Section */}
       {/* <section className="py-16 bg-gray-100">
        <div className="container mx-auto text-center">
          <h3 className="text-3xl md:text-4xl font-bold text-blue-900 mb-12">
            Our Premium Products
          </h3> */}

          {/* Animated Product Slider */}
          {/* <SlickSlider {...sliderSettings} className="px-6">
            {products.slice(0, 6).map((product, index) => (
              <div key={index} className="p-4">
                <div className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform duration-500 hover:scale-105 hover:shadow-2xl">
                  <div className="relative group">
                    <img
                      src={product.img[1]}
                      alt={product.name}
                      className="object-cover w-full h-80 transition-opacity duration-300 group-hover:opacity-90"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div> */}

                  {/* Product Info */}
                  {/* <div className="p-6 text-center">
                    <h4 className="text-xl font-semibold text-gray-800">
                      {product.name}
                    </h4>
                    <p className="text-gray-600 my-3">
                      {product.description.split(".")[0] + "."}
                    </p>
 */}
                    {/* Action Buttons */}
                    {/* <div className="flex justify-center gap-4 mt-4">
                      <Link
                        to={`/product-detail/${product.id}`}
                        className="bg-blue-900 text-white font-medium py-2 px-5 rounded-full hover:bg-red-700 transition-all"
                      >
                        Read More
                      </Link>
                      <a
                        href={`https://api.whatsapp.com/send?phone=918200349770&text=I want to buy this ${product.id}`}
                        className="flex items-center gap-2 bg-green-600 text-white font-medium py-2 px-5 rounded-full hover:bg-green-700 transition-all"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaWhatsapp size={20} />
                        Order
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </SlickSlider> */}

          {/* View All Products Button */}
          {/* <div className="mt-12">
            <Link
              to="/products"
              className="px-6 py-3 text-lg font-semibold border-2 border-blue-900 text-blue-900 rounded-full hover:bg-blue-900 hover:text-white transition-all"
            >
              View All Products
            </Link>
          </div>
        </div>
      </section>
     */}


     {/* ..........................................check....................................... */}

     <section className="py-16 bg-gray-100">
      <div className="container mx-auto text-center">
        <motion.h3 
          className="text-3xl md:text-4xl font-bold text-blue-900 mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Our Premium Products
        </motion.h3>

        {/* Product Slider */}
        <SlickSlider {...sliderSettings} className="px-6">
          {products.slice(0, 6).map((product, index) => (
            <motion.div 
              key={index} 
              className="p-4"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                {/* Image with Hover Effect */}
                <div className="relative group">
                  <motion.img
                    src={product.img[1]}
                    alt={product.name}
                    className="object-cover w-full h-72 transition-all duration-500 group-hover:opacity-90"
                    whileHover={{ scale: 1.1 }}
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-10 opacity-0 group-hover:opacity-100 transition-all"></div>
                </div>

                {/* Product Info */}
                <div className="p-6 text-center">
                  <h4 className="text-xl font-semibold text-gray-800">{product.name}</h4>
                  <p className="text-gray-600 my-3">
                    {product.description.trim().split(".")[0] + "."}
                  </p>

                  {/* Action Buttons */}
                  <div className="flex justify-center gap-4 mt-4">
                    <Link
                      to={`/product-detail/${product.id}`}
                      className="bg-blue-900 text-white font-medium py-2 px-5 rounded-full hover:bg-red-700 transition-all"
                    >
                      Read More
                    </Link>
                    <a
                      href={`https://api.whatsapp.com/send?phone=918200349770&text=I want to buy this ${product.id}`}
                      className="flex items-center gap-2 bg-green-600 text-white font-medium py-2 px-5 rounded-full hover:bg-green-700 transition-all"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaWhatsapp size={20} />
                      Order
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </SlickSlider>

        {/* View All Products Button */}
        <motion.div className="mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <Link
            to="/products"
            className="px-6 py-3 text-lg font-semibold border-2 border-blue-900 text-blue-900 rounded-full hover:bg-blue-900 hover:text-white transition-all"
          >
            View All Products
          </Link>
        </motion.div>
      </div>
    </section>



     

      {/* Benefits Section */}
      <section className="py-12 px-4 md:px-16 bg-white">
        <h3 className="text-2xl md:text-3xl font-bold text-center text-blue-800 mb-8">
          Why Choose Us?
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: <FaLeaf size={40} className="text-red-700" />,
              title: "Sustainably Sourced",
              description:
                "We ensure sustainable farming and ethical sourcing for all our products.",
            },
            {
              icon: <FaShippingFast size={40} className="text-red-700" />,
              title: "Timely Delivery",
              description:
                "Global shipping with prompt and reliable delivery schedules.",
            },
            {
              icon: <FaAward size={40} className="text-red-700" />,
              title: "Unmatched Quality",
              description:
                "We deliver products that meet international quality standards.",
            },
            {
              icon: <FaLeaf size={40} className="text-red-500" />,
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

      {/* Testimonials Section */}
      <Testimonials />
      {/* FAQ Section */}
      <FAQSection />
      {/* Contact CTA Section */}
      <section className="py-12 px-4 md:px-16 bg-blue-900 text-white">
        <h3 className="text-2xl md:text-3xl font-bold text-center mb-8">
          Ready to Get Started?
        </h3>
        <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8">
          {/* Phone Number */}
          <a
            href="tel:+918200349770"
            className="flex items-center space-x-4 hover:cursor-pointer"
          >
            <FaPhoneAlt size={24} />
            <p className="text-lg">+91 82003 49770</p>
          </a>

          {/* Email Address */}
          <a
            href="mailto:info@AVLSGLOBALTRADE.COM"
            className="flex items-center space-x-4 hover:cursor-pointer"
          >
            <FaEnvelope size={24} />
            <p className="text-lg">info@avlsglobaltrade.com</p>
          </a>
        </div>
      </section>
    </main>
  );
};

export default Home;
