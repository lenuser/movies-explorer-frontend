import React from "react";
import "./NavTab.css";

function NavTab() {
  return (
    <nav className="promo__navtab-menu">
      <a href="#project" className="promo__navtab-menu-link">
        О проекте
      </a>
      <a href="#techs" className="promo__navtab-menu-link">
        Технологии
      </a>
      <a href="#me" className="promo__navtab-menu-link">
        Студент
      </a>
    </nav>
  );
}

export default NavTab;
