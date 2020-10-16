import React from "react";
import Menu from "../menu/Menu";
import Footer from "../footer/Footer";
import "./IntroducePage.scss";
import "./IntroduceSCT.scss";

function IntroduceSctPage ({loginStatus}) {
return( 
    <div className="molab_wrppaer">
        <Menu fontColor="black" logoColor="black" loginStatus={loginStatus} />
        <main>
            <div className="introduce_wrapper">
                <div className="introduce_header">
                    <ul>
                        <a href="#sct"><li>팀 S.C.T 소개</li></a>
                        <a href="#molab"><li>MOLAB 소개</li></a>
                    </ul>
                </div>
                <div className="introduce_contents" id="introduce_contents_sct">
                    <div className="introduce_sct">
                        <section className="definition_sct">
                            <article>
                                <h2>팀 S.C.T는 누구인가요?</h2>
                                <hr/>
                                <p>S.C.T는 학생 창업팀 입니다.<br/>
                                “인간이 살기 좋은 사회”라는 창업 목표를 가지고 함께 공부하고, 연구하며, 사업을 진행합니다.</p>
                            </article>
                        </section>
                        <section className="timeline_sct">
                            <h2>S.C.T는 이렇게 달려왔습니다.</h2>
                            <ul>
                                <li>
                                    <time>2019. 12 </time>
                                    <span>팀 결성</span>
                                </li>
                                <li>
                                    <time>2020. 2 ~</time>
                                    <span>한국형 스마트시티의 문제점과 발전방향 제안 관련 암스테르담 현장 연구 논문 기고</span>
                                </li>
                                <li>
                                    <time>2020. 3 ~</time>
                                    <p>
                                       한양대학교 SW 창업 동아리 선정<br/>
                                       한양대학교 소프트웨어 업 경진대회 우수상<br/>
                                       안산 강소 이노폴리스 사업 선발
                                    </p>
                                </li>
                                <li>
                                    <time>2020. 11 ~</time>
                                    <span>MOLAB 서비스 론칭 예정</span> 
                                </li>
                            </ul>
                        </section>
                        <section className="member_sct" id="sct">
                            <h2>S.C.T 멤버를 소개합니다!</h2>
                            <div className="profiles">
                                <div className="profile">
                                <img src={require("./img/che.png")} alt="김채리" />
                                <h3>김채리</h3>
                                <b>전략마케팅,사업계획수립</b>
                                <p>
                                SI 기업 공공기관 업무시스템 구축관련 제안 지원 업무 수행<br/>
                                질병관리본부/ 한국타이어 TF 대학생 광고 협업 진행<br/>
                                한양 글로벌 프론티어 팀 S.C.T 팀장
                                </p>
                            </div>
                            <div className="profile">
                                <img src={require("./img/ys.png")} alt="김연수" />
                                <h3>김연수</h3>
                                <b>대외협력,웹 개발</b>
                                <p>
                                상해 교통대학교 스마트시티 연구실 인턴십<br/>
                                스마트시티 기자단 활동<br/>
                                2017 한양대 창업 경진대회 장려상 수상
                                </p>
                            </div>
                            <div className="profile">
                                <img src={require("./img/mit.png")} alt="사은수" />
                                <h3>사은수</h3>
                                <b>웹 개발</b>
                                <p>
                                교내전공경진대회 [웹어플 개발대회 부문] 1위 수상<br/>
                                네이버 커넥트 재단 웹 프로그래밍 서포터즈 2기 활동
                                </p>
                            </div>
                            <div className="profile">
                                <img src={require("./img/cry.png")} alt="허수정" />
                                <h3>허수정</h3>
                                <b>디자인/콘텐츠 제작</b>
                                <p>
                                시흥시 해외견학체험단 대학생 자원 봉사자 영상팀장<br/>
                                삼양그룹 대학생 서포터즈 2기<br/>
                                SK 텔레콤 T프렌즈 3기
                                </p>
                            </div>
                            <div className="profile">
                                <img src={require("./img/ys.png")} alt="이은아" />
                                <h3>이은아</h3>
                                <b>웹 개발</b>
                                <p>
                                멋쟁이 사자처럼 8기<br/>
                                원곡고 코딩 교육 봉사 진행<br/>
                                한국과학창의재단 쏙쏙 캠프 진행<br/>
                                2018,2020 교내 창업 경진대회 참가
                                </p>
                            </div>
                            </div>
                        </section>
                    </div>
                    <div className="introduce_molab" id="molab">
                        <section className="molab_challenge">
                            <h2>우리는 새로운 도전을 합니다.</h2>
                            <hr/>
                            <article>
                                <p>S.C.T는 새로운 도전을 합니다. </p> 
                                <p>모두의 리빙랩, MOLAB은 사기업에서 제작한 <br/>
                                <span id="highlight">“최초의 리빙랩 통합플랫폼”입니다.</span></p>
                                <p>우리는 이 플랫폼을 통해 각 지자체에서 진행하고 있는 <br/> 리빙랩 프로그램을 한 눈에 확인하고, <br/>
                                도시 문제 해결 방안을 제안하며, 네트워크를 맺습니다.
                                </p>
                            </article>
                            
                        </section>
                        <hr id="dot_line"/>
                        <section className="molab_diagram">
                            <h2>MOLAB은</h2>
                            <p>'배달의 민족처럼'시민(이용자)와 지자체(주최자를) 연결해주는 중간 역할</p>
                            <img src={require("./img/gujo.png")} alt="molab_diagram" />
                        </section>
                        
                        <section className="molab_last">
                            <p>S.C.T의 새로운 도전, MOLAB!</p>
                            <p>지금 한 번 확인해 볼까요?</p>
                        </section>
                    </div>
                </div>    
            </div>
        </main>
        <Footer/>
    </div>
  )
}

export default IntroduceSctPage;
