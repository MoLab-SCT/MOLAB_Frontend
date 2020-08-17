import React from "react";
import { Link, NavLink } from "react-router-dom";
import logoWhite from "../../image/molab-logo-white.png";
import logoBlack from "../../image/molab-logo-black.png";
import classNames from "classnames";
import "./Menu.scss";

function MainMenu({ fontColor, logoColor }) {
  const Menuitems = [
    {
      key: 1,
      title: "소개",
      link: "/introduce",
      className: "menu_item",
    },
    {
      key: 2,
      title: "열린 참여",
      link: "/announce",
      className: "menu_item",
    },
    {
      key: 3,
      title: "소통",
      link: "/communication",
      className: "menu_item",
    },
    {
      key: 4,
      title: "후기",
      link: "/review",
      className: "menu_item",
    },
    {
      key: 5,
      title: "네트워크",
      link: "/network",
      className: "menu_item",
    },
    {
      key: 6,
      title: "로그인",
      link: "/login",
      className: "menu_item login",
    },
  ];

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
              {Menuitems.map((item) => (
                <NavLink
                  to={item.link}
                  style={{ textDecoration: "none" }}
                  activeClassName="active"
                >
                  <div className={classNames(item.className, fontColor)}>
                    {item.title}
                  </div>
                </NavLink>
              ))}
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default MainMenu;
