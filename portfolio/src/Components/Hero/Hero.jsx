import React from "react";
import "./Hero.css";
import profile_img from "../../assets/self.jpg";
import resume from "../../assets/Shivam_Prajapati_2025.pdf";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Hero = () => {
  return (
    <div id="home" className="hero">
      <img src={profile_img} alt="Profile" />
      <h1>
        <span>I'm Shivam Prajapati,</span> a software developer specializing in MERN Stack.
      </h1>
      <p>I am a passionate Full Stack developer, eager to build modern web applications.</p>

      <div className="hero-action">
        <div className="hero-connect">
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            Connect with me
          </AnchorLink>
        </div>
        <a
          href={resume}
          download="Shivam_Resume"
          className="hero-resume"
        >
          My Resume
        </a>
      </div>
    </div>
  );
};

export default Hero;
