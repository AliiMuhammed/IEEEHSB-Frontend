import React from "react";
import PropTypes from "prop-types"; 
import "../style/mainHeading.css";

const MainHeading = ({ heading, icon }) => {
  return (
    <div className="main-heading">
      <div className="container">
        <span>{icon}</span>
        <h1>{heading}</h1>
      </div>
    </div>
  );
};

MainHeading.propTypes = {
  heading: PropTypes.string.isRequired, 
  icon: PropTypes.node.isRequired, 
};

export default MainHeading;
