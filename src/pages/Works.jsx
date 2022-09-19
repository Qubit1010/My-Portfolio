import React, { Fragment } from "react";
import Header from "../components/Header";
import LatestProjects from "../components/LatestProjects";
import MoreProjects from "../components/MoreProjects";
import Footer from "../components/Footer";


const Works = () => {
  return (
    <Fragment>
      <Header />
      {/* <div></div> */}
      <LatestProjects />
      <MoreProjects />
      <Footer/>
    </Fragment>
  );
};

export default Works;
