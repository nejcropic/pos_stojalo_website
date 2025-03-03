import React from "react";
import "./Ponudba.css";
import { useTranslation } from "react-i18next";
import {
  Posamicno_1,
  Posamicno_2,
  Posamicno_3,
  Skupna_1,
  Skupna_2,
} from "../..";

export default function Ponudba({ refs }) {
  const { t } = useTranslation("global");
  return (
    <div className="main-wrapper" ref={refs.ponudbaRef}>
      <div className="main-container">
        <h1>{t("ponudba.naslov")}</h1>
        <div className="ponudba-wrapper">
          {/* KOMPLET 1 */}
          <div className="ponudba-item">
            <div className="text-divider">
              <h2>{t("ponudba.komplet_1.naslov")}</h2>
              <ul>
                <li>{t("ponudba.komplet_1.stojalo")}</li>
                <li>{t("ponudba.komplet_1.navadno")}</li>
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
              <h2>{t("ponudba.komplet_2.naslov")}</h2>
              <ul>
                <li>{t("ponudba.komplet_2.stojalo")}</li>
                <li>{t("ponudba.komplet_2.navadno")}</li>
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
                <h2>{t("ponudba.posamicno.naslov")}</h2>
                <ul>
                  <li>{t("ponudba.posamicno.stojalo")}</li>
                  <li>{t("ponudba.posamicno.navadno")}</li>
                  <li>{t("ponudba.posamicno.stojalo2")}</li>
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
