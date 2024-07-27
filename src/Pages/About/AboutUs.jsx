import React from "react";
import MainHeroPages from "../../Shared/components/MainHeroPages";
import heroImage from "../../Assets/aboutUs/hero.png";
import "./style/aboutUs.css";
import MainSiteHeader from "./../../Shared/components/MainSiteHeader";
import profImage from "../../Assets/aboutUs/prof.jpg";
import storyImage from "../../Assets/aboutUs/sotry.jpg";
import MainOfficerCard from "./../../Shared/components/MainOfficerCard";
import superImage from "../../Assets/family/SupervisorImg.jpg";
import Chair from "../../Assets/family/Moamen Ehab Chairperson .jpg";
import Vice from "../../Assets/family/Jasmin Reda Vice chairperson .jpg";
import Treasurer from "../../Assets/family/Ahmed Tamer Treasurer .jpg";
import Secretary from "../../Assets/family/Farah Mohsen Secretary .jpg";
import webMaster from "../../Assets/family/Ali Muhammed.jpg";
import comsoc from "../../Assets/family/Mohamed Mahmoud Comsoc chairperson .jpg";
import ras from "../../Assets/family/Shahd Wael RAS chairwoman .jpg";
import pes from "../../Assets/family/Sayed-Mohamed-PES-chairperson.jpg";
import wie from "../../Assets/family/Hager Khaled WIE chairwoman .jpg";
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
      <div className="container">
        <MainSiteHeader title={"Story"} />
        <div className="story">
          <div className="top-story">
            <div className="text-container">
              <p>
                This is IEEE Helwan student branch, the third great student
                branch in Egypt. In 1999, came up our initial spark by Prof.
                Omar Hanafy - electrical power and machine department in Helwan
                university - with his youth company.
              </p>
              <p>
                He started the brunch with a group of youths in 1999 and it
                lasted for two years. Unfortunately, after that, the youths
                graduated, and Dr. Omar Hanafi travelled to teach in Saudi
                Arabia in 2001, and since then the brunch has completely
                stopped.
              </p>
            </div>

            <div className="storyImage">
              <img src={profImage} alt="prof" loading="lazy" />
            </div>
          </div>
          <div className="bottom-story">
            <div className="storyImage">
              <img src={storyImage} alt="prof" loading="lazy" />
            </div>
            <div className="text-container">
              <p>
                In 2009, the idea of reviving the branch started again. The
                effort was the first place for Eng. Ahmed Kamal (who graduated
                from the Telecommunications Department in 2010), and after a
                while, there was a little support from Dr. Ihab Ali in the
                Communications Department. In 2010, The branch was officially
                activated, and at that time Eng. Ahmed Kamal had a small team of
                five volunteers;
              </p>
              <p>
                After that, we grew up a little bit. He graduated in 2010, but
                he tried to continue to be present in a big way. After the
                activation, Dr. Abdul Ghani was with us, and he was nominated by
                Dr. Omar Hanafi to take over the leadership of the student
                branch in Helwan. With the passage of time, the branch has grown
                and now has a large family of all disciplines and faculties.
              </p>
              <p>
                Branch used to be much easier to organize than it is now. When
                we came back in 2010, we were still learning, and there were
                many things that had been done, and we were still learning what
                student activities meant. We went to Cairo and Ain Shams branch
                and took some basics, and we started taking care of our basic
                needs in 2011.
              </p>
            </div>
          </div>
        </div>
        <MainSiteHeader title={"Family"} />
        <div className="superVisor">
          <MainOfficerCard
            img={superImage}
            name={"Dr.Ahmed Ayman"}
            des={"Branch Councler"}
            className={"superVisorCard"}
          />
        </div>
        <div className="family">
          <MainOfficerCard
            img={Chair}
            name={"Moamen Ehab"}
            des={"Chairperson"}
          />
          <MainOfficerCard
            img={Vice}
            name={"Jasmin Reda"}
            des={"Vice chairperson"}
          />
          <MainOfficerCard
            img={Secretary}
            name={"Farah Mohsen"}
            des={"Secretary"}
          />
          <MainOfficerCard
            img={Treasurer}
            name={"Ahmed Tamer"}
            des={"Treasurer"}
          />
          <MainOfficerCard
            img={webMaster}
            name={"Ali Muhammed"}
            des={"Web Master"}
          />
          <MainOfficerCard
            img={comsoc}
            name={"Mohamed Mahmoud"}
            des={"Comsoc chairperson"}
            className={"ComsocCard"}
          />
          <MainOfficerCard
            img={pes}
            name={"Sayed Mohamed"}
            des={"PES chairperson"}
            className={"PesCard"}
          />
          <MainOfficerCard
            img={ras}
            name={"Shahd Wael"}
            des={"RAS chairwoman"}
            className={"RasCard"}
          />
          <MainOfficerCard
            img={wie}
            name={"Hager Khaled"}
            des={"WIE chairwoman"}
            className={"WieCard"}
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
