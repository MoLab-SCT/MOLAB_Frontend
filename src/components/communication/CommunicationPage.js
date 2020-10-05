import React, { useState, useEffect } from "react";
import { useHistory, Link } from "react-router-dom";
import axios from "axios";
import Menu from "../menu/Menu";
import classNames from "classnames";
import "./CommunicationPage.scss";
import { AiFillCaretRight, AiFillLike, AiOutlineComment } from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";

function CommunicationHeader({ loginStatus }) {
  const history = useHistory();

  const onToggle = (e) => {
    let curElem = e.target;
    let prevElem = document.querySelectorAll("b.active")[0];
    prevElem.classList.remove("active");
    curElem.classList.add("active");
  };

  const suggestBtnAction = () => {
    if (!loginStatus) {
      alert("로그인 후 이용하세요");
      history.push("/login");
    } else {
      history.push("/register-project");
    }
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
      <div className="suggest_btn" onClick={() => suggestBtnAction()}>
        제안하기
      </div>
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
    com_no,
    com_profile,
    com_name,
    com_title,
    com_date,
    com_detailInfo,
    com_cateogry,
    recommend_num,
    comment_num,
  } = list;

  let tmp = document.createElement("div");
  tmp.innerHTML = com_detailInfo;
  let com_detailInfo_text = tmp.innerText;

  return (
    <div className="communication_list">
      <section className="list_upper">
        {com_profile ? (
          com_profile
        ) : (
          <FaUserCircle
            style={{
              width: "1.5em",
              height: "1.5em",
              color: "gray",
              verticalAlign: "middle",
            }}
          />
        )}
        <span className="name">{com_name}</span>
        <span className="date">작성일 : {com_date}</span>
      </section>
      <Link
        to={{ pathname: `/communication/project/${com_no}`, state: { list } }}
      >
        <section className="list_content">
          <h3>{com_title}</h3>
          <p>{com_detailInfo_text}</p>
        </section>
      </Link>
      <section className="list_bottom">
        <AiFillLike
          style={{
            width: "1.5em",
            height: "1.5em",
            color: "#4f4f4f",
            verticalAlign: "middle",
          }}
        />
        <span>{recommend_num}</span>
        <AiOutlineComment
          style={{
            width: "1.5em",
            height: "1.5em",
            color: "#4f4f4f",
            verticalAlign: "middle",
          }}
        />
        <span>{comment_num}</span>
        <span className={classNames("label", com_cateogry)}>
          {com_cateogry}
        </span>
      </section>
    </div>
  );
}

function CommunicationPage({ loginStatus }) {
  const [lists, setList] = useState(null);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchList = async () => {
      try {
        setList(null);
        setError(null);
        setLoading(true);
        const response = await axios.get("/api/communication");
        setList(response.data);
      } catch (e) {
        setError(e);
      }
      setLoading(false);
    };
    fetchList();
  }, []);

  if (loading) return <div>로딩 중</div>;
  if (error) return <div>에러 발생</div>;
  if (!lists) return null;

  return (
    <div className="molab_wrppaer">
      <Menu fontColor="black" logoColor="black" loginStatus={loginStatus} />
      <main>
        <div className="communication_wrapper">
          <div className="communication_wrapper_header">
            <CommunicationHeader loginStatus={loginStatus} />
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
