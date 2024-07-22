import React from "react";
import MainSiteHeader from "../../../../Shared/components/MainSiteHeader";
import ras from "../../../../Assets/logos/Logos/asa.png";
import comsoc from "../../../../Assets/logos/Logos/ComSoc-01.png";
import wie from "../../../../Assets/logos/Logos/WIE LOGO transparent 2.png";
import pes from "../../../../Assets/logos/Logos/w.png";
import "./style/Chapter.css";
import ChapterCard from "./components/ChapterCard";
const Chapters = () => {
  return (
    <section className="chapters-section">
      <div className="container">
        <MainSiteHeader title={"Chapters"} />
        <div className="chapters-content">
          <ChapterCard
            chapterImage={ras}
            classname={"ras"}
            number={100}
            link={"/aboutUs"}
            chapterName={"RAS Chapter"}
          />
          <ChapterCard
            chapterImage={pes}
            classname={"pes"}
            number={100}
            link={"/aboutUs"}
            chapterName={"PES Chapter"}
          />
          <ChapterCard
            chapterImage={comsoc}
            classname={"comsoc"}
            number={100}
            link={"/aboutUs"}
            chapterName={"COMSOC Chapter"}
          />
          <ChapterCard
            chapterImage={wie}
            classname={"wie"}
            number={100}
            link={"/aboutUs"}
            chapterName={"WIE Affinty group"}
          />
        </div>
      </div>
    </section>
  );
};

export default Chapters;
