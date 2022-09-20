import React, { useEffect } from "react";
import Aos from "aos";
import { Link } from "react-router-dom";
import { TbArrowBigDownLines } from "react-icons/tb";
import { FiArrowUpRight } from "react-icons/fi";
import classes from "./HeroBackground.module.css";

const HeroBackground = () => {
  useEffect(() => {
    Aos.init({
    });
  });
  return (
    <section>
      <div className={classes["hero-bg-container"]} data-aos="fade-up" data-aos-duration="1400">
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
