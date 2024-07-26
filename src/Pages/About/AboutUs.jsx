import React from "react";
import MainHeroPages from "../../Shared/components/MainHeroPages";
import heroImage from "../../Assets/aboutUs/hero.png";
import "./style/aboutUs.css";
const AboutUs = () => {
  return (
    <section className="about-us-section">
      <MainHeroPages
        bgImage={heroImage}
        paragraph={
          "Discover a dynamic community where you can grow, excel, and connect through various programs and events. Join us in creating lasting memories and achieving new heights together!"
        }
        quote={"The only way to do great work is to love what you do."}
        author={"Steve Jobs"}
      />
      <div className="container"></div>
    </section>
  );
};

export default AboutUs;
