import React, { useState, useEffect } from "react";
import EditorSection from "./EditorSection";
import Menu from "../menu/Menu";
import Footer from "../footer/Footer";
import "./ProjectForm.scss";
import "./EditorSection.scss";

function ProjectForm({ loginStatus }) {
  const [projectForm, setForm] = useState({
    title: "",
    category: "",
    simpleInfo: "",
    detailInfo: "",
  });

  return (
    <div className="molab_wrapper">
      <Menu fontColor="black" logoColor="black" loginStatus={loginStatus} />
      <main>
        <div className="project_form_wrapper">
          <h2 className="project_form_header">1단계 : 문제 정의하기</h2>
          <form className="project_form">
            <section>
              <label htmlFor="title">제목 작성</label>
              <input type="text" name="title" id="title" />
            </section>

            <section>
              {" "}
              <label htmlFor="category">카테고리</label>
              <select name="category" id="category">
                <option value="environment">환경</option>
                <option value="traffic">교통</option>
                <option value="energy">에너지</option>
                <option value="welfare">복지</option>
              </select>
            </section>

            <section>
              <label htmlFor="simpleInfo">한 줄 소개</label>
              <input type="text" name="simpleInfo" />
            </section>
          </form>{" "}
          <div className="editor">
            <EditorSection />
          </div>
          <form className="project_form">
            <section>
              <label htmlFor="addFile">기타 파일 첨부</label>
              <input type="file" name="addFile" />
            </section>
          </form>
          <button type="submit" className="submit_button">
            등록하기
          </button>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default ProjectForm;
