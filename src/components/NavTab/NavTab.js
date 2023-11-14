import React from 'react';
import '../Promo/Promo.css';

function NavTab() {
  return (
    <nav className='promo__menu'>
      <ul className='promo__elements'>
        <li className='promo__element'>
          <a href='#project' className='promo__link'>
            О проекте
          </a>
        </li>
        <li className='promo__element'>
          <a href='#techs' className='promo__link'>
            Технологии
          </a>
        </li>
        <li className='promo__element'>
          <a href='#about-me' className='promo__link'>
            Студент
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default NavTab;
