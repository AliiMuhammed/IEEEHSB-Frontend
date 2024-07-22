import React from "react";
import Values from "./Components/Values";
import Chapters from "./Components/Chapters/Chapters";
import Achievement from "./Components/Achievement/Achievement";

const Home = () => {
  return (
    <section className="home-section">
      <Values />
      <Chapters />
      <Achievement />
    </section>
  );
};

export default Home;
