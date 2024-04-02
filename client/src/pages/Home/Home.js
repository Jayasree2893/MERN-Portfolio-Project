import React from "react";
import Typewriter from "typewriter-effect";
import { RiDownloadLine } from "react-icons/ri";
import { Fade, Flip } from "react-reveal";
import { Link } from "react-scroll";

import "./home.css";
import Resume from "../../assets/docs/Jayasree_Resume.pdf";
import JobPic from "../../assets/homepic.png";

const Home = () => {
  return (
    <div className="home-content d-flex " id="home">
      <div className="col-md-6">
        <Flip top>
          <h1>Hi, I'm Jayasree</h1>
          <h2>
            <Typewriter
              options={{
                strings: [
                  "Associate Tech Lead",
                  "Full Stack Developer!",
                  "MERN Stack Developer!",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </h2>
        </Flip>
        <Fade bottom>
          <div className="mt-5">
            <Link
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              offset={0}
              duration={100}
            >
              <button className="btn me-4 btn-hire">Hire Me</button>
            </Link>
            <a href={Resume} download="Jayasree_Resume.pdf">
              <button className="btn btn-hire">
                My Resume <RiDownloadLine />
              </button>
            </a>
          </div>
        </Fade>
      </div>
      <Fade right>
        <div className="jobpic col-md-5">
          <img src={JobPic} alt="Job_Pic" />
        </div>
      </Fade>
    </div>
  );
};

export default Home;