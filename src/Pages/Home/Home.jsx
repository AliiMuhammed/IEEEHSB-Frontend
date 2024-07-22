import React from "react";
import Values from "./Components/Values";
import Chapters from "./Components/Chapters/Chapters";

const Home = () => {
  return (
    <section className="home-section">
      <Values />
      <Chapters />
    </section>
  );
};

export default Home;
