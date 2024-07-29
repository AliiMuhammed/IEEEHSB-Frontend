import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import part from "../../../../../Assets/aboutUs/hero.png";
import "./style/partnersSilder.css";
const PartnersSlider = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 700 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 700, min: 0 },
      items: 1,
    },
  };
  return (
    <div className="partners-slider">
      <Carousel
        ssr={true}
        infinite={true}
        removeArrowOnDeviceType={["tablet", "mobile"]}
        responsive={responsive}
        autoPlaySpeed={2000}
        autoPlay={true}
      >
        <div className="partners-slide">
          <div className="img-container">
            <img src={part} loading="lazy" alt="" />
          </div>
          <h3>Item 1</h3>
        </div>
        <div className="partners-slide">
          <div className="img-container">
            <img src={part} loading="lazy" alt="" />
          </div>
          <h3>Item 1</h3>
        </div>
        <div className="partners-slide">
          <div className="img-container">
            <img src={part} loading="lazy" alt="" />
          </div>
          <h3>Item 1</h3>
        </div>
        <div className="partners-slide">
          <div className="img-container">
            <img src={part} loading="lazy" alt="" />
          </div>
          <h3>Item 1</h3>
        </div>
        <div className="partners-slide">
          <div className="img-container">
            <img src={part} loading="lazy" alt="" />
          </div>
          <h3>Item 1</h3>
        </div>
        <div className="partners-slide">
          <div className="img-container">
            <img src={part} loading="lazy" alt="" />
          </div>
          <h3>Item 1</h3>
        </div>
        <div className="partners-slide">
          <div className="img-container">
            <img src={part} loading="lazy" alt="" />
          </div>
          <h3>Item 1</h3>
        </div>
      </Carousel>
    </div>
  );
};

export default PartnersSlider;
