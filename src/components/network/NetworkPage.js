import React from 'react';
import Menu from "../menu/Menu";
import Footer from "../footer/Footer";
import "./NetworkPage.scss";

function NetworkPage({loginStatus}) {

  return (
    <div className="molab_wrppaer">
        <Menu fontColor="black" logoColor="black" loginStatus={loginStatus} />
        <main>
            <div className="nerwork_wrapper">
                <div className="network_header">
                  <h1>MOLAB의 협력사 알아보기</h1>
                  <p>
                    MOLAB과 함께 일하는 협력사를 알고싶나요?<br />
                    진행 중인 프로젝트에 어떤 구성원이 있는지 알고싶나요? <br />
                    MOLBA과 함께하는 구성원들을 자세히 알아보세요!
                  </p>
                </div>
                <div className="network_contents">
                  <ul>
                    <li>
                      <a href="https://www.hanyang.ac.kr/"><img src={require("./img/hanyang.png")} alt="hanyang university"/></a>
                    </li>
                    <li>
                      <a href="https://www.hanyang.ac.kr/"><img src={require("./img/hanyang.png")} alt="hanyang university"/></a>
                    </li>
                    <li>
                      <a href="https://www.hanyang.ac.kr/"><img src={require("./img/hanyang.png")} alt="hanyang university"/></a>
                    </li>
                    <li>
                      <a href="https://www.hanyang.ac.kr/"><img src={require("./img/hanyang.png")} alt="hanyang university"/></a>
                    </li>
                    <li>
                      <a href="https://smartcity-sh.tistory.com/"><img src={require("./img/siheung.png")} alt="smartcity siheng"/></a>
                    </li>
                    <li>
                      <a href="https://smartcity-sh.tistory.com/"><img src={require("./img/siheung.png")} alt="smartcity siheng"/></a>
                    </li>
                    <li>
                      <a href="https://smartcity-sh.tistory.com/"><img src={require("./img/siheung.png")} alt="smartcity siheng"/></a>
                    </li>
                    <li>
                      <a href="https://smartcity-sh.tistory.com/"><img src={require("./img/siheung.png")} alt="smartcity siheng"/></a>
                    </li>
                  </ul>
                </div>
            </div>
        </main>
        <Footer/>
    </div>
  );
}

export default NetworkPage;