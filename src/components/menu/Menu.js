import React from "react";
import { Link, NavLink } from "react-router-dom";
import axios from "axios";
import logoWhite from "../../image/molab-logo-white.png";
import logoBlack from "../../image/molab-logo-black.png";
import "./Menu.scss";

function MainMenu({ fontColor, logoColor, loginStatus }) {
  const logout = async () => {
    const logoutSuccess = await axios({
      method: "get",
      withCredentials: true,
      url: "/auth/logout",
    });
    if (logoutSuccess.data) {
      window.location.replace("/");
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
              <li id="introduce">
              <div className="menu_item">
                <NavLink to="/whatisLivingLab"
                style={{ textDecoration: "none" }}
                activeClassName="active"
                className={fontColor}
              >소개</NavLink>
              </div>
              <div className="menu_sub_item">
              <NavLink
                to="/whatisLivingLab"
                style={{ textDecoration: "none" }}
                activeClassName="active"
                className={fontColor}
              >
                <div>리빙랩 소개</div>
              </NavLink>
              <NavLink
                to="/teamSCT"
                style={{ textDecoration: "none" }}
                activeClassName="active"
                className={fontColor}
              >
                <div>S.C.T 소개</div>
              </NavLink>
              </div>
            </li>
            <li>
              <NavLink
                to="/announce"
                style={{ textDecoration: "none" }}
                activeClassName="active"
                className={fontColor}
              >
                <div className="menu_item">열린 참여</div>
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/communication"
                style={{ textDecoration: "none" }}
                activeClassName="active"
                className={fontColor}
              >
                <div className="menu_item">소통</div>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/review"
                style={{ textDecoration: "none" }}
                activeClassName="active"
                className={fontColor}
              >
                <div className="menu_item">후기</div>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/network"
                style={{ textDecoration: "none" }}
                activeClassName="active"
                className={fontColor}
              >
                <div className="menu_item">네트워크</div>
              </NavLink>
            </li>
            <li>
              {loginStatus === false ? (
                <NavLink
                  to="/login"
                  style={{ textDecoration: "none" }}
                  activeClassName="active"
                  className={fontColor}
                >
                  <div className="menu_item">로그인</div>
                </NavLink>
              ) : (
                <NavLink
                  to="/logout"
                  style={{ textDecoration: "none" }}
                  activeClassName="active"
                  className={fontColor}
                >
                  <div className="menu_item" onClick={logout}>
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
