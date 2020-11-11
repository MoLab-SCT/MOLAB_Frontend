import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import Menu from "../menu/Menu";
import "./AnnounceDetail.scss";
import { FaSpinner, FaArrowAltCircleUp } from "react-icons/fa";
import { AiOutlineLike, AiFillLike, AiOutlineComment } from "react-icons/ai";

function AnnounceHeader({
  img,
  startdate,
  enddate,
  title,
  field_thumbnail,
  likeLoading,
  likeStatus,
  clickLike,
  loginId,
  likeList,
  commentList,
  url,
}) {
  const link = "./img/" + img;

  const onClick = (e) => {
    e.preventDefault();
    window.open(`${url}`, "_blank");
  };
  return (
    <>
      <div className="header_img">
        <img src={require("" + link)} alt={title} />
      </div>
      <div className="header_info">
        <div className="header_information">
          <h2>{title}</h2>
          <p>
            신청 기간: {startdate} ~ {enddate}{" "}
          </p>
          <p>분야: {field_thumbnail}</p>
        </div>
        <div className="info_wrap">
          <div className="header_response">
            <section>
              {likeLoading ? (
                <FaSpinner className="icon-spin" />
              ) : (
                <>
                  <LikeIcon
                    likeStatus={likeStatus}
                    clickLike={clickLike}
                    likeList={likeList}
                    loginId={loginId}
                  />
                  <span>{likeList.length}</span>
                  <AiOutlineComment size="24" className="icon-comment" />
                  <span>{commentList.length}</span>
                </>
              )}
            </section>
          </div>
          <div className="header_btn">
            <button onClick={onClick}>신청하기(외부 접수)</button>
          </div>
        </div>
      </div>
    </>
  );
}

function AnnounceMenu() {
  return (
    <>
      <hr />
      <ul className="announce_wrapper_info">
        <li className>
          <a href="#eventDetail">모임 상세 정보</a>
        </li>
        <li className>
          <a href="#eventComment">문의/ 기대평</a>
        </li>
        <li className>
          <a href="#eventTip">참여 신청/취소 안내</a>
        </li>
      </ul>
      <hr />
    </>
  );
}

function AnnounceInfo({
  img,
  title,
  field_detail,
  description,
  apply,
  benefits,
  questions,
  qualification,
}) {
  const link = "./img/" + img;
  return (
    <>
      <div id="eventDetail" className="announce_detail_information">
        <h2>모임 상세 정보</h2>
        <img src={require("" + link)} alt={title} />
        <h3>활동 내용</h3>
        <p>{field_detail}</p>
        <h3>개요 </h3>
        <p>{description}</p>
      </div>
      <hr />
      <div id="eventTip" className="announce_participation">
        <h2>참여 및 취소 안내</h2>
        <h3>신청 방법</h3>
        <p>{apply}</p>
        <h3>참여 혜택</h3>
        <p>{benefits}</p>
        <h3>문의 사항</h3>
        <p>{questions}</p>
        <h3>참여 대상</h3>
        <p>{qualification}</p>
      </div>
      <hr />
    </>
  );
}

function CommentField({ loginName, an_no, getCommentList }) {
  const [comment, setComment] = useState("");

  const commentChange = (e) => {
    setComment(e.target.value);
  };

  const submitComment = async () => {
    if (comment === "") {
      alert("댓글을 입력해주세요");
    } else {
      if (loginName) {
        let date = new Date()
          .toISOString()
          .replace(/T/, " ")
          .replace(/\..+/, "");
        const response = await axios({
          method: "post",
          data: { loginName, date, comment, an_no },
          url: "/api/announce/submit_comment",
        });
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
  return (
    <div className="comment_field">
      <textarea
        type="text"
        placeholder="프로그램에 대한 리뷰를 남겨주세요"
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

function CommentList({ commentList }) {
  let reverseCommentList = commentList.slice(0).reverse();
  return (
    <>
      {reverseCommentList.map((commentElem) => (
        <section className="comment">
          <span>{commentElem.username}</span>
          <span>{commentElem.date}</span>
          <p>{commentElem.comment}</p>
        </section>
      ))}
    </>
  );
}

function LikeIcon({ likeStatus, clickLike, likeList, loginId }) {
  for (let i = 0; i < likeList.length; i++) {
    if (likeList[i].username === loginId) {
      likeStatus = true;
      break;
    } else {
      likeStatus = false;
    }
  }

  return (
    <span onClick={() => clickLike(likeStatus)}>
      {likeStatus ? (
        <AiFillLike size="25" className="icon-like" />
      ) : (
        <AiOutlineLike size="25" className="icon-like" />
      )}
    </span>
  );
}

function AnnounceDetail({ loginStatus, match, loginName, loginId }) {
  const [list, setList] = useState(null);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);

  const [commentLoading, setComLoading] = useState(true);
  const [commentList, setCommentList] = useState([]);

  const [likeLoading, setLikeLoading] = useState(true);
  const [likeList, setLikeList] = useState([]);
  const [likeStatus, setStatus] = useState(false);

  const no_detail = match.params.no;

  const getCommentList = async (e) => {
    try {
      setComLoading(true);
      const response = await axios({
        method: "post",
        data: { no_detail },
        url: "/api/announce/get_comment",
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
        data: { no_detail },
        url: "/api/announce/get_like",
      });
      setLikeList(response.data);
    } catch (e) {
      setError(e);
    }
    setLikeLoading(false);
  };

  const clickLike = async (likeStatus) => {
    setStatus(!likeStatus);
    try {
      const response = await axios({
        method: "post",
        data: { no_detail, loginId, likeStatus },
        url: "/api/announce/click_like",
      });
      setLikeList(response.data);
    } catch (e) {
      setError(e);
    }
  };

  useEffect(() => {
    const fetchList = async () => {
      try {
        setList(null);
        setError(null);
        setLoading(true);
        const response = await axios.get(`/api/announce/${no_detail}`);
        setList(response.data);
      } catch (e) {
        setError(e);
      }
      setLoading(false);
    };
    fetchList();
  }, []);

  useEffect(() => {
    getCommentList();
    getLikeList();
  }, [loginId, loginName]);

  if (loading) return <div>로딩 중</div>;
  if (error) return <div>에러 발생</div>;
  if (!list) return null;

  const {
    no,
    title,
    startdate,
    enddate,
    resultdate,
    field_thumbnail,
    field_detail,
    img,
    description,
    qualification,
    recruitment_number,
    apply,
    benefits,
    questions,
    url,
  } = list;

  return (
    <div className="molab_wrppaer" id="up">
      <Menu fontColor="black" logoColor="black" loginStatus={loginStatus} />
      <main>
        <div className="announce_wrapper">
          <div className="announceDetail_wrapper_header">
            <AnnounceHeader
              title={title}
              img={img}
              startdate={startdate}
              enddate={enddate}
              field_thumbnail={field_thumbnail}
              likeLoading={likeLoading}
              likeStatus={likeStatus}
              clickLike={clickLike}
              likeList={likeList}
              loginId={loginId}
              likeList={likeList}
              commentList={commentList}
              url={url}
            />
          </div>
          <div className="announceDetail_wrapper_contents">
            <AnnounceMenu />
            <AnnounceInfo
              title={title}
              img={img}
              description={description}
              field_detail={field_detail}
              qualification={qualification}
              apply={apply}
              benefits={benefits}
              questions={questions}
            />
            <div id="eventComment" className="announce_comment">
              <h2>문의/ 기대평</h2>
              <CommentField
                loginName={loginName}
                an_no={no}
                getCommentList={getCommentList}
              />
              <div className="comment_list">
                {commentLoading ? (
                  <FaSpinner className="icon-spin" />
                ) : (
                  <CommentList commentList={commentList} />
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="upMove">
          <a href="#up">
            <FaArrowAltCircleUp size="30" color="black" />
          </a>
        </div>
      </main>
    </div>
  );
}

export default AnnounceDetail;
