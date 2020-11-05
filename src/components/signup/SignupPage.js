import React, { useState, useRef, useEffect} from "react";
import axios from "axios";
import Menu from "../menu/Menu";
import Footer from "../footer/Footer";
import "./SignupPage.scss";
const RSA = require("node-rsa");
const rsa = new RSA();

function SignupForm({publicKey}) {
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
  const id_ref = useRef(null);
  const pw_ref = useRef(null);
  const name_ref = useRef(null);

  //5~20자의 영문 소문자, 숫자, _, -의 조합
  let idRule = /^[a-z0-9_-]{5,20}$/;
  //8~16자의 영문 대소문자, 숫자, 특수문자의 조합
  let pwRule = /^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[*.!@$%^&(){}[:;<>,`?/\\~_+-=|\]]).{8,16}$/;

  const [loading, setLoading] = useState(null);

  const signUpCheck = () => {
    if(name === ""){
      alert("이름을 작성해주세요");
          name_ref.current.focus();
          return false;
    }
    else{
      if(!id.match(idRule)){
      alert("아이디는 5~20자의 영문 소문자, 숫자 또는  _, -의 조합으로 이루어져야 합니다.");
      id_ref.current.focus();
      return false;
    }
    else{
      if(!pw.match(pwRule)){
        alert("비밀번호는 8~16자의 영문 대소문자, 숫자, 특수문자를 모두 포함해야 합니다.");
        pw_ref.current.focus();
        return false;
      }
    }
    
        return true;
      }
    }
  
  const signUp = async() => {
    if(signUpCheck()){
      rsa.importKey(publicKey, "public");
      var encPw = rsa.encrypt(pw, "base64", "utf-8");
      setLoading(true);
      const response = await axios({
        method: "post",
        data: {
          id,
          encPw,
          name,
        },
        withCredentials: true,
        url: "/api/signup",
      });
      setLoading(false);
      if (response.data) {
        alert("가입이 완료되었습니다!");
        window.location.replace("/login");
      }
      else{
        alert("가입이 실패했습니다!");
      }
    }
  }

  return (
    <form>
      <div className="join_row">
        <h3 className="join_title">
          <label htmlFor="name" className="input_label">
            이름
          </label>
        </h3>
        <span className="outer_input">
          <input
            type="text"
            name="name"
            value={name}
            onChange={onChange}
            className="inner_input"
            ref={name_ref}
            placeholder="이름 입력"
          />
        </span>
      </div>
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
            placeholder="5~20자의 영문 소문자/숫자/_,-의 조합"
            ref={id_ref}
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
            name="pw"
            autoComplete="current-password"
            value={pw}
            onChange={onChange}
            className="inner_input"
            placeholder="8~16자의 영문 대소문자, 숫자, 특수문자의 조합"
            ref={pw_ref}
          />
        </span>
      </div>
      
      <button type="button" className="signup_button" onClick={() => signUp()}>회원 가입</button>
    </form>
  );
}

function SignupPage({loginStatus}) {

  const [publicKey, setPublicKey] = useState("");

  useEffect(() => {
    const getRSA = async () => {
      const response = await axios({
        method: "get",
        url: "/api/signup",
      });
      setPublicKey(response.data);
    }
    getRSA();
  },[]);

  return (
    <div className="molab_wrppaer">
      <Menu fontColor="black" logoColor="black" loginStatus={loginStatus}/>
      <main>
        <div className="signup_wrapper">
          <h2>회원가입</h2>
          <div className="signup_form">
            <SignupForm publicKey={publicKey}/>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default SignupPage;