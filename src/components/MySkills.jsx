import React from "react";
import { FaReact, FaHtml5, FaCss3, FaFigma, FaBootstrap } from "react-icons/fa";
import { DiJavascript1 } from "react-icons/di";
import { SiRedux, SiFirebase, SiWebflow, SiAdobexd, SiGit, SiGithub } from "react-icons/si";

import classes from "./MySkills.module.css";

const MySkills = () => {
  return (
    <div className={classes["myskills-container"]}>
      <h1>My Tech Skills</h1>
      <div className={classes["myskills-cards-container"]}>
        
        
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
          <SiFirebase className={classes["myskills-icon"]}/>
          <h2>Firebase</h2>
        </div>
        
        <div className={classes["myskills-card-content"]}>
          <SiWebflow className={classes["myskills-icon"]}/>
          <h2>Webflow</h2>
        </div>

        <div className={classes["myskills-card-content"]}>
          <FaFigma className={classes["myskills-icon"]}/>
          <h2>Figma</h2>
        </div>

        <div className={classes["myskills-card-content"]}>
          <SiAdobexd className={classes["myskills-icon"]}/>
          <h2>Adobe Xd</h2>
        </div>

        <div className={classes["myskills-card-content"]}>
          <FaBootstrap className={classes["myskills-icon"]}/>
          <h2>Bootstrap</h2>
        </div>

        <div className={classes["myskills-card-content"]}>
          <SiGit className={classes["myskills-icon"]}/>
          <h2>Git</h2>
        </div>

        <div className={classes["myskills-card-content"]}>
          <SiGithub className={classes["myskills-icon"]}/>
          <h2>Github</h2>
        </div>
      </div>
    </div>
  );
};

export default MySkills;
