import React from "react";
import "./Contact.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import mail_icon from "../../assets/mail_icon.svg";
import call_icon from "../../assets/call_icon.svg";
import location_icon from "../../assets/location_icon.svg";

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact-title">
        <h1>Get in touch</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's talk</h1>
          <p>I'm currently available to tack on new projects, so </p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail_icon} alt="" />
              <p>sp1172389@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src={call_icon} alt="" />
              <p>+91-84450-53254</p>
            </div>
            <div className="contact-detail">
              <img src={location_icon} alt="" />
              <p>Uttar Pradesh,India</p>
            </div>
          </div>
        </div>
        <form action="" className="contact-right">
            <label  htmlFor="name">Your name</label>
            <input type="text" name="name" placeholder="Enter your name" id="name" />
            <label htmlFor="email">Your Email</label>
            <input type="text" id="email" placeholder="Enter your email" />
            <label htmlFor="msg">Write your message here</label>
            <textarea name="message" rows="8" id="msg" placeholder="Enter your message"></textarea>
            <button type="submit"className="contact-submit">Submit now</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
