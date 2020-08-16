import React from "react";
import Menu from "../menu/Menu";
import "./ReviewPage.scss";

// 페이지네이션 / 카테고리 버튼 추가 예정

function Review({ review }) {
  const { title, imageSrc, contents, date } = review;

  return (
    <div className="review">
      <img src={imageSrc} alt={title} />
      <div className="review_paragraph">
        <h3 className="review_header">"{title}"</h3>
        <p>{contents}</p>
        <span>{date}</span>
      </div>
    </div>
  );
}

function ReviewPage() {
  /* 데이터 가져오기 */
  const reviews = [
    {
      key: 1,
      imageSrc: require("../../image/review1.png"),
      title: "시민 연구의 힘을 발견했어요!",
      contents:
        "실현에 대한 자신과 용기가 있다 그러므로 그들은 이상의 보배를 능히 품으며 그들의 이상은 아름답고 소담스러운 열매를 맺어 우리 인생을 풍부하게 하는 것이다 보라 청춘을! 그들의 몸이 얼마나 튼튼하며 그들의 피부가 얼마나 실현에 대한 자신과 용기가 있다 그러므로 그들은 이상의 보배를 능히 품으며 그들의 이상은 아름답고 소담스러운 열매를 맺어 우리 인생을",
      date: "2020/03/20",
    },
    {
      key: 2,
      imageSrc: require("../../image/review2.png"),
      title: "문제해결을 위한 워크숍 교육, 희망드로잉 26+",
      contents:
        "실현에 대한 자신과 용기가 있다 그러므로 그들은 이상의 보배를 능히 품으며 그들의 이상은 아름답고 소담스러운 열매를 맺어 우리 인생을 풍부하게 하는 것이다 보라 청춘을! 그들의 몸이 얼마나 튼튼하며 그들의 피부가 얼마나 실현에 대한 자신과 용기가 있다 그러므로 그들은 이상의 보배를 능히 품으며 그들의 이상은 아름답고 소담스러운 열매를 맺어 우리 인생을",
      date: "2020/03/20",
    },
  ];

  return (
    <div className="molab_wrppaer">
      <Menu fontColor="black" logoColor="black" />
      <main>
        <div className="review_wrapper">
          <div className="review_wrapper_header">
            <h1>후기</h1>
            <p>스마트 시티 / 리빙랩 프로젝트 참여 후기를 남겨주세요!</p>
          </div>
          <div className="review_list">
            {reviews.map((review) => (
              <Review key={review.id} review={review} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

export default ReviewPage;
