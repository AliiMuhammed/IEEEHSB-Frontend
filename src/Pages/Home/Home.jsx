import React from "react";
import MainSiteHeader from "./../../Shared/components/MainSiteHeader";
import Chapters from "./Components/Chapters/Chapters";

const Home = () => {
  return (
    <section className="home-section">
      <div className="container">
        <MainSiteHeader title={"Home"} />
        {/* Add your home page content here */}
        <Chapters />
      </div>
    </section>
  );
};

export default Home;
