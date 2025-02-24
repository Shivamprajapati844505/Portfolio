import "./Footer.css";
import footer_logo from "../../assets/logo.svg";
import user_icon from "../../assets/user_icon.svg";
import { FaLinkedin, FaInstagram, FaYoutube, FaTelegram } from "react-icons/fa"; 

function Footer() {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-top-left">
        <img src={footer_logo} alt="Logo" className="footer-logo" />
        </div>
        <div className="social-links">
          <a href="https://www.linkedin.com/in/shivam-prajapati-87260723b/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://www.instagram.com/your-profile" target="_blank" rel="noopener noreferrer">
            <FaInstagram  />
          </a>
          <a href="https://www.youtube.com/@your-channel" target="_blank" rel="noopener noreferrer">
            <FaYoutube />
          </a>
          <a href="https://t.me/your-telegram" target="_blank" rel="noopener noreferrer">
            <FaTelegram />
          </a>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <p className="footer-bottom-left">
          &copy; 2024 Shivam Prajapati. All rights reserved.
        </p>
        <div className="footer-bottom-right">
          <p>Terms of Service</p>
          <p>Privacy Policy</p>
          <p>Connect with me</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
