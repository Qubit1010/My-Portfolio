import React, { Fragment } from "react";
import Slider from "react-slick";
import ProjectPicture1 from "../assets/MoreProjectsPic1.png";
import ProjectPicture2 from "../assets/MoreProjectsPic2.png";
import ProjectPicture3 from "../assets/MoreProjectsPic3.png";
import ProjectPicture4 from "../assets/MoreProjectsPic4.png";
import ProjectPicture5 from "../assets/MoreProjectsPic5.png";
import ProjectPicture6 from "../assets/MoreProjectsPic6.png";
import ProjectPicture7 from "../assets/MoreProjectsPic7.png";
import ProjectPicture10 from "../assets/MoreProjectsPic10.png";
import ProjectPicture12 from "../assets/MoreProjectsPic12.png";
import ProjectPicture11 from "../assets/MoreProjectsPic11.png";
import ProjectPicture13 from "../assets/MoreProjectsPic13.png";
import ProjectPicture14 from "../assets/MoreProjectsPic14.png";

import classes from "./MoreProjects.module.css";

const MoreProjects = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };
  return (
    <Fragment>
      <h1 className={classes["slider-h1"]}>More Projects</h1>
      <Slider {...settings} className={classes["slider-contanainer"]}>
        <div className={classes["slider-card"]}>
          <img src={ProjectPicture1} alt="" />
          <h3>Shadow-Website</h3>
          <p>
            This is a about page of a website, created in webflow for learning
            the interactions & animations dynamics of webflow
          </p>
        </div>

        <div className={classes["slider-card"]}>
          <img src={ProjectPicture4} alt="" />
          <h3>Expense-Calculator</h3>
          <p>
            This is a expense calculator, which measures expenses and your total
            income. This app is created using react hooks.
          </p>
        </div>

        <div className={classes["slider-card"]}>
          <img src={ProjectPicture10} alt="" />
          <h3>Book-Store</h3>
          <p>
            This is created with react, redux toolkit, with integrated with
            firebase database and uploaded to firebase hosting service.
          </p>
        </div>

        <div className={classes["slider-card"]}>
          <img src={ProjectPicture5} alt="" />
          <h3>Ecommerce-website</h3>
          <p>
            This is Ecommerce website created using frontend technologies like
            react,redux ,firebase etc. It's a fully functional webiste you can
            sign and sign and store your item in cart and purchase it.
          </p>
        </div>

        <div className={classes["slider-card"]}>
          <img src={ProjectPicture3} alt="" />
          <h3>Car-Store</h3>
          <p>
            This is a online car store, you can purchase your favorite car here.
            I created using bootstrape.
          </p>
        </div>

        <div className={classes["slider-card"]}>
          <img src={ProjectPicture12} alt="" />
          <h3>My-Old-Portfolio-Website</h3>
          <p>You can download the template from my Github account</p>
        </div>

        <div className={classes["slider-card"]}>
          <img src={ProjectPicture11} alt="" />
          <h3>Movie Database</h3>
          <p>
            This project is also created with react, redux nad integrated with
            firebase. It is a app that lets you movies to firebase database and
            fetch from it.
          </p>
        </div>

        <div className={classes["slider-card"]}>
          <img src={ProjectPicture2} alt="" />
          <h3>Tech-Shop</h3>
          <p>
            This is a responsive web design, created for tech store. You can
            download the template from my githuub account.
          </p>
        </div>

        <div className={classes["slider-card"]}>
          <img src={ProjectPicture13} alt="" />
          <h3>Ecommerce-Webflow-Website</h3>
          <p>This is a landing page of a website, created in webflow.</p>
        </div>

        <div className={classes["slider-card"]}>
          <img src={ProjectPicture14} alt="" />
          <h3>Webflow-Website</h3>
          <p>This is a landing page of a website, created in webflow.</p>
        </div>

        <div className={classes["slider-card"]}>
          <img src={ProjectPicture7} alt="" />
          <h3>Movie-Viewer</h3>
          <p>
            You can search your favorite movies and checkout their and top
            trending movies at the moment using this app.
          </p>
        </div>

        <div className={classes["slider-card"]}>
          <img src={ProjectPicture6} alt="" />
          <h3>Note-App</h3>
          <p>
            This is a note taking app, in which you can take your notes, it's
            memory persists even if you refresh the page.
          </p>
        </div>
      </Slider>
    </Fragment>
  );
};

export default MoreProjects;
