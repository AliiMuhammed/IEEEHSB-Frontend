import React from "react";
import MainHeader from "../../../../../../../../Shared/components/MainHeader";
import "./style/family.css";
import Chairmen from "./components/chair/Chairmen";

const Family = () => {
  return (
    <section className="family-section">
      <MainHeader
        title={"Our Family"}
        paragraph={"Here You can add, update, and delete all family members."}
      />
      <Chairmen />
    </section>
  );
};

export default Family;
