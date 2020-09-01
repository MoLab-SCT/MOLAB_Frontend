import React, { useEffect, useState } from "react";
import Menu from "../menu/Menu";
import axios from "axios";
import "./ReviewPage.scss";

// 페이지네이션 / 카테고리 버튼 추가 예정

function Review({ review }) {
  const { review_title, review_date, review_content, review_img } = review;
  const link = "./img" + review_img;

  return (
    <div className="review">
      <img src={require("" + link)} alt={review_title} />
      <div className="review_paragraph">
        <h3 className="review_header">"{review_title}"</h3>
        <p>{review_content}</p>
        <span>{review_date}</span>
      </div>
    </div>
  );
}

function ReviewPage({ loginStatus }) {
  /* 데이터 가져오기 */

  const [reviews, setReviews] = useState(null);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchList = async () => {
      try {
        setReviews(null);
        setError(null);
        setLoading(true);
        const response = await axios.get("/review");
        setReviews(response.data);
      } catch (e) {
        setError(e);
      }
      setLoading(false);
    };
    fetchList();
  }, []);

  if (loading) return <div>로딩 중</div>;
  if (error) return <div>에러 발생</div>;
  if (!reviews) return null;

  return (
    <div className="molab_wrppaer">
      <Menu fontColor="black" logoColor="black" loginStatus={loginStatus} />
      <main>
        <div className="review_wrapper">
          <div className="review_wrapper_header">
            <h1>후기</h1>
            <p>스마트 시티 / 리빙랩 프로젝트 참여 후기를 남겨주세요!</p>
          </div>
          <div className="review_list">
            {reviews.map((review) => (
              <Review review={review} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

export default ReviewPage;
