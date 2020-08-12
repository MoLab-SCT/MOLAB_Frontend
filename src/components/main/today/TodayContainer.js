import React from "react";
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

function Plan() {
  return (
    <div className="plan">
      <nav>
        <div className="nav_tabs">
          <div className="nav_tab active" id="todayTab">
            오늘의 event
          </div>
          <div className="nav_tab" id="tomorTab">
            내일의 event
          </div>
        </div>
      </nav>
      <div className="tab_contents">
        <div className="tab_event active" id="todayEvent">
          <h4>(Today) 스마트시티 시흥 리빙랩 그룹 모집</h4>
          <img src="resources/img/event.PNG" alt="event" />
          <p>시흥시 리빙랩에서 함께 할 그룹을 모집합니다!</p>
          <div className="tab_tags">
            <span>#시흥시</span>
            <span>#스마트시티</span>
            <span>#그룹모집</span>
            <span>#시흥리빙랩</span>
          </div>
        </div>
        <div className="tab_event" id="tomorEvent">
          <h4>(Tomorrow) 스마트시티 시흥 리빙랩 그룹 모집</h4>
          <img src="resources/img/event.PNG" alt="event" />
          <p>시흥시 리빙랩에서 함께 할 그룹을 모집합니다!</p>
          <div className="tab_tags">
            <span>#시흥시</span>
            <span>#스마트시티</span>
            <span>#그룹모집</span>
            <span>#시흥리빙랩</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function TodayContainer() {
  return (
    <div className="group">
      <div className="group_header_area">
        <span className="group_header">Today's</span>
      </div>
      <div className="group_today_area">
        <Plan />
      </div>
    </div>
  );
}

export default TodayContainer;
