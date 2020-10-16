import React from "react";
import Menu from "../menu/Menu";
import Footer from "../footer/Footer";
import "./IntroducePage.scss";
import "./IntroduceLivingLab.scss";

function IntroduceLivingLabPage({loginStatus}) {
  return   <div className="molab_wrppaer">
  <Menu fontColor="black" logoColor="black" loginStatus={loginStatus} />
  <main>
    <div className="introduce_wrapper">
      <div className="introduce_header">
        <ul>
          <a href="#definition"> <li>리빙랩 정의</li></a>
          <a href="#example"><li>리빙랩 사례</li></a>
          <a href="#pros"> <li>리빙랩 전망</li></a>
        </ul>
      </div>
      <div className="introduce_contents">
      <div className="definition" id="definition">
        <section><img src={require("./img/defi.png")}  alt="definition of living lab" id="definition_img" /></section>
        <section className="livinglab_definiton">
          <h2>“살아있는 실험실”</h2>
            <b>리빙랩은 사용자의 관점에서 삶에 실질적인 도움이 되는 연구를 말합니다.<br/>
            다시 말해,<span className="highlight">시민의 의견을 수용한 서비스 구현 방법론이 리빙랩</span>이죠.<br/>
            도시문제를 해결하기 위해서는 도시의 실 사용자인 시민이 주체가 되어<br/>
            시민이 체감할 수 있는 서비스를 발굴함으로써<br/>
            <span className="highlight">시민들의 행복과 삶의 질을 향상하는 방향으로 초점</span>을 맞춰야 합니다.
            </b>
        </section> 
      </div>
      <div className="livinglab_example" id="example">
        <h2>리빙랩의 사례는 무엇인가요?</h2>
        <section className="example_img">
          <img src={require("./img/ams.png")} alt="amsterdam"/>
          <img src={require("./img/bu.png")}  alt="bukchon"/>
          <img src={require("./img/sd.png")}  alt="Sungdaegol"/>
        </section>
        <section className="example_paragraph">
          <p>북촌 리빙랩은 지역 주민이 문제 발굴부터 기술 실험 및 확산•적용까지 리빙랩 과정 전반에서 주도적인 역할을 수행하고 있는 대표적인 케이스입니다. 북촌 리빙랩은 사물인터넷 기술(IoT)을 주로 활용하고 있으며 지역 주민과 협업을 통해 지역의 문제를 해결하려는 점이 특징입니다. 특히 서울시에서 구성한 특별 그룹이 리빙랩을 총괄하는 중간지원조직 역할을 수행하고 있는 점이 특징입니다.</p>
          <p>성대골 리빙랩은 지역 주민의 에너지 문제에 집중하고 있는데, 에너지와 관련이 깊은 태양열 온풍기 설치 등 적정기술을 활용하고 있는 점이 특징입니다. 성대골 주민은 전환 협의체를 조직하고 리빙랩 운영을 총괄할 뿐만 아니라 자치구와의 의견 조율 및 재정적 지원을 얻는 중간지원조직 역할도 수행하고 있으므로, 커뮤니티가 스스로 조직화한 뒤 행정의 재정적•제도적 지원을 유도하는 형태로 운영되는 점이 특징입니다.</p>
          <p>암스테르담의 스마트시티 조성은 ASC라는 조직이 주도하고 있습니다. ASC에는 정부뿐만 아니라 민간 기업, 학교, 지역주민들이 몸담고 있습니다. 마이크 오식 홍보담당 책임은 “ASC는 다양한 이해관계자가 도시 문제를 해결하기 위해 각종 아이디어를 내고 실행하는 오픈 플랫폼”이라고 소개했다</p>
        </section>
      </div>
      <div class="livinglab_pros" id="pros">
        <h2>리빙랩의 전망은 어떤가요?</h2>
        <p>생소한 리빙랩 들어보신 적 없으시다고요? 유럽을 비롯한 세계 전역 스마트시티에서는 <span className="highlight">이미 안정적으로 리빙랩이 자리잡았죠.</span><br/>
        한국도  매년 국토교통부 예산이 증가하며, 리빙랩의 중요성 역시 확대되고 있습니다. <br/>
        2020 정부 혁신 종합 추진계획을 발표하며 리빙랩을 적극 활용하겠다고 밝혀 앞으로도 리빙랩은 활성화될 전망입니다.<br/>
        어쩌면 우리 동네에서는 이미 시작되고 있을지 모릅니다!<span className="highlight">지금 한 번 참여해 볼까요?</span></p>
    </div>
        </div>
    </div>
  </main>
  <Footer/>
</div>;
}

export default IntroduceLivingLabPage;
