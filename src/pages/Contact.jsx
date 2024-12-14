import React from "react";

const Contact = () => {
  return (
    <main className="p-6">
      <h1 className="text-4xl font-bold text-green-700">Contact Us</h1>
      <p className="mt-4 text-lg">
        Get in touch with us for inquiries or partnerships. We’re here to help!
      </p>
      <form className="mt-6 space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium">
            Name
          </label>
          <input
            type="text"
            id="name"
            className="w-full border-gray-300 rounded-lg p-2"
            placeholder="Your name"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full border-gray-300 rounded-lg p-2"
            placeholder="Your email"
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium">
            Message
          </label>
          <textarea
            id="message"
            className="w-full border-gray-300 rounded-lg p-2"
            placeholder="Your message"
            rows="4"
          />
        </div>
        <button
          type="submit"
          className="bg-green-700 text-white px-4 py-2 rounded-lg"
        >
          Submit
        </button>
      </form>
      <div className="mt-8">
        <h2 className="text-xl font-semibold">Contact Details</h2>
        <p className="mt-2">📞 +91 9876543210</p>
        <p>📧 info@aromainternational.com</p>
        <p>📍 Padra, Vadodara, Gujarat, India</p>
      </div>
    </main>
  );
};

export default Contact;
