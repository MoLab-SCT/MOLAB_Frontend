import React, { useState } from "react";
import Menu from "../menu/Menu";
import Footer from "../footer/Footer";
import "./SignupPage.scss";

function SignupForm() {
  const [formInfo, setForm] = useState({
    id: "",
    pw: "",
    name: "",
  });

  const onChange = (e) => {
    const { name, value } = e.target;
    console.log(name);
    setForm({
      ...formInfo,
      [name]: value,
    });
  };

  const { id, pw, name } = formInfo;

  //5~20자의 영문 소문자, 숫자, _, -의 조합
  let idRule = /^[a-z0-9_-]{5,20}$/;
  //8~16자의 영문 대소문자, 숫자, 특수문자의 조합
  let pwRule = /^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[*.!@$%^&(){}[:;<>,`?/\\~_+-=|\]]).{8,16}$/;

  return (
    <form>
      <div className="join_row">
        <h3 className="join_title">
          <label htmlFor="id" className="input_label">
            아이디
          </label>
        </h3>
        <span className="outer_input">
          <input
            type="text"
            name="id"
            autoComplete="username"
            value={id}
            onChange={onChange}
            className="inner_input"
          />
        </span>
      </div>
      <div className="join_row">
        <h3 className="join_title">
          <label htmlFor="pw" className="input_label">
            비밀번호
          </label>
        </h3>
        <span className="outer_input">
          <input
            type="password"
            name="pwd"
            autoComplete="current-password"
            value={pw}
            onChange={onChange}
            className="inner_input"
          />
        </span>
      </div>
      <div className="join_row">
        <h3 className="join_title">
          <label htmlFor="name" className="input_label">
            이름
          </label>
        </h3>
        <span className="outer_input">
          <input
            type="password"
            name="name"
            value={name}
            onChange={onChange}
            className="inner_input"
          />
        </span>
      </div>
      <input type="submit" value="가입하기" />
    </form>
  );
}

function SignupPage() {
  return (
    <div className="molab_wrppaer">
      <Menu fontColor="black" logoColor="black" />
      <main>
        <div className="signup_wrapper">
          <h2>회원가입</h2>
          <div className="singup_form">
            <SignupForm />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default SignupPage;
