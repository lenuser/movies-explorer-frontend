import React from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import './Header.css';
import headerLogo from '../../images/header-logo.svg';
import mobileMenu from '../../images/icon-menu.svg';
import Navigation from '../Navigation/Navigation';

function Header() {
  const [isClicked, setIsClicked] = React.useState(false);
  const activeColorLink = ({ isActive }) => (isActive ? 'header__button-active' : 'header__button');

  function handleOpenMobileMenu() {
    setIsClicked(true);
  }

  function handleCloseMobileMenu() {
    setIsClicked(false);
  }

  const location = useLocation();

  // Функция для проверки, нужно ли отображать шапку для фильмов:
  const shouldShowSecondHeader = () => {
    const { pathname } = location;
    return pathname === '/movies' || pathname === '/saved-movies' || pathname === '/profile';
  };

  //Функция для проверки, нужно ли отображатьосновную шапку:
  const shouldShowFirstHeader = () => {
    const { pathname } = location;
    return pathname === '/';
  };

  return (
    <>
      {shouldShowFirstHeader() && (
        <header className='header' id='header'>
          <Link to='/' className='header__logo'>
            <img src={headerLogo} alt='Логотип' />
          </Link>
          <nav className='header__links-guest'>
            <Link to='/signup' className='header__button'>
              Регистрация
            </Link>
            <Link to='/signin' className='header__button header__button-green'>
              Войти
            </Link>
          </nav>
        </header>
      )}
      {shouldShowSecondHeader() && (
        <header className='header header_dark'>
          <Link to='/' className='header__logo'>
            <img src={headerLogo} alt='Логотип' />
          </Link>
          <div className='header__links-users'>
            <div className='header__links-films'>
              <NavLink to='/movies' className={activeColorLink}>
                Фильмы
              </NavLink>

              <NavLink to='/saved-movies' className={activeColorLink}>
                Сохранённые фильмы
              </NavLink>
            </div>
            <nav className='header__links-profile'>
              <Link to='/profile' className='header__account-btn'>
                Аккаунт
              </Link>
              <button type='button' className='header__mobile-btn' onClick={handleOpenMobileMenu}>
                <img src={mobileMenu} alt='Кнопка мобильного меню' />
              </button>
            </nav>
          </div>

          {isClicked ? <Navigation handleCloseMobileMenu={handleCloseMobileMenu} /> : ''}
        </header>
      )}
    </>
  );
}

export default Header;
