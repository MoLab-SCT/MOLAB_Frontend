import React from "react";
import Iframe from "react-iframe";

import "./TodayContainer.css";

function Calender() {
  return (
    <div className="calender_area">
      {/* <h3 class="calender_header"></h3> */}
      <table className="calender">
        <colgroup>
          <col className="sun" />
          <col />
          <col />
          <col />
          <col />
          <col />
          <col className="sat" />
        </colgroup>
        <thead>
          <tr>
            <th scope="col" className="col">
              일
            </th>
            <th>월</th>
            <th>화</th>
            <th>수</th>
            <th>목</th>
            <th>금</th>
            <th scope="col">토</th>
          </tr>
        </thead>
        <tbody className="calender_tbody"></tbody>
      </table>
    </div>
  );
}

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
