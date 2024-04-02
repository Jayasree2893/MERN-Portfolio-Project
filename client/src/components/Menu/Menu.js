import React from "react";
import { Link } from "react-scroll";
import {
  FcHome,
  FcContacts,
  FcAbout,
  FcPortraitMode,
  FcBiotech,
  FcReadingEbook,
  FcVideoProjector,
  FcRating,
} from "react-icons/fc";
import { Zoom, Fade } from "react-reveal";

import "./menu.css";
import profilePic from "../../assets/jayPic.jpg";

const Menu = ({ toggle }) => {
  return (
    <>
      {toggle ? (
        <>
          <Zoom>
            <div className="profile-pic">
              <img src={profilePic} alt="Profile pic" />
            </div>
          </Zoom>
          <Fade left>
            <div className="nav">
              <Link
                activeClass="active"
                to="home"
                spy={true}
                smooth={true}
                offset={0}
                duration={100}
              >
                <div className="nav-item">
                  <FcHome />
                  <p>Home</p>
                </div>
              </Link>
              <Link
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={0}
                duration={100}
              >
                <div className="nav-item">
                  <FcAbout />
                  <p>About</p>
                </div>
              </Link>
              <Link
                activeClass="active"
                to="experience"
                spy={true}
                smooth={true}
                offset={0}
                duration={100}
              >
                <div className="nav-item">
                  <FcPortraitMode />
                  <p>Work Experience</p>
                </div>
              </Link>
              <Link
                activeClass="active"
                to="achievements"
                spy={true}
                smooth={true}
                offset={5}
                duration={100}
              >
                <div className="nav-item">
                  <FcRating />
                  <p>Achievements</p>
                </div>
              </Link>
              <Link
                activeClass="active"
                to="teckStack"
                spy={true}
                smooth={true}
                offset={0}
                duration={100}
              >
                <div className="nav-item">
                  <FcBiotech />
                  <p>Tech Stack</p>
                </div>
              </Link>
              <Link
                activeClass="active"
                to="projects"
                spy={true}
                smooth={true}
                offset={0}
                duration={100}
              >
                <div className="nav-item">
                  <FcVideoProjector />
                  <p>Projects</p>
                </div>
              </Link>
              <Link
                activeClass="active"
                to="education"
                spy={true}
                smooth={true}
                offset={0}
                duration={100}
              >
                <div className="nav-item">
                  <FcReadingEbook />
                  <p>Education</p>
                </div>
              </Link>
              <Link
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={0}
                duration={100}
              >
                <div className="nav-item">
                  <FcContacts />
                  <p>Contact</p>
                </div>
              </Link>
            </div>
          </Fade>
        </>
      ) : (
        <>
          <div className="nav-items">
            <Link
              activeClass="active"
              to="home"
              spy={true}
              smooth={true}
              offset={0}
              duration={100}
            >
              <div className="nav-item">
                <FcHome title="Home" />
              </div>
            </Link>
            <Link
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={0}
              duration={100}
            >
              <div className="nav-item">
                <FcAbout title="About" />
              </div>
            </Link>
            <Link
              activeClass="active"
              to="experience"
              spy={true}
              smooth={true}
              offset={0}
              duration={100}
            >
              <div className="nav-item">
                <FcPortraitMode title="Work Experience" />
              </div>
            </Link>
            <Link
              activeClass="active"
              to="achievements"
              spy={true}
              smooth={true}
              offset={0}
              duration={100}
            >
              <div className="nav-item">
                <FcRating title="Achievements" />
              </div>
            </Link>
            <Link
              activeClass="active"
              to="teckStack"
              spy={true}
              smooth={true}
              offset={0}
              duration={100}
            >
              <div className="nav-item">
                <FcBiotech title="Tech Stack" />
              </div>
            </Link>
            <Link
              activeClass="active"
              to="projects"
              spy={true}
              smooth={true}
              offset={0}
              duration={100}
            >
              <div className="nav-item">
                <FcVideoProjector title="Projects" />
              </div>
            </Link>
            <Link
              activeClass="active"
              to="education"
              spy={true}
              smooth={true}
              offset={0}
              duration={100}
            >
              <div className="nav-item">
                <FcReadingEbook title="Education" />
              </div>
            </Link>
            <Link
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              offset={0}
              duration={100}
            >
              <div className="nav-item">
                <FcContacts title="Contact" />
              </div>
            </Link>
          </div>
        </>
      )}
    </>
  );
};

export default Menu;