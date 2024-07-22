import React, { useState, useEffect } from "react";
import MainSiteHeader from "../../../../Shared/components/MainSiteHeader";
import AchievementCard from "./components/AchievementCard";
import "./style/achievement.css";

const Achievement = () => {
  const [resetTrigger, setResetTrigger] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setResetTrigger((prev) => prev + 1);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="achievement-section">
      <div className="container">
        <MainSiteHeader title={"Achievements"} />
        <div className="achievement-cards">
          <AchievementCard
            targetNumber={"52k"}
            duration={3}
            text={"Event"}
            resetTrigger={resetTrigger}
          />
          <AchievementCard
            targetNumber={"260"}
            duration={3}
            text={"Volunteers"}
            resetTrigger={resetTrigger}
          />
          <AchievementCard
            targetNumber={"150"}
            duration={3}
            text={"Participants"}
            resetTrigger={resetTrigger}
          />
          <AchievementCard
            targetNumber={"21"}
            duration={3}
            text={"Awards"}
            resetTrigger={resetTrigger}
          />
          <div className="achievement-bg"></div>
        </div>
      </div>
    </section>
  );
};

export default Achievement;
