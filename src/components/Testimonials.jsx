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
