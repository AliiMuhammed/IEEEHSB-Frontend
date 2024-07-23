import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import "../style/main-officer-card.css";
import { Link } from "react-router-dom";

const MainOfficerCard = ({ img, name, des, facebook, linkedin }) => {
  return (
    <div className="main-officer-card">
      <div className="main-officer-card-img">
        <img src={img} alt={name} />
      </div>
      <div className="main-officer-card-content">
        <div className="main-officer-card-title">{name}</div>
        <div className="main-officer-card-des">{des}</div>
        <div className="main-officer-card-social">
          <Link
            to={facebook}
            className="main-officer-card-icon"
            target="_blank"
            rel="noreferrer"
          >
            <FaFacebookF />
          </Link>
          <Link
            to={linkedin}
            className="main-officer-card-icon"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MainOfficerCard;
