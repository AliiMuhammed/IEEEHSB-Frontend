import React from "react";
import "../Style/HomeNav.css";

const HomeNav = () => {
  return (
    <div className="home-nav">
      <div className="home-nav-logo">
        <img
          src="/IEEEHSB-Frontend/src/Assets/logos/horizontal logo.png"
          alt="IEEE-Logo"
        />
      </div>
      <div className="home-nav-links">
        <div className="nav-taps">Home</div>
        <div className="nav-taps">About Us</div>
        <div className="nav-taps">contact</div>
        <div className="nav-taps">Chapters</div>
      </div>
      <div className="home-nav-login">
        <button className="main-btn login">Login</button>
      </div>
    </div>
  );
};

export default HomeNav;
