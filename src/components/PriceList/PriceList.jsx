import React, { useState } from "react";
import { pricingData } from "./PriceListData";
import "./PriceList.css";
import { MailIcon, PhoneIcon } from "../..";

const PriceList = ({ refs }) => {
  const [selectedPeriod, setSelectedPeriod] = useState("1 teden");
  const [showPopup, setShowPopup] = useState(false);

  return (
    <div className="price-container">
      <h1 className="title">NAJEM STOJALA</h1>
      <p className="subtitle">Izberite trajanje najema</p>

      <div className="button-container" ref={refs.cenikRef}>
        {Object.keys(pricingData).map((period) => (
          <button
            key={period}
            className={`period-button ${
              selectedPeriod === period ? "active" : ""
            }`}
            onClick={() => setSelectedPeriod(period)}
          >
            {period}
          </button>
        ))}
      </div>

      <div className="pricing-table">
        <div className="pricing-header">
          <div className="pricing-column">Število enot</div>
          <div className="pricing-column">Popust</div>
          <div className="pricing-column">Cena enote na teden</div>
          <div className="pricing-column">Skupna cena</div>
        </div>
        {pricingData[selectedPeriod].map((item, index) => (
          <div key={index} className="pricing-row">
            <div className="pricing-column">{item.units}</div>
            <div className="pricing-column">{item.discount}</div>
            <div className="pricing-column">{item.pricePerUnit} €</div>
            <div className="pricing-column">{item.finalPrice} €</div>
          </div>
        ))}
      </div>

      <div className="button-container">
        <button className="request-button" onClick={() => setShowPopup(true)}>
          Zahtevaj ponudbo
        </button>
      </div>

      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-content">
            <h2>Kontaktirajte nas</h2>
            <div className="popup-buttons">
              <a
                href="mailto:example@example.com"
                className="popup-button email"
              >
                <img src={MailIcon} alt="" />
              </a>
              <a href="tel:+123456789" className="popup-button phone">
                <img src={PhoneIcon} alt="" />
              </a>
            </div>
            <button
              onClick={() => setShowPopup(false)}
              className="popup-button close"
            >
              Zapri
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PriceList;
