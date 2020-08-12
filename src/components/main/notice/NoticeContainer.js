import React from "react";
import notice from "../../../image/notice1.png";
import "./NoticeContainer.css";

function NoticeContainer() {
  return (
    <div className="group">
      <div className="group_header_area">
        <span className="group_header">Notice</span>
      </div>
      <div id="group_notice_area">
        {/* API fecth 적용할 부분 */}
        <div className="group_notice_images">
          <img src={notice} />
          <img src={notice} />
          <img src={notice} />
        </div>
      </div>
    </div>
  );
}

export default NoticeContainer;
