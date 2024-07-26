import React from "react";
import "../style/main-hero-pages.css";
const MainHeroPages = ({ bgImage, author, paragraph, quote }) => {
  return (
    <section className="main-hero-pages">
      <img src={bgImage} loading="lazy" alt="background-hero" />
      <div className="container">
        <div className="text-container">
          <div className="quote-container">
            <q className="quote">{quote}</q>
            <div className="author">
              <span>{`"${author}"`}</span>
            </div>
          </div>

          <p>{paragraph}</p>
        </div>
      </div>
    </section>
  );
};

export default MainHeroPages;
