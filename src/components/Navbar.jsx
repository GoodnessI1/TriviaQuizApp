import React from "react";
import brainLogo from "../Assets/brain_1by1.jpg";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./navbar.module.css";
import {
  faGamepad,
  faAdjust,
  faCircleInfo,
  faLaptopCode,
  faHouse,
} from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  const location = useLocation();

  const isGamePage =
    location.pathname === "/game" ||
    location.pathname === "/about-game" ||
    location.pathname === "/about-developer" ||
    location.pathname === "/result";

  const [showDropdown, setShowDropdown] = useState(false);

  const toggleTheme = () => {
    console.log("Theme toggled");
  };

  return (
    <nav className={styles.nav}>
      {/* *************** LOGO AND APP NAME *************** */}
      <div className={styles.logoNameDiv}>
        <img className={styles.appLogo} src={brainLogo} alt="Logo" />
        <h1 className={styles.appName}>QuizMaster</h1>
      </div>

      {/* *************** THEME TOGGLE AND ABOUT *************** */}
      <div className={styles.themeAboutDiv}>
        {/* ****** THEME TOGGLE ****** */}

        <div className={styles.themeButtonCon}>
          <button onClick={() => toggleTheme} className={styles.themeButton}>
            <FontAwesomeIcon icon={faAdjust} size="lg" />
          </button>
          <span className={styles.themeToolTip}>Theme</span>
        </div>

        {/* ****** ABOUT ****** */}
        {isGamePage ? (
          <Link to="/" className={styles.homeTab}>
            <FontAwesomeIcon
              icon={faHouse}
              size="lg"
              style={{ marginRight: "1vh" }}
            />
            Home
          </Link>
        ) : (
          <div
            style={{ position: "relative" }}
            onMouseEnter={() => setShowDropdown(true)}
            onMouseLeave={() => setShowDropdown(false)}
          >
            {/* ABOUT BUTTON */}
            <button className={styles.aboutButton}>
              {" "}
              <FontAwesomeIcon
                icon={faCircleInfo}
                size="lg"
                // style={{ marginRight: "2px" }}
              />{" "}
              About{" "}
            </button>

            {/* ABOUT DROPDOWN */}
            {showDropdown && (
              <div className={styles.dropDownDiv}>
                {/* GAME */}
                <Link to="/about-game" className={styles.dropDownOptions}>
                  {" "}
                  <FontAwesomeIcon
                    className={styles.dropIcon}
                    icon={faGamepad}
                    style={{ marginRight: "1px" }}
                  />{" "}
                  Game{" "}
                </Link>

                {/* DEVELOPER */}
                <Link to="/about-developer" className={styles.dropDownOptions}>
                  {" "}
                  <FontAwesomeIcon
                    className={styles.dropIcon}
                    icon={faLaptopCode}
                    style={{ marginRight: "1px" }}
                  />{" "}
                  Developer
                </Link>
              </div>
            )}
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
