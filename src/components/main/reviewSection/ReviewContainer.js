import React from "react";
import Slider from "react-slick";
import "./ReviewContainer.scss";

function ReviewContainer() {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    autoplay: true,
    dots: true,
    centerPadding: "100px",
    slidesToShow: 3,
    speed: 500,
    arrows: false,
    focusOnSelect: true,
  };

  return (
    <div className="group">
      <div className="group_header_area">
        <span className="group_header">Review</span>
      </div>
      <div className="group_review_area">
        <Slider {...settings}>
          {/* API 패치할 부분, map 적용하기 */}
          <div className="review_contents">
            <h3>"시민 연구의 힘을 발견했어요!"</h3>
            <p>
              실현에 대한 자신과 용기가 있다 그러므로 그들은 이상의 보배를 능히
              품으며 그들의 이상은 아름답고 소담스러운 열매를 맺어 우리 인생을
              풍부하게 하는 것이다 보라 청춘을..
            </p>
            <span className="review_date">2020.03.03.</span>
            <span className="btn_more">더보기</span>
          </div>
          <div className="review_contents">
            <h3>"시민 연구의 힘을 발견했어요!"</h3>
            <p>
              실현에 대한 자신과 용기가 있다 그러므로 그들은 이상의 보배를 능히
              품으며 그들의 이상은 아름답고 소담스러운 열매를 맺어 우리 인생을
              풍부하게 하는 것이다 보라 청춘을..
            </p>
            <span className="review_date">2020.03.03.</span>
            <span className="btn_more">더보기</span>
          </div>
          <div className="review_contents">
            <h3>"시민 연구의 힘을 발견했어요!"</h3>
            <p>
              실현에 대한 자신과 용기가 있다 그러므로 그들은 이상의 보배를 능히
              품으며 그들의 이상은 아름답고 소담스러운 열매를 맺어 우리 인생을
              풍부하게 하는 것이다 보라 청춘을..
            </p>
            <span class="review_date">2020.03.03.</span>
            <span class="btn_more">더보기</span>
          </div>
          <div className="review_contents">
            <h3>"시민 연구의 힘을 발견했어요!"</h3>
            <p>
              실현에 대한 자신과 용기가 있다 그러므로 그들은 이상의 보배를 능히
              품으며 그들의 이상은 아름답고 소담스러운 열매를 맺어 우리 인생을
              풍부하게 하는 것이다 보라 청춘을..
            </p>
            <span className="review_date">2020.03.03.</span>
            <span className="btn_more">더보기</span>
          </div>
          <div className="review_contents">
            <h3>"시민 연구의 힘을 발견했어요!"</h3>
            <p>
              실현에 대한 자신과 용기가 있다 그러므로 그들은 이상의 보배를 능히
              품으며 그들의 이상은 아름답고 소담스러운 열매를 맺어 우리 인생을
              풍부하게 하는 것이다 보라 청춘을..
            </p>
            <span className="review_date">2020.03.03.</span>
            <span className="btn_more">더보기</span>
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default ReviewContainer;
