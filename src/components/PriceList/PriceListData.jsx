import { useTranslation } from "react-i18next";

export const usePricingData = () => {
  const { t } = useTranslation("global");

  return {
    1: [
      {
        units: 1,
        discount: 0.0,
        pricePerUnit: 230.0,
        finalPrice: 230.0,
        dailyCost: 230.0,
      },
      {
        units: 2,
        discount: 0.05,
        pricePerUnit: 460.0,
        finalPrice: 437.0,
        dailyCost: 218.5,
      },
      {
        units: 3,
        discount: 0.1,
        pricePerUnit: 690.0,
        finalPrice: 621.0,
        dailyCost: 207.0,
      },
      {
        units: 4,
        discount: 0.15,
        pricePerUnit: 920.0,
        finalPrice: 782.0,
        dailyCost: 195.5,
      },
      {
        units: 5,
        discount: 0.2,
        pricePerUnit: 1150.0,
        finalPrice: 920.0,
        dailyCost: 184.0,
      },
    ],
    2: [
      {
        units: 1,
        discount: 0.05,
        pricePerUnit: 267.0,
        finalPrice: 253.65,
        dailyCost: 126.82,
      },
      {
        units: 2,
        discount: 0.05,
        pricePerUnit: 534.0,
        finalPrice: 485.45,
        dailyCost: 121.36,
      },
      {
        units: 3,
        discount: 0.05,
        pricePerUnit: 801.0,
        finalPrice: 695.4,
        dailyCost: 115.9,
      },
      {
        units: 4,
        discount: 0.05,
        pricePerUnit: 1068.0,
        finalPrice: 883.5,
        dailyCost: 110.44,
      },
      {
        units: 5,
        discount: 0.05,
        pricePerUnit: 1335.0,
        finalPrice: 1049.75,
        dailyCost: 104.98,
      },
    ],
    3: [
      {
        units: 1,
        discount: 0.1,
        pricePerUnit: 304.0,
        finalPrice: 273.6,
        dailyCost: 91.2,
      },
      {
        units: 2,
        discount: 0.1,
        pricePerUnit: 585.0,
        finalPrice: 526.5,
        dailyCost: 87.75,
      },
      {
        units: 3,
        discount: 0.1,
        pricePerUnit: 843.0,
        finalPrice: 758.7,
        dailyCost: 84.3,
      },
      {
        units: 4,
        discount: 0.1,
        pricePerUnit: 1078.0,
        finalPrice: 970.2,
        dailyCost: 80.85,
      },
      {
        units: 5,
        discount: 0.1,
        pricePerUnit: 1290.0,
        finalPrice: 1161.0,
        dailyCost: 77.4,
      },
    ],
    4: [
      {
        units: 1,
        discount: 0.125,
        pricePerUnit: 341.0,
        finalPrice: 298.38,
        dailyCost: 74.59,
      },
      {
        units: 2,
        discount: 0.125,
        pricePerUnit: 659.0,
        finalPrice: 576.63,
        dailyCost: 72.08,
      },
      {
        units: 3,
        discount: 0.125,
        pricePerUnit: 954.0,
        finalPrice: 834.75,
        dailyCost: 69.56,
      },
      {
        units: 4,
        discount: 0.125,
        pricePerUnit: 1226.0,
        finalPrice: 1072.75,
        dailyCost: 67.05,
      },
      {
        units: 5,
        discount: 0.125,
        pricePerUnit: 1475.0,
        finalPrice: 1290.63,
        dailyCost: 64.53,
      },
    ],
    5: [
      {
        units: 1,
        discount: 0.15,
        pricePerUnit: 378.0,
        finalPrice: 321.3,
        dailyCost: 64.26,
      },
      {
        units: 2,
        discount: 0.15,
        pricePerUnit: 733.0,
        finalPrice: 623.05,
        dailyCost: 62.3,
      },
      {
        units: 3,
        discount: 0.15,
        pricePerUnit: 1065.0,
        finalPrice: 905.25,
        dailyCost: 60.35,
      },
      {
        units: 4,
        discount: 0.15,
        pricePerUnit: 1374.0,
        finalPrice: 1167.9,
        dailyCost: 58.39,
      },
      {
        units: 5,
        discount: 0.15,
        pricePerUnit: 1660.0,
        finalPrice: 1411.0,
        dailyCost: 56.44,
      },
    ],
    6: [
      {
        units: 1,
        discount: 0.175,
        pricePerUnit: 415.0,
        finalPrice: 342.38,
        dailyCost: 57.06,
      },
      {
        units: 2,
        discount: 0.175,
        pricePerUnit: 807.0,
        finalPrice: 665.78,
        dailyCost: 55.48,
      },
      {
        units: 3,
        discount: 0.175,
        pricePerUnit: 1176.0,
        finalPrice: 970.2,
        dailyCost: 53.9,
      },
      {
        units: 4,
        discount: 0.175,
        pricePerUnit: 1522.0,
        finalPrice: 1255.65,
        dailyCost: 52.32,
      },
      {
        units: 5,
        discount: 0.175,
        pricePerUnit: 1845.0,
        finalPrice: 1255.65,
        dailyCost: 50.74,
      },
    ],
    7: [
      {
        units: 1,
        discount: 0.2,
        pricePerUnit: 452,
        finalPrice: 361.6,
        dailyCost: 51.66,
      },
      {
        units: 2,
        discount: 0.2,
        pricePerUnit: 881.0,
        finalPrice: 704.8,
        dailyCost: 50.34,
      },
      {
        units: 3,
        discount: 0.2,
        pricePerUnit: 1287.0,
        finalPrice: 1029.6,
        dailyCost: 49.03,
      },
      {
        units: 4,
        discount: 0.2,
        pricePerUnit: 1670.0,
        finalPrice: 1336.0,
        dailyCost: 47.71,
      },
      {
        units: 5,
        discount: 0.2,
        pricePerUnit: 1670.0,
        finalPrice: 1336.0,
        dailyCost: 46.4,
      },
    ],
  };
};
