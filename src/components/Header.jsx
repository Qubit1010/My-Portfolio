import React, { Fragment } from "react";
// import { Link, NavLink } from "react-router-dom"
import { FaFacebookSquare, FaLinkedin, FaGithub } from "react-icons/fa";

import Logo from "../assets/Logo.svg";
import classes from "./Header.module.css";

const Header = () => {
  return (
    <Fragment>
      <header>
        <nav className={classes["header-main-links"]}>
          <ul>
            <li> Works</li>
            <li>Contact</li>
            <li>About Me</li>
          </ul>
        </nav>
        <div className={classes["header-logo-container"]}>
          <img className={classes["header-logo"]} src={Logo} alt="" />
        </div>
        <nav className={classes["header-social-media-links"]}>
          <ul>
            <li>
              <FaFacebookSquare className={classes['header-icons']}/>
            </li>
            <li>
              <FaLinkedin className={classes['header-icons']}/>
            </li>
            <li>
              <FaGithub className={classes['header-icons']}/>
            </li>
          </ul>
        </nav>
      </header>
    </Fragment>
  );
};

export default Header;
