import React from "react";
import { IoPersonOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import "../style/chapterCard.css";
const ChapterCard = ({
  chapterImage,
  classname,
  number,
  link,
  chapterName,
}) => {
  return (
    <div className={`chapter-card ${classname}`}>
      <div className={`chapter-card-img ${classname}`}>
        <img src={chapterImage} alt="chapterImage" />
      </div>
      <div className="chapter-card-content">
        <div className="chapter-card-title">{chapterName}</div>
        <div className="chapter-card-des">
          <IoPersonOutline />
          {`More than ${number} Volanteer`}
        </div>
        <Link to={link} className={`main-btn chapter-btn ${classname}`}>
          discover
        </Link>
      </div>
    </div>
  );
};

export default ChapterCard;
