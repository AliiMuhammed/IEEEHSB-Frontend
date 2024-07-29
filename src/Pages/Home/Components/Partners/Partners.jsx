import React from "react";
import "./style/partners.css";
import MainSiteHeader from "../../../../Shared/components/MainSiteHeader";
import PartnersSlider from "./components/PartnersSlider";
const Partners = () => {
  return (
    <section className="partners-home-section">
      <div className="container">
        <MainSiteHeader title={"Partners"} />
        <div className="partners-list">
          <PartnersSlider />
        </div>
      </div>
    </section>
  );
};

export default Partners;
