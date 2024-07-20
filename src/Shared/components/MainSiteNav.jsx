import React, { useState, useEffect, useRef } from "react";
import "../style/main-site-nav.css";
import logo from "../../Assets/logos/horizontal logo.png";
import { NavLink } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";

const MainSiteNav = () => {
  const [show, setShow] = useState(false);
  const navRef = useRef(null);

  const handleClickOutside = (event) => {
    if (navRef.current && !navRef.current.contains(event.target)) {
      setShow(false);
    }
  };

  const handleNavLinkClick = () => {
    setShow(false);
  };

  const handleScroll = () => {
    setShow(false);
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className="main-nav" ref={navRef}>
      <div className="container">
        <NavLink to={"/"} className="main-nav-logo" onClick={handleNavLinkClick}>
          <img src={logo} alt="IEEE-Logo" />
        </NavLink>
        <div className={`nav-links ${show ? "show" : ""}`}>
          <ul>
            <li className="nav-taps">
              <NavLink to={"/"} onClick={handleNavLinkClick}>Home</NavLink>
            </li>
            <li className="nav-taps">
              <NavLink to={"/aboutUs"} onClick={handleNavLinkClick}>About Us</NavLink>
            </li>
            <li className="nav-taps">
              <NavLink to={"/contact"} onClick={handleNavLinkClick}>Contact</NavLink>
            </li>
            <li className="nav-taps">
              <NavLink to={"/gallery"} onClick={handleNavLinkClick}>Gallery</NavLink>
            </li>
            <li className="nav-taps">
              <NavLink to={"/chapters"} onClick={handleNavLinkClick}>Chapters</NavLink>
            </li>
          </ul>
          <div className="main-nav-login">
            <button className="main-btn sm login" onClick={handleNavLinkClick}>Login</button>
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
