import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import "./SliderSection.css";
import "./SliderSection.scss";

function SliderSection() {
  const NextArrow = (props) => {
    const { onClick } = props;
    return (
      <div className="slide-arrow slide-next" onClick={onClick}>
        <span className="ico_next_arrow">next</span>
      </div>
    );
  };

  const PrevArrow = (props) => {
    const { onClick } = props;
    return (
      <div className="slide-arrow slide-prev" onClick={onClick}>
        <span className="ico_prev_arrow">prev</span>
      </div>
    );
  };

  const settings = {
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    adaptiveHeight: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className="img_slider">
      <Slider {...settings}>
        <div className="livinglab_slide">
          <h3>What’s Living Lab?</h3>
          <strong>리빙랩이란?</strong>
        </div>
        <div className="sct_slide">
          <strong>TEAM S.C.T를 소개합니다.</strong>
        </div>
      </Slider>
    </div>
  );
}

export default SliderSection;
