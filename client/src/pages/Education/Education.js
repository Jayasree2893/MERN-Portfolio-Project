import React from "react";
import { FaUserGraduate } from "react-icons/fa";
import { Flip, Fade } from "react-reveal";

import "./education.css";

const Educations = () => {
  return (
    <>
      <div className="education" id="education">
        <div className="education-heading text-center">
          <Flip right>
            <h1>Education Details</h1>
          </Flip>
          <hr />
        </div>
        <Fade right>
          <div className="d-flex justify-content-center">
            <h2 className="mt-4">
              <FaUserGraduate size={50} color="#FBEAEB" />
            </h2>
            <div className="pt-2 ms-5">
              <h2>Bachelor of Engineering in Computer Science</h2>
              <h4>SRM TRP Engineering College</h4>
              <p>Tiruchirappalli, Tamil Nadu</p>
            </div>
          </div>
        </Fade>
      </div>
    </>
  );
};

export default Educations;