import React from "react";
import MainSiteHeader from "./../../Shared/components/MainSiteHeader";

const Home = () => {
  return (
    <section className="home-section">
      <div className="container">
        <MainSiteHeader title={"Home"} />
        <MainSiteHeader title={"Values"} />
        <MainSiteHeader title={"achievement"} />
      </div>
    </section>
  );
};

export default Home;
