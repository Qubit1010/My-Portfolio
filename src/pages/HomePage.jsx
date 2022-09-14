import React, { Fragment } from "react";
import HeroBackground from "../components/HeroBackground";
import Service from "../components/Service";
import LatestProjects from "../components/LatestProjects";
import MySkills from "../components/MySkills";
import MoreProjects from "../components/MoreProjects";

import classes from "./HomePage.module.css";

const HomePage = () => {
  return (
    <Fragment>
      <HeroBackground />
      <Service/>
      <LatestProjects/>
      <MySkills/>
      <MoreProjects/>
    </Fragment>
  );
};

export default HomePage;
