import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className='footer'>
      <div className='footer__container'>
        <h3 className='footer__description'>Учебный проект Яндекс.Практикум х BeatFilm.</h3>
        <div className='footer__info'>
          <p className='footer__copyright'> © {new Date().getFullYear()}. Елена Лисина</p>
          <ul className='footer__elements'>
            <li className='footer__element'>
              <a
                className='footer__element-link link'
                target='_blank'
                href='https://practicum.yandex.ru'
                rel='noreferrer'
              >
                Яндекс.Практикум
              </a>
            </li>
            <li className='footer__element'>
              <a
                className='footer__element-link link'
                target='_blank'
                href='https://github.com'
                rel='noreferrer'
              >
                Github
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
