import React, { useState } from "react";
import { pricingData } from "./PriceListData";
import "./PriceList.css";
import { MailIcon, PhoneIcon } from "../..";

const PriceList = ({ refs }) => {
  const [selectedPeriod, setSelectedPeriod] = useState("1 teden");
  const [showPopup, setShowPopup] = useState(false);

  return (
    <div className="main-wrapper" ref={refs.cenikRef}>
      <div className="main-container middle">
        <h1>NAJEM STOJALA</h1>
        <p className="subtitle">Izberite trajanje najema</p>

        <div className="button-container">
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
            Kontakt
          </button>
        </div>

        {showPopup && (
          <div className="popup-overlay">
            <div className="popup-content">
              <h2>Kontaktirajte nas</h2>
              <div className="popup-buttons">
                <a href="mailto:info@brecelj.eu" className="popup-button email">
                  <img src={MailIcon} alt="" />
                </a>
                <a href="tel:+38640772130" className="popup-button phone">
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
        <hr className="dimenzije-line" />
      </div>
    </div>
  );
};

export default PriceList;
