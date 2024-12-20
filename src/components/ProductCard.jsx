import React from "react";
import { products } from "../assets/assets.js";
import { Link } from "react-router-dom";

const ProductCard = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-md overflow-hidden"
          >
            <Link to={`/product-detail/${product.id}`}>
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
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default ProductCard;
