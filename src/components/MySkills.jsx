import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { FaReact, FaHtml5, FaCss3, FaFigma, FaBootstrap } from "react-icons/fa";
import { DiJavascript1 } from "react-icons/di";
import {
  SiRedux,
  SiFirebase,
  SiWebflow,
  SiAdobexd,
  SiGit,
  SiGithub,
} from "react-icons/si";

import classes from "./MySkills.module.css";

const MySkills = () => {
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
      once: false, // whether animation should happen only once - while scrolling down
      mirror: false, // whether elements should animate out while scrolling past them
      anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
    });
  });

  return (
    <section className={classes["myskills-container"]}>
      <h1  data-aos="fade-up" >My Tech Skills</h1>
      <div className={classes["myskills-cards-container"]} data-aos="flip-up" data-aos-duration="1400" data-aos-delay="50">
        <div className={classes["myskills-card-content"]}>
          <FaHtml5 className={classes["myskills-icon"]} />
          <h2>HTML</h2>
        </div>

        <div className={classes["myskills-card-content"]}>
          <FaCss3 className={classes["myskills-icon"]} />
          <h2>CSS</h2>
        </div>

        <div className={classes["myskills-card-content"]}>
          <DiJavascript1 className={classes["myskills-icon"]} />
          <h2>JavaScript</h2>
        </div>

        <div className={classes["myskills-card-content"]}>
          <FaReact className={classes["myskills-icon"]} />
          <h2>React</h2>
        </div>

        <div className={classes["myskills-card-content"]}>
          <SiRedux className={classes["myskills-icon"]} />
          <h2>Redux</h2>
        </div>

        <div className={classes["myskills-card-content"]}>
          <SiFirebase className={classes["myskills-icon"]} />
          <h2>Firebase</h2>
        </div>

        <div className={classes["myskills-card-content"]}>
          <SiWebflow className={classes["myskills-icon"]} />
          <h2>Webflow</h2>
        </div>

        <div className={classes["myskills-card-content"]}>
          <FaFigma className={classes["myskills-icon"]} />
          <h2>Figma</h2>
        </div>

        <div className={classes["myskills-card-content"]}>
          <SiAdobexd className={classes["myskills-icon"]} />
          <h2>Adobe Xd</h2>
        </div>

        <div className={classes["myskills-card-content"]}>
          <FaBootstrap className={classes["myskills-icon"]} />
          <h2>Bootstrap</h2>
        </div>

        <div className={classes["myskills-card-content"]}>
          <SiGit className={classes["myskills-icon"]} />
          <h2>Git</h2>
        </div>

        <div className={classes["myskills-card-content"]}>
          <SiGithub className={classes["myskills-icon"]} />
          <h2>Github</h2>
        </div>
      </div>
    </section>
  );
};

export default MySkills;
