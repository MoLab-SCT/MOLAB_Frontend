import React, {useState, useEffect} from "react";
import Slider from "react-slick";
import axios from "axios";
import "./ReviewContainer.scss";

function ReviewContainer() {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    autoplay: true,
    dots: true,
    centerPadding: "10px",
    slidesToShow: 3,
    speed: 500,
    arrows: false,
    focusOnSelect: true,
  };

  const [reviewList, setList] = useState([]);

   useEffect(() => {
     const fetchList = async() => {
       try{
        const response = await axios.get("/review");
        setList(response.data.slice(0,5));
       }
       catch(e){
         console.log(e);
       }
     }
     fetchList();
   },[]);

  return (
    <div className="group">
      <div className="group_header_area">
        <span className="group_header">Review</span>
      </div>
      <div className="group_review_area">
        <Slider {...settings}>
          {reviewList.map((review) => (
          <div className="review_contents">
            <h3>{review.review_title}</h3>
            <p>{review.review_content}</p>
            <span className="review_date">{review.review_date}</span>
            <span className="btn_more">더보기</span>
          </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default ReviewContainer;
