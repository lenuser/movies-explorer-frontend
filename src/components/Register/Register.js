import React from "react";
import "../Form/Form.css";
import Form from "../Form/Form";
import useForm from "../../hooks/useForm";
import { PATTERN_REGEX_EMAIL } from "../../utils/constants";

function Register({ isLoading, handleRegisterUser }) {
  const { enteredValues, errors, handleChangeInput, isFormValid } = useForm();

  function handleUpdateInfo(event) {
    event.preventDefault();
    handleRegisterUser({
      name: enteredValues.name,
      email: enteredValues.email,
      password: enteredValues.password,
    });
  }

  return (
    <Form
      title="Добро пожаловать!"
      buttonText="Зарегистрироваться"
      question="Уже зарегистрированы?"
      linkText=" Войти"
      link="/signin"
      onSubmit={handleUpdateInfo}
      isDisablBtn={!isFormValid}
      isLoading={isLoading}
    >
      <label className="form__label">
        Имя
        <input
          name="name"
          className="form__input"
          id="name-input"
          type="text"
          minLength="2"
          maxLength="40"
          required
          placeholder="имя"
          onChange={handleChangeInput}
          value={enteredValues.name || ""}
        />
        <span className="form__input-text">{errors.name}</span>
      </label>
      <label className="form__label">
        E-mail
        <input
          name="email"
          className="form__input"
          id="email-input"
          type="email"
          required
          placeholder="почта"
          onChange={handleChangeInput}
          pattern={PATTERN_REGEX_EMAIL}
          value={enteredValues.email || ""}
        />
        <span className="form__input-text">{errors.email}</span>
      </label>
      <label className="form__label">
        Пароль
        <input
          name="password"
          className="form__input"
          id="password-input"
          type="password"
          required
          minLength="8"
          maxLength="14"
          placeholder="пароль"
          onChange={handleChangeInput}
          value={enteredValues.password || ""}
        />
        <span className="form__input-text">{errors.password}</span>
      </label>
    </Form>
  );
}

export default Register;
