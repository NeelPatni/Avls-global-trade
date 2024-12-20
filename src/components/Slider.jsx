import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { sliderImages } from "../assets/assets";

const Slider = () => {
  return (
    <Carousel
      autoPlay
      infiniteLoop
      showThumbs={false}
      showArrows
      swipeable={false}
      showStatus={false}
      interval={5000}
      className="relative"
    >
      {sliderImages.map((src, index) => (
        <div key={index} className="h-[60vh] md:h-[70vh] lg:h-[80vh]">
          <img
            src={src}
            alt={`Slide ${index + 1}`}
            className="w-full h-full object-cover max-h-[80vh]"
          />
        </div>
      ))}
    </Carousel>
  );
};

export default Slider;
