import React from "react";
import { FaNodeJs, FaReact } from "react-icons/fa";
import { FaBugSlash } from "react-icons/fa6";
import { Flip } from "react-reveal";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import "./experience.css";

const Experience = () => {
  return (
    <>
      <div className="work" id="experience">
        <div className="container work-exp">
          <Flip right>
            <h1 className="col-12 mt-3 mb-1 text-center">Work Experience</h1>
          </Flip>
          <hr />
          <VerticalTimeline lineColor="#1e1e2c">
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "#FBEAEB", color: "#1e1e2c" }}
              contentArrowStyle={{ borderRight: "7px solid #FBEAEB" }}
              date="2022 - 2023"
              dateClassName="custom-date-style"
              iconStyle={{ background: "#ff7f50", color: "#FBEAEB" }}
              icon={<FaReact />}
            >
              <h3 className="vertical-timeline-element-title">
                Associate Tech Lead
              </h3>
              <h5 className="vertical-timeline-element-subtitle">
                BYJU’S (Think and Learn Private Limited)
              </h5>
              <h6 className="mt-4 resp">Responsibilities</h6>
              <ul className="ms-2 me-4 workList">
                <li>
                  Led a team of 8 members in developing payment and loan modules
                  for the finance requirements of the organization.
                </li>
                <li>
                  Collaborated with stakeholders to gather the requirements then
                  converted BRD into TRD and delivered timely results.
                </li>
                <li>
                  Conducted sprint prioritization and planning sessions with
                  team members at the beginning of each sprint to prioritize
                  tasks and discuss the correct development and implementation
                  from scratch.
                </li>
              </ul>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "#FBEAEB", color: "#1e1e2c" }}
              contentArrowStyle={{
                borderRight: "7px solid  #FBEAEB",
              }}
              date="2020 - 2022"
              dateClassName="custom-date-style"
              iconStyle={{ background: "#ff7f50", color: "#FBEAEB" }}
              icon={<FaNodeJs />}
            >
              <h3 className="vertical-timeline-element-title">
                Software Engineer
              </h3>
              <h5 className="vertical-timeline-element-subtitle">
                BYJU’S (Think and Learn Private Limited)
              </h5>
              <h6 className="mt-4 resp">Responsibilities</h6>
              <ul className="ms-2 me-4 workList">
                <li>
                  Collaborated with various payment partners such as Razorpay,
                  Cashfree, PayU, Paytm, etc.. to implement automated payment
                  reconciliation via their APIs. Successfully reconciled over
                  1000 payments daily, significantly reducing manual efforts and
                  enhancing team efficiency.
                </li>
                <li>
                  Developed dashboard to represent the loan and payment details
                  in the form of graph and chart to make understand to predict
                  the revenue order place in the company.
                </li>
                <li>
                  Created the report feature where the report can be scheduled
                  on the monthly basis which was used by the sales team for
                  analysis purposes.
                </li>
              </ul>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "#FBEAEB", color: "#1e1e2c" }}
              contentArrowStyle={{
                borderRight: "7px solid  #FBEAEB",
              }}
              date="2020 - 2020"
              dateClassName="custom-date-style"
              iconStyle={{ background: "#ff7f50", color: "#FBEAEB" }}
              icon={<FaBugSlash />}
            >
              <h3 className="vertical-timeline-element-title">
                Quality Assurance Engineer
              </h3>
              <h5 className="vertical-timeline-element-subtitle">
                BYJU’S (Think and Learn Private Limited)
              </h5>
              <h6 className="mt-4 resp">Responsibilities</h6>
              <ul className="ms-2 me-4 workList">
                <li>
                  Responsible for testing different applications like OMS (Order
                  Management System), FMS (Finance Management System), PTMS
                  (Payment Tracking Management System), and UMS (User Management
                  System).
                </li>
                <li>
                  Conducted Root Cause Analysis (RCA) for production bugs to
                  help identify and prevent future similar issues.
                </li>
              </ul>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
      </div>
    </>
  );
};

export default Experience;