import React from "react";
import Iframe from "react-iframe";

import "./TodayContainer.css";

function CalenderForm() {}

function Calender() {}

function FacebookPage() {
  return (
    <Iframe
      src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Flivinglab.siheung&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=false&appId"
      width="340px"
      height="430px"
      style={{ border: "none", overflow: "hidden" }}
      scrolling="no"
      frameborder="0"
      allowTransparency="true"
      allow="encrypted-media"
    />
  );
}

function TodayContainer() {
  return (
    <div className="group">
      <div className="group_header_area">
        <span className="group_header">Today's</span>
      </div>
      <div className="group_today_area">
        <FacebookPage />
      </div>
    </div>
  );
}

export default TodayContainer;
