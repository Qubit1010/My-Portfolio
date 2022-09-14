import React from "react";
import { BsPeopleFill } from "react-icons/bs";
import { AiOutlineAntDesign } from "react-icons/ai";
import { FaCode } from "react-icons/fa";
import classes from "./Service.module.css";

const Service = () => {
  return (
    <section>
      <div className={classes["service-container"]}>
        <div className={classes["service-top-content"]}>
          <h1>My Services</h1>
          <p>
            We put quality and clients requirements on top of the priority list.
          </p>
        </div>

        <div className={classes["service-cards-container"]}>
          <div className={classes["service-card"]}>
            <BsPeopleFill className={classes["service-card-icon"]} />
            <h1>UI/UX Design</h1>
            <p>I can provide you with the best UI/UX design experience.</p>
          </div>
          <div className={classes["service-card-mid"]}>
            <AiOutlineAntDesign className={classes["service-card-icon"]} />
            <h1>Indentity Design</h1>
            <p>
              I have experience in graphics design too, and can create identity
              logo or business cards etc..
            </p>
          </div>
          <div className={classes["service-card"]}>
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
