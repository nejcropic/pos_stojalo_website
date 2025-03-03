import React from "react";
import "./Prednosti.css";

import { useTranslation } from "react-i18next";
import { getPrednostiData } from "./PrednostiData";
export default function Prednosti({ refs }) {
  const { t } = useTranslation("global");
  const prednostiData = getPrednostiData(t);
  return (
    <div className="main-wrapper" ref={refs.prednostiRef}>
      <div className="main-container">
        <div className="prednosti-divider">
          <h1>PREDNOSTI NAJEMA STOJALA:</h1>
          <ol>
            {prednostiData.map((item, index) => (
              <li key={index} className="prednosti-item">
                <h2>{item.title}</h2>
                <p>{item.text}</p>
              </li>
            ))}
          </ol>
        </div>
        <hr className="dimenzije-line" />
      </div>
    </div>
  );
}
