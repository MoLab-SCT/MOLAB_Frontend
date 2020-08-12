import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./MainMenu.scss";
import logo from "../../../image/molab-logo-white.png";

function MainMenu() {
  return (
    <header>
      <div className="header_top wide_max_width_area">
        <div className="logo_area">
          <h1 className="logo_default">
            <Link to="/">
              <img src={logo} alt="MOLAB_logo" />
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
                <div className="menu_item">소개</div>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/openParticipate"
                style={{ textDecoration: "none" }}
                activeClassName="active"
              >
                <div className="menu_item">열린 참여</div>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/communication"
                style={{ textDecoration: "none" }}
                activeClassName="active"
              >
                <div className="menu_item">소통</div>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/review"
                style={{ textDecoration: "none" }}
                activeClassName="active"
              >
                <div className="menu_item">후기</div>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/network"
                style={{ textDecoration: "none" }}
                activeClassName="active"
              >
                <div className="menu_item">네트워크</div>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/login"
                style={{ textDecoration: "none" }}
                activeClassName="active"
              >
                <div className="menu_item login">로그인</div>
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default MainMenu;
