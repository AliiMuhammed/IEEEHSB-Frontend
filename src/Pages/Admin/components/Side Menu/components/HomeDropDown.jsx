import React from "react";
import { NavLink } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import PropTypes from "prop-types";

const HomeDropDown = ({ handleClose, toggleSubMenu, showSubMenu }) => {
  return (
    <div className="drop-down">
      <button
        className="drop-down-link"
        onClick={toggleSubMenu}
        aria-expanded={showSubMenu} // Indicate if the dropdown is expanded
        aria-haspopup="true" // Indicate that the button triggers a dropdown menu
      >
        <div className="icon">
          <AiFillHome />
        </div>
        Home
      </button>
      <div className={`sub-menu ${showSubMenu ? "open" : ""}`}>
        <NavLink to="/admin/dashboard/home/slogan" onClick={handleClose}>
          Slogan
        </NavLink>
        <NavLink to="/admin/dashboard/home/video" onClick={handleClose}>
          Video
        </NavLink>
        <NavLink to="/admin/dashboard/home/family" onClick={handleClose}>
          Family
        </NavLink>
        <NavLink to="/admin/dashboard/home/achievements" onClick={handleClose}>
          Achievements
        </NavLink>
        <NavLink to="/admin/dashboard/home/partners" onClick={handleClose}>
          Partners
        </NavLink>
        <NavLink to="/admin/dashboard/home/testimonials" onClick={handleClose}>
          Testimonials
        </NavLink>
      </div>
    </div>
  );
};
HomeDropDown.propTypes = {
  handleClose: PropTypes.func.isRequired,
  toggleSubMenu: PropTypes.func.isRequired,
  showSubMenu: PropTypes.bool.isRequired,
};
export default HomeDropDown;
