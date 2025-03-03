import { title } from "framer-motion/client";
import { useTranslation } from "react-i18next";

export const getPrednostiData = (t) => {
  return [
    {
      title: t("prednosti.stik.title"),
      text: t("prednosti.stik.text"),
    },
    {
      title: t("prednosti.prepoznavnost.title"),
      text: t("prednosti.prepoznavnost.text"),
    },
    {
      title: t("prednosti.prihranek.title"),
      text: t("prednosti.prihranek.text"),
    },
    {
      title: t("prednosti.predstavitev.title"),
      text: t("prednosti.predstavitev.text"),
    },
    {
      title: t("prednosti.marketing.title"),
      text: t("prednosti.marketing.text"),
    },
    {
      title: t("prednosti.dogodki.title"),
      text: t("prednosti.dogodki.text"),
    },
  ];
};
