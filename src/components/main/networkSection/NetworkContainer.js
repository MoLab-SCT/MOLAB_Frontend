import React from "react";
import "./NetworkContainer.scss";

function NetworkContainer() {
  return (
    <div className="group">
      <div className="group_header_area">
        <span className="group_header">Network</span>
      </div>
      <div className="group_network_area">
          <img src={require("./img/HYU_logo.png")} alt="한양대학교" />
          <img src={require("./img/support1.png")} alt="시흥 리빙랩" />
          <img src={require("./img/HYU_logo.png")} alt="한양대학교" />    
      </div>
    </div>
  );
}

export default NetworkContainer;
