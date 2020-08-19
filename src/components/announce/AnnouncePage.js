import React, { useState, useEffect } from "react";
import axios from "axios";
import Menu from "../menu/Menu";
import "./AnnouncePage.scss";

function AnnouncePage() {
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
      <Menu fontColor="black" logoColor="black" />
      <main>
        <div className="announce_wrapper">
          <div className="announce_wrapper_header">
            <h1>MOLAB의 열린 참여</h1>
            <p>다양한 활동을 찾아보고 참여해보세요!</p>
            <input></input>
          </div>
          <div className="review_list">
            {lists.map((list) => (
              <p>{list.username}</p>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

export default AnnouncePage;
