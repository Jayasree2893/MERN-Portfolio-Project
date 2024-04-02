import React from "react";
import { Fade, Flip } from "react-reveal";

import "./about.css";
import ProfilePic from "../../assets/jaypic1.jpg";

const About = () => {
  return (
    <>
      <div className="about-content" id="about">
        <Flip left>
          <div className="profile-img">
            <img src={ProfilePic} alt="Profile_pic" />
          </div>
        </Flip>
        <Fade right>
          <div className="about">
            <h1>About me</h1>
            <hr />
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;A full stack developer
              in MERN with 3 years of experience in crafting complete web
              applications, transforming ideas into user-friendly digital
              solutions. Strong collaborator, adaptable learner, and passionate
              about innovative technologies. Presently looking for an exciting
              role in a fast-paced environment.
            </p>
          </div>
        </Fade>
      </div>
    </>
  );
};

export default About;