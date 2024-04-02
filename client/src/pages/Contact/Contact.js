import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { BsFacebook, BsGithub, BsLinkedin } from "react-icons/bs";
import { Fade, Flip } from "react-reveal";

import "./contact.css";

const Contact = () => {
  const form = useRef();
  const [isSuccess, setIsSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_7usm9xm", "template_torm94j", form.current, {
        publicKey: "5COPkA7TbX3iiNcyM",
      })
      .then(
        (result) => {
          console.log("SUCCESS!", result.text);
          setIsSuccess(true); // Set success state to true
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <>
      <div className="contact" id="contact">
        <div className="card0 border-0">
          <div className="row pt-1">
            <Flip left>
              <div className="col-md-6 col-lg-6 col-xl-6 col-sm-12 pt-4">
                <div className="card1">
                  <div className="row border-line">
                    <img
                      src="https://img.freepik.com/free-photo/hot-line-contact-us-call-center-search-interface_53876-124009.jpg?w=2000"
                      alt="contact"
                      className="image"
                    />
                  </div>
                </div>
              </div>
            </Flip>
            <Fade right>
              <div className="col-lg-6 col-md-6">
                <div className="card2 d-flex card border-0 px-4 py-5">
                  <div className="row justify-content-center">
                    <div className="row">
                      <h6>
                        Contact With
                        <BsLinkedin color="blue" size={30} className="ms-2" />
                        <BsGithub color="black" size={30} className="ms-2" />
                        <BsFacebook color="blue" size={30} className="ms-2" />
                      </h6>
                    </div>
                    <div className="row px-3 mb-4">
                      <div className="line" />
                      <small className="or text-center">OR</small>
                      <div className="line" />
                    </div>
                    {isSuccess ? (
                      <div className="row px-3">
                        <div className="alert alert-success" role="alert">
                          Your message has been successfully sent! Thank you for
                          contacted me.
                        </div>
                      </div>
                    ) : (
                      <form action="" ref={form} onSubmit={sendEmail}>
                        <div className="row px-3">
                          <input
                            type="text"
                            placeholder="Enter your Name"
                            className="mb-3"
                            name="user_name"
                            required
                          />
                        </div>
                        <div className="row px-3">
                          <input
                            type="email"
                            name="user_email"
                            placeholder="Enter Your Email Address"
                            className="mb-3"
                            required
                          />
                        </div>
                        <div className="row px-3">
                          <textarea
                            type="text"
                            name="message"
                            placeholder="Write your message"
                            className="mb-3"
                            required
                          />
                        </div>
                        <div className="row px-3">
                          <button className="button">SEND MESSAGE</button>
                        </div>
                      </form>
                    )}
                  </div>
                </div>
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;