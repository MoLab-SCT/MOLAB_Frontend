import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Menu from "../menu/Menu";
import classNames from "classnames";
import "./CommunicationPage.scss";
import { AiFillCaretRight, AiFillLike, AiOutlineComment } from "react-icons/ai";

function CommunicationHeader() {
  const onToggle = (e) => {
    let curElem = e.target;
    let prevElem = document.querySelectorAll("b.active")[0];
    prevElem.classList.remove("active");
    curElem.classList.add("active");
  };
  return (
    <>
      <h1>요구사항 제안하기</h1>
      <p>
        자신이 살고 있는 도시를 더 발전시키고 싶나요? <br />
        진행 중인 프로젝트에 누군가의 도움이 필요한가요? <br />
        요구사항이 있다면 지역 사회에 소문을 퍼뜨리세요!
        <br />
        지역 네트워크 구성원들과 함께 생각을 공유해보세요!
      </p>
      <NavLink to="/register-project" style={{ textDecoration: "none" }}>
        <div className="suggest_btn">제안하기</div>
      </NavLink>
      <div className="process_group">
        <b className="process_elem active" onClick={(e) => onToggle(e)}>
          문제 정의
        </b>
        <span className="triangle">
          <AiFillCaretRight
            style={{ width: "1.5em", height: "1.5em", color: "#4f4f4f" }}
          />
        </span>
        <b className="process_elem" onClick={(e) => onToggle(e)}>
          실행 준비
        </b>
        <span className="triangle">
          {" "}
          <AiFillCaretRight
            style={{ width: "1.5em", height: "1.5em", color: "#4f4f4f" }}
          />
        </span>
        <b className="process_elem" onClick={(e) => onToggle(e)}>
          실행
        </b>
        <span className="triangle">
          {" "}
          <AiFillCaretRight
            style={{ width: "1.5em", height: "1.5em", color: "#4f4f4f" }}
          />
        </span>
        <b className="process_elem" onClick={(e) => onToggle(e)}>
          실행 완료
        </b>
      </div>
    </>
  );
}

function ContentsSortArea() {
  return (
    <section className="sort_options">
      <select name="category" id="category">
        <option value="environment">환경</option>
        <option value="traffic">교통</option>
        <option value="energy">에너지</option>
        <option value="welfare">복지</option>
      </select>
      <input type="radio" id="latest" name="sort" value="latest" />
      <label htmlFor="latest">최신순</label>
      <input type="radio" id="word" name="sort" value="word" />
      <label htmlFor="word">가나다순</label>
      <input type="radio" id="recommend" name="sort" value="reconmmend" />
      <label htmlFor="recommend">추천순</label>
    </section>
  );
}

function CommunicationList({ list }) {
  const {
    profile,
    name,
    date,
    title,
    content,
    label,
    recon_num,
    comment_num,
  } = list;

  const labelsMap = new Map([
    ["환경", "environment"],
    ["교통", "traffic"],
    ["에너지", "energy"],
    ["복지", "welfare"],
  ]);

  return (
    <div className="communication_list">
      <section className="list_upper">
        <span className="name">{name}</span>
        <span className="date">작성일 : {date}</span>
      </section>
      <section className="list_content">
        <h3>{title}</h3>
        <p>{content}</p>
      </section>
      <section className="list_bottom">
        <AiFillLike
          style={{ width: "1.5em", height: "1.5em", color: "#4f4f4f" }}
        />
        <span>{recon_num}</span>
        <AiOutlineComment
          style={{ width: "1.5em", height: "1.5em", color: "#4f4f4f" }}
        />
        <span>{comment_num}</span>
        <span className={classNames("label", labelsMap.get(label))}>
          {label}
        </span>
      </section>
    </div>
  );
}

function CommunicationPage({ loginStatus }) {
  const lists = [
    {
      id: 1,
      profile: null,
      name: "김민수",
      date: "2020-04-12",
      title: "청년을 위한 공간 마련 필요",
      content:
        "[ 문제 해결의 필요성 : 왜 문제에 관심을 가지게 되었고, 왜 해결되어야 하는가?] 대학생 공모전 출품을 위해 평균 10회의 오프라인 회의를 진행. 엔제리너스, 할리스 등 24시 카페를 개인 사비로 충당. 금액적 부담감이 있는 상황 [문제와 관련된 이해관계자] 카페 사장, 대학생 [실행 계획]- 동성로 인근에는 카페가 많은데 카페측과 협의하여 휴무일을 활용해, 카페 대관형식으로 청년들에게 스터디 공간을 제공하면 어떨까?- 카페 홍보에도 도움이 될 것이다.- 대관 행사를 통해 스터디 공간은 물론 다른 방식(플리마켓, 원데이클래스 등)으로 활용가능",
      label: "환경",
      recon_num: 2,
      comment_num: 2,
    },
    {
      id: 2,
      profile: null,
      name: "김민수",
      date: "2020-04-12",
      title: "청년을 위한 공간 마련 필요",
      content:
        "[ 문제 해결의 필요성 : 왜 문제에 관심을 가지게 되었고, 왜 해결되어야 하는가?] 대학생 공모전 출품을 위해 평균 10회의 오프라인 회의를 진행. 엔제리너스, 할리스 등 24시 카페를 개인 사비로 충당. 금액적 부담감이 있는 상황 [문제와 관련된 이해관계자] 카페 사장, 대학생 [실행 계획]- 동성로 인근에는 카페가 많은데 카페측과 협의하여 휴무일을 활용해, 카페 대관형식으로 청년들에게 스터디 공간을 제공하면 어떨까?- 카페 홍보에도 도움이 될 것이다.- 대관 행사를 통해 스터디 공간은 물론 다른 방식(플리마켓, 원데이클래스 등)으로 활용가능",
      label: "환경",
      recon_num: 2,
      comment_num: 2,
    },
  ];

  //   const [lists, setList] = useState(null);
  //   const [loading, setLoading] = useState(null);
  //   const [error, setError] = useState(null);

  //   if (loading) return <div>로딩 중</div>;
  //   if (error) return <div>에러 발생</div>;
  //   if (!lists) return null;

  return (
    <div className="molab_wrppaer">
      <Menu fontColor="black" logoColor="black" loginStatus={loginStatus} />
      <main>
        <div className="communication_wrapper">
          <div className="communication_wrapper_header">
            <CommunicationHeader />
          </div>
          <div className="communication_wrapper_contents">
            <h2>문제 정의</h2>
            <ContentsSortArea />
            <section className="communication_lists">
              {lists.map((list) => (
                <CommunicationList list={list} key={list.id} />
              ))}
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}

export default CommunicationPage;
