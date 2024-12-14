import React, { useState, useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { FaStar, FaRegStar } from "react-icons/fa"; 

const Testimonials = () => {
  const testimonials = [
    {
      name: "John Smith",
      text: "Aroma International has been our trusted partner for years. Their products are always fresh and top quality.",
      rating: 5,
    },
    {
      name: "Maria Lopez",
      text: "The spices we get from Aroma are unmatched in quality and flavor. Highly recommended!",
      rating: 4,
    },
    {
      name: "Rahul Patel",
      text: "I am impressed with their professionalism and commitment to excellence. Timely deliveries always!",
      rating: 5,
    },
    {
      name: "Sita Kumari",
      text: "Aroma International has the best quality grains I've ever worked with. Their customer service is fantastic.",
      rating: 4,
    },
    {
      name: "Vikram Singh",
      text: "The spices are fresh and fragrant, perfect for our kitchen. A trustworthy supplier for our business.",
      rating: 5,
    },
  ];

  const [slideCount, setSlideCount] = useState(1);

  useEffect(() => {
    const updateSlideCount = () => {
      const width = window.innerWidth;
      if (width >= 1024) {
        setSlideCount(3); 
      } else if (width >= 768) {
        setSlideCount(2); 
      } else {
        setSlideCount(1);
      }
    };

    updateSlideCount(); // Set the initial slide count
    window.addEventListener("resize", updateSlideCount); // Update on window resize

    return () => window.removeEventListener("resize", updateSlideCount); // Cleanup on unmount
  }, []);

  return (
    <section className="py-12 px-4 md:px-16 bg-gray-100">
      <h3 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-8">
        What Our Clients Say
      </h3>
      <Carousel
        autoPlay
        infiniteLoop
        showThumbs={false}
        showIndicators={false}
        showArrows
        showStatus={false}
        interval={5000}
        className="relative"
        swipeable={true}
        dynamicHeight={false}
        emulateTouch={true}
        centerMode={true} // Ensures the carousel centers the testimonials
        centerSlidePercentage={100 / slideCount} // Adjust slide percentage based on the number of slides
      >
        {testimonials.map((testimonial, index) => (
          <div key={index} className="bg-white shadow-md rounded-md p-6 mx-4">
            <p className="text-gray-600 italic">"{testimonial.text}"</p>
            <h4 className="mt-4 font-bold text-gray-800">{testimonial.name}</h4>

            {/* Rating Stars */}
            <div className="flex mt-4">
              {[...Array(5)].map((star, starIndex) => (
                <div key={starIndex}>
                  {starIndex < testimonial.rating ? (
                    <FaStar className="text-yellow-400 w-5 h-5" />
                  ) : (
                    <FaRegStar className="text-gray-400 w-5 h-5" />
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </Carousel>
    </section>
  );
};

export default Testimonials;
