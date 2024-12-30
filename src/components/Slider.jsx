import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useMediaQuery } from "react-responsive";
import { smallSliderImages, largeSliderImages } from "../assets/assets";

// Replace these with your actual images for small devices

const Slider = () => {
  const isLargeDevice = useMediaQuery({ query: "(min-width: 1024px)" }); // Adjust breakpoint as needed

  const imagesToDisplay = isLargeDevice ? largeSliderImages : smallSliderImages;

  return (
    <Carousel
      autoPlay
      infiniteLoop
      showThumbs={false}
      showArrows
      swipeable
      showStatus={false}
      interval={5000}
      className="relative"
    >
      {imagesToDisplay.map((src, index) => (
        <div key={index} className="h-[65vh] sm:h-[70vh] lg:h-[80vh]">
          <img
            src={src}
            alt={`Slide ${index + 1}`}
            className="w-full h-full object-cover"
          />
        </div>
      ))}
    </Carousel>
  );
};

export default Slider;
