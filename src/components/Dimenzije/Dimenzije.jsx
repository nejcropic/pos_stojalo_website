import React from "react";
import "./Dimenzije.css";
import {
  Dimenzije1,
  Dimenzije2,
  Posamicno_1,
  Posamicno_2,
  Posamicno_3,
  Skupna_1,
  Skupna_2,
} from "../..";

export default function Dimenzije({ refs }) {
  return (
    <div className="main-wrapper" ref={refs.dimenzijeRef}>
      <div className="main-container">
        <div className="dimenzije-item ">
          <img
            className="dimenzije-bigger"
            src={Dimenzije2}
            alt="grafične rešitve, dodana vrednost, blagovna znamka, interakcija"
          />
          <div className="dimenzije-divider">
            <div className="text-divider">
              <h2>DIMENZIJE LED OSVETLJENIH STOJAL</h2>
              <ul>
                <li>
                  1. ENOTA: <p>ŠIRINA</p> 1665 mm x <p>VIŠINA</p> 1415 mm x{" "}
                  <p>GLOBINA</p> 690 mm
                </li>
                <li>
                  2. ENOTA: <p>ŠIRINA</p> 990 mm x <p>VIŠINA</p> 1415 mm x{" "}
                  <p>GLOBINA</p> 690 mm
                </li>
                <li>
                  3. ENOTA: <p>ŠIRINA</p> 950 mm x <p>VIŠINA</p> 1415 mm x{" "}
                  <p>GLOBINA</p> 690 mm
                </li>
                <li>
                  4. ENOTA: <p>ŠIRINA</p> 845 mm x <p>VIŠINA</p> 1400 mm x{" "}
                  <p>GLOBINA</p> 915 mm
                </li>
                <li>
                  5. ENOTA: <p>ŠIRINA</p> 910 mm x <p>VIŠINA</p> 1400 mm x{" "}
                  <p>GLOBINA</p> 525 mm
                </li>
              </ul>
            </div>
            <img
              src={Dimenzije1}
              alt="marketinška rešitev, najem marketinške opreme,  najem pos stojal"
            />
          </div>
        </div>
        <hr className="dimenzije-line" />
      </div>
    </div>
  );
}
