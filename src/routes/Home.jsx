import React, { useRef } from "react";
import "../components/Home/Home.css";
import BackgroundSlider from "../components/BackgroundSlider/BackgroundSlider";
import Footer from "../components/Footer/Footer";
import NavBar from "../components/NavBar/NavBar";
/* 
import Projekti from "../components/Projekti/Projekti";
import Services from "../components/Services/Services";
import Kontakt from "../components/Kontakt/Kontakt"; */
import PriceList from "../components/PriceList/PriceList";
import Galerija from "../components/Galerija/Galerija";
import { Naslovnica } from "..";
function Home() {
  const cenikRef = useRef(null);
  const galerijaRef = useRef(null);

  const scrollDown = () => {
    window.scrollBy({
      top: window.innerHeight, // Scrolls down by 100vh
      behavior: "smooth", // Enables smooth scrolling
    });
  };
  return (
    <>
      {/* 
    <Hero
      storitveRef={storitveRef}
      projektiRef={projektiRef}
      kontaktRef={kontaktRef}
    />
    <Services ref={storitveRef} />
    <Projekti ref={projektiRef} />
    <Kontakt kontaktRef={kontaktRef} /> */}
      <NavBar
        refs={{
          cenikRef,
        }}
      />
      <div className="home-wrapper">
        <img src={Naslovnica} alt="" />
        <button onClick={scrollDown} className="scroll-button">
          Cenik
        </button>
      </div>
      {/* 
      <BackgroundSlider /> */}
      <PriceList
        refs={{
          cenikRef,
        }}
      />
      {/* 
      <Galerija
        refs={{
          galerijaRef,
        }}
      /> */}
      <Footer />
    </>
  );
}

export default Home;
