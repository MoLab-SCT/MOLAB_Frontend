import React, { useState } from "react";
import "./NoticeContainer.scss";

/* date 변수 받아서 d-day로 바꾸기 */
function NoticeLists({ title, free, imageSrc, date }) {
  return (
    <div className="notice_list">
      <img src={imageSrc} alt={title} />
      <div className="notice_info">
        <strong className="notice_title">{title}</strong>
        <span className="notice_price">{{ free } ? "무료" : "유료"} </span>
        <span className="notice_date">{date}</span>
      </div>
    </div>
  );
}

function NoticeContainer() {
  const [noticeList, setNotice] = useState([
    {
      id: 1,
      title: "서울 특화 VR/AR 콘텐츠 개발 지원(수요처연계형) 참여기관 모집",
      date: "2020-08-15",
      free: true,
      imageSrc: require("../../../image/poster1.png"),
      contents: "",
    },
    {
      id: 2,
      title: "서울 특화 VR/AR 콘텐츠 개발 지원(수요처연계형) 참여기관 모집",
      date: "2020-08-15",
      free: false,
      imageSrc: require("../../../image/poster1.png"),
      contents: "",
    },
    {
      id: 3,
      title: "서울 특화 VR/AR 콘텐츠 개발 지원(수요처연계형) 참여기관 모집",
      date: "2020-08-15",
      free: false,
      imageSrc: require("../../../image/poster1.png"),
      contents: "",
    },
    {
      id: 4,
      title: "서울 특화 VR/AR 콘텐츠 개발 지원(수요처연계형) 참여기관 모집",
      date: "2020-08-15",
      free: false,
      imageSrc: require("../../../image/poster1.png"),
      contents: "",
    },
  ]);

  return (
    <div className="group">
      <div className="group_header_area">
        <span className="group_header">Notice</span>
      </div>
      <div className="group_notice_area">
        {/* API fecth 적용할 부분 */}
        {noticeList.map((list) => (
          <NoticeLists
            title={list.title}
            free={list.free}
            imageSrc={list.imageSrc}
            date={list.date}
            key={list.id}
          />
        ))}
      </div>
    </div>
  );
}

export default NoticeContainer;
