import React from "react";
import TodayContainer from "./today/TodayContainer";
import NoticeContainer from "./noticeSection/NoticeContainer";
import ReviewContainer from "./reviewSection/ReviewContainer";
import NetworkContainer from "./networkSection/NetworkContainer";
import Menu from "../menu/Menu";
import SliderSection from "./slider/SliderSection";
import Footer from "../footer/Footer";

import "./Main.scss";

function Main({ loginStatus }) {
  return (
    <div className="molab_wrppaer">
      <div className="background_image">
        <div className="background_image_dark"></div>
        <Menu fontColor="white" logoColor="white" loginStatus={loginStatus} />
        <SliderSection />
      </div>
      <main>
        <TodayContainer />
        <NoticeContainer />
        <ReviewContainer />
        <NetworkContainer/>
      </main>
      <Footer />
    </div>
  );
}

export default Main;
