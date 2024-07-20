import React from "react";
import "../Style/HomeTitle.css";

const HomeTitle = (props) => {
  return (
    <div className="home-title">
      {props.firstWord} <span>{props.secondWord}</span>
    </div>
  );
};

export default HomeTitle;
