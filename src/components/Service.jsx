import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { BsPeopleFill } from "react-icons/bs";
import { AiOutlineAntDesign } from "react-icons/ai";
import { FaCode } from "react-icons/fa";
import classes from "./Service.module.css";

const Service = () => {
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
      <div className={classes["service-container"]}>
        <div
          className={classes["service-top-content"]}
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
        >
          <h1>My Services</h1>
          <p>
            We put quality and clients requirements on top of the priority list.
          </p>
        </div>

        <div className={classes["service-cards-container"]}>
          <div className={classes["service-card"]} data-aos="fade-right">
            <BsPeopleFill className={classes["service-card-icon"]} />
            <h1>UI/UX Design</h1>
            <p>I can provide you with the best UI/UX design experience.</p>
          </div>

          <div
            className={classes["service-card-mid"]}
            data-aos="fade-up"
            data-aos-delay="50"
          >
            <AiOutlineAntDesign className={classes["service-card-icon"]} />
            <h1>Indentity Design</h1>
            <p>
              I have experience in graphics design too, and can create identity
              logo or business cards etc..
            </p>
          </div>

          <div className={classes["service-card"]} data-aos="fade-left">
            <FaCode className={classes["service-card-icon"]} />
            <h1>Development</h1>
            <p>
              I can create website from using frontend technologies like
              HTML/CSS/JavaScript and frontend frameworks like
              React/Bootsrape/Firebase and other Web APIs. I can also create
              website on CMS like webflow.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
