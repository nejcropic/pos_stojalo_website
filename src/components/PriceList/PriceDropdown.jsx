import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import "./PriceList.css";

const dropdownVariants = {
  open: {
    opacity: 1,
    height: "auto",
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 24,
    },
  },
  closed: {
    opacity: 0,
    height: 0,
    transition: { duration: 0.2 },
  },
};

const PeriodDropdown = ({ selectedPeriod, setSelectedPeriod }) => {
  const { t } = useTranslation("global"); // Use the correct namespace
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="period-dropdown">
      <motion.button
        whileTap={{ scale: 0.97 }}
        className="period-dropdown-toggle"
        onClick={() => setIsOpen(!isOpen)}
      >
        {t(`najem.trajanje.${String(selectedPeriod)}`) || t("najem.select_day")}
      </motion.button>
      <motion.ul
        className="period-dropdown-menu"
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        variants={dropdownVariants}
      >
        {[...Array(7).keys()].map((day) => (
          <motion.li
            key={day + 1}
            onClick={() => {
              setSelectedPeriod(day + 1);
              setIsOpen(false);
            }}
            className={selectedPeriod === day + 1 ? "active" : ""}
          >
            {t(`najem.trajanje.${String(day + 1)}`)}
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
};

export default PeriodDropdown;
