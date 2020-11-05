import React, { useEffect, useState } from "react";
import Menu from "../menu/Menu";
import Footer from "../footer/Footer";
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

function ReviewPagination({page, reviewNum, moveLeftPage, moveRightPage, numClick}){

  let {start, current, end} = page; 

  if(Math.ceil(reviewNum/4) < 4){
    end = Math.ceil(reviewNum/4);
  }

  let result =[];
  for(let i=start;i<=end;i++){
    i === current ? result.push(<li className="current" onClick={(e)=>numClick(i,e)}>{i}</li>) : result.push(<li onClick={(e)=>numClick(i,e)}>{i}</li>)
  }


  return(
    <ul>
      { current !== start && <li onClick={(e)=>moveLeftPage(e)} id="left">&#x3c;</li>}
      <>{result}</>
      {
        current !== end && <li onClick={(e)=>moveRightPage(e)} id="right">&#x3e;</li>
      }
    </ul>
  )
}

function ReviewPage({ loginStatus }) {

  const [initialReviews, setInitialReviews] = useState(null);
  const [page, setPage] = useState({
    start : 1,
    current : 1,
    end: 4
  });
  const [reviews, setReviews] = useState(null);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);

  let {start, current, end} = page;

  useEffect(() => {
    const fetchList = async () => {
      try {
        setReviews(null);
        setError(null);
        setLoading(true);
        const response = await axios.get("/review");
        setInitialReviews(response.data);
        setReviews(response.data.slice(0,4));
      } catch (e) {
        setError(e);
      }
      setLoading(false);
    };
    fetchList();
  }, []);

  const sortByOptions = (e) => {
    let sortedReviews;
    if(e.target.value === "latest"){
      sortedReviews = initialReviews.sort((a,b) => b.review_no - a.review_no);
    }
    else if(e.target.value === "spell"){
      const compareString = (a,b) => {
        if(a>b) return 1;
        else if(b>a) return -1;
        else return 0;
      }
      sortedReviews = initialReviews.sort((a,b) => compareString(a.review_title, b.review_title));
    }
    else{
      sortedReviews = initialReviews.reverse();
    }

    setInitialReviews([...sortedReviews]);
    sortedReviews = sortedReviews.slice(4*(start-1),4);
    setReviews([...sortedReviews]);
  }

  const moveRightPage = (e) => {

    window.scrollTo(0, 0);
  
    if(current===end){
      setPage({
        start : end+1,
        current: end+1,
        end: end+4,
      });
    }
    else{
      setPage({
        ...page,
        current: current+1
      })
    }
    setReviews(initialReviews.slice(4*current,4*current+4));
  }

  const moveLeftPage = (e) => {

    window.scrollTo(0, 0);

    if(current === start){
      setPage({
        start: start-4,
        current: start-1,
        end: end-4
      })
    }
    else{
      setPage({
        ...page,
        current: current-1
      })
    }   
    setReviews(initialReviews.slice(4*(current-2),4*(current-2) + 4));
  }

  const numClick = (num,e) => {

    window.scrollTo(0, 0);

    setPage({
        ...page,
        current: num,
    });
    setReviews(initialReviews.slice(4*(num-1),4*(num-1)+4));
  }

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
          <div className="review_list_sort">
            <select name="category" id="category" onChange={sortByOptions}>
              <option value="default">전체</option>
              <option value="latest">최신순</option>
              <option value="spell">가나다순</option>
            </select>
          </div>
          <div className="review_list">
            {reviews.map((review) => (
              <Review review={review} key={review.no}/>
            ))}
          </div>
          <div className="review_pagination">
            <ReviewPagination page={page} reviewNum={initialReviews.length} moveLeftPage={moveLeftPage} moveRightPage={moveRightPage} numClick={numClick} />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default ReviewPage;
