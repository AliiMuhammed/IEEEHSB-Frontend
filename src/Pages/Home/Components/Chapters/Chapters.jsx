import React from "react";
import MainSiteHeader from "../../../../Shared/components/MainSiteHeader";
import { IoPersonOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import ras from "../../../../Assets/logos/Logos/asa.png";
import "./style/Chapter.css";
const Chapters = () => {
  return (
    <div className="chapters-section">
      <div className="container">
        <MainSiteHeader title={"Chapters"} />
        <div className="chapters-content">
          {/* ------------------Card------------------------------------------------ */}
          <div className="chapter-card ">
            <div className="chapter-card-img">
              <img src={ras} alt="RAS" />
            </div>
            <div className="chapter-card-content">
              <div className="chapter-card-title">RAS</div>
              <div className="chapter-card-des">
                <IoPersonOutline />
                More than 100 Volanteer
              </div>
              <Link to="/aboutUs" className="main-btn chapter-btn">
                <div className="chapter-button">
                  <span className="txt1">discover</span>
                  <span className="txt2">read more</span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chapters;
