import React from "react";
import MainSiteHeader from "../../../Shared/components/MainSiteHeader";
import MainOfficerCard from "../../../Shared/components/MainOfficerCard";
import user from "../../../Assets/user/Ali Muhammed.png";
import "../Style/officers.css";
const Officers = () => {
  return (
    <section className="officers-section">
      <div className="container">
        <MainSiteHeader title={"Officers"} />
        <div className="officers-cards">
          <MainOfficerCard
            img={user}
            name={"Ali Muhammed"}
            des={"Software Engineer"}
            facebook={"https://www.facebook.com/ali.m.muhammed.5"}
            linkedin={"https://www.linkedin.com/in/ali-muhammed-9a9b5b1a9"}
          />
          <MainOfficerCard
            img={user}
            name={"Ali Muhammed"}
            des={"Software Engineer"}
            facebook={"https://www.facebook.com/ali.m.muhammed.5"}
            linkedin={"https://www.linkedin.com/in/ali-muhammed-9a9b5b1a9"}
          />
          <MainOfficerCard
            img={user}
            name={"Ali Muhammed"}
            des={"Software Engineer"}
            facebook={"https://www.facebook.com/ali.m.muhammed.5"}
            linkedin={"https://www.linkedin.com/in/ali-muhammed-9a9b5b1a9"}
          />
          <MainOfficerCard
            img={user}
            name={"Ali Muhammed"}
            des={"Software Engineer"}
            facebook={"https://www.facebook.com/ali.m.muhammed.5"}
            linkedin={"https://www.linkedin.com/in/ali-muhammed-9a9b5b1a9"}
          />
          <MainOfficerCard
            img={user}
            name={"Ali Muhammed"}
            des={"Software Engineer"}
            facebook={"https://www.facebook.com/ali.m.muhammed.5"}
            linkedin={"https://www.linkedin.com/in/ali-muhammed-9a9b5b1a9"}
          />
        </div>
      </div>
    </section>
  );
};

export default Officers;
