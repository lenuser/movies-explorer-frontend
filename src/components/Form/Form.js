import React from 'react';
import { Link } from 'react-router-dom';
import './Form.css';
import logo from '../../images/header-logo.svg';

function Form({
  title,
  buttonText,
  question,
  linkText,
  children,
  link,
  onSubmit,
  isDisabled,
  isLoading
}) {
  return (
    <main className='form'>
      <Link to='/' className='form__logo'>
        <img src={logo} alt='логотип' />
      </Link>
      <h1 className='form__title'>{title}</h1>
      <form className='form__form' id='form' onSubmit={onSubmit} noValidate>
        {children}
        <button
          type='submit'
          disabled={isDisabled ? true : false}
          className={
            isDisabled || isLoading
              ? 'form__button-save form__button-save_inactive'
              : 'form__button-save'
          }
        >
          {buttonText}
        </button>
      </form>
      <p className='form__text'>
        {question}
        <Link to={link} className='form__link'>
          {linkText}
        </Link>
      </p>
    </main>
  );
}

export default Form;
