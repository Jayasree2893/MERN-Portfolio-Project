import React, { useState } from "react";
import { Flip } from "react-reveal";

import "./projects.css";
import Project1 from "../../assets/Paymentrecon_img.png";
import Project2 from "../../assets/loanimg.jpg";
import Project3 from "../../assets/billing-process.png";

const Projects = () => {
  const [modalTitle, setModalTitle] = useState("");
  const [modalContent1, setModalContent1] = useState("");
  const [modalContent2, setModalContent2] = useState("");
  const [modalContent3, setModalContent3] = useState("");

  const config = {
    projects: [
      {
        id: 1,
        img: Project1,
        title: "Payment Reconciliation",
        description1:
          "Collaborated with various payment partners such as Razorpay, Cashfree, PayU, Paytm, etc.. to implement automated payment reconciliation via their APIs. ",
        description2:
          "Successfully reconciled over 1000 payments daily, significantly reducing manual efforts and enhancing team efficiency. Developed dashboard to represent the  payment details in the form of graph and chart to make understand to predict the revenue order place inthe company. ",
        description3:
          "Designed schema, HLD and developed Payment Partners Module for tracking the multiple partners. ",
      },
      {
        id: 2,
        img: Project2,
        title: "Loan Reconciliation",
        description1:
          "Handled the complete loan reconciliation process for multiple partners such as Avanse, ICICI, IIFL, Kotak, etc..",
        description2: "Automated the loan reconciliation process via webhook.",
        description3: "Designed the upload template for loan payments.",
      },
      {
        id: 3,
        img: Project3,
        title: "Invoice Generation",
        description1: "Automated the recomputation for the invoice generation.",
        description2: "Integrated the QR code generator for invoices.",
        description3: "Designed the upload template for invoice payments.",
      },
    ],
  };

  const handleCardClick = (index) => {
    setModalTitle(config.projects[index].title);
    setModalContent1(config.projects[index].description1);
    setModalContent2(config.projects[index].description2);
    setModalContent3(config.projects[index].description3);
  };

  return (
    <>
      <div className="projects-content" id="projects">
        <div>
          <Flip right>
            <div className="project-heading text-center">
              <h1>Projects</h1>
            </div>
          </Flip>
          <hr />
        </div>
        <div class="d-flex container-fluid project-body">
          {/* .map(()=>()) */}
          {config.projects.map((projectList, index) => (
            <Flip right>
              <div class="m-0" key={projectList.id}>
                <div
                  class="card position-relative"
                  data-bs-toggle="modal"
                  data-bs-target="#modal"
                  onClick={() => handleCardClick(index)}
                >
                  <img
                    className="card-img-top"
                    src={projectList.img}
                    alt="Project Img"
                  />
                  <div className="card-body projectTitle">
                    <h5 className="card-title">{projectList.title}</h5>
                    <button className=" btn-view">View</button>
                  </div>
                </div>
              </div>
            </Flip>
          ))}
          <div
            class="modal fade"
            tabindex="-1"
            id="modal"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog modal-dialog-scrollable">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">
                    {modalTitle}
                  </h5>
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div class="modal-body content">
                  <ul className="ms-1 me-4">
                    <li>{modalContent1}</li>
                    <li>{modalContent2}</li>
                    <li>{modalContent3}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;