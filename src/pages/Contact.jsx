import React from "react";
import { assets } from "../assets/assets.js";

const Contact = () => {
  return (
    <main
      className="relative bg-cover bg-center bg-no-repeat p-6 md:p-12 w-full h-full"
      style={{
        backgroundImage: assets.Contact_Img,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 -z-10"></div>

      <section className="max-w-4xl mx-auto bg-white bg-opacity-90 shadow-lg rounded-lg p-8 md:p-12">
        <h1 className="text-4xl font-extrabold text-green-700 text-center">
          Contact Us
        </h1>
        <p className="mt-4 text-lg text-center text-gray-700">
          Got a question or need help? We'd love to hear from you. Fill out the
          form below and we’ll get back to you as soon as possible.
        </p>

        <form className="mt-8 space-y-6">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full border-gray-300 rounded-lg p-3 shadow-sm focus:ring-green-500 focus:border-green-500"
              placeholder="Enter your name"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full border-gray-300 rounded-lg p-3 shadow-sm focus:ring-green-500 focus:border-green-500"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700"
            >
              Message
            </label>
            <textarea
              id="message"
              className="w-full border-gray-300 rounded-lg p-3 shadow-sm focus:ring-green-500 focus:border-green-500"
              placeholder="Write your message"
              rows="5"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-green-600 to-green-500 text-white font-semibold px-4 py-2 rounded-lg shadow-lg hover:from-green-500 hover:to-green-600 hover:shadow-xl transition-transform transform hover:-translate-y-1"
          >
            Submit
          </button>
        </form>
      </section>

      <section className="mt-12 max-w-4xl mx-auto text-center text-white">
        <h2 className="text-2xl font-semibold">Contact Details</h2>
        <div className="mt-4 space-y-2">
          <p className="flex items-center justify-center gap-2">
            <span>📞</span> +91 9876543210
          </p>
          <p className="flex items-center justify-center gap-2">
            <span>📧</span> info@aromainternational.com
          </p>
          <p className="flex items-center justify-center gap-2">
            <span>📍</span> Padra, Vadodara, Gujarat, India
          </p>
        </div>
      </section>
    </main>
  );
};

export default Contact;
