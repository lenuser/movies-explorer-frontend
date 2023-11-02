import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navigation.css';

function Navigation({ handleCloseMobileMenu }) {
  const activeColorLink = ({ isActive }) =>
    isActive ? 'header__navigation-link_active' : 'header__navigation-link';

  return (
    <div className='header__navigation'>
      <div className='header__navigation-container'></div>
      <div className='header__navigation-menu'>
        <button className='header__navigation-close-button' onClick={handleCloseMobileMenu}></button>
        <nav className='header__navigation-links'>
          <NavLink to='/' className={activeColorLink}>
            Главная
          </NavLink>
          <NavLink to='/movies' onClick={handleCloseMobileMenu} className={activeColorLink}>
            Фильмы
          </NavLink>
          <NavLink to='/saved-movies' onClick={handleCloseMobileMenu} className={activeColorLink}>
            Сохранённые фильмы
          </NavLink>
        </nav>

        <Link to='/profile' className='header__navigation-account-button' onClick={handleCloseMobileMenu}>
          Аккаунт
        </Link>
      </div>
    </div>
  );
}

export default Navigation;
