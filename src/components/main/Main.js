import React from "react";
import TodayContainer from "./today/TodayContainer";
import NoticeContainer from "./notice/NoticeContainer";
import ReviewContainer from "./review/ReviewContainer";
import MainMenuContainer from "./menu/MainMenu";
import SliderSection from "./slider/SliderSection";

import "./Main.css";
import "./Main.scss";

function Main() {
  return (
    <div className="molab_wrppaer">
      <div className="background_image">
        <div className="background_image_dark"></div>
        <MainMenuContainer />
        <SliderSection />
      </div>
      <TodayContainer />
      <NoticeContainer />
      <ReviewContainer />
    </div>
  );
}

export default Main;
