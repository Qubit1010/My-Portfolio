import React, { useRef, Fragment, useState, useEffect } from "react";
import Aos from "aos";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {
  FaFacebookSquare,
  FaLinkedin,
  FaGithub,
  FaPhoneAlt,
} from "react-icons/fa";
import { BsFillPersonFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { SiGooglemessages } from "react-icons/si";
import { MdLocationOn } from "react-icons/md";

import classes from "./ContactPage.module.css";

const ContactPage = () => {
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
      once: true, // whether animation should happen only once - while scrolling down
      mirror: false, // whether elements should animate out while scrolling past them
      anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
    });
  });
  
  const [isSuccess, setIsSuccess] = useState(false);
  const nameRef = useRef("");
  const emailRef = useRef("");
  const messageRef = useRef("");

  async function formDataHandler(form) {
    const response = await fetch(
      "https://my-portfolio-site-0007-default-rtdb.firebaseio.com/form-data.json",
      {
        method: "POST",
        body: JSON.stringify(form),
        headers: {
          "Content-Type": "application/json",
        },
        // mode: "no-cors",
      }
    );
    const data = await response.json();
    console.log(data);
  }

  function submitHandler(event) {
    event.preventDefault();

    // could add validation here...

    const formData = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      message: messageRef.current.value,
    };

    formDataHandler(formData);
    setIsSuccess(true);
    console.log(formData);
    nameRef.current.value = '';
    emailRef.current.value = '';
    messageRef.current.value = '';
  }
  
  

  return (
    <Fragment>
      <Header />
      <h1 className={classes["contact-page-h1"]} data-aos="fade-up">Contact Me</h1>
      <h3 className={classes["contact-page-h3"]} data-aos="fade-up">
        Any questions or remarks? Just write me a message!
      </h3>
      <div className={classes["contact-page-container"]} data-aos="fade-up">
        <div className={classes["contact-left-block"]}>
          <h1> Contact Information </h1>
          <h3>
            Describe what you want in the form or just contact me via links
            provided.
          </h3>
          <div className={classes["contact-left-block-links"]}>
            <ul>
              <li>
                <FaPhoneAlt className={classes["header-icons"]} />{" "}
                <span>+92 3108820568</span>
              </li>

              <li>
                <SiGooglemessages className={classes["header-icons"]} />
                <span>Hassanaleem86@gmail.com</span>
              </li>

              <li>
                <MdLocationOn className={classes["header-icons"]} />
                <span>Senior Assistant Colony near Governor House, Quetta</span>
              </li>
            </ul>
          </div>

          <div className={classes["contact-left-block-social-media-links"]}>
            <ul>
              <li>
                <a href="#">
                  <FaFacebookSquare className={classes["header-icons"]} />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/qubit-state-253b0b201/"
                  target="blank"
                >
                  <FaLinkedin className={classes["header-icons"]} />
                </a>
              </li>
              <li>
                <a href="https://github.com/Qubit1010" target="blank">
                  <FaGithub className={classes["header-icons"]} />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className={classes["contact-right-block"]}>
          <form action="" onSubmit={submitHandler}>
            <label htmlFor="name">Name</label>
            <div className={classes["contact-form-icon"]}>
              <BsFillPersonFill />
            </div>
            <input type="text" id="name" ref={nameRef} />

            <label htmlFor="email">Email</label>
            <div className={classes["contact-form-icon"]}>
              <MdEmail />
            </div>
            <input type="email" id="email" ref={emailRef} />

            <label htmlFor="message">Message</label>
            <div className={classes["contact-form-icon"]}>
              <SiGooglemessages />
            </div>
            <textarea
              name=""
              id="message"
              cols="10"
              rows="10"
              ref={messageRef}
            ></textarea>
            <button>Submit</button>
            {isSuccess && <p>Form Submitted Successfully</p>}
          </form>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
};

export default ContactPage;
