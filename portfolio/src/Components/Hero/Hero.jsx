import React from "react";
import "./Hero.css";
import profile_img from "../../assets/profile2_img.jpeg";
import AnchorLink from "react-anchor-link-smooth-scroll";
const Hero = () => {
  return (
    <div id="home" className="hero">
      <img src={profile_img} alt="" />
      <h1>
  <span>I'm Shivam Prajapati,</span> a software developer specializing in React.js.
</h1>
<p>I am a passionate Full Stack developer, eager to build modern web applications.</p>

      <div className="hero-action">
        <div className="hero-connect">
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            Connect with me
          </AnchorLink>
        </div>
        <div className="hero-resume">My resume</div>
      </div>
    </div>
  );
};

export default Hero;
