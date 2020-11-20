import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./NoticeContainer.scss";

/* date 변수 받아서 d-day로 바꾸기 */
function NoticeLists({ no, title, free, imageSrc, date }) {
  return (
    <Link to={{pathname :  `/announce/${no}`}} style={{color: "black"}}>
      <div className="notice_list">
        <img src={require("" + imageSrc)} alt={title} />
        <div className="notice_info">
          <strong className="notice_title">{title}</strong>
          <span className="notice_date">{date}</span>
          <span className="notice_price">{free} </span>
        </div>
      </div>
    </Link>
  );
}

function NoticeContainer() {

  const [noticeList, setNotice] = useState([]);

  useEffect(() => {
    const fetchList = async () => {
      try {
        const response = await axios.get("/api/announce");
        setNotice(response.data.slice(0,4));
      }
      catch(e){
        console.log(e);
      }
    }
    fetchList();
  },[]);


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
            free="무료"
            imageSrc={"./img/" + list.img}
            date={list.startdate}
            key={list.no}
            no ={list.no}
          />
        ))}
      </div>
    </div>
  );
}

export default NoticeContainer;
