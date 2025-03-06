import { useTranslation } from "react-i18next";

export const usePricingData = () => {
  const { t } = useTranslation("global");

  return {
    [t("trajanje.one")]: [
      { units: "1", discount: "-", pricePerUnit: 379.0, finalPrice: 379.0 },
      { units: "2", discount: "10%", pricePerUnit: 341.1, finalPrice: 682.2 },
      {
        units: t("najem.enote.third"),
        discount: "15%",
        pricePerUnit: 322.2,
        finalPrice: 966.5,
      },
      {
        units: "4",
        discount: "17.5%",
        pricePerUnit: 312.7,
        finalPrice: 1250.7,
      },
      {
        units: t("najem.enote.fifth"),
        discount: "20%",
        pricePerUnit: 303.2,
        finalPrice: 1516.0,
      },
    ],
    [t("trajanje.two")]: [
      { units: "1", discount: "5%", pricePerUnit: 360.1, finalPrice: 720.1 },
      {
        units: "2",
        discount: "5%",
        pricePerUnit: 324.0,
        finalPrice: 1296.2,
      },
      {
        units: t("najem.enote.third"),
        discount: "5%",
        pricePerUnit: 306.0,
        finalPrice: 1836.3,
      },
      { units: "4", discount: "5%", pricePerUnit: 297.0, finalPrice: 2376.3 },
      {
        units: t("najem.enote.fifth"),
        discount: "5%",
        pricePerUnit: 288.0,
        finalPrice: 2880.4,
      },
    ],
    [t("trajanje.three")]: [
      { units: "1", discount: "10%", pricePerUnit: 341.0, finalPrice: 1023.3 },
      { units: "2", discount: "10%", pricePerUnit: 307.0, finalPrice: 1841.9 },
      {
        units: t("najem.enote.third"),
        discount: "10%",
        pricePerUnit: 289.9,
        finalPrice: 2609.4,
      },
      { units: "4", discount: "10%", pricePerUnit: 281.4, finalPrice: 3379.9 },
      {
        units: t("najem.enote.fifth"),
        discount: "10%",
        pricePerUnit: 272.9,
        finalPrice: 4093.2,
      },
    ],
    [t("trajanje.four")]: [
      { units: "1", discount: "15%", pricePerUnit: 322.2, finalPrice: 1288.6 },
      { units: "2", discount: "15%", pricePerUnit: 289.9, finalPrice: 2319.6 },
      {
        units: t("najem.enote.third"),
        discount: "15%",
        pricePerUnit: 273.8,
        finalPrice: 3285.6,
      },
      { units: "4", discount: "15%", pricePerUnit: 265.8, finalPrice: 4252.4 },
      {
        units: t("najem.enote.fifth"),
        discount: "15%",
        pricePerUnit: 257.7,
        finalPrice: 5154.4,
      },
    ],
  };
};
