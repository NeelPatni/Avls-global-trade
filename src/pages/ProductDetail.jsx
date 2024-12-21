import React from "react";
import { useParams, Link } from "react-router-dom";
import { products } from "../assets/assets.js";

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((product) => product.id === id);

  if (!product) {
    return <div>Product not found</div>;
  }

  // Get two products for reference that are not the current product
  const referenceProducts = products.filter((p) => p.id !== id).slice(0, 2);

  return (
    <div className="max-w-screen-lg mx-auto p-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left side: Product Image */}
        <div className="flex items-center justify-center">
          <img
            src={product.img}
            alt={product.name}
            className="object-cover w-full h-96"
          />
        </div>

        {/* Right side: Product Title and Description */}
        <div>
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            {product.name}
          </h2>
          <p className="text-lg text-gray-600 mb-6 text-justify">
            {product.description}
          </p>
        </div>
      </div>

      {/* Below: Product Details Table */}
      <div className="mt-8">
        <table className="min-w-full table-auto border-collapse border border-gray-300 rounded-lg overflow-hidden">
          <thead>
            <tr className="bg-[#184b44] text-white">
              <th className="px-4 py-2 text-left font-semibold">Attribute</th>
              <th className="px-4 py-2 text-left font-semibold">Details</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-[#f2f2f2] border-b border-gray-300">
              <td className="px-4 py-2 font-semibold text-gray-700">Use</td>
              <td className="px-4 py-2">{product.use}</td>
            </tr>
            <tr className="bg-[#e9eaf1] border-b border-gray-300">
              <td className="px-4 py-2 font-semibold text-gray-700">
                Self Life
              </td>
              <td className="px-4 py-2">{product.selfLife}</td>
            </tr>
            <tr className="bg-[#f2f2f2] border-b border-gray-300">
              <td className="px-4 py-2 font-semibold text-gray-700">Color</td>
              <td className="px-4 py-2">{product.color}</td>
            </tr>
            <tr className="bg-[#e9eaf1] border-b border-gray-300">
              <td className="px-4 py-2 font-semibold text-gray-700">
                Place of Origin
              </td>
              <td className="px-4 py-2">{product.placeOfOrigin}</td>
            </tr>
            <tr className="bg-[#f2f2f2] border-b border-gray-300">
              <td className="px-4 py-2 font-semibold text-gray-700">Form</td>
              <td className="px-4 py-2">{product.form}</td>
            </tr>
            <tr className="bg-[#e9eaf1] border-b border-gray-300">
              <td className="px-4 py-2 font-semibold text-gray-700">
                Cultivation Type
              </td>
              <td className="px-4 py-2">{product.cultivationType}</td>
            </tr>
            <tr className="bg-[#f2f2f2]">
              <td className="px-4 py-2 font-semibold text-gray-700">
                Packaging Size
              </td>
              <td className="px-4 py-2">{product.packagingSize}</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Below: Reference Products */}
      <div className="mt-12">
        <h3 className="text-2xl font-semibold text-gray-800 mb-6">
          You Might Also Like
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {referenceProducts.map((refProduct) => (
            <div
              key={refProduct.id}
              className="border border-gray-300 rounded-lg p-4 hover:shadow-lg transition"
            >
              <img
                src={refProduct.img}
                alt={refProduct.name}
                className="object-cover w-full h-48 rounded-lg mb-4"
              />
              <h4 className="text-xl font-semibold text-gray-800 mb-2">
                {refProduct.name}
              </h4>
              <p className="text-gray-600 mb-4 text-justify">
                {refProduct.description}
              </p>
              <Link
                to={`/product-detail/${refProduct.id}`}
                className="text-[#184b44] font-semibold hover:underline"
              >
                View Details
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
