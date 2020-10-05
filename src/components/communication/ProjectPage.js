import React from "react";
import { useHistory } from "react-router-dom";
import { AiFillCaretRight, AiFillLike, AiOutlineComment } from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";
import Menu from "../menu/Menu";
import classNames from "classnames";
import parse from "html-react-parser";
import "../common/common.scss";
import "./ProjectPage.scss";

function ProcessBar() {
  const processItem = ["문제 정의", "실행 준비", "실행", "실행 완료"];
  return (
    <div className="process_bar">
      {processItem.map((e, index) => (
        <>
          {index === 0 ? (
            <b className="process_elem active">{e}</b>
          ) : (
            <b className="process_elem">{e}</b>
          )}
          {index !== 3 && (
            <span className="triangle">
              <AiFillCaretRight
                style={{ width: "1.5em", height: "1.5em", color: "#4f4f4f" }}
              />
            </span>
          )}
        </>
      ))}
    </div>
  );
}

function ProjectPage({ loginStatus, loginName }) {
  const {
    location: {
      state: { list },
    },
  } = useHistory();

  const {
    com_title,
    com_profile,
    recommend_num,
    comment_num,
    com_name,
    com_category,
    com_date,
    com_detailInfo,
  } = list;

  const ProfileImg = () => {
    return com_profile ? (
      com_profile
    ) : (
      <FaUserCircle
        style={{
          width: "1.5em",
          height: "1.5em",
          color: "#c9c9c9",
          verticalAlign: "middle",
        }}
      />
    );
  };

  const labelsMap = new Map([
    ["environment", "환경"],
    ["traffic", "교통"],
    ["energy", "에너지"],
    ["welfare", "복지"],
  ]);

  return (
    <div className="molab_wrppaer">
      <Menu fontColor="black" logoColor="black" loginStatus={loginStatus} />
      <main>
        <div className="project_wrapper">
          <ProcessBar />
          <div className="project_title">
            <h2>{'"' + com_title + '"'}</h2>
          </div>
          <div className="project_content">
            <section className="content_upper">
              <ProfileImg />
              <span>작성자 : {com_name}</span>
              <span>작성일 : {com_date}</span>
              <span className={classNames("label", com_category)}>
                {labelsMap.get(com_category)}
              </span>
            </section>
            <section className="content">{parse(com_detailInfo)}</section>
            <section className="content_bottom">
              <AiFillLike
                style={{
                  width: "1.5em",
                  height: "1.5em",
                  color: "#4f4f4f",
                  verticalAlign: "middle",
                }}
              />
              <span>{recommend_num}</span>
              <AiOutlineComment
                style={{
                  width: "1.5em",
                  height: "1.5em",
                  color: "#4f4f4f",
                  verticalAlign: "middle",
                }}
              />
              <span>{comment_num}</span>
            </section>
          </div>
          <div className="comment_field">
            <section className="comment_upper">
              <ProfileImg />
              {loginName ? (
                <span>{loginName}</span>
              ) : (
                <span>로그인 후 이용하세요</span>
              )}
            </section>
            <textarea
              type="text"
              placeholder="문제 상황에 공감한다면, 같이 동참하세요!"
            ></textarea>
            <button type="button" className="submit_comment">
              등록
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default ProjectPage;
