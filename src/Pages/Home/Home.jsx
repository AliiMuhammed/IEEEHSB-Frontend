import React, { useEffect } from "react";
import Values from "./Components/Values";
import Chapters from "./Components/Chapters/Chapters";
import Achievement from "./Components/Achievement/Achievement";
import Hero from "./Components/Hero";
import "./Style/home.css";
import Officers from "./Components/Officers";
import http from "./../../Helper/http";
import Partners from "./Components/Partners/Partners";
const Home = () => {
  useEffect(() => {
    http
      .GET("/check-cookie")
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <section className="home-section">
      <Hero />
      <Achievement />
      <Officers />
      <Partners />
      <Values />
      <Chapters />
    </section>
  );
};

export default Home;
