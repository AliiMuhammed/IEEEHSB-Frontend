import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import "../style/MainCard.css";

const MainCard = (props) => {
  return (
    <div className="main-card">
      <div className="main-card-img">
        <img src={props.img} alt={props.name} />
      </div>
      <div className="main-card-content">
        <div className="main-card-title">{props.name}</div>
        <div className="main-card-des">{props.des}</div>
        <div className="main-card-social">
          <a
            href={props.facebook}
            className="main-card-icon"
            target="_blank"
            rel="noreferrer"
          >
            <FaFacebookF />
          </a>
          <a
            href={props.linkedin}
            className="main-card-icon"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </div>
  );
};

export default MainCard;
