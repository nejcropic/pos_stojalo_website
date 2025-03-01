import React from "react";
import "./Ponudba.css";
import {
  Posamicno_1,
  Posamicno_2,
  Posamicno_3,
  Skupna_1,
  Skupna_2,
} from "../..";

export default function Ponudba({ refs }) {
  return (
    <div className="main-wrapper" ref={refs.ponudbaRef}>
      <div className="main-container">
        <h1>PONUDBA</h1>
        <div className="ponudba-wrapper">
          {/* KOMPLET 1 */}
          <div className="ponudba-item">
            <div className="text-divider">
              <h2>KOMPLET 1</h2>
              <ul>
                <li>Stojalo s polico spredaj</li>
                <li>Navadno stojalo 2x</li>
              </ul>
            </div>
            <div className="image-divider one-image">
              <img
                src={Skupna_1}
                alt="Led, komplet pos stojal, dogodki, sejmi, marketinška oprema"
              />
            </div>
          </div>
          <hr className="ponudba-line" />

          {/* KOMPLET 2 */}
          <div className="ponudba-item">
            <div className="text-divider">
              <h2>KOMPLET 2</h2>
              <ul>
                <li>Stojalo s polico ob strani 1x</li>
                <li>Navadno stojalo 1x</li>
              </ul>
            </div>
            <div className="image-divider two-image">
              <img src={Posamicno_3} alt="Profesionalnost " />
              <img
                src={Skupna_2}
                alt="prodaja, oglaševalske rešitve, izpostavitev branda"
              />
            </div>
          </div>
          <hr className="ponudba-line" />

          {/* POSAMIČNO */}
          <div className="ponudba-item">
            <div className="flex-posamicno">
              <div className="text-divider">
                <h2>POSAMIČNO</h2>
                <ul>
                  <li>Omarica s polico spredaj 1x</li>
                  <li>Omarica s policami ob strani 1x</li>
                  <li>Navadno stojalo 3x</li>
                </ul>
              </div>
              <div className="image-divider two-image full">
                <img
                  src={Posamicno_1}
                  alt="Komunikacija, mobilnost, znamka, logotip, promocija, design, osvetlitev"
                />
                <img
                  src={Posamicno_3}
                  alt="Prepoznavnost, personalizacija branda, marketinški dogodki, promocija"
                />
              </div>
            </div>
            <div className="ponudba-image">
              <img
                src={Posamicno_2}
                alt="Marketinška oprema, predajanje sporočila, kampanje, oglaševanje,"
              />
            </div>
          </div>
          <hr className="ponudba-line" />
          {/* -- */}
        </div>
      </div>
    </div>
  );
}
