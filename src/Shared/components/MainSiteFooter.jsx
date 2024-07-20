import React from "react";
import "../style/main-site-footer.css";
import logo from "../../Assets/logos/horizontal logo.png";
import { Link } from "react-router-dom";
import {
  FaFacebookSquare,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";

const MainSiteFooter = () => {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="footer-up">
          <div className="first-subfooter">
            <img src={logo} alt="IEEE-Logo" />
            <p>Follow us on Social Media</p>
            <div className="social-icons">
              <Link to="https://www.facebook.com/ieeehsb/">
                <FaFacebookSquare />
              </Link>
              <Link to="https://www.facebook.com/ieeehsb/">
                <FaInstagram />
              </Link>
              <Link to="https://www.facebook.com/ieeehsb/">
                <FaLinkedin />
              </Link>
              <Link to="https://www.facebook.com/ieeehsb/">
                <FaYoutube />
              </Link>
            </div>
          </div>
          <div className="footer-links">
            <div className="footer-title">Links</div>
            <div className="footer-content">Lorem, ipsum.</div>
            <div className="footer-content">Lorem, ipsum.</div>
            <div className="footer-content">Lorem, ipsum.</div>
            <div className="footer-content">Lorem, ipsum.</div>
          </div>
          <div className="footer-resource">
            <div className="footer-title">Resources</div>
            <div className="footer-content">
              <div className="footer-content">Lorem, ipsum.</div>
              <div className="footer-content">Lorem, ipsum.</div>
              <div className="footer-content">Lorem, ipsum.</div>
              <div className="footer-content">Lorem, ipsum.</div>
            </div>
          </div>
          <div className="footer-contacts">
            <div className="footer-title">Contacts</div>
            <div className="footer-content">
              <div className="footer-content">Lorem, ipsum.</div>
              <div className="footer-content">Lorem, ipsum.</div>
              <div className="footer-content">Lorem, ipsum.</div>
              <div className="footer-content">Lorem, ipsum.</div>
            </div>
          </div>
        </div>
        <div className="footer-down">copyrights &copy; IEEE-HSB 2024</div>
      </div>
    </div>
  );
};

export default MainSiteFooter;
