import React from "react";
import "./Kontakt.css";
import { Link } from "react-router-dom";
import { Logo, Logo_transparent } from "../..";

export default function Kontakt({ refs }) {
  return (
    <div className="main-wrapper" ref={refs.kontaktRef}>
      <hr className="dimenzije-line" />
      <div className="main-container center">
        <h1>KONTAKTIRAJTE NAS:</h1>
        <div className="kontakt-divider">
          <a href="tel:+38640772130">LAN: 040 772 130</a>
          <a href="mailto:info@brecelj.eu">INFO@BRECELJ.EU</a>

          <div className="link-divider">
            <a href="https://www.brecelj.eu/">WWW.BRECELJ.EU /</a>
            <a href="https://www.brecelj.co/"> BRECELJ.CO </a>
          </div>
          <a>#BRECELJGRAFIKA</a>
          <br />
          <p>
            BRECELJ GRAFIKA D.O.O &#x2022; LITIJSKA CESTA 38 &#x2022; 1000
            LJUBLJANA
          </p>
          <p>P.E: ŠENTJAKOB 38 &#x2022; 1231 LJUBLJANA - ČRNUČE</p>
          <img src={Logo} alt="" />
        </div>
      </div>
    </div>
  );
}
