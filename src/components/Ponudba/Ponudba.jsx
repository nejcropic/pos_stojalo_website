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
        <div className="ponudba-item">
          <div className="text-divider">
            <h2>KOMPLET 1</h2>
            <ul>
              <li>Stojalo s polico spredaj</li>
              <li>Navadno stojalo 2x</li>
            </ul>
          </div>
          <div className="image-divider">
            <img src={Skupna_1} alt="" />
          </div>
        </div>
        <hr className="ponudba-line" />
        <div className="ponudba-item">
          <div className="text-divider">
            <h2>KOMPLET 2</h2>
            <ul>
              <li>Stojalo s polico ob strani 1x</li>
              <li>Navadno stojalo 1x</li>
            </ul>
          </div>
          <div className="image-divider">
            <img src={Posamicno_3} alt="" />
            <img src={Skupna_2} alt="" />
          </div>
        </div>
        <hr className="ponudba-line" />
        <div className="ponudba-item no-space">
          <div className="flex-posamicno">
            <div className="text-divider posamicno">
              <h2>POSAMIČNO</h2>
              <ul>
                <li>Omarica s polico spredaj 1x</li>
                <li>Omarica s policami ob strani 1x</li>
                <li>Navadno stojalo 3x</li>
              </ul>
            </div>
            <div className="flex-images">
              <img src={Posamicno_1} alt="" />
              <img src={Posamicno_3} alt="" />
            </div>
          </div>
          <img className="image-ponudba-1" src={Posamicno_2} alt="" />
        </div>
        <hr className="ponudba-line" />
      </div>
    </div>
  );
}
