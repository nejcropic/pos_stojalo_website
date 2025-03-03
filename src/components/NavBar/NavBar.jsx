import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import "./NavBar.css";
import {
  mobileMenuVariant,
  fadeInVariant,
  ulVariant,
  liVariant,
  hideNavItemsVariant,
} from "../animations.jsx";
import { getNavMenuItems } from "./NavMenuItems.jsx";
import { Logo_transparent } from "../..";

const NavBar = ({ refs }) => {
  const { t } = useTranslation("global");
  const NavMenuItems = getNavMenuItems(t);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [isScrollingDown, setIsScrollingDown] = useState(false);
  const lastScrollY = useRef(0); // ✅ Use useRef instead of state

  useEffect(() => {
    const handleScroll = () => {
      const scrollThreshold = window.innerWidth; // 100vh
      const currentScrollY = window.scrollY;

      if (
        currentScrollY > lastScrollY.current &&
        currentScrollY > scrollThreshold
      ) {
        setIsScrollingDown(true);
      } else {
        setIsScrollingDown(false);
      }

      lastScrollY.current = currentScrollY; // ✅ Update ref instead of state
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToRef = (refName) => {
    const ref = refs[refName];
    if (ref && ref.current) {
      window.scrollTo({
        top: ref.current.offsetTop,
        behavior: "smooth",
      });
      setMobileNavOpen(false);
    }
  };

  return (
    <main className="container">
      <motion.nav
        initial="closed"
        className={`${isScrollingDown ? "hide-nav" : ""}`} // ✅ This should now work
        animate={mobileNavOpen ? "opened" : "closed"}
      >
        <div className="menu-container">
          <img src={Logo_transparent} alt="" className="heart-image" />
          <motion.div
            variants={hideNavItemsVariant}
            onClick={() => setMobileNavOpen(true)}
          >
            <i className="fas fa-bars"></i>
          </motion.div>
        </div>
        <motion.div variants={mobileMenuVariant} className="mobile-menu">
          <motion.button
            variants={fadeInVariant}
            onClick={() => setMobileNavOpen(false)}
          >
            <i className="fas fa-times"></i>
          </motion.button>
          <motion.ul variants={ulVariant}>
            {NavMenuItems.map((navItem) => (
              <motion.li whileTap={{ scale: 0.95 }} key={navItem.id}>
                <motion.div
                  onClick={() => scrollToRef(navItem.ref)}
                  variants={liVariant}
                >
                  {navItem.title}
                </motion.div>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </motion.nav>
    </main>
  );
};

export default NavBar;
