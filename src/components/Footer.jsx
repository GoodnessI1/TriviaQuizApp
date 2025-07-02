import React from "react";
import styles from "./footer.module.css";
import {
  FaTwitter,
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
  FaGithub,
} from "react-icons/fa";

function Footer() {
  return (
    <div className={styles.footerCon}>
      <div className={styles.movingTxtWrapper}>
        <div className={styles.movingTextCon}>
          <p className={styles.movingText}>
            "Test your mind. Learn something new. Beat the quiz — if you can."
          </p>
          <p className={styles.movingText}>
            "Did you know? Honey never spoils. The Eiffel Tower can grow in
            summer. Keep playing to discover more!"
          </p>
          <p className={styles.movingText}>
            "Every question you answer is one step smarter. Keep going —
            knowledge is power."
          </p>
          <p className={styles.movingText}>
            "Tip: You can switch themes anytime from the top bar. Want to learn
            more about this game? Check the About section."
          </p>
        </div>
      </div>

      <div className={styles.textMediaDiv}>
        <p className={styles.appText}>
          <span className={styles.SnText}>SmartNerds</span> &copy; 2025. All
          rights reserved.
        </p>

        <div className="styles.mediaIconsCon">
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.mediaIcons}
            // style={{ color: "white" }}
          >
            <FaTwitter size={20} />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.mediaIcons}
            // style={{ color: "white" }}
          >
            <FaFacebook size={20} />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.mediaIcons}
            // style={{ color: "white" }}
          >
            <FaInstagram size={20} />
          </a>
          <a
            href="https://wa.me/2341234567890"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.mediaIcons}
            // style={{ color: "white" }}
          >
            <FaWhatsapp size={20} />
          </a>

          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.mediaIcons}
            // style={{ color: "white" }}
          >
            <FaGithub size={20} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
