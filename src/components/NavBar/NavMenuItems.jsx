import { useTranslation } from "react-i18next";

export const getNavMenuItems = (t) => {
  return [
    {
      id: 0,
      title: t("nav.ponudba"),
      ref: "ponudbaRef",
      cName: "nav-links",
    },
    {
      id: 1,
      title: t("nav.prednosti"),
      ref: "prednostiRef",
      cName: "nav-links",
    },
    {
      id: 2,
      title: t("nav.dimenzije"),
      ref: "dimenzijeRef",
      cName: "nav-links",
    },
    {
      id: 3,
      title: t("nav.cenik"),
      ref: "cenikRef",
      cName: "nav-links",
    },
    {
      id: 4,
      title: t("nav.kontakt"),
      ref: "kontaktRef",
      cName: "nav-links",
    },
  ];
};
