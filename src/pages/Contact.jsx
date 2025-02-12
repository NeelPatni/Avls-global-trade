import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import emailjs from "@emailjs/browser";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { FiGlobe, FiTwitter, FiInstagram } from "react-icons/fi";

const ContactUs = () => {
  const form = useRef();
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let formErrors = {};
    const formElements = form.current.elements;

    if (!formElements["from_name"].value.trim()) {
      formErrors.name = "Name is required";
    }
    if (!formElements["email"].value.trim()) {
      formErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formElements["email"].value)) {
      formErrors.email = "Email is invalid";
    }
    if (!formElements["phone"].value.trim()) {
      formErrors.phone = "Phone number is required";
    } else if (!/^[\d\s()+-]+$/.test(formElements["phone"].value)) {
      formErrors.phone = "Phone number is invalid";
    }
    if (!formElements["message"].value.trim()) {
      formErrors.message = "Message is required";
    }

    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    emailjs
      .sendForm("service_vq3gst3", "template_ofeuxtk", form.current, {
        publicKey: "0PQJ5hxx95qBf9xRu",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          form.current.reset(); // Clear the form
          // alert("Done");
          navigate("/thankyou");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
        
      );
      
  };

  return (
    <main className="relative bg-gradient-to-br from-green-200 to-green-500 min-h-screen p-6 flex items-center justify-center">
      <div className="absolute inset-0 bg-black bg-opacity-70 -z-10"></div>

      <div className="w-full max-w-6xl bg-white bg-opacity-90 rounded-lg shadow-2xl p-6 md:p-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Contact Form */}
        <div className="flex flex-col justify-between">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">
              Get in Touch
            </h1>
            <p className="text-gray-700 mb-8">
              Have questions or need assistance? Drop us a message, and our
              friendly team will reach out to you shortly. We're here to help!
            </p>

            <form className="space-y-6" ref={form} onSubmit={sendEmail}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="from_name"
                    className="w-full border-gray-300 rounded-lg p-3 shadow-sm focus:ring-green-500 focus:border-green-500"
                    placeholder="Your Name"
                    autoComplete="off"
                  />
                  {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full border-gray-300 rounded-lg p-3 shadow-sm focus:ring-green-500 focus:border-green-500"
                    placeholder="Your Email"
                    autoComplete="off"
                  />
                  {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                </div>
              </div>
              <div>
                <label htmlFor="contact" className="block text-sm font-medium text-gray-700">
                  Contact Number
                </label>
                <input
                  type="tel"
                  id="contact"
                  name="phone"
                  className="w-full border-gray-300 rounded-lg p-3 shadow-sm focus:ring-green-500 focus:border-green-500"
                  placeholder="Your Contact Number"
                  autoComplete="off"
                />
                {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="w-full border-gray-300 rounded-lg p-3 shadow-sm focus:ring-green-500 focus:border-green-500"
                  placeholder="Write your message"
                  autoComplete="off"
                  rows="5"
                />
                {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
              </div>

              <input
                type="submit"
                className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold px-4 py-2 rounded-lg shadow-lg hover:from-green-600 hover:to-green-700 transition-transform transform hover:-translate-y-1" value="SEND INQUIRY"
              />
                
              
            </form>
          </div>
        </div>

        {/* Contact Details */}
        <div className="flex flex-col justify-center text-center bg-green-50 p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-green-800 mb-4">
            Contact Information
          </h2>
          <p className="text-gray-800 mb-8">
            You can also reach us directly using the details below.
          </p>
          <div className="space-y-4">
            <div className="flex items-center justify-center gap-2">
              <FaPhoneAlt className="text-green-700 text-xl" size={24} />
              <p className="text-gray-800">+91 82380 82910</p>
            </div>
            <div className="flex items-center justify-center gap-2">
              <FaEnvelope className="text-green-700 text-xl" size={24} />
              <p className="text-gray-800">info@aroma-international.com</p>
            </div>
            <div className="flex items-center justify-center gap-2">
              <FaMapMarkerAlt className="text-green-700 text-xl" size={24} />
              <p className="text-gray-800 text-wrap">
                GF-8, Akshar Plaza, Govindpura Jakatnaka, Padra Vadodara, India - 391440
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ContactUs;
