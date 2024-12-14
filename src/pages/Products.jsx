import React from "react";
import ProductCard from "../components/ProductCard";

const Products = () => {
  return (
    <div className="flex flex-col items-center justify-center p-4 min-h-screen bg-gray-50 text-gray-800">
      <h1 className="my-6 text-4xl font-bold text-green-700">Our Products</h1>
        <ProductCard />
    </div>
  );
};

export default Products;
