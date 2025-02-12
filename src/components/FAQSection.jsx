import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import emailjs from "@emailjs/browser";

const FAQSection = () => {
  const form = useRef();
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    from_name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

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

  const faqs = [
    {
      question: "What types of products do you export?",
      answer:
        "We export premium quality Indian-origin 'Fruits and Vegetables,' 'Spices,' and 'Grains and Pulses' at the best prices.",
    },
    {
      question: "What is the minimum order quantity for export?",
      answer: "Please contact us directly for specific details on minimum order quantities.",
    },
    {
      question: "How can I place an order for export?",
      answer:
        "You can place an order through our inquiry form or get in touch with us for further assistance.",
    },
    {
      question: "What are the delivery timelines for exports?",
      answer:
        "Delivery timelines vary depending on the product and order size. Typically, it ranges between 2-4 weeks.",
    },
    {
      question: "Do you offer custom packaging for export products?",
      answer:
        "Yes, we offer custom packaging options for our export products according to your preferences.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:px-12 lg:px-24">
      {/* FAQ Section */}
      <div className="p-6 w-full md:w-1/2">
        <h2 className="text-3xl font-bold mb-6 text-center">FAQs</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border rounded-md border-[#184b44]">
              <button
                className="flex justify-between items-center w-full p-4 text-left font-semibold text-black"
                onClick={() => toggleAccordion(index)}
              >
                {faq.question}
                <span
                  className={`transition-transform ${activeIndex === index ? "rotate-180" : ""}`}
                >
                  ▼
                </span>
              </button>
              {activeIndex === index && (
                <div className="p-4 text-gray-700">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Export Inquiry Form Section */}
      <div className="flex items-center justify-center w-full md:w-1/2 p-4">
        <div className="bg-[#184b44] p-6 rounded-md text-white w-full max-w-sm md:max-w-md">
          <h2 className="text-2xl font-bold mb-4">Export Inquiry</h2>
          <p className="mb-6">Get in touch with us for the best deals on premium Indian-origin products.</p>
          <form className="space-y-4" ref={form} onSubmit={sendEmail}>
            <div className="relative">
              <input
                type="text"
                name="from_name"
                placeholder="Enter your name"
                className="w-full p-2 rounded-md text-black"
                value={formData.from_name}
                onChange={handleChange}
              />
              {errors.name && (
                <p className="text-red-500 text-xs absolute bottom-0 left-0">{errors.name}</p>
              )}
            </div>
            <div className="relative">
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="w-full p-2 rounded-md text-black"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && (
                <p className="text-red-500 text-xs absolute bottom-0 left-0">{errors.email}</p>
              )}
            </div>
            <div className="relative">
              <input
                type="tel"
                name="phone"
                placeholder="Enter your phone"
                className="w-full p-2 rounded-md text-black"
                value={formData.phone}
                onChange={handleChange}
              />
              {errors.phone && (
                <p className="text-red-500 text-xs absolute bottom-0 left-0">{errors.phone}</p>
              )}
            </div>
            <div className="relative">
              <textarea
                name="message"
                placeholder="Enter your message"
                className="w-full p-2 rounded-md text-black"
                rows={4}
                value={formData.message}
                onChange={handleChange}
              />
              {errors.message && (
                <p className="text-red-500 text-xs absolute bottom-0 left-0">{errors.message}</p>
              )}
            </div>
            <button
              type="submit"
              className="bg-[#41a752] text-white w-full py-2 rounded-md font-bold hover:bg-[#41a752]"
            >
              SEND INQUIRY
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
