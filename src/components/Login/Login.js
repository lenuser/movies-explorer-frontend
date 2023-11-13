import React from "react";
import "../Form/Form.css";
import Form from "../Form/Form";
import { PATTERN_REGEX_EMAIL } from "../../utils/constants";
import useForm from "../../hooks/useForm";

function Login({ onAuthorization, isLoading }) {
  const { enteredValues, errors, handleChangeInput, isFormValid } = useForm();

  function handleUpdateInfo(event) {
    event.preventDefault();
    onAuthorization({
      email: enteredValues.email,
      password: enteredValues.password,
    });
  }

  return (
    <Form
      title="Рады видеть!"
      buttonText="Войти"
      question="Еще не зарегистрированы?"
      linkText=" Регистрация"
      link="/signup"
      isDisablBtn={!isFormValid}
      isLoading={isLoading}
      onSubmit={handleUpdateInfo}
      noValidate
    >
      <label className="form__label">
        E-mail
        <input
          name="email"
          className="form__input"
          id="email-input"
          type="email"
          required
          placeholder="почта"
          pattern={PATTERN_REGEX_EMAIL}
          onChange={handleChangeInput}
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
          minLength="8"
          maxLength="14"
          required
          placeholder="пароль"
          onChange={handleChangeInput}
          value={enteredValues.password || ""}
        />
        <span className="form__input-text">{errors.password}</span>
      </label>
    </Form>
  );
}

export default Login;
