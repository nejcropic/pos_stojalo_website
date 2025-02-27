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
              <div className="pricing-column">
                {parseFloat(item.pricePerUnit).toFixed(1).replace(".", ",")} €{" "}
              </div>
              <div className="pricing-column">
                {parseFloat(item.finalPrice).toFixed(1).replace(".", ",")} €{" "}
              </div>
            </div>
          ))}
        </div>

        <div className="price-text right">
          <p className="small ">*CENE SO BREZ DDV</p>
        </div>
        <div className="price-text">
          <br />
          <br />
          <p>Ob najemu stojala vam pripada:</p>{" "}
          <p className="big">
            personalizacija stojala z logotipom &#x2022; promocijsko platno, ki
            ga po vaši želji tudi oblikujemo &#x2022; transport in montaža na
            željneo mesto v okolici Ljubljane &#x2022; nosilec za letake (po
            želji)
          </p>
          <br />
          <p>Dodatna ponudba</p>{" "}
          <p className="small">
            transport in montaža stojala na željeno mesto po sloveniji &#x2022;
            Osvetljeni logo &#x2022; Polepitev stojala v željeno barvo &#x2022;
            najem za daljše časovno obdobje &#x2022; izdelava ostalega
            reklamnega materiala materiala.
          </p>
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
