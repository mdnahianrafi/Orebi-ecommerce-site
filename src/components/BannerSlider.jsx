import React, { useState, useRef } from "react";
import Slider from "react-slick";
import BannerOne from "../assets/images/banner one.png";
import BannerTwo from "../assets/images/banner two.png";
import BannerThree from "../assets/images/banner three.png";
import Image from "./Image";

const BannerSlider = () => {
  const [slideIndex, setSlideIndex] = useState(0); // Current slide index
  const sliderRef = useRef(null);

  const totalSlides = 3; // Total number of slides

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: (current) => {
      setSlideIndex(current); // Update the slide index after slide changes
    },
  };

  const goToSlide = (index) => {
    setSlideIndex(index);
    sliderRef.current.slickGoTo(index); // Navigate to the slide
  };

  return (
    <div className="relative overflow-x-hidden">
      {/* Vertical Range Bar with Middle Number */}
      <div
      className="absolute sm:z-10 sm:top-[25%] sm:left-[6.5%] lg:left-[7%] xl:left-[7.5%] sm:bottom-[20px] sm:h-[100px]  2xl:h-[150px] sm:w-[50px] 2xl:w-[150px] sm:flex sm:flex-col sm:justify-between sm:items-center"

      >
        {/* Range Segments */}
        {[...Array(totalSlides)].map((_, index) => (
          <div
            key={index}
            onClick={() => goToSlide(index)}
            style={{
              flex: 1,
              width: "5px",
              backgroundColor: slideIndex === index ? "black" : "white",
              transition: "background-color 0.3s ease",
              cursor: "pointer",
            }}
          />
        ))}

        {/* Middle Slide Number */}
        <div
        className="absolute sm:top-[50%] sm:-left-[5%] 2xl:left-0 md:-left-[5%] sm:transform sm:translate-y-[-50%] text-sm font-dm font-semibold  ">
          {`0${slideIndex + 1}`}
        </div>
      </div>

      {/* Slider */}
      <Slider ref={sliderRef} {...settings}>
        <div className="slide">
          <Image imgSrc={BannerOne} />
        </div>
        <div className="slide">
          <Image imgSrc={BannerTwo} />
        </div>
        <div className="slide">
          <Image imgSrc={BannerThree} />
        </div>
      </Slider>
      
    </div>
  );
};

export default BannerSlider;
