import React from "react";
import './navigation.scss'
import { Link } from "react-scroll";

const Navigation = ({ className, isOpen }) => {
  return (
    <nav className={`${className} ${isOpen ? 'active' : ''}`}>
      <ul className="header__nav-list gap-10 md:flex">
        <li className="text-lg lg:text-xl xl:text-2xl flex-wrap cursor-pointer">
          <Link
            activeClass="active"
            to="master"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <a className="navigation-link ">
              Студия и мастер
            </a>
          </Link>
        </li>
        <li className="text-lg lg:text-xl xl:text-2xl cursor-pointer">
          <Link
            activeClass="active"
            to="portfolio"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <a className="navigation-link ">
              Портфолио
            </a>
          </Link>
        </li>
        <li className="text-lg lg:text-xl xl:text-2xl cursor-pointer">
          <Link
            activeClass="active"
            to="feedback"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <a className="navigation-link ">
              Отзывы
            </a>
          </Link>
        </li>
        <li className="text-lg lg:text-xl xl:text-2xl cursor-pointer">
          <Link
            activeClass="active"
            to="contacts"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <a className="navigation-link ">
              Контакты
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
