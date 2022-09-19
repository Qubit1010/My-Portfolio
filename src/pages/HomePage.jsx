import React, { Fragment } from "react";
import Header from "../components/Header";
import HeroBackground from "../components/HeroBackground";
import Service from "../components/Service";
import LatestProjects from "../components/LatestProjects";
import MySkills from "../components/MySkills";
import MoreProjects from "../components/MoreProjects";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";

import classes from "./HomePage.module.css";

const HomePage = () => {
  
  return (
    <Fragment  >
        <Header  />
        <HeroBackground />
        <Service />
        <LatestProjects />
        <MySkills />
        <MoreProjects />
        <Testimonials />
        <Footer />
    </Fragment>
  );
};

export default HomePage;
