import React from "react";
import Link from "next/link";
import { MenuItem } from "@/types/MainManuTypes";

const Header = (props: any) => {
  const { MainMenu, currentPage, handleMenuClick } = props;
  return (
    <header id="site_header" className="header mobile-menu-hide">
      <div className="header-content">
        <div className="header-photo">
          <img src="img/main_photo.jpg" alt="Pradeep Arul" />
        </div>
        <div className="header-titles">
          <h2>Pradeep Arul</h2>
          <h4>Fullstack developer</h4>
        </div>
      </div>
      <ul className="main-menu">
        {MainMenu.map((menu: MenuItem) => (
          <li
            className={currentPage == menu.id ? "active" : ""}
            key={menu.id.toString()}
          >
            <a className="nav-anim" onClick={(e) => handleMenuClick(e, menu)}>
              <span className={`menu-icon lnr ${menu.icon}`}></span>
              <span className="link-text">{menu.name}</span>
            </a>
          </li>
        ))}
      </ul>

      <div className="social-links">
        <ul>
          <li>
            <Link
              href="https://www.linkedin.com/in/pradeep-arul-19051994"
              target="_blank"
            >
              <i className="fab fa-linkedin-in"></i>
            </Link>
          </li>
          <li>
            <Link
              href="https://www.facebook.com/pradeep.mech.5680"
              target="_blank"
            >
              <i className="fab fa-facebook-f"></i>
            </Link>
          </li>
          <li>
            <Link href="https://twitter.com/Pradeep2arul" target="_blank">
              <i className="fab fa-twitter"></i>
            </Link>
          </li>
        </ul>
      </div>

      <div className="header-buttons">
        <Link href="img/cv.pdf" target="_blank" className="btn btn-primary">
          Download CV
        </Link>
      </div>

      <div className="copyrights">© 2021 All rights reserved.</div>
    </header>
  );
};

export default Header;
