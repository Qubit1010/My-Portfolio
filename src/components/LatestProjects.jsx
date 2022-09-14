import React from "react";
import { FiArrowRight } from "react-icons/fi";

import ProjectPicture1 from "../assets/ProjectPicture1.png";
import ProjectPicture2 from "../assets/ProjectPicture2.png";
import ProjectPicture3 from "../assets/ProjectPicture3.png";
import ProjectPicture4 from "../assets/ProjectPicture4.png";
import ProjectPicture5 from "../assets/ProjectPicture5.png";

import classes from "./LatestProjects.module.css";

const LatestProjects = () => {
  return (
    <section>
      <div className={classes["projects-container"]}>
        <h1>Latest Projects</h1>
        <div className={classes["projects-cards-container"]}>
          {/* 1st Project Card Section */}
          <div className={classes["project-img-card"]}>
            <img src={ProjectPicture1} alt="" />
          </div>
          <div className={classes["project-info-card"]}>
            <h2>Feminism Today</h2>
            <p>
              This project is created in webflow for a canadian client. This
              website is completely designed and developed by me. This website
              is a complete fully responsive website with CMS.{" "}
            </p>
            <button>
              <FiArrowRight />
            </button>
          </div>
          {/* 2nd Project Card Section */}
          <div className={classes["project-info-card2"]}>
            <h2>KOKOMO</h2>
            <p>This is a restaurant website, I made changes to existing IU.</p>
            <button>
              <FiArrowRight />
            </button>
          </div>
          <div className={classes["project-img-card"]}>
            <img src={ProjectPicture2} alt="" />
          </div>
          {/* 3rd Project Card Section */}
          <div className={classes["project-img-card"]}>
            <img src={ProjectPicture3} alt="" />
          </div>
          <div className={classes["project-info-card"]}>
            <h2>The Collaborative</h2>
            <p>In this website I made edits to three pages.</p>
            <button>
              <FiArrowRight />
            </button>
          </div>
          {/* 4th Project Card Section */}
          <div className={classes["project-info-card2"]}>
            <h2>Upstate</h2>
            <p>In this website I designed and developed landing page. </p>
            <button>
              <FiArrowRight />
            </button>
          </div>
          <div className={classes["project-img-card"]}>
            <img src={ProjectPicture4} alt="" />
          </div>
          {/* 5th Project Card Section */}
          <div className={classes["project-img-card"]}>
            <img src={ProjectPicture5} alt="" />
          </div>

          <div className={classes["project-info-card"]}>
            <h2>The Swinging Bridge</h2>
            <p>I changed the homepage of this website with squarespace.</p>
            <button>
              <FiArrowRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestProjects;
