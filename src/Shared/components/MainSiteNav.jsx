import React from "react";
import "../style/main-site-nav.css";
import logo from "../../Assets/logos/horizontal logo.png";
import { NavLink } from "react-router-dom";
const MainSiteNav = () => {
  return (
    <nav className="main-nav">
      <div className="container">
        <NavLink to={"/"} className="main-nav-logo">
          <img src={logo} alt="IEEE-Logo" />
        </NavLink>
        <ul className="nav-links">
          <li className="nav-taps">
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <li className="nav-taps">
            <NavLink to={"/aboutUs"}>About Us</NavLink>
          </li>
          <li className="nav-taps">
            <NavLink to={"/contact"}>Contact</NavLink>
          </li>
          <li className="nav-taps">
            <NavLink to={"/gallery"}>Gallery</NavLink>
          </li>
          <li className="nav-taps">
            <NavLink to={"/chapters"}>Chapters</NavLink>
          </li>
        </ul>
        <div className="main-nav-login">
          <button className="main-btn sm login">Login</button>
        </div>
      </div>
    </nav>
  );
};

export default MainSiteNav;
