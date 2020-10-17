import React, { useState, useEffect } from "react";
import { useHistory, Link } from "react-router-dom";
import axios from "axios";
import Menu from "../menu/Menu";
import classNames from "classnames";
import "./CommunicationPage.scss";
import { AiFillCaretRight, AiOutlineLike, AiFillLike, AiOutlineComment } from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";
import Footer from "../footer/Footer";

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

function LikeIcon({ likeStatus, clickLike, likeList, loginId }) {

  for (let i = 0; i < likeList.length; i++) {
    if (likeList[i].username === loginId) {
      likeStatus = true;
      break;
    }
    else{
      likeStatus = false;
    }
  }

  return(
    <span onClick={() => clickLike(likeStatus)}>{likeStatus ?
    <AiFillLike className="icon-like"/> : <AiOutlineLike className="icon-like"/>
  }</span>
  )
}

function CommunicationList({list, loginId}) {
  const {
    com_no,
    com_profile,
    com_name,
    com_title,
    com_date,
    com_detailInfo,
    com_category
  } = list;

  const labelsMap = new Map([
    [ "environment","환경"],
    ["traffic","교통"],
    ["energy","에너지"],
    ["welfare","복지"],
  ]);


  console.log(com_category);

  let tmp = document.createElement("div");
  tmp.innerHTML = com_detailInfo;
  let com_detailInfo_text = tmp.innerText;

  const [commentList, setCommentList] = useState([]);
  const [likeList, setLikeList] = useState([]);
  const [commentLoading, setComLoading] = useState(true);
  const [likeLoading, setLikeLoading] = useState(true);
  const [error, setError] = useState(null);
  const [likeStatus, setStatus] = useState(false);

  useEffect(() => {

    const getCommentList = async () => {
      try {
        setComLoading(true);
        const response = await axios({
          method: "post",
          data: { com_no },
          url: "/api/communication/project/get_comment",
        });
        setCommentList(response.data);
      } catch (e) {
        setError(e);
      }
      setComLoading(false);
    };
  
    const getLikeList = async () => {
      try {
        setLikeLoading(true);
        const response = await axios({
          method: "post",
          data: { com_no },
          url: "/api/communication/project/get_like",
        });
        setLikeList(response.data);
      } catch (e) {
        setError(e);
      }
      setLikeLoading(false);
    };

    getCommentList();
    getLikeList();

  },[loginId]);

  const clickLike = async (likeStatus) => {
    setStatus(!likeStatus);
    try {
      const response = await axios({
        method: "post",
        data: { com_no, loginId, likeStatus },
        url: "/api/communication/project/click_like",
      });
      setLikeList(response.data);
    } catch (e) {
      setError(e);
    }
  };

  if(commentLoading && likeLoading){ 
    return (
    <div className="communication_list">
      <section className="list_upper loading">
        <span className="non-profile"></span>
      </section>
      <section className="list_content loading">
        <p className="non-text-h3"></p>
        <p className="non-text-p"></p>
      </section>
      <section className="list_bottom loading">
      </section>
    </div>)
  }
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
      <Link to={{ pathname: `/communication/project/${com_no}`, state: { list } }}>
        <section className="list_content">
          <h3>{com_title}</h3>
          <p>{com_detailInfo_text}</p>
        </section>
      </Link>
      <section className="list_bottom">
        <LikeIcon likeStatus={likeStatus} clickLike={clickLike} likeList={likeList} loginId={loginId} />
        <span>{likeList.length}</span>
        <AiOutlineComment
          style={{
            width: "1.5em",
            height: "1.5em",
            color: "#4f4f4f",
            verticalAlign: "middle",
          }}
        />
        <span>{commentList.length}</span>
        <span className={classNames("label", com_category)}>
          {labelsMap.get(com_category)}
        </span>
      </section>
    </div>
  );
}

function CommunicationPage({ loginStatus, loginId }) {
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
            <h2>문제 정의 ({lists.length})</h2>
            <ContentsSortArea />
            <section className="communication_lists">
              {lists.reverse().map((list) => (
                <CommunicationList list={list} key={list.id} loginId={loginId}/>
              ))}
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default CommunicationPage;
