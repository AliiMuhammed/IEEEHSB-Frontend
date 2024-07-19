import React from "react";
import "../Style/HomeFooter.css";

const HomeFooter = () => {
  return (
    <div className="main-home-footer">
      <div className="home-footer-up">
        <div className="first-subfooter">
          <img
            src="/IEEEHSB-Frontend/src/Assets/logos/horizontal-logo.png"
            alt="IEEE-Logo"
          />
          <p>Follow us on Social Media</p>
          <div className="social-icons">& & & &</div>
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
      <div className="home-footer-down">copyrights &copy; 2024.</div>
    </div>
  );
};

export default HomeFooter;
