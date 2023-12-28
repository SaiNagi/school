const ECS = (props) => {
  return (
    <div>
      <header id="header">
        <nav>
          <div className="navbar">
            <img src="school-logo.png" alt="" />
            <input type="checkbox" id="check" />
            <label htmlFor="check" className="checkbtn">
              <i className="bi bi-list"></i>
            </label>
            <ul className="menu">
              <li>
                <a href="#">
                  HOME <i className="bi bi-caret-down-fill"></i>
                </a>
                <ul className="submenu">
                  <li>
                    <a href="#sec1">Campus</a>
                  </li>
                  <li>
                    <a href="#sec2">Who we are</a>
                  </li>
                  <li>
                    <a href="#sec3">Details</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#">
                  ACADEMICS <i className="bi bi-caret-down-fill"></i>
                </a>
                <ul className="submenu">
                  <li>
                    <a href="">Pre primary</a>
                  </li>
                  <li>
                    <a href="">Primary</a>
                  </li>
                  <li>
                    <a href="">Secondary</a>
                  </li>
                  <li>
                    <a href="">Senior secondary</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#">
                  CO-CURRICULUM <i className="bi bi-caret-down-fill"></i>
                </a>
                <ul className="submenu">
                  <li>
                    <a href="">ECA</a>
                  </li>
                  <li>
                    <a href="">Sport</a>
                  </li>
                  <li>
                    <a href="">Events</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#">
                  ABOUT US <i className="bi bi-caret-down-fill"></i>
                </a>
                <ul className="submenu">
                  <li>
                    <a href="">Mission-vision</a>
                  </li>
                  <li>
                    <a href="">Faculty</a>
                  </li>
                  <li>
                    <a href="">Facilities</a>
                  </li>
                  <li>
                    <a href="">Achievements</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#">
                  ADMISSIONS <i className="bi bi-caret-down-fill"></i>
                </a>
                <ul className="submenu">
                  <li>
                    <a href="">Admission process</a>
                  </li>
                  <li>
                    <a href="">Enroll now</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#">
                  LOGIN <i className="bi bi-caret-down-fill"></i>
                </a>
                <ul className="submenu">
                  <li>
                    <a href="">Parent login</a>
                  </li>
                  <li>
                    <a href="">Staff login</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#">
                  VIVEKA CAMPUSES <i className="bi bi-caret-down-fill"></i>
                </a>
                <ul className="submenu">
                  <li>
                    <a href="">VIVEKA foster school Tenali</a>
                  </li>
                  <li>
                    <a href="">VIVEKA ponnur</a>
                  </li>
                  <li>
                    <a href="">VIVEKA foster school BAPATLA</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </nav>
      </header>
      <img
        style={{ width: "100vw" }}
        src="yogendra-singh-M92wusZZ_qg-unsplash.jpg"
        alt=""
        srcSet=""
      />

      <div
        className="main-content"
        onScroll={(event) => changeHeaderStyle(event)}
      >
        <div className="eca">
          <div className="subhead">
            <h3 className="heading-3">EXTRA CURRICULAR ACTIVITIES</h3>
            <img id="eca_logo" src="ecs-images/ECA_logo.jpeg" alt="" />
          </div>
          <div className="slideshow-container">
            <div className="mySlides">
              <img
                className="ecs-image"
                src="ecs-images/yoga6.jpg"
                style={{ width: "100%" }}
                alt=""
              />
            </div>
            <div className="mySlides ">
              <img
                className="ecs-image"
                src="ecs-images/yoga3.jpg"
                style={{ width: "100%" }}
                alt=""
              />
            </div>
            <div className="mySlides ">
              <img
                className="ecs-image"
                src="ecs-images/march.jpg"
                style={{ width: "100%" }}
                alt=""
              />
            </div>
            <div className="mySlides ">
              <img
                className="ecs-image"
                src="ecs-images/awareness.jpg"
                style={{ width: "100%" }}
                alt=""
              />
            </div>
            <br />
            <div style={{ textAlign: "center" }}>
              <span className="dot"></span>
              <span className="dot"></span>
              <span className="dot"></span>
              <span className="dot"></span>
            </div>
          </div>

          <div className="info">
            <p>
              <br />
              Extra curricular activities are not just a way to have fun, but
              also a way to learn new skills, make new friends, and discover new
              passions. They can help students grow as individuals, develop
              their confidence, and enhance their academic performance.
              <br />
              <br /> Among these activities, yoga serves as the gentle guide
              that helps students find balance within, nurturing their minds,
              bodies, and spirits to shine their brightest. Along with yoga,
              there are various other activities organized under this segment to
              help students maintain their physical and mental strength,
              including awareness programs, inspirational speeches, Marching.
            </p>
          </div>

          <br />
          <br />
          <div className="slideshow-container right">
            <div className="mySlides2 ">
              <img
                className="ecs-image"
                src="ecs-images/activities.jpg"
                style={{ width: "100%" }}
                alt=""
              />
            </div>
            <div className="mySlides2">
              <img
                className="ecs-image"
                src="ecs-images/eca1.jpg"
                style={{ width: "100%" }}
                alt=""
              />
            </div>
            <div className="mySlides2 ">
              <img
                className="ecs-image"
                src="ecs-images/activities2.jpg"
                style={{ width: "100%" }}
                alt=""
              />
            </div>
            <br />
            <div style={{ textAlign: "center" }}>
              <span className="dot2"></span>
              <span className="dot2"></span>
              <span className="dot2"></span>
            </div>
          </div>

          <div className="info left">
            <p>
              At Viveka Educational Society, we prioritize the overall
              development of our students.. As part of this commitment, we
              organize a range of engaging activities for our IIT students (6th
              to 9th className) on a weekly basis. These activities encompass
              both fun-filled recreational pursuits and knowledge-based
              endeavors. By offering such diverse opportunities, we aim to
              create a well-rounded educational experience that nurtures
              students' curiosity, promotes their social interactions, and
              enhances their overall learning journey.
            </p>
          </div>
        </div>

        {/* Repeat the above structure for the SPORTS and EVENTS sections */}
      </div>

      <footer>{/* Footer content */}</footer>
    </div>
  );
};

export default ECS;
