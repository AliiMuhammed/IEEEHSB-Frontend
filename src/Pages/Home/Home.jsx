import React from "react";
import Values from "./Components/Values";
import Chapters from "./Components/Chapters/Chapters";
import Achievement from "./Components/Achievement/Achievement";
import Hero from "./Components/Hero";
import "./Style/home.css";
import Officers from "./Components/Officers";
const Home = () => {
  return (
    <section className="home-section">
      <Hero />
      <Achievement />
      <Officers />
      <Values />
      <Chapters />
    </section>
  );
};

export default Home;
