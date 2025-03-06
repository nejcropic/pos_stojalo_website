import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import "./LanguageDropdown.css";
import Slovenia from "../../icons/slovenia.png";
import Croatia from "../../icons/croatia.png";
import Italy from "../../icons/italy.png";
import English from "../../icons/united-kingdom.png";
import Germany from "../../icons/germany.png";

const containerVariants = {
  open: {
    clipPath: "inset(0% 0% 0% 0% round 10px)",
    transition: {
      type: "spring",
      bounce: 0,
      duration: 0.7,
      delayChildren: 0.3,
      staggerChildren: 0.05,
    },
  },
  closed: {
    clipPath: "inset(90% 50% 10% 50% round 10px)",
    transition: {
      type: "spring",
      bounce: 0,
      duration: 0.3,
    },
  },
};

const itemVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 },
  },
  closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
};

const languageIcons = {
  si: Slovenia,
  en: English,
  de: Germany,
  it: Italy,
  sh: Croatia,
};

const LanguageNav = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    setIsOpen(false);
  };

  return (
    <div className="language-dropdown">
      <motion.button
        whileTap={{ scale: 0.97 }}
        className="dropdown-toggle"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="selected-language">
          <img
            src={languageIcons[i18n.language]}
            alt=""
            className="selected-icon"
          />
        </div>
      </motion.button>
      <motion.ul
        className="dropdown-menu"
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        variants={containerVariants}
      >
        <motion.li
          onClick={() => changeLanguage("si")}
          className={i18n.language === "si" ? "active" : ""}
          variants={itemVariants}
        >
          <img src={Slovenia} alt="Slovenian" />
        </motion.li>
        <motion.li
          onClick={() => changeLanguage("en")}
          className={i18n.language === "en" ? "active" : ""}
          variants={itemVariants}
        >
          <img src={English} alt="English" />
        </motion.li>
        <motion.li
          onClick={() => changeLanguage("de")}
          className={i18n.language === "de" ? "active" : ""}
          variants={itemVariants}
        >
          <img src={Germany} alt="German" />
        </motion.li>
        <motion.li
          onClick={() => changeLanguage("it")}
          className={i18n.language === "it" ? "active" : ""}
          variants={itemVariants}
        >
          <img src={Italy} alt="Italian" />
        </motion.li>
        <motion.li
          onClick={() => changeLanguage("sh")}
          className={i18n.language === "sh" ? "active" : ""}
          variants={itemVariants}
        >
          <img src={Croatia} alt="Croatian" />
        </motion.li>
      </motion.ul>
    </div>
  );
};

export default LanguageNav;
