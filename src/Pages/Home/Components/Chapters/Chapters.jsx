import React from "react";
import HomeTitle from "../HomeTitle";
import ReactCardSlider from "./Components/ChapterSlider";
import "../../Style/Slider.css";

const Chapters = () => {
  const sliderClick = (slider) => {
    alert("hello world");
  };

  const slides = [
    {
      image: "https://picsum.photos/200/300",
      title: "RAS",
      description: "more than 50 volanteer",
      clickEvent: sliderClick,
    },
    {
      image: "https://picsum.photos/600/500",
      title: "PES",
      description: "more than 50 volanteer",
      clickEvent: sliderClick,
    },
    {
      image: "https://picsum.photos/700/600",
      title: "COMSOC",
      description: "more than 50 volanteer",
      clickEvent: sliderClick,
    },
    {
      image: "https://picsum.photos/500/400",
      title: "WIE",
      description: "more than 50 volanteer",
      clickEvent: sliderClick,
    },
  ];

  return (
    <div className="chapters-section">
      <HomeTitle firstWord="our" secondWord="Chapters" />
      <div className="chapters-content">
        <ReactCardSlider slides={slides} />
      </div>
    </div>
  );
};

export default Chapters;
