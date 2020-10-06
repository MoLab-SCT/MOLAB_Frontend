import React, { useCallback, useEffect, useRef, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import {
  AiFillCaretRight,
  AiOutlineLike,
  AiFillLike,
  AiOutlineComment,
} from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";
import Menu from "../menu/Menu";
import classNames from "classnames";
import parse from "html-react-parser";
import "../common/common.scss";
import "./ProjectPage.scss";

function ProcessBar() {
  const processItem = ["문제 정의", "실행 준비", "실행", "실행 완료"];
  return (
    <div className="process_bar">
      {processItem.map((e, index) => (
        <>
          {index === 0 ? (
            <b className="process_elem active">{e}</b>
          ) : (
            <b className="process_elem">{e}</b>
          )}
          {index !== 3 && (
            <span className="triangle">
              <AiFillCaretRight
                style={{ width: "1.5em", height: "1.5em", color: "#4f4f4f" }}
              />
            </span>
          )}
        </>
      ))}
    </div>
  );
}

/* 댓글 작성 창 */
function CommentField({ loginName, com_no, getCommentList }) {
  const commentRef = useRef(null);
  const [comment, setComment] = useState("");
  const [loading, setLoading] = useState(null);

  const commentChange = (e) => {
    setComment(e.target.value);
  };

  const submitComment = async () => {
    if (comment === "") {
      alert("댓글을 입력해주세요");
    } else {
      if (loginName) {
        setLoading(true);
        let date = new Date()
          .toISOString()
          .replace(/T/, " ")
          .replace(/\..+/, "");
        console.log(loginName, date, comment, com_no);
        const response = await axios({
          method: "post",
          data: { loginName, date, comment, com_no },
          url: "/api/communication/project/submit_comment",
        });
        setLoading(false);
        if (response.data) {
          setComment("");
          getCommentList();
        }
      } else {
        alert("로그인 후 이용하세요");
        setComment("");
      }
    }
  };

  if (loading) return <div>로딩 중</div>;

  return (
    <div className="comment_field">
      <textarea
        type="text"
        placeholder="문제 상황에 공감한다면, 같이 동참하세요!"
        ref={commentRef}
        value={comment}
        onChange={commentChange}
      ></textarea>
      <button
        type="button"
        className="submit_comment"
        onClick={() => submitComment()}
      >
        등록
      </button>
    </div>
  );
}

/* 댓글 전체 리스트 */
function CommentList({ commentList }) {
  return (
    <div className="comment_list">
      {commentList.map((commentElem) => (
        <section className="comment">
          <span>{commentElem.username}</span>
          <span>{commentElem.date}</span>
          <p>{commentElem.comment}</p>
        </section>
      ))}
    </div>
  );
}

function LikeIcon({ likeStatus, clickLike }) {
  if (likeStatus) {
    return (
      <span onClick={() => clickLike()}>
        <AiFillLike
          style={{
            width: "1.5em",
            height: "1.5em",
            color: "#4f4f4f",
            verticalAlign: "middle",
          }}
        />
      </span>
    );
  } else {
    return (
      <span onClick={() => clickLike()}>
        <AiOutlineLike
          style={{
            width: "1.5em",
            height: "1.5em",
            color: "#4f4f4f",
            verticalAlign: "middle",
          }}
        />
      </span>
    );
  }
}
/* 메인 페이지 : 세부 프로젝트 페이지 */
function ProjectPage({ loginStatus, loginName, loginId }) {
  const {
    location: {
      state: { list },
    },
  } = useHistory();

  const {
    com_no,
    com_title,
    com_profile,
    com_name,
    com_category,
    com_date,
    com_detailInfo,
  } = list;

  const [loading, setLoading] = useState(true);

  const ProfileImg = () => {
    return com_profile ? (
      com_profile
    ) : (
      <FaUserCircle
        style={{
          width: "1.5em",
          height: "1.5em",
          color: "#c9c9c9",
          verticalAlign: "middle",
        }}
      />
    );
  };

  const labelsMap = new Map([
    ["environment", "환경"],
    ["traffic", "교통"],
    ["energy", "에너지"],
    ["welfare", "복지"],
  ]);

  const [commentList, setCommentList] = useState([]);
  const [likeList, setLikeList] = useState([]);
  const [error, setError] = useState(null);
  const [likeStatus, setStatus] = useState(false);

  const getCommentList = async () => {
    try {
      const response = await axios({
        method: "post",
        data: { com_no },
        url: "/api/communication/project/get_comment",
      });
      setCommentList(response.data);
    } catch (e) {
      setError(e);
    }
    setLoading(false);
  };

  const getLikeList = async () => {
    try {
      const response = await axios({
        method: "post",
        data: { com_no },
        url: "/api/communication/project/get_like",
      });
      setLikeList(response.data);
      let likeListTemp = response.data;
      for (let i = 0; i < likeListTemp.length; i++) {
        if (likeListTemp[i].username === loginId) {
          setStatus(true);
          break;
        }
      }
    } catch (e) {
      setError(e);
    }
    setLoading(false);
  };

  const clickLike = async () => {
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
    setLoading(false);
  };

  useEffect(() => {
    getCommentList();
    getLikeList();
  }, []);

  if (loading) return <div>로딩중</div>;
  return (
    <div className="molab_wrppaer">
      <Menu fontColor="black" logoColor="black" loginStatus={loginStatus} />
      <main>
        <div className="project_wrapper">
          <ProcessBar />
          <div className="project_title">
            <h2>{'"' + com_title + '"'}</h2>
          </div>
          <div className="project_content">
            <section className="content_upper">
              <ProfileImg />
              <span>작성자 : {com_name}</span>
              <span>작성일 : {com_date}</span>
              <span className={classNames("label", com_category)}>
                {labelsMap.get(com_category)}
              </span>
            </section>
            <section className="content">{parse(com_detailInfo)}</section>
            <section className="content_bottom">
              <LikeIcon likeStatus={likeStatus} clickLike={clickLike} />
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
            </section>
          </div>
          <CommentList commentList={commentList} />
          <CommentField
            loginName={loginName}
            ProfileImg={ProfileImg}
            com_no={com_no}
            getCommentList={getCommentList}
          />
        </div>
      </main>
    </div>
  );
}

export default ProjectPage;
