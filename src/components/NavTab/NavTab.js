import React from 'react';
import './NavTab.css';

function NavTab() {
  return (
    <nav className='promo-menu'>
      <ul className='promo-menu__elements'>
        <li className='promo-menu__element'>
          <a href='#project' className='promo-menu__link'>
            О проекте
          </a>
        </li>
        <li className='promo-menu__element'>
          <a href='#techs' className='promo-menu__link'>
            Технологии
          </a>
        </li>
        <li className='promo-menu__element'>
          <a href='#about-me' className='promo-menu__link'>
            Студент
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default NavTab;
