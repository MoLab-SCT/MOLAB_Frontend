import React, { useState } from "react";
import ReactSummernote from "react-summernote";
import "react-summernote/dist/react-summernote.css";
import Menu from "../menu/Menu";

function ProjectForm({ loginStatus }) {
  const [projectForm, setForm] = useState({
    title: "",
    category: "",
    simpleInfo: "",
    detailInfo: "",
  });

  return (
    <div className="molab_wrppaer">
      <Menu fontColor="black" logoColor="black" loginStatus={loginStatus} />
      <main>
        <div className="project_form_wrapper">
          <h1>1단계 : 문제 정의하기</h1>
          <br />
          <form className="project_form">
            <input type="text" name="title" placeholder="아이디" />
            <ReactSummernote />
            <button type="submit" className="submit_button">
              등록하기
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}

export default ProjectForm;
