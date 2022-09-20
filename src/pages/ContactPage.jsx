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
      once: true, // whether animation should happen only once - while scrolling down
      anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
    });
  });

  const [isSuccess, setIsSuccess] = useState(false);
  const nameRef = useRef("");
  const emailRef = useRef("");
  const messageRef = useRef("");

  async function formDataHandler(form) {
    await fetch(
      "https://my-portfolio-site-0007-default-rtdb.firebaseio.com/form-data.json",
      {
        method: "POST",
        body: JSON.stringify(form),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
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

    // const isEmpty = Object.keys(formData).length === 0;
    // if(isEmpty){
    setIsSuccess(true);

    setTimeout(() => {
      setIsSuccess(false);
    }, "4000");

    // }
    console.log(formData);
    nameRef.current.value = "";
    emailRef.current.value = "";
    messageRef.current.value = "";
  }

  return (
    <Fragment>
      <Header />
      <h1 className={classes["contact-page-h1"]} data-aos="fade-up" data-aos-duration="1400">
        Contact Me
      </h1>
      <h3 className={classes["contact-page-h3"]} data-aos="fade-up" data-aos-duration="1400">
        Any questions or remarks? Just write me a message!
      </h3>
      <div className={classes["contact-page-container"]} data-aos="fade-up" data-aos-duration="1400"> 
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
                <a href="https://www.facebook.com/" target="blank">
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
            <input type="text" id="name" ref={nameRef} required />

            <label htmlFor="email">Email</label>
            <div className={classes["contact-form-icon"]}>
              <MdEmail />
            </div>
            <input type="email" id="email" ref={emailRef} required />

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
              required
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
