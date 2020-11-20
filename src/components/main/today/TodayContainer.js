import React from "react";
import Iframe from "react-iframe";

import "./TodayContainer.scss";

function CreateCalender() {
  
  const leapYear = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const notLeapYear = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const dayList = ["일", "월", "화", "수", "목", "금", "토"];

  const curDate = new Date();
  const today = [curDate.getFullYear(), curDate.getMonth()+1, curDate.getDate()];

  /* 요일 생성 */
  const makeDay = dayList.map((day) => {
    return <th>{day}</th>;
  });

  /* 달의 마지막 날짜 */
  const getLastdate = (date) => {
    if (date[0] % 4 === 0) {
      return leapYear[date[1] - 1];
    } else {
      return notLeapYear[date[1] - 1];
    }
  };

  /* 달의 첫 번째 요일 */
  const getFirstDay = (date) => {
    return new Date(date[0], date[1]-1, 1).getDay();
  };

  /* 달력의 날짜 열 생성*/
  const makeRows = (date) => {
    let startLastDate = getLastdate(date);
    let startFirstDay = getFirstDay(date);

    let result = [];
    let rows = [];
    let cells = [];

    while (startFirstDay > 0) {
      result.push(<td className="empty-day"> </td>);
      startFirstDay--;
    }

    /* today 이면서 event 인 날짜 구분 필요*/
    for (let i = 1; i <= startLastDate; i++) {
      if(i===today[2]){
        result.push(<td className="calender-day today">{i}</td>);
      }
      else if(i===13){
        result.push(<td className="calender-day special">{i}</td>);
      }
      else{
        result.push(<td className="calender-day">{i}</td>);
      }
      
    }

    result.forEach((row, index) => {
      if (index % 7 !== 0) {
        cells.push(row);
      } else {
        rows.push(cells);
        cells = [];
        cells.push(row);
      }
      if (index === result.length - 1) {
        rows.push(cells);
      }
    });

    return rows;
  };

  const startRows = makeRows(today);

  const MakeCalender = ({ date }) =>
    date.map((row) => {
      return <tr>{row}</tr>;
    });
    return (
      <div className="calender_area">
        <b className="calender_header">{today[0]}년 {today[1]}월</b>
        <table className="calender">
          <thead>
            <tr>{makeDay}</tr>
          </thead>
          <tbody>
            <MakeCalender date={startRows}/>
          </tbody>
        </table>
      </div>
    );
}

function FacebookPage() {
  return (
    <Iframe
      src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Flivinglab.siheung&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=false&appId"
      width="340px"
      height="380px"
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
        <CreateCalender/>
        <FacebookPage />
      </div>
    </div>
  );
}

export default TodayContainer;
