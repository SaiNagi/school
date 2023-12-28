import React, { useState } from "react";
import "./index.css";
import Faqs from "../Faqs";

const faqsList = [
  {
    id: 0,
    questionText: "What is IRC?",
    answerText:
      "IRC is an Industry Ready Certification that represents your readiness for a job with the necessary skills.",
  },
  {
    id: 1,
    questionText: "What is the medium of instruction?",
    answerText:
      "The courses would be delivered in English and Telugu. The program will be available in more vernacular languages soon.",
  },
  {
    id: 2,
    questionText:
      "Is there an EMI option to pay the fee for CCBP Tech 4.0 Intensive?",
    answerText:
      "Yes, EMI support is available for credit cards. Please select EMI option while making payment for more information.",
  },
  {
    id: 3,
    questionText: "How will my doubts be cleared? What is the mechanism?",
    answerText:
      "You can ask your doubts in the discussions section and course mentor will answer them. You can also see the doubts asked by other students.",
  },
];
const AccordionItem = ({ id, title, content, expanded, toggleAccordion }) => (
  <div className="accordion-item">
    <button
      id={`accordion-button-${id}`}
      aria-expanded={expanded}
      onClick={() => toggleAccordion(id)}
    >
      <span className="accordion-title">{title}</span>
      <span className="icon" aria-hidden="true"></span>
    </button>
    <div className="accordion-content">
      <p>{content}</p>
    </div>
  </div>
);

const FAQAccordion = () => {
  return (
    <div className="page">
      <div className="main">
        <h1 className="admission-h1">
          <b>Admissions</b>
        </h1>
        <p>HOME//ADMISSIONS</p>
      </div>
      <div className="school">
        <h2
          className="sch-name admission-h2"
          style={{ color: "#f26522", display: "inline-block" }}
        >
          Viveka Educational Society
        </h2>
        <h4
          className="sch-sub"
          style={{ color: "#970202", display: "inline-block" }}
        >
          - A place where learning is fun and meaningful
        </h4>
      </div>

      <div className="application">
        <div className="left">
          <h2 className="white-color admission-h2">NURSERY TO X</h2>
          <h4 className="white-color">Admissions Open 2023-24</h4>
        </div>
        <div className="right">
          <a href="./reg.html" className="white-color btn">
            Enroll Now
          </a>
          <a href="./table.html" className="white-color btn">
            Fee Structure
          </a>
        </div>
      </div>

      <div className="thirdrow">
        <div className="image-1">
          <img
            className="clg-img"
            src="https://i0.wp.com/avenuemail.in/wp-content/uploads/2022/03/j-1.jpg?fit=1600%2C1067&ssl=1"
            alt=""
          />
        </div>
        <div className="infrastructure">
          <div className="infra">
            <h2 className="headd admission-h2">
              Admission Procedure for the Academic Session 2023 - 2024
            </h2>
            <div className="matter">
              <ul>
                <li>
                  Online Registration Form needs to be filled up as an initial
                  step.
                </li>
                <li>For availing school transport :</li>
                <ul>
                  <li>
                    Prior to filling-up Online Registration Form, kindly click
                    on the below links for the bus stops.
                  </li>
                  <li>
                    Transport facility is provided from the listed stops only
                  </li>
                </ul>
              </ul>
              {/* ... Other content ... */}
            </div>
          </div>
        </div>
      </div>
      <div className="side-cont">
        <div className="fourthrow">
          <div className="staff">
            <h2 className="headd admission-h2" style={{ color: "#f26522" }}>
              Additional Info
            </h2>
            <div className="matter">
              <ul>
                <li>
                  Registration fee of Rs. 600/- once paid is not refundable.
                </li>
                <li>Registration does not guarantee admission.</li>
                <li>
                  Admission to Nursery (LKG/ PP1) and Preparatory (UKG/ PP2) is
                  through Random Selection Method (Lottery).
                </li>
                <li>
                  Admission to Class 1 onwards is done based on the preparedness
                  of the child.
                </li>
                <li>
                  Schedule of further process will be informed upon submission
                  of Registration.
                </li>
                <li>Selected students will be informed through Email / SMS.</li>
                <li>
                  TC to be submitted to the school office after getting
                  admission.
                </li>
                <li>
                  For Classes II to IX admission process would commence in March
                  2023 as admissions are subject to vacancy.
                </li>
              </ul>
              {/* ... Other content ... */}
            </div>
          </div>
          <div className="documents">{/* ... Other content ... */}</div>
        </div>

        <div className="accordion">
          <div className="image-box">
            <img src="Responsive FAQ Accordion/images/mainImg.png" alt="" />
          </div>

          <div className="container">
            <Faqs faqsList={faqsList} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQAccordion;
