import React, { useState } from "react";
import axios from "axios";

import { Link } from "react-router-dom";

import "./LoginContainer.scss";
import Logo from "../../image/molab-logo-black.png";

function LoginContainer() {
  const [userInfo, setUserinfo] = useState({
    id: "",
    pwd: "",
  });

  const [loading, setLoading] = useState(null);

  const { id, pwd } = userInfo;

  const onChange = (e) => {
    const { name, value } = e.target;

    setUserinfo({
      ...userInfo,
      [name]: value,
    });
  };

  const loginCheck = async () => {
    setLoading(true);
    const response = await axios({
      method: "post",
      data: {
        id,
        pwd,
      },
      withCredentials: true,
      url: "api/login/general_login",
    });
    setLoading(false);
    if (response.data) {
      window.location.replace("/");
    }
  };

  if (loading) return <div>로딩 중</div>;

  return (
    <div className="login_wrapper">
      <img className="molab_logo" src={Logo} alt="MOLAB_logo" />
      <div className="form">
        <form className="login_form" onSubmit={loginCheck}>
          <input
            type="text"
            name="id"
            autoComplete="username"
            value={id}
            onChange={onChange}
            placeholder="아이디"
          />
          <input
            type="password"
            name="pwd"
            autoComplete="current-password"
            value={pwd}
            onChange={onChange}
            placeholder="비밀번호"
          />
          <button type="submit" className="common_button">
            로그인
          </button>
        </form>
        <a href="/api/login/kakao">
          <button className="common_button kakao">카카오로 로그인</button>
        </a>
        <a href="/api/login/naver">
          <button className="common_button naver">네이버로 로그인</button>
        </a>

        <Link to="/login/google">
          <button className="common_button google">구글로 로그인</button>
        </Link>
        <span>가입이 안 되어 있으신가요?</span>
        <Link to="/signup">
          <span className="form_btn signup_btn">회원가입</span>
        </Link>
      </div>
    </div>
  );
}

export default LoginContainer;
