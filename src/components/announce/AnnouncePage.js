import React, { useState, useEffect } from "react";
import axios from "axios";
import Menu from "../menu/Menu";
import Footer from "../footer/Footer";
import { Link } from "react-router-dom";
import "./AnnouncePage.scss";
import Pagination from "react-pagination-js";
import "react-pagination-js/dist/styles.css";
import { FaSpinner, FaArrowAltCircleUp } from "react-icons/fa";
import { AiOutlineLike, AiOutlineComment, AiFillLike } from "react-icons/ai";

function AnnounceList({ list, loginId, loginName }) {
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);

  const [commentLoading, setComLoading] = useState(true);
  const [commentList, setCommentList] = useState([]);

  const [likeLoading, setLikeLoading] = useState(true);
  const [likeList, setLikeList] = useState([]);
  const [likeStatus, setStatus] = useState(false);

  const { no, title, enddate, startdate, img } = list;

  const getCommentList = async (e) => {
    try {
      setComLoading(true);
      const response = await axios({
        method: "post",
        data: { no_detail: no },
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
        data: { no_detail: no },
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
        data: { no_detail: no, loginId, likeStatus },
        url: "/api/announce/click_like",
      });
      setLikeList(response.data);
    } catch (e) {
      setError(e);
    }
  };

  const link = "./img/" + img;

  useEffect(() => {
    getCommentList();
    getLikeList();
  }, [loginId, loginName]);

  if (loading) return <div>로딩 중</div>;
  if (error) return <div>에러 발생</div>;
  if (!list) return null;

  return (
    <div className="announce_list">
      <div class="event_thumb">
        <img src={require("" + link)} alt={title} />
      </div>
      <div class="event_info">
        <h3>{title}</h3>
        <div class="event_info_span">
          <span>
            {startdate} ~ {enddate}{" "}
          </span>
          <span>
            <Link
              style={{ color: "black" }}
              to={{ pathname: `/announce/${no}` }}
            >
              더보기 {"\u003E"}
            </Link>
          </span>
        </div>
        <section className="event_response">
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
                <AiOutlineComment size="20" className="icon-comment" />
                <span>{commentList.length}</span>
              </>
            )}
          </section>
        </section>
      </div>
    </div>
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
        <AiFillLike size="20" className="icon-like" />
      ) : (
        <AiOutlineLike size="20" className="icon-like" />
      )}
    </span>
  );
}

function AnnouncePage({ loginStatus, loginName, loginId }) {
  const [totalListData, setTotalListData] = useState(null);
  const [defaultListData, SetdefaultListData] = useState(null);
  const [lists, setList] = useState(null);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);
  const [pageNum, setPageNum] = useState(1);
  const [totalItemNum, setTotalItemNum] = useState(null);
  const [sortOption, setSortOption] = useState("latest");
  const [check, setCheck] = useState(true);
  const [keyword, setKeyWord] = useState("");

  const onSubmit = (e) => {
    const defaultList = [...defaultListData];
    e.preventDefault();
    const listData = defaultListData.filter(
      (data) => data.title.indexOf(keyword) > -1
    );

    setTotalListData([...listData]);
    SetdefaultListData([...defaultList]);
  };

  const onChange = (pageNum) => {
    setPageNum(pageNum);
    const listData = [];
    for (let i = pageNum * 9 - 9; i < 9 * pageNum; i++) {
      if (!totalListData[i]) break;
      listData.push(totalListData[i]);
    }
    setList(listData);
  };

  const onKeywordChange = (e) => {
    setKeyWord(e.target.value);
  };

  const sortByOption = (e) => {
    setSortOption(e.target.value);
    let sortedList = [];

    if (e.target.value === "latest") {
      sortedList = totalListData.sort((a, b) => a.no - b.no);
    } else if (e.target.value === "like") {
      sortedList = totalListData.sort((a, b) => b.an_like - a.an_like);
    } else if (e.target.value === "spell") {
      const compareString = (a, b) => {
        if (a > b) return 1;
        else if (b > a) return -1;
        else return 0;
      };
      sortedList = totalListData.sort((a, b) =>
        compareString(a.title, b.title)
      );
    }
    setTotalListData([...sortedList]);
  };

  useEffect(() => {
    const fetchList = async () => {
      try {
        setList(null);
        setError(null);
        setLoading(true);
        const response = await axios.get("/api/announce");
        setTotalItemNum(response.data.length);
        setTotalListData(response.data);
        SetdefaultListData(response.data);
        const listData = [];
        for (let i = 0; i < 9; i++) {
          listData.push(response.data[i]);
        }
        setList(listData);
      } catch (e) {
        setError(e);
      }
      setLoading(false);
    };
    fetchList();
  }, []);

  useEffect(() => {
    if (check) {
      setCheck(false);
    } else {
      const listData = [];
      for (let i = pageNum * 9 - 9; i < 9 * pageNum; i++) {
        if (!totalListData[i]) break;
        listData.push(totalListData[i]);
      }
      setList(listData);
    }
  }, [totalListData]);

  if (loading) return <div>로딩 중</div>;
  if (error) return <div>에러 발생</div>;
  if (!lists) return null;

  return (
    <div id="up" className="molab_wrppaer">
      <Menu fontColor="black" logoColor="black" loginStatus={loginStatus} />
      <main>
        <div className="announce_wrapper">
          <div className="announce_wrapper_header">
            <h1>MOLAB의 열린 참여</h1>
            <p>다양한 활동을 찾아보고 참여해보세요!</p>
            <div class="search_events_area">
              <form onSubmit={onSubmit}>
                <input
                  type="text"
                  placeholder="Search.."
                  name="Search"
                  class="search_text"
                  onChange={onKeywordChange}
                />
                <input
                  type="submit"
                  class="search_events_btn"
                  value="검색"
                  title="검색"
                />
              </form>
            </div>
            <div className="select_wrapper">
              <select name="sort" value={sortOption} onChange={sortByOption}>
                <option value="latest">최신순</option>
                <option value="spell">가나다</option>
                <option value="like">공감순</option>
              </select>
            </div>
          </div>
          <div className="announce_lists">
            {lists.map((list) => (
              <AnnounceList
                list={list}
                loginId={loginId}
                loginName={loginName}
                key={list.no}
              />
            ))}
          </div>
        </div>
        <div className="pagination_wrapper">
          <Pagination
            currentPage={pageNum}
            sizePerPage={9}
            totalSize={totalItemNum}
            changeCurrentPage={onChange}
            numberOfPagesNextToActivePage={3}
            theme="bootstrap"
          />
        </div>
      </main>
      <Footer />
      <div className="upMove">
        <a href="#up">
          <FaArrowAltCircleUp size="30" color="black" />
        </a>
      </div>
    </div>
  );
}

export default AnnouncePage;
