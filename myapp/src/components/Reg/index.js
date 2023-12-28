import React, { Component } from "react";
import "./index.css";

class AdmissionForm extends Component {
  // componentDidMount() {
  //   document.getElementById("admissionForm").reset();
  // }

  topFunction() {
    // Implement your topFunction logic here
    // Scroll to the top of the page or perform other actions
    // This is just a placeholder, replace it with your actual implementation
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  render() {
    return (
      <div className="main-container">
        <div className="wrapper1">
          <header className="reg-heading">
            <div className="container-cont">
              <img
                id="logo"
                src="./WhatsApp Image 2023-05-28 at 15.10.18.jpg"
                alt="VJHS logo"
                widht="100%"
                height="100px;"
              />

              <h1>Viveka Educational Society</h1>
            </div>
          </header>

          <section id="main1">
            <div>
              <article id="main-content">
                <br />
                <h2>Admission/New Registration</h2>

                <div className="container1">
                  <table className="a11">
                    <tr></tr>
                    <tr>
                      <th className="c1" colspan="4">
                        ADMISSION FORM
                      </th>
                    </tr>
                    <tr>
                      <th>Name </th>
                      <td>
                        <input
                          type="text"
                          className="e1"
                          placeholder="First Name"
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          className="e1"
                          placeholder="Middle Name"
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          className="e1"
                          placeholder="Last Name"
                        />
                      </td>
                    </tr>
                    <tr>
                      <th>Father Name </th>
                      <td>
                        <input
                          type="text"
                          className="e1"
                          placeholder="First Name"
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          className="e1"
                          placeholder="Middle Name"
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          className="e1"
                          placeholder="Last Name"
                        />
                      </td>
                    </tr>
                    <tr>
                      <th>Mother Name </th>
                      <td>
                        <input
                          type="text"
                          className="e1"
                          placeholder="First Name"
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          className="e1"
                          placeholder="Middle Name"
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          className="e1"
                          placeholder="Last Name"
                        />
                      </td>
                    </tr>
                    <tr>
                      <th>Gender </th>
                      <td className="f1">
                        <input type="radio" name="gender" />
                        Male{" "}
                      </td>
                      <td className="f1">
                        <input type="radio" name="gender" />
                        Female{" "}
                      </td>
                      <td className="f1">
                        <input type="radio" name="gender" />
                        Other{" "}
                      </td>
                    </tr>
                    <tr>
                      <th>Date of Birth </th>
                      <td>
                        <input className="g1" type="date" />
                      </td>
                      <th>Category</th>
                      <td>
                        <select className="g2">
                          <option>General</option>
                          <option>OBC</option>
                          <option>ST/SC</option>
                          <option>PH</option>
                        </select>
                      </td>
                    </tr>
                    <tr>
                      <th>Email </th>
                      <td>
                        <input
                          className="e1"
                          type="email"
                          placeholder="Enter Student's email"
                        />
                      </td>
                      <th>Guardian's Email </th>
                      <td>
                        <input
                          className="e1"
                          type="email"
                          placeholder="Enter Guardian's email"
                        />
                      </td>
                    </tr>
                    <tr>
                      <th>Address</th>
                      <td colspan="3">
                        <input
                          className="i1"
                          type="text"
                          placeholder="Enter Address"
                        />
                      </td>
                    </tr>
                    <tr>
                      <th>Corresponding Address</th>
                      <td colspan="3">
                        <input
                          className="i1"
                          type="text"
                          placeholder="Enter corresponding address"
                        />
                      </td>
                    </tr>
                    <tr>
                      <th>City</th>
                      <td>
                        <input
                          className="e1"
                          type="text"
                          placeholder="Enter your city"
                        />
                      </td>
                      <th>State</th>
                      <td>
                        <input
                          className="e1"
                          type="text"
                          placeholder="Enter your state"
                        />
                      </td>
                    </tr>

                    <tr>
                      <th>PIN</th>
                      <td>
                        <input
                          className="e1"
                          type="number"
                          placeholder="Enter PIN Code"
                        />
                      </td>
                      <th>Nationality</th>
                      <td>
                        <input
                          className="e1"
                          type="text"
                          placeholder="Enter your nationality"
                        />
                      </td>
                    </tr>
                    <tr>
                      <th className="d1" colspan="4">
                        <h3>
                          <span className="badge badge-pill badge-success">
                            {" "}
                            Previous School Details
                          </span>
                        </h3>
                      </th>
                    </tr>
                    <tr>
                      <th>School Name</th>
                      <td colspan="3">
                        <input
                          className="j1"
                          type="text"
                          placeholder="Enter Previous School Name"
                        />
                      </td>
                    </tr>
                    <tr>
                      <th>School Address</th>
                      <td colspan="3">
                        <input
                          className="i1"
                          type="text"
                          placeholder="Enter Previous School Address"
                        />
                      </td>
                    </tr>
                    <tr>
                      <th>City</th>
                      <td>
                        <input
                          type="text"
                          className="e1"
                          placeholder="Previous School city"
                        />
                      </td>
                      <th>State</th>
                      <td>
                        <input
                          type="text"
                          className="e1"
                          placeholder="Previous School state"
                        />
                      </td>
                    </tr>
                    <tr>
                      <th>PIN</th>
                      <td>
                        <input
                          type="number"
                          className="e1"
                          placeholder="Enter PIN Code"
                        />
                      </td>
                      <th>School Board</th>
                      <td>
                        <input
                          type="text"
                          className="e1"
                          placeholder="Previous School Board"
                        />
                      </td>
                    </tr>
                    <tr>
                      <th className="d1" colspan="4">
                        <h3>
                          <span className="badge badge-pill badge-success">
                            {" "}
                            Previous School Result
                          </span>
                        </h3>
                      </th>
                    </tr>
                    <tr>
                      <th className="k1">SUBJECT</th>
                      <th className="e1">English</th>
                      <th className="e1">Science</th>
                      <th className="e1">Mathematics</th>
                    </tr>
                    <tr>
                      <th className="k1">MARKS OBTAINED</th>
                      <td>
                        <input
                          className="e1"
                          type="number"
                          placeholder="Marks obtained"
                        />
                      </td>
                      <td>
                        <input
                          className="e1"
                          type="number"
                          placeholder="Marks obtained"
                        />
                      </td>
                      <td>
                        <input
                          className="e1"
                          type="number"
                          placeholder="Marks obtained"
                        />
                      </td>
                    </tr>
                    <tr>
                      <th className="k1">Percentage</th>
                      <td>
                        <input
                          className="e1"
                          type="number"
                          placeholder="Percentage %"
                        />
                      </td>
                      <th className="k1">Passing year</th>
                      <td>
                        <select className="e1">
                          <option>2019</option>
                          <option>2020</option>
                          <option>2021</option>
                          <option>2022</option>
                          <option>2023</option>
                        </select>
                      </td>
                    </tr>
                    <tr>
                      <th className="d1" colspan="4">
                        <h3>
                          <span className="badge badge-pill badge-success">
                            {" "}
                            Exam Related Details
                          </span>
                        </h3>
                      </th>
                    </tr>
                    <tr>
                      <th>Applying For Class</th>
                      <td>
                        <select className="e1">
                          <option>NC</option>
                          <option>LKG</option>
                          <option>UKG</option>
                          <option>I</option>
                          <option>II</option>
                          <option>III</option>
                          <option>IV</option>
                          <option>V</option>
                          <option>VI</option>
                          <option>VII</option>
                          <option>VIII</option>
                          <option>IX</option>
                        </select>
                      </td>
                      <th className="k1">Mode of Exam</th>
                      <td>
                        <select className="e1">
                          <option>ONLINE</option>
                          <option>OFFLINE</option>
                        </select>
                      </td>
                    </tr>
                    <tr>
                      <th className="d1" colspan="4">
                        <h3>
                          <span className="badge badge-pill badge-success">
                            {" "}
                            Student Photo & Signature
                          </span>
                        </h3>
                      </th>
                    </tr>
                    <tr>
                      <th>Photo</th>
                      <td colspan="3">
                        <input className="k2" type="file" />
                      </td>
                    </tr>
                    <tr>
                      <th>Signature</th>
                      <td colspan="3">
                        <input className="k2" type="file" />
                      </td>
                    </tr>
                    <tr>
                      <th>Aadhar Card number</th>
                      <td>
                        <input
                          className="e1"
                          type="number"
                          placeholder="Student's aadhar card no."
                        />
                      </td>
                    </tr>
                    <tr>
                      <th>
                        <input type="checkbox" />
                        <lable>I Agree</lable>
                      </th>
                      <th colspan="3">
                        <a>
                          <button className="button3">SUBMIT</button>
                        </a>
                      </th>
                    </tr>
                  </table>
                </div>

                {/* 
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                  </table>
                </div>*/}
              </article>
            </div>
          </section>

          {/* <button onclick="topFunction()" id="myBtn" title="Go to top">
            Move To Top
          </button> */}
        </div>
      </div>
    );
  }
}

export default AdmissionForm;
