import React, { useState, useEffect } from "react";
import axios from "axios";

function AnnouncePage() {
  const [list, setList] = useState(null);
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
  if (!list) return null;

  return (
    <div>
      {list.map((l) => (
        <p>{l.username}</p>
      ))}
    </div>
  );
}

export default AnnouncePage;
