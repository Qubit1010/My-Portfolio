import React, { useEffect } from "react";
import Aos from "aos";
import { Link } from "react-router-dom";
import { TbArrowBigDownLines } from "react-icons/tb";
import { FiArrowUpRight } from "react-icons/fi";
import classes from "./HeroBackground.module.css";

const HeroBackground = () => {
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
    <section>
      <div className={classes["hero-bg-container"]} data-aos="fade-up">
        {/* Left Block */}
        <div className={classes["hero-bg-left-block"]}>
          <h3>Hello!</h3>
          <h1>
            I'm Aleem-Ul-Hassan
            <span>
             <Link to='/about'><FiArrowUpRight className={classes["left-block-icon"]} /></Link> 
            </span>
          </h1>
          <h1>Front-End Web Developer</h1>
          <p>
            I craft modern-looking website based on clients' requirements with
            cutting edge technologies. I will make your website responsive,
            SEO-friendly, and rich with animations. I also make customizable CMS
            components and can also provide e-commerce functions for your
            project and useful plugins.
          </p>
        </div>
        {/* Right Block */}
        <div className={classes["hero-bg-right-block"]}>
          <div className={classes["right-block-top-content"]}>
            <div>
              <TbArrowBigDownLines className={classes["right-block-icon"]} />
            </div>
            <p>Get a quality service</p>
          </div>

          <div className={classes["right-block-content"]}>
            <h2>3+</h2>
            <p>Years of experience</p>
          </div>

          <div className={classes["right-block-content"]}>
            <h2>100%</h2>
            <p>Success rate</p>
          </div>

          <div className={classes["right-block-content"]}>
            <h2>32</h2>
            <p>Projects Completed</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBackground;
