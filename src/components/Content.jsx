import React from "react";
import { Routes, Route } from "react-router-dom";
import styles from "./content.module.css";
import background1 from "../Assets/929f5c2f712b0ce3b89d306fa366dceb.jpg";
import background2 from "../Assets/18e6d752aa8a073b4664794f4cd4b0b8.jpg";
import Home from "../screens/Home";
import AboutGame from "../screens/AboutGame";
import AboutDev from "../screens/AboutDev";
import GameScreen from "../screens/GameScreen";
import ResultScreen from "../screens/ResultScreen";
import GameLoader from "../screens/GameLoader";

function Content() {
  return (
    <div className={styles.mainContent}>
      <img src={background1} className={styles.topLeft} alt="Curiosity" />
      <img src={background2} className={styles.bottomRight} alt="Wonder" />

      <div className={styles.content}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/game" element={<GameScreen />} />
          <Route path="/loader" element={<GameLoader />} />
          <Route path="/result" element={<ResultScreen />} />
          <Route path="/about-game" element={<AboutGame />} />
          <Route path="/about-developer" element={<AboutDev />} />
        </Routes>
      </div>
    </div>
  );
}

export default Content;
