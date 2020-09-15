import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import EditorSection from "./EditorSection";
import Menu from "../menu/Menu";
import Footer from "../footer/Footer";
import { getUserInfo } from "../login/LoginFunction";
import "./ProjectForm.scss";
import "./EditorSection.scss";

function ProjectForm({ loginStatus }) {
  const [projectForm, setForm] = useState({
    com_name: "",
    com_title: "",
    com_category: "",
    com_simpleInfo: "",
    com_detailInfo: "",
    com_date: "",
    recommend_num: 0,
    comment_num: 0,
  });

  const [loading, setLoading] = useState(null);

  const { com_title, com_category, com_simpleInfo } = projectForm;

  useEffect(() => {
    let today = new Date();
    let date = [
      today.getFullYear(),
      parseInt(today.getMonth()) + 1,
      today.getDate(),
    ].join("-");

    getUserInfo().then((res) =>
      setForm({ ...projectForm, com_date: date, com_name: res.data.name })
    );
  }, []);

  const formChange = useCallback(
    (e) => {
      const { name, value } = e.target;
      setForm({
        ...projectForm,
        [name]: value,
      });
    },
    [projectForm, setForm]
  );

  const getEditorContents = (editorState) => {
    setForm({
      ...projectForm,
      com_detailInfo: editorState,
    });
  };

  const formSubmit = async () => {
    setLoading(true);
    const response = await axios({
      method: "post",
      data: { projectForm: projectForm },
      url: "api/communication/register_project",
    });
    setLoading(false);
    if (response.data) {
      console.log(response.data);
      // window.location.replace("/communication");
    }
  };

  if (loading) return <div>로딩중</div>;

  return (
    <div className="molab_wrapper">
      <Menu fontColor="black" logoColor="black" loginStatus={loginStatus} />
      <main>
        <div className="project_form_wrapper">
          <h2 className="project_form_header">1단계 : 문제 정의하기</h2>
          <form className="project_form">
            <section>
              <label htmlFor="com_title">제목 작성</label>
              <input
                type="text"
                name="com_title"
                id="title"
                value={com_title}
                onChange={formChange}
              />
            </section>

            <section>
              <label htmlFor="category">카테고리</label>
              <select
                name="com_category"
                id="category"
                value={com_category}
                onChange={formChange}
              >
                <option value="" disabled>
                  선택 없음
                </option>
                <option value="environment">환경</option>
                <option value="traffic">교통</option>
                <option value="energy">에너지</option>
                <option value="welfare">복지</option>
              </select>
            </section>

            <section>
              <label htmlFor="simpleInfo">한 줄 소개</label>
              <input
                type="text"
                name="com_simpleInfo"
                value={com_simpleInfo}
                onChange={formChange}
              />
            </section>
            <div className="editor">
              <EditorSection getEditorContents={getEditorContents} />
            </div>
            <section>
              <label htmlFor="addFile">기타 파일 첨부</label>
              <input type="file" name="addFile" />
            </section>
            <button
              type="button"
              className="submit_button"
              onClick={formSubmit}
            >
              등록하기
            </button>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default ProjectForm;
