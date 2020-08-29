import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { Link, NavLink } from "react-router-dom";
import axios from "axios";
import logoWhite from "../../image/molab-logo-white.png";
import logoBlack from "../../image/molab-logo-black.png";
import classNames from "classnames";
import "./Menu.scss";

function MainMenu({ fontColor, logoColor }) {
  let history = useHistory();

  const [loginStatus, setStatus] = useState("");

  useEffect(() => {
    const isLogin = async () => {
      const response = await axios({
        method: "get",
        withCredentials: true,
        url: "/auth/islogin",
      });
      setStatus(response.data);
    };
    isLogin();
  }, []);

  const logout = async () => {
    const loginSuccess = await axios({
      method: "get",
      withCredentials: true,
      url: "/auth/logout",
    });
    if (loginSuccess.data) {
      history.push("/");
    }
  };

  return (
    <header>
      <div className="header_top wide_max_width_area">
        <div className="logo_area">
          <h1 className="logo_default">
            <Link to="/">
              <img
                src={logoColor === "white" ? logoWhite : logoBlack}
                alt="MOLAB_logo"
              />
            </Link>
          </h1>
        </div>

        <div className="search_area">
          <form>
            <input
              type="text"
              name="search"
              className="search_text"
              placeholder="Search.."
            />
            <button
              type="submit"
              title="검색"
              className="search_btn"
              value="검색"
            >
              <span className="icon_search_submit"></span>
            </button>
          </form>
        </div>

        <nav className="header_menu">
          <ul>
            <li>
              <NavLink
                to="/introduce"
                style={{ textDecoration: "none" }}
                activeClassName="active"
              >
                <div className={classNames("menu_item", fontColor)}>소개</div>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/announce"
                style={{ textDecoration: "none" }}
                activeClassName="active"
              >
                <div className={classNames("menu_item", fontColor)}>
                  열린 참여
                </div>
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/communication"
                style={{ textDecoration: "none" }}
                activeClassName="active"
              >
                <div className={classNames("menu_item", fontColor)}>소통</div>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/review"
                style={{ textDecoration: "none" }}
                activeClassName="active"
              >
                <div className={classNames("menu_item", fontColor)}>후기</div>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/network"
                style={{ textDecoration: "none" }}
                activeClassName="active"
              >
                <div className={classNames("menu_item", fontColor)}>
                  네트워크
                </div>
              </NavLink>
            </li>
            <li>
              {loginStatus === false ? (
                <NavLink
                  to="/login"
                  style={{ textDecoration: "none" }}
                  activeClassName="active"
                >
                  <div className={classNames("menu_item", fontColor)}>
                    로그인
                  </div>
                </NavLink>
              ) : (
                <NavLink
                  to="/logout"
                  style={{ textDecoration: "none" }}
                  activeClassName="active"
                >
                  <div
                    className={classNames("menu_item", fontColor)}
                    onClick={logout}
                  >
                    로그아웃
                  </div>
                </NavLink>
              )}
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default MainMenu;
