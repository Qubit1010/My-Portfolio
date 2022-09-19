import React, { Fragment, useEffect } from "react";
import Aos from "aos";
import Header from "../components/Header";
import Footer from "../components/Footer";
import MyPic from "../assets/MyPic.jpg";
import MyPic2 from "../assets/MyPic2.png";
import MyPic3 from "../assets/MyPic3.png";

import { FaPhoneAlt, FaMailBulk, FaAddressBook, FaCheck } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";

import classes from "./AboutPage.module.css";

const AboutPage = () => {
  useEffect(() => {
    Aos.init({
      // Global settings:
      disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
      startEvent: "DOMContentLoaded", // name of the event dispatched on the document, that AOS should initialize on
      initClassName: "aos-init", // class applied after initialization
      animatedClassName: "aos-animate", // class applied on animation
      useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
      disableMutationObserver: false, // disables automatic mutations' detections (advanced)
      debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
      throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

      // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
      offset: 200, // offset (in px) from the original trigger point
      delay: 0, // values from 0 to 3000, with step 50ms
      duration: 1000, // values from 0 to 3000, with step 50ms
      easing: "ease", // default easing for AOS animations
      once: true, // whether animation should happen only once - while scrolling down
      mirror: false, // whether elements should animate out while scrolling past them
      anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
    });
  });
  
  return (
    <Fragment>
      <Header />
      <section >
        <div className={classes["about-page-container"]}>
          <div className={classes["heading-container"]} data-aos="fade-up">
            <h1>Aleem-Ul-Hassan</h1>
            <h2>Web-Developer</h2>
            {/* <h3>Computer Science Student</h3> */}
          </div>

          <div className={classes["main-content-container"]} data-aos="fade-up" >
            <div className={classes["main-content-left-block"]}>
              <div className={classes["left-info-block"]}>
                <h3>Biography</h3>
                <p>
                  I am from Pakistan, currently doing bachelore's in computer
                  science from a German University. I had worked for two
                  companies as front-end web developer. I also worked as Estate
                  Supervisor in a Govt. club and as SDC for Government.
                </p>
              </div>

              <h3>Experience</h3>
              <div className={classes["left-experience-info-block"]}>
                <div className={classes["experience-info-block"]}>
                  <h4>SDC</h4>
                  <h5>C&W Department - Quetta</h5>
                </div>

                <div className={classes["experience-info-block"]}>
                  <h4>Estate Supervisor</h4>
                  <h5>Sindh Govt. Officers Club - Karachi</h5>
                </div>

                <div className={classes["experience-info-block"]}>
                  <h4>Frontend Web Develpoer</h4>
                  <h5>Machotics - Karachi</h5>
                </div>

                <div className={classes["experience-info-block"]}>
                  <h4>Frontend React Web Develpoer</h4>
                  <h5>Precise Tech - Remote</h5>
                </div>
              </div>

              <h3>Education</h3>
              <div className={classes["left-education-info-block"]}>
                <div className={classes["education-info-block"]}>
                  <h4>Matric / Primary School</h4>
                  <h5>Cambridge School, Quetta</h5>
                </div>

                <div className={classes["education-info-block"]}>
                  <h4>Intermediate / High School</h4>
                  <h5>Islamia College, Quetta</h5>
                </div>

                <div className={classes["education-info-block-3rd"]}>
                  <h4>Bachelore's In Computer Science</h4>
                  <h5>IU Internatinal, Germany</h5>
                </div>
              </div>
            </div>

            <div className={classes["main-content-mid-block"]}>
              <img src={MyPic3} alt="" />
            </div>

            <div className={classes["main-content-right-block"]}>
              <div className={classes["right-contact-block"]}>
                <h2> Contact</h2>
                <h3>
                  <span>
                    <FaPhoneAlt />
                  </span>{" "}
                  0310-8820568
                </h3>
                <h3>
                  {" "}
                  <span>
                    <FaMailBulk />
                  </span>{" "}
                  Hassanaleem86@gmailcom
                </h3>
                <h3>
                  {" "}
                  <span>
                    <FaAddressBook />
                  </span>{" "}
                  Senior Assistant Colony near Governor House, Quetta
                </h3>
              </div>

              <div className={classes["right-contact-block"]}>
                <h2> Services</h2>
                <h3>
                  <span>
                    <FaCheck />
                  </span>{" "}
                  Website Design & Development
                </h3>
                <h3>
                  {" "}
                  <span>
                    <FaCheck />
                  </span>{" "}
                  Website Development in various CMS
                </h3>
                <h3>
                  {" "}
                  <span>
                    <FaCheck />
                  </span>{" "}
                  Development in Frameworks Like React
                </h3>
                <h3>
                  {" "}
                  <span>
                    <FaCheck />
                  </span>{" "}
                  React apps integration with Firebase
                </h3>
              </div>
            </div>
          </div>

          <div className={classes["certificate-section"]} data-aos="zoom-in-left">
            <h1>Certificates</h1>
            {/* 1st */}
            <div className={classes["certificate-content-block"]}>
              <div className={classes["content-block-left"]}>
                <h2>HTML, CSS, JAVASCRIPT FOR WEB DEVELOPER</h2>
                <h3>Coursera - John Hopkins University</h3>
              </div>

              <div className={classes["content-block-right"]}>
                <h3>Mar 2021</h3>
              </div>
            </div>
            {/* 2nd */}
            <div className={classes["certificate-content-block"]}>
              <div className={classes["content-block-left"]}>
                <h2>IT TECHNICAL SUPPORT</h2>
                <h3>Coursera - Google</h3>
              </div>

              <div className={classes["content-block-right"]}>
                <h3>Sep 2021</h3>
              </div>
            </div>
            {/* 3rd */}
            <div className={classes["certificate-content-block"]}>
              <div className={classes["content-block-left"]}>
                <h2>USER INTERFACE DESIGN</h2>
                <h3>Coursera - California Institute of Arts</h3>
              </div>

              <div className={classes["content-block-right"]}>
                <h3>Jan 2021</h3>
              </div>
            </div>
            {/* 4th */}
            <div className={classes["certificate-content-block"]}>
              <div className={classes["content-block-left"]}>
                <h2>JAVASCRIPT- THE COMPLETE GUIDE</h2>
                <h3>Udemy - By Maximilian</h3>
              </div>

              <div className={classes["content-block-right"]}>
                <h3>Jun 2020</h3>
              </div>
            </div>
            {/* 5th */}
            <div className={classes["certificate-content-block"]}>
              <div className={classes["content-block-left"]}>
                <h2>COMPLETE REACT DEVELOPER</h2>
                <h3>Udemy - By Andrei Neagoie</h3>
              </div>

              <div className={classes["content-block-right"]}>
                <h3>Nov 2020</h3>
              </div>
            </div>
          </div>

          <div className={classes["my-cv-section"]} data-aos="fade-up">
            <h1>
              Download My CV/Resume
              <span>
                <a
                  href="https://drive.google.com/file/d/1GPMk57ionk0aw6XcrDfCplMpYKFyr0R6/view"
                  target="blank"
                >
                  <FiArrowUpRight className={classes["left-block-icon"]} />
                </a>
              </span>
            </h1>
          </div>
        </div>
      </section>
      <Footer />
    </Fragment>
  );
};

export default AboutPage;
