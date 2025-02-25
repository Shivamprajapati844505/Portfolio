import React from "react";
import "./About.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import profile_img from "../../assets/profile_img.svg";

const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>About me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-section">
        <div className="about-left">
          <img src={profile_img} alt="" />
        </div>
        <div className="about-right">
          <div className="about-para">
          <p>I am a frontend developer with a strong passion for building modern and user-friendly web applications.</p>
<p>I am eager to learn and grow, bringing enthusiasm and dedication to every project I work on.</p>

          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>HTML5</p>
              <hr style={{ width: "80%" }} />
            </div>
            <div className="about-skill">
              <p>CSS</p>
              <hr style={{ width: "60%" }} />
            </div>
            <div className="about-skill">
              <p>React JS</p>
              <hr style={{ width: "70%" }} />
            </div>
            <div className="about-skill">
              <p>JavaScript</p>
              <hr style={{ width: "80%" }} />
            </div>
            <div className="about-skill">
              <p>SQL</p>
              <hr style={{ width: "40%" }} />
            </div>
          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
            <h1>3</h1>
            <p>YEARS OF EXPERIENCE</p>
        </div>
        <hr />
        <div className="about-achievement">
            <h1>8+</h1>
            <p>PROJECTS COMPLETED</p>
        </div>
      </div>
    </div>
  );
};

export default About;
