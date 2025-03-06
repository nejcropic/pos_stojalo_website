import React from "react";
import "./Dimenzije.css";
import { useTranslation } from "react-i18next";
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
  const { t } = useTranslation("global");
  return (
    <div className="main-wrapper" ref={refs.dimenzijeRef}>
      <div className="main-container">
        <div className="dimenzije-item ">
          <div className="dimenzije-image">
            <img
              src={Dimenzije2}
              alt="grafične rešitve, dodana vrednost, blagovna znamka, interakcija"
            />
          </div>
          <div className="dimenzije-divider">
            <div className="dimenzije-text-divider">
              <h2>{t("dimenzije.naslov")}</h2>
              <ul>
                <li>
                  {t("dimenzije.enote.first")}: <p>{t("dimenzije.sirina")}</p>{" "}
                  1665 mm x <p>{t("dimenzije.visina")}</p> 1415 mm x{" "}
                  <p>{t("dimenzije.globina")}</p> 690 mm
                </li>
                <li>
                  {t("dimenzije.enote.second")}: <p>{t("dimenzije.sirina")}</p>{" "}
                  990 mm x <p>{t("dimenzije.visina")}</p> 1415 mm x{" "}
                  <p>{t("dimenzije.globina")}</p> 690 mm
                </li>
                <li>
                  {t("dimenzije.enote.third")}: <p>{t("dimenzije.sirina")}</p>{" "}
                  950 mm x <p>{t("dimenzije.visina")}</p> 1415 mm x{" "}
                  <p>{t("dimenzije.globina")}</p> 690 mm
                </li>
                <li>
                  {t("dimenzije.enote.fourth")}: <p>{t("dimenzije.sirina")}</p>{" "}
                  845 mm x <p>{t("dimenzije.visina")}</p> 1400 mm x{" "}
                  <p>{t("dimenzije.globina")}</p> 915 mm
                </li>
                <li>
                  {t("dimenzije.enote.fifth")}: <p>{t("dimenzije.sirina")}</p>{" "}
                  910 mm x <p>{t("dimenzije.visina")}</p> 1400 mm x{" "}
                  <p>{t("dimenzije.globina")}</p> 525 mm
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
