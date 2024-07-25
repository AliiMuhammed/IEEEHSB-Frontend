import React, { useEffect } from "react";
import "../Style/hero.css"; // Import the CSS file for styling
import logo from "../../../Assets/logos/vertical logo.png";
import { Link } from "react-router-dom";

const Hero = () => {
  useEffect(() => {
    const handleScroll = () => {
      const logoContainer = document.querySelector(".logo-container");
      if (window.scrollY > 100) {
        logoContainer.classList.add("animate-logo");
      } else {
        logoContainer.classList.remove("animate-logo");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="hero-section">
      <div className="hero-bg">
        <div className="container">
          <div className="text-container">
            <h1>Rise above the storm</h1>
            <p>
              The acceleration of the latest advancements in technology and
              engineering makes you worry about your career? Don't worry, in
              IEEE HSB we will help you to stay up-to-date through various
              workshops, seminars, and other activities.
            </p>

            <Link to={"/"} className="main-btn join-btn">
              Join Us
            </Link>
          </div>
          <div className="logo-container">
            <img src={logo} alt="IEEE Helwan Logo" className="logo" loading="lazy" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
