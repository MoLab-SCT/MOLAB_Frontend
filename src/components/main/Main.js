import React from "react";
import TodayContainer from "./today/TodayContainer";
import NoticeContainer from "./noticeSection/NoticeContainer";
import ReviewContainer from "./reviewSection/ReviewContainer";
import Menu from "../menu/Menu";
import SliderSection from "./slider/SliderSection";
import Footer from "../footer/Footer";

import "./Main.scss";

function Main() {
  return (
    <div className="molab_wrppaer">
      <div className="background_image">
        <div className="background_image_dark"></div>
        <Menu fontColor="white" logoColor="white" />
        <SliderSection />
      </div>
      <main>
        <TodayContainer />
        <NoticeContainer />
        <ReviewContainer />
      </main>
      <Footer />
    </div>
  );
}

export default Main;
