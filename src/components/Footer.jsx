import React from "react";
import {
  FaFacebookSquare,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

import Logo from "../assets/Logo.svg";
import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <footer>
      <div className={classes["footer-container"]}>
        {/* Left Block */}
        <div className={classes["footer-left-block"]}>
          <img src={Logo} className={classes["footer-logo"]} alt="" />
          <div className={classes["footer-left-block-info"]}>
            <h3>hassanaleem86@gmail.com</h3>
            <h4>+92 3108820568</h4>
          </div>
          <h2>©2022</h2>
        </div>
        
        {/* Right Block */}
        <div className={classes["footer-right-block"]}>
          <div className={classes["footer-right-block-top"]}>
            <h1>Ready to work with me?</h1>
            <button>Contact Me</button>
          </div>
          <div className={classes["footer-right-block-bottom"]}>
            <nav className={classes["footer-social-media-links"]}>
              <ul>
                <li>
                  <a href="https://www.facebook.com/">
                    <FaFacebookSquare className={classes["header-icons"]} target="blank" />
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/qubit-state-253b0b201/" target="blank">
                    <FaLinkedin className={classes["header-icons"]} />
                  </a>
                </li>
                <li>
                  <a href="https://github.com/Qubit1010" target="blank">
                    <FaGithub className={classes["header-icons"]} />
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
