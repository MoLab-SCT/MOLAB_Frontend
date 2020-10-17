import React, { useState, useEffect, useCallback, useRef } from "react";
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
  });

  const [file, setFile] = useState(null);

  const [loading, setLoading] = useState(null);

  const {
    com_title,
    com_category,
    com_simpleInfo,
    com_detailInfo,
  } = projectForm;

  const title_ref = useRef(null);
  const category_ref = useRef(null);
  const simpleInfo_ref = useRef(null);
  const detailInfo_ref = useRef(null);

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
      if (name === "addFile") {
        setFile(e.target.files[0]);
      } else {
        setForm({
          ...projectForm,
          [name]: value,
        });
      }
    },
    [projectForm, setForm]
  );

  const getEditorContents = useCallback(
    (editorState) => {
      setForm({
        ...projectForm,
        com_detailInfo: editorState,
      });
    },
    [projectForm, setForm]
  );

  const formCheck = () => {
    if (com_title === "") {
      alert("제목을 작성하세요.");
      title_ref.current.focus();
      return false;
    } else if (com_category === "") {
      alert("카테고리를 선택하세요.");
      category_ref.current.focus();
      return false;
    } else if (com_simpleInfo === "") {
      alert("한 줄 소개를 작성하새요.");
      simpleInfo_ref.current.focus();
      return false;
    } else if (com_detailInfo === "") {
      alert("상세 내용을 작성하새요.");
      window.scrollTo(0, detailInfo_ref.current.offsetTop);
      return false;
    } else {
      return true;
    }
  };

  const formSubmit = async () => {
    if (formCheck()) {
      setLoading(true);
      
      let formData = new FormData();
      formData.append("projectForm", JSON.stringify(projectForm));
      formData.append("file", file);

      const response = await axios({
        method: "post",
        data: formData,
        contentType: "multipart/form-data",
        url: "api/communication/register_project",
      });
      
      setLoading(false);
      if (response.data) {
        window.location.replace("/communication");
      }
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
                ref={title_ref}
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
                ref={category_ref}
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
                ref={simpleInfo_ref}
              />
            </section>
            <section className="editor" ref={detailInfo_ref}>
              <label>상세 내용</label>
              <EditorSection getEditorContents={getEditorContents} />
            </section>
            <section>
              <label htmlFor="addFile">기타 파일 첨부</label>
              <input type="file" name="addFile" onChange={formChange} />
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
