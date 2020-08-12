import React from "react";
import { Link } from "react-router-dom";

import "./LoginContainer.scss";
import Logo from "../../image/logo.png";

function LoginContainer() {
  return (
    <div className="login_wrapper">
      <img className="molab_logo" src={Logo} alt="MOLAB_logo" />
      <div className="form">
        <form className="login_form">
          <input type="text" placeholder="아메일" />
          <input type="password" placeholder="비밀번호" />
          <button className="common_button">로그인</button>
        </form>
        <button className="common_button kakao">카카오로 로그인</button>
        <button className="common_button naver">네이버로 로그인</button>
        <button className="common_button google">구글로 로그인</button>
        <span>가입이 안 되어 있으신가요?</span>
        <Link to="/">
          <span className="form_btn signup_btn">회원가입</span>
        </Link>
      </div>
    </div>
  );
}

export default LoginContainer;
