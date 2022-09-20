import React, { useEffect } from "react";
import { FiArrowRight } from "react-icons/fi";
import Aos from "aos";
import "aos/dist/aos.css";
import ProjectPicture1 from "../assets/ProjectPicture1.png";
import ProjectPicture2 from "../assets/ProjectPicture2.png";
import ProjectPicture3 from "../assets/ProjectPicture3.png";
import ProjectPicture4 from "../assets/ProjectPicture4.png";
import ProjectPicture5 from "../assets/ProjectPicture5.png";

import classes from "./LatestProjects.module.css";

const LatestProjects = () => {
  useEffect(() => {
    Aos.init({
      once: false, // whether animation should happen only once - while scrolling down
      anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
    });
  });

  return (
    <section>
      <div className={classes["projects-container"]}>
        <h1 data-aos="fade-up">Latest Projects</h1>
        <div className={classes["projects-cards-container"]}>
          {/* 1st Project Card Section */}
          <div
            className={classes["project-img-card"]}
            data-aos="fade-up-right"
            data-aos-duration="1400"
          >
            <img src={ProjectPicture1} alt="" />
          </div>
          <div
            className={classes["project-info-card"]}
            data-aos="fade-up-left"
            data-aos-offset="300"
            data-aos-delay="100"
            data-aos-duration="1400"
          >
            <h2>Feminism Today</h2>
            <p>
              This project is created in webflow for a canadian client. This
              website is completely designed and developed by me. This website
              is a complete fully responsive website with CMS.{" "}
            </p>
            <a href="https://www.feminismtoday.org/" target="blank">
              <button>
                <FiArrowRight />
              </button>
            </a>
          </div>
          {/* 2nd Project Card Section */}
          <div
            className={classes["project-info-card2"]}
            data-aos="fade-up-right"
            data-aos-duration="1400"
          >
            <h2>KOKOMO</h2>
            <p>This is a restaurant website, I made changes to existing IU.</p>
            <a href="https://www.kokomonyc.com/" target="blank">
              <button>
                <FiArrowRight />
              </button>
            </a>
          </div>
          <div
            className={classes["project-img-card"]}
            data-aos="fade-up-left"
            data-aos-offset="300"
            data-aos-delay="100"
            data-aos-duration="1400"
          >
            <img src={ProjectPicture2} alt="" />
          </div>
          {/* 3rd Project Card Section */}
          <div
            className={classes["project-img-card"]}
            data-aos="fade-up-right"
            data-aos-duration="1400"
          >
            <img src={ProjectPicture3} alt="" />
          </div>
          <div
            className={classes["project-info-card"]}
            data-aos="fade-up-left"
            data-aos-offset="300"
            data-aos-delay="100"
            data-aos-duration="1400"
          >
            <h2>The Collaborative</h2>
            <p>In this website I made edits to three pages.</p>
            <a href="https://thecollaborative.net/" target="blank">
              <button>
                <FiArrowRight />
              </button>
            </a>
          </div>
          {/* 4th Project Card Section */}
          <div
            className={classes["project-info-card2"]}
            data-aos="fade-up-right"
            data-aos-duration="1400"
          >
            <h2>Upstate</h2>
            <p>In this website I designed and developed landing page. </p>
            <a href="https://www.upstatelaundromat.com/" target="blank">
              <button>
                <FiArrowRight />
              </button>
            </a>
          </div>
          <div
            className={classes["project-img-card"]}
            data-aos="fade-up-left"
            data-aos-offset="300"
            data-aos-delay="100"
            data-aos-duration="1400"
          >
            <img src={ProjectPicture4} alt="" />
          </div>
          {/* 5th Project Card Section */}
          <div className={classes["project-img-card"]} data-aos="fade-up-right">
            <img src={ProjectPicture5} alt="" />
          </div>

          <div
            className={classes["project-info-card"]}
            data-aos="fade-up-left"
            data-aos-offset="300"
            data-aos-delay="100"
            data-aos-duration="1400"
          >
            <h2>The Swinging Bridge</h2>
            <p>I changed the homepage of this website with squarespace.</p>
            <a href="https://www.theswingingbridge.com/" target="blank">
              <button>
                <FiArrowRight />
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestProjects;
