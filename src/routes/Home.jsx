import React, { useRef, useState } from "react";
import "../components/Home/Home.css";
import BackgroundSlider from "../components/BackgroundSlider/BackgroundSlider";
import Footer from "../components/Footer/Footer";
import NavBar from "../components/NavBar/NavBar";
import Kontakt from "../components/Kontakt/Kontakt";
import PriceList from "../components/PriceList/PriceList";
import Galerija from "../components/Galerija/Galerija";
import { Naslovnica } from "..";
import Prednosti from "../components/Prednosti/Prednosti";
import Ponudba from "../components/Ponudba/Ponudba";
import Dimenzije from "../components/Dimenzije/Dimenzije";

function Home() {
  const [imageLoaded, setImageLoaded] = useState(false);
  const ponudbaRef = useRef(null);
  const prednostiRef = useRef(null);
  const dimenzijeRef = useRef(null);
  const cenikRef = useRef(null);
  const kontaktRef = useRef(null);

  const scrollDown = () => {
    if (cenikRef.current) {
      cenikRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <>
      <NavBar
        refs={{ ponudbaRef, prednostiRef, dimenzijeRef, cenikRef, kontaktRef }}
      />

      <div className="home-wrapper">
        <div className="home-image-div">
          <img
            src={Naslovnica}
            alt="Naslovnica Image"
            className={imageLoaded ? "loaded" : ""}
            onLoad={() => setImageLoaded(true)}
            loading="lazy"
          />
        </div>
        <button className="scroll-button">Cenik</button>
      </div>

      {/* <BackgroundSlider /> */}
      <Ponudba refs={{ ponudbaRef }} />
      <Prednosti refs={{ prednostiRef }} />
      <Dimenzije refs={{ dimenzijeRef }} />
      <PriceList refs={{ cenikRef }} />

      {/* <Galerija refs={{ galerijaRef }} /> */}
      <Kontakt refs={{ kontaktRef }} />
      <Footer />
    </>
  );
}

export default Home;
