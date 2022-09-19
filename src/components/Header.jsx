import React, { Fragment } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaFacebookSquare, FaLinkedin, FaGithub } from "react-icons/fa";

import Logo from "../assets/Logo.svg";
import classes from "./Header.module.css";

const Header = () => {
  return (
    <Fragment>
      <header>
        <nav className={classes["header-main-links"]}>
          <ul>
            <Link to='/works'>
              <li> Works</li>
            </Link>
            <Link to='/contact'>
              <li>Contact</li>
            </Link>
            <Link to='/about'>
              <li>About Me</li>
            </Link>
          </ul>
        </nav>
        <div className={classes["header-logo-container"]}>
          <Link to='/homepage'> <img className={classes["header-logo"]} src={Logo} alt="" /> </Link>
        </div>
        <nav className={classes["header-social-media-links"]}>
          <ul>
            <li>
              <a href="#">
                <FaFacebookSquare className={classes["header-icons"]} />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/qubit-state-253b0b201/"
                target="blank"
              >
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
      </header>
    </Fragment>
  );
};

export default Header;
