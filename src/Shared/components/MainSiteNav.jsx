import React, { useState } from "react";
import "../style/main-site-nav.css";
import logo from "../../Assets/logos/horizontal logo.png";
import { NavLink } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";

const MainSiteNav = () => {
  const [show, setShow] = useState(false);

  return (
    <nav className="main-nav">
      <div className="container">
        <NavLink to={"/"} className="main-nav-logo">
          <img src={logo} alt="IEEE-Logo" />
        </NavLink>
        <div className={`nav-links ${show ? "show" : ""}`}>
          <ul>
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
        <div className="drop-down-btn">
          <button className="drop-down" onClick={() => setShow(!show)}>
            {show ? <IoClose /> : <RxHamburgerMenu />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default MainSiteNav;
