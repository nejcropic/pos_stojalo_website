import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./BackgroundSlider.css";
import { motion } from "framer-motion";
import { sliderData } from "./BackgroundSliderData";
import { Logo_transparent } from "../..";

const BackgroundSlider = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % sliderData.length);
    }, 5000); // Change image every 5 seconds
    return () => clearInterval(interval);
  }, []);

  const goToSlide = (slideIndex) => {
    setIndex(slideIndex);
  };

  const goToNext = () => {
    setIndex((currentIndex) => (currentIndex + 1) % sliderData.length);
  };

  const goToPrevious = () => {
    setIndex(
      (currentIndex) =>
        (currentIndex - 1 + sliderData.length) % sliderData.length
    );
  };

  return (
    <div className="slider-show">
      {sliderData.map((slide, i) => (
        <motion.img
          key={i}
          src={slide.image}
          alt={`Slide ${i}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: index === i ? 1 : 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="image"
          style={{ position: index === i ? "relative" : "absolute" }}
        />
      ))}
      <div className="slider-controls">
        <button onClick={goToPrevious}>&lt;</button>
        <button onClick={goToNext}>&gt;</button>
      </div>

      {/* Slider dots */}
      <div className="slider-dots">
        {sliderData.map((_, i) => (
          <span
            key={i}
            className={`dot ${i === index ? "active" : ""}`}
            onClick={() => goToSlide(i)}
          ></span>
        ))}
      </div>

      {/* <div className="slider-text-container">
        <p></p>
        <img src={Logo_transparent} alt="" className="heart-image" />
      </div> */}
      {/* <div className="menuBtnSlider">
        <Link to="/meni">
          <button>hihi2</button>
        </Link>
      </div> */}
    </div>
  );
};

export default BackgroundSlider;
