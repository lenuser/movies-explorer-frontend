import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './Profile.css';
import Header from '../Header/Header';

function Profile() {
  return (
    <>
      <Header />
      <main className='profile'>
        <h1 className='profile__welcome'>Привет, Елена!</h1>
        <form id='form' className='profile__form' noValidate>
          <label className='profile__label'>
            Имя
            <input
              name='name'
              className='profile__input'
              id='name-input'
              type='text'
              minLength='2'
              maxLength='40'
              required
              placeholder='имя'
            />
            <span className='profile__form-text'></span>
          </label>

          <div className='profile__border'></div>
          <label className='profile__label'>
            E-mail
            <input
              name='email'
              className='profile__input'
              id='email-input'
              type='email'
              required
              placeholder='почта'
            />
            <span className='profile__form-text'></span>
          </label>
          <button type='submit' className='profile__button-save profile__button-save_inactive'>
            Редактировать
          </button>
          <Link Link to='/' className='profile__link'>
            Выйти из аккаунта
          </Link>
        </form>
      </main>
    </>
  );
}

export default Profile;
