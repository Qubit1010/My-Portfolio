import React, { Fragment, useEffect } from "react";
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
import Aos from "aos";
import "aos/dist/aos.css";

import classes from "./MoreProjects.module.css";

const MoreProjects = () => {
  useEffect(() => {
    Aos.init({
      // Global settings:
      disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
      startEvent: "DOMContentLoaded", // name of the event dispatched on the document, that AOS should initialize on
      initClassName: "aos-init", // class applied after initialization
      animatedClassName: "aos-animate", // class applied on animation
      useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
      disableMutationObserver: false, // disables automatic mutations' detections (advanced)
      debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
      throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

      // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
      offset: 200, // offset (in px) from the original trigger point
      delay: 0, // values from 0 to 3000, with step 50ms
      duration: 1000, // values from 0 to 3000, with step 50ms
      easing: "ease", // default easing for AOS animations
      once: false, // whether animation should happen only once - while scrolling down
      mirror: false, // whether elements should animate out while scrolling past them
      anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
    });
  });

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };
  return (
    <Fragment>
      <h1 className={classes["slider-h1"]} data-aos="fade-up">
        More Projects
      </h1>
      <Slider {...settings} className={classes["slider-contanainer"]}>
        <div className={classes["slider-card"]} data-aos="zoom-in">
          <img src={ProjectPicture1} alt="" />
          <a href="https://test-0101-0a18d7.webflow.io/" target='blank'>
            <h3>Shadow-Website</h3>
          </a>
          <p>
            This is a about page of a website, created in webflow for learning
            the interactions & animations dynamics of webflow
          </p>
        </div>

        <div className={classes["slider-card"]} data-aos="zoom-in">
          <img src={ProjectPicture4} alt="" />
          <a href="https://expense-calculator1212.netlify.app/" target='blank'>
            <h3>Expense-Calculator</h3>
          </a>
          <p>
            This is a expense calculator, which measures expenses and your total
            income. This app is created using react hooks.
          </p>
        </div>

        <div className={classes["slider-card"]} data-aos="zoom-in">
          <img src={ProjectPicture10} alt="" />
          <a href="https://advance-redux-f5f48.web.app/" target='blank'>
            <h3>Book-Store</h3>
          </a>
          <p>
            This is created with react, redux toolkit, with integrated with
            firebase database and uploaded to firebase hosting service.
          </p>
        </div>

        <div className={classes["slider-card"]} data-aos="zoom-in">
          <img src={ProjectPicture5} alt="" />
          <a href="https://ecommerce-site-1.herokuapp.com/" target='blank'>
            <h3>Ecommerce-website</h3>
          </a>
          <p>
            This is Ecommerce website created using frontend technologies like
            react,redux ,firebase etc. It's a fully functional webiste you can
            sign and sign and store your item in cart and purchase it.
          </p>
        </div>

        <div className={classes["slider-card"]} data-aos="zoom-in">
          <img src={ProjectPicture3} alt="" />
          <a href="https://qubit1010.github.io/Bootstrape-Car-Store/" target='blank'>
            <h3>Car-Store</h3>
          </a>
          <p>
            This is a online car store, you can purchase your favorite car here.
            I created using bootstrape.
          </p>
        </div>

        <div className={classes["slider-card"]} data-aos="zoom-in">
          <img src={ProjectPicture12} alt="" />
          <a href="https://qubit-website-25517.firebaseapp.com/" target='blank'>
            <h3>My-Old-Portfolio-Website</h3>
          </a>
          <p>You can download the template from my Github account</p>
        </div>

        <div className={classes["slider-card"]} data-aos="zoom-in">
          <img src={ProjectPicture11} alt="" />
          <a href="https://react-http-64503.web.app/" target='blank'>
            <h3>Movie Database</h3>
          </a>
          <p>
            This project is also created with react, redux nad integrated with
            firebase. It is a app that lets you movies to firebase database and
            fetch from it.
          </p>
        </div>

        <div className={classes["slider-card"]} data-aos="zoom-in">
          <img src={ProjectPicture2} alt="" />
          <a href="https://qubit1010.github.io/Tech-Store/" target='blank'>
            <h3>Tech-Shop</h3>
          </a>
          <p>
            This is a responsive web design, created for tech store. You can
            download the template from my githuub account.
          </p>
        </div>

        <div className={classes["slider-card"]} data-aos="zoom-in">
          <img src={ProjectPicture13} alt="" />
          <a href="https://testsite-e91f4a.webflow.io/" target='blank'>
            <h3>Ecommerce-Webflow-Website</h3>
          </a>
          <p>This is a landing page of a website, created in webflow.</p>
        </div>

        <div className={classes["slider-card"]} data-aos="zoom-in">
          <img src={ProjectPicture14} alt="" />
          <a href="https://test-10101.webflow.io/" target='blank'>
            <h3>Webflow-Website</h3>
          </a>
          <p>This is a landing page of a website, created in webflow.</p>
        </div>

        <div className={classes["slider-card"]} data-aos="zoom-in">
          <img src={ProjectPicture7} alt="" />
          <a href="https://qubit1010.github.io/Movie-Search-App/" target='blank'>
            <h3>Movie-Viewer</h3>
          </a>
          <p>
            You can search your favorite movies and checkout their and top
            trending movies at the moment using this app.
          </p>
        </div>

        <div className={classes["slider-card"]} data-aos="zoom-in">
          <img src={ProjectPicture6} alt="" />
          <a href="https://qubit1010.github.io/Notes-App/" target='blank'>
            <h3>Note-App</h3>
          </a>
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
