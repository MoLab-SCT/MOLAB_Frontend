import React, { useState, useEffect } from "react";
import axios from "axios";
import Menu from "../menu/Menu";
import "./AnnouncePage.scss";

function AnnounceList({ list }) {
  const { an_title, an_startdate, an_enddate, an_img } = list;

  const link = "./img" + an_img;
  console.log(link);

  return (
    <div className="announce_list">
      <img src={require("" + link)} alt={an_title} />
      <p>{an_title}</p>
      <span className="date">
        {an_startdate} ~ {an_enddate}{" "}
      </span>
      <span className="more_btn">더보기 {"\u003E"}</span>
    </div>
  );
}

function AnnouncePage({ loginStatus }) {
  const [lists, setList] = useState(null);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchList = async () => {
      try {
        setList(null);
        setError(null);
        setLoading(true);
        const response = await axios.get("/announce");
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
        <div className="announce_wrapper">
          <div className="announce_wrapper_header">
            <h1>MOLAB의 열린 참여</h1>
            <p>다양한 활동을 찾아보고 참여해보세요!</p>
            <input></input>
          </div>
          <div className="announce_lists">
            {lists.map((list) => (
              <AnnounceList list={list} key={list.an_no} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

export default AnnouncePage;
