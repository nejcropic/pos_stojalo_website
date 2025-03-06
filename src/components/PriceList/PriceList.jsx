import React, { useState } from "react";
import { usePricingData } from "./PriceListData"; // Ensure the correct import
import "./PriceList.css";
import { MailIcon, PhoneIcon } from "../..";
import { useTranslation } from "react-i18next";

const PriceList = ({ refs }) => {
  const { t } = useTranslation("global");
  const pricingData = usePricingData(); // Fetch pricing data
  const [selectedPeriod, setSelectedPeriod] = useState(() => t("trajanje.one"));
  // Use translated key
  const [showPopup, setShowPopup] = useState(false);

  return (
    <div className="main-wrapper" ref={refs.cenikRef}>
      <div className="main-container middle">
        <h1>{t("najem.naslov")}</h1>
        <p className="subtitle">{t("najem.podnaslov")}</p>

        <div className="button-container">
          {Object.keys(pricingData).map((periodKey) => (
            <button
              key={periodKey}
              className={`period-button ${
                selectedPeriod === periodKey ? "active" : ""
              }`}
              onClick={() => setSelectedPeriod(periodKey)}
            >
              {t(`najem.${periodKey}`)} {/* Apply correct translation */}
            </button>
          ))}
        </div>

        <div className="pricing-table">
          <div className="pricing-header">
            <div className="pricing-column">
              {t("najem.tabela.stevilo_enot")}
            </div>
            <div className="pricing-column">
              {selectedPeriod === t("trajanje.one")
                ? t("najem.tabela.popust")
                : t("najem.tabela.dodatni_popust")}
            </div>
            <div className="pricing-column">{t("najem.tabela.cena")}</div>
            <div className="pricing-column">{t("najem.tabela.skupna")}</div>
          </div>

          {/* Prevent error by providing a fallback empty array */}
          {(pricingData[selectedPeriod] || []).map((item, index) => (
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
          <p className="small">*CENE SO BREZ DDV</p>
        </div>
        <div className="price-text">
          <br />
          <br />
          <p>{t("najem.pripada_orange")}</p>{" "}
          <p className="big">{t("najem.pripada")}</p>
          <br />
          <p>{t("najem.dodatna_orange")}</p>{" "}
          <p className="small">{t("najem.dodatna_ponudba")}</p>
        </div>

        <div className="button-container">
          <button className="request-button" onClick={() => setShowPopup(true)}>
            {t("najem.kontakt")}
          </button>
        </div>

        {showPopup && (
          <div className="popup-overlay">
            <div className="popup-content">
              <h2>{t("najem.kontakt_popup")}</h2>
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
                {t("najem.kontakt_zapri")}
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
