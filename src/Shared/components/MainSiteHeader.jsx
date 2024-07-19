import React from "react";
import "../style/main-site-header.css";
const MainSiteHeader = ({ title }) => {
  return (
    <div className="main-title">
      Our <span>{title}</span>
    </div>
  );
};

export default MainSiteHeader;
