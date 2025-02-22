import React, { useState } from "react";
import "./Galerija.css";
import GalerijaBasic from "./GalerijaBasic";
import { GalerijaImages } from "./GalerijaItems";

const Galerija = ({ refs }) => {
  const [slideNumber, setSlideNumber] = useState(0);
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = (index) => {
    setSlideNumber(index);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const prevSlide = () => {
    setSlideNumber((prev) =>
      prev === 0 ? GalerijaImages.length - 1 : prev - 1
    );
  };

  const nextSlide = () => {
    setSlideNumber((prev) => (prev + 1) % GalerijaImages.length);
  };

  return (
    <div className="home-wrapper" ref={refs.galerijaRef}>
      {openModal && (
        <div className="slider-container" onClick={handleCloseModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <i className="fas fa-chevron-left btnPrev" onClick={prevSlide}></i>
            <i className="fas fa-chevron-right btnNext" onClick={nextSlide}></i>
            <i className="fas fa-times btnClose" onClick={handleCloseModal}></i>
            <div className="fullScreenImage">
              <img
                src={GalerijaImages[slideNumber].image}
                alt={GalerijaImages[slideNumber].title}
              />
              <p>{GalerijaImages[slideNumber].title}</p>
            </div>
          </div>
        </div>
      )}

      <h1>Galerija</h1>
      <div className="gallery-wrapper">
        {GalerijaImages.map((item, index) => (
          <GalerijaBasic
            key={index}
            item={item}
            onClick={() => handleOpenModal(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Galerija;
