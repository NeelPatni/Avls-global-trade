import React from "react";
import { useParams } from "react-router-dom";
import { products } from "../assets/assets.js";

const ProductDetail = () => {
  const { id } = useParams(); // Get the product ID from the URL
  const product = products.find((product) => product.id === parseInt(id)); // Find the product based on the ID

  if (!product) {
    return <div>Product not found</div>; // Handle invalid product ID
  }

  return (
    <div className="max-w-screen-lg mx-auto p-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left side: Product Image */}
        <div>
          <img
            src={product.img}
            alt={product.name}
            className="object-cover w-full h-96 rounded-lg"
          />
        </div>

        {/* Right side: Product Details in a Table */}
        <div>
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            {product.name}
          </h2>
          <table className="min-w-full table-auto border-collapse border border-gray-300">
            <tbody>
              <tr className="border-b border-gray-300">
                <td className="px-4 py-2 font-semibold text-gray-700">Use</td>
                <td className="px-4 py-2">{product.use}</td>
              </tr>
              <tr className="border-b border-gray-300">
                <td className="px-4 py-2 font-semibold text-gray-700">Self Life</td>
                <td className="px-4 py-2">{product.selfLife}</td>
              </tr>
              <tr className="border-b border-gray-300">
                <td className="px-4 py-2 font-semibold text-gray-700">Color</td>
                <td className="px-4 py-2">{product.color}</td>
              </tr>
              <tr className="border-b border-gray-300">
                <td className="px-4 py-2 font-semibold text-gray-700">Place of Origin</td>
                <td className="px-4 py-2">{product.placeOfOrigin}</td>
              </tr>
              <tr className="border-b border-gray-300">
                <td className="px-4 py-2 font-semibold text-gray-700">Form</td>
                <td className="px-4 py-2">{product.form}</td>
              </tr>
              <tr className="border-b border-gray-300">
                <td className="px-4 py-2 font-semibold text-gray-700">Cultivation Type</td>
                <td className="px-4 py-2">{product.cultivationType}</td>
              </tr>
              <tr>
                <td className="px-4 py-2 font-semibold text-gray-700">Packaging Size</td>
                <td className="px-4 py-2">{product.packagingSize}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
