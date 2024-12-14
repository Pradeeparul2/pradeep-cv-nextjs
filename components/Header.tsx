import React from "react";
import Link from "next/link";
import { MenuItem } from "@/types/MainManuTypes";
import { SocialLinks } from "@/constants/SocialLinks";
import Image from "next/image";
import { mainImg } from "@/assets";
interface HeaderProps {
  MainMenu: Array<MenuItem>;
  currentPage?: string; // Optional prop
  handleMenuClick: (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    menu: MenuItem
  ) => void;
}

const Header = (props: HeaderProps) => {
  const { MainMenu, currentPage, handleMenuClick } = props;
  return (
    <header id="site_header" className="header mobile-menu-hide">
      <div className="header-content">
        <div className="header-photo">
          <Image src={mainImg} alt="Pradeep Arul" />
        </div>
        <div className="header-titles">
          <h2>Pradeep Arul</h2>
          <h4>Fullstack developer</h4>
        </div>
      </div>
      <ul className="main-menu">
        {MainMenu.map((menu: MenuItem) => (
          <li
            className={currentPage == menu.href ? "active" : ""}
            key={menu.id.toString()}
          >
            <a
              className="nav-anim"
              onClick={(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) =>
                handleMenuClick(e, menu)
              }
            >
              <span className={`menu-icon lnr ${menu.icon}`}></span>
              <span className="link-text">{menu.name}</span>
            </a>
          </li>
        ))}
      </ul>

      <div className="social-links">
        <ul>
          {SocialLinks.map((item) => (
            <li key={item.id}>
              <Link href={item.link} target="_blank">
                <i className={`fab ${item.icon}`}></i>
              </Link>
            </li>
          ))}
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
