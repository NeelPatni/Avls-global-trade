import React from "react";
import { products } from "../assets/assets.js";
import { Link } from "react-router-dom";

const ProductCard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {products.map((product, index) => (
        <div
          key={index}
          className="bg-white shadow-md rounded-md overflow-hidden border border-gray-200 p-4 min-h-[400px]" // Set a minimum height
        >
          <img
            src={product.img}
            alt={product.name}
            className="object-cover h-56 w-full hover:scale-105 transition-transform duration-300 cursor-pointer" // Increased image height
          />
          <div className="flex flex-col items-center justify-center p-4 text-center">
            <h4 className="text-lg font-semibold text-gray-800">
              {product.name}
            </h4>
            <p className="text-sm text-gray-600 my-2">{product.description.trim().split('.')[0] + '.'}</p>
            <Link
              to={`/product-detail/${product.id}`}
              className="bg-[#184b44] text-white font-medium py-2 px-4 rounded hover:bg-[#0f312d] transition-colors duration-300"
            >
              Read More
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductCard;
