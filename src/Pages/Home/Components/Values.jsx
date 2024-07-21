import React from "react";
import "../Style/values.css";
import MainSiteHeader from "./../../../Shared/components/MainSiteHeader";
import pin from "../../../Assets/home/pin.png";
import values1 from "../../../Assets/home/values1.png";
import values2 from "../../../Assets/home/values2.png";
const Values = () => {
  return (
    <section className="values-section">
      <div className="container">
        <MainSiteHeader title={"Values"} />
        <div className="values">
          <div className="values-img">
            <img src={values1} alt="values" />
          </div>
          <div className="values-img">
            <img src={values2} alt="values" />
          </div>
          <div className="value">
            <div className="pin-img">
              <img src={pin} alt="pin" />
            </div>
            <h3>Teamwork</h3>
            <p>
              you learn how to work effectively with others towards a common
              goal.
            </p>
          </div>
          <div className="value">
            <div className="pin-img">
              <img src={pin} alt="pin" />
            </div>
            <h3>Time management</h3>
            <p>
              Student activities help students develop time management by
              balancing academics and extracurriculars.
            </p>
          </div>
          <div className="value">
            <div className="pin-img">
              <img src={pin} alt="pin" />
            </div>
            <h3>Networking</h3>
            <p>
              Students can meet new people and build relationships with peers
              who share similar interests.
            </p>
          </div>
          <div className="value">
            <div className="pin-img">
              <img src={pin} alt="pin" />
            </div>
            <h3>Leadership skills</h3>
            <p>
              Student activities provide opportunities for students to take on
              leadership roles and develop their leadership skills.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Values;
