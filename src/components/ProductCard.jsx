import React from "react";
import { products } from "../assets/assets.js";
import { Link } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";

const ProductCard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {products.map((product, index) => (
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
                className="bg-[#184b44] text-white font-medium py-2 px-4 rounded hover:bg-[#0f312d] transition-colors duration-300"
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
  );
};

export default ProductCard;
