import React from "react";
import Values from "./Components/Values";
import Chapters from "./Components/Chapters/Chapters";
import Achievement from "./Components/Achievement/Achievement";
import Hero from "./Components/Hero";
import "./Style/home.css"
const Home = () => {
  return (
    <section className="home-section">
      <Hero />
      <Values />
      <Chapters />
      <Achievement />
    </section>
  );
};

export default Home;
