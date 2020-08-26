import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

import { Link } from "react-router-dom";

import "./LoginContainer.scss";
import Logo from "../../image/molab-logo-black.png";

function LoginContainer() {
  let history = useHistory();

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
      url: "/login/general_login",
    });
    setLoading(false);
    if (response.data.redirectURI === "/") {
      console.log(response.data.redirectURI);
      history.push("/");
    }
  };

  if (loading) return <div>로딩 중</div>;

  // if(success.Redirect)

  // const loginCheck = () => {
  //   console.log("click", id, pwd);
  //   axios({
  //     method: "post",
  //     data: {
  //       id,
  //       pwd,
  //     },
  //     withCredentials: true,
  //     url: "/login/general_login",
  //   })
  //     .then((res) => {
  //       console.log(res);
  //       return <Redirect to="/" />;
  //     })
  //     .catch((error) => console.log("login fail", error));
  // };

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
