import React, { useEffect } from "react";
import { FaQuoteLeft } from "react-icons/fa";
import TestimonialPic1 from "../assets/TestimonialPic1.JPG";
import TestimonialPic2 from "../assets/TestimonialPic2.jpg";
import TestimonialPic3 from "../assets/TestimonialPic3.jpg";
import Aos from "aos";
import "aos/dist/aos.css";
import classes from "./Testimonials.module.css";

const Testimonials = () => {
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
      offset: 120, // offset (in px) from the original trigger point
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
      {/* 1st Testimonial */}
      <div
        className={classes["testimonials-container"]}
        data-aos="fade-up"
        data-aos-anchor-placement="bottom-bottom"
      >
        <h1>Testimonials</h1>
        <div className={classes["testimonial-content-container"]}>
          <div className={classes["testimonial-img-block"]}>
            <img
              src={TestimonialPic1}
              alt=""
              className={classes["testimonial-img"]}
            />
          </div>
          <div className={classes["testimonial-info-block"]}>
            <p>
              <span>
                <FaQuoteLeft className={classes["testimonial-quote"]} />
              </span>{" "}
              Great work done here! Very attentive and communicates well! Would
              definitely consider Qubit for additional work!! 10 out 10!
            </p>
            <h2>Sarah Thompsen</h2>
          </div>
        </div>
      </div>
      {/* 2nd Testimonial */}
      <div
        className={classes["testimonials-container"]}
        data-aos="fade-up"
        data-aos-anchor-placement="bottom-bottom"
      >
        <div className={classes["testimonial-content-container"]}>
          <div className={classes["testimonial-img-block"]}>
            <img
              src={TestimonialPic3}
              alt=""
              className={classes["testimonial-img"]}
            />
          </div>
          <div className={classes["testimonial-info-block"]}>
            <p>
              <span>
                <FaQuoteLeft className={classes["testimonial-quote"]} />
              </span>{" "}
              It was a pleasure working with Qubit. We had a quick call to
              discuss what needs to be done and Qubit was ready to help right
              away - he fixed the navigation animation in Webflow. Very
              professional, friendly, and responsive. Would be happy to work
              with Qubit again if such an opportunity arises. Highly recommend!
            </p>
            <h2>Olga Green</h2>
          </div>
        </div>
      </div>
      {/* 3rd Testimonial */}
      <div
        className={classes["testimonials-container"]}
        data-aos="fade-up"
        data-aos-anchor-placement="bottom-bottom"
      >
        <div className={classes["testimonial-content-container"]}>
          <div className={classes["testimonial-img-block"]}>
            <img
              src={TestimonialPic2}
              alt=""
              className={classes["testimonial-img"]}
            />
          </div>
          <div className={classes["testimonial-info-block"]}>
            <p>
              <span>
                <FaQuoteLeft className={classes["testimonial-quote"]} />
              </span>{" "}
              Excellent communicator, patient and professional.
            </p>
            <h2>Rodrigo Alves</h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
