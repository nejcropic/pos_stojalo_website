import React, { useEffect } from "react";
import App from "./App";
import { createRoot } from "react-dom/client";
import { HashRouter } from "react-router-dom";

import Logo from "./images/logo.png";
import Logo_transparent from "./images/logo_transparent.png";
import Naslovnica from "./images/naslovnica.png";
import Posamicno_1 from "./images/posamicno_1.jpg";
import Posamicno_2 from "./images/posamicno_2.jpg";
import Posamicno_3 from "./images/posamicno_3.jpg";

import Skupna_1 from "./images/skupna_1.jpg";
import Skupna_2 from "./images/skupna_2.jpg";

import PhoneIcon from "./icons/phone-call.png";
import MailIcon from "./icons/mail.png";

const PreloadImages = () => {
  useEffect(() => {
    const imagesToPreload = [
      Logo,
      Logo_transparent,
      Naslovnica,
      Posamicno_1,
      Posamicno_2,
      Posamicno_3,
      Skupna_1,
      Skupna_2,
      PhoneIcon,
      MailIcon,
    ];

    imagesToPreload.forEach((imageSrc) => (new Image().src = imageSrc));
  }, []);
};

export {
  Logo,
  Logo_transparent,
  Naslovnica,
  Posamicno_1,
  Posamicno_2,
  Posamicno_3,
  Skupna_1,
  Skupna_2,
  PhoneIcon,
  MailIcon,
};

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <HashRouter>
      <PreloadImages />
      <App />
    </HashRouter>
  </React.StrictMode>
);
