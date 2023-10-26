import React from "react";
import image from "../../images/myAvatar.jpg";
import "./AboutMe.css";

function AboutMe() {
  return (
    <section className="about-me">
      <h2 className="about-me__title">Студент</h2>
      <div className="about-me__container">
        <div className="about-me__description-block">
          <h3 className="about-me__name">Елена</h3>
          <h4 className="about-me__job">Фронтенд-разработчик, 25 года</h4>
          <p className="about-me__description">
            Мне 32. Живу и жила в Новосибирске. Получила высшее образование
            архитектора в НГАСУ (Сибстрин). Увлекаюсь живописью и диджитал
            иллюстрацией. В свободное время изготавливаю предметы декора из
            бетона. В декабре прошлого года первый раз начала кодить. Планирую
            работать в АйТи направлении.
          </p>
          <a
            className="about-me__github"
            href="https://github.com/lenuser"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
        </div>
        <img src={image} alt="Мое фото" className="about-me__image" />
      </div>
    </section>
  );
}

export default AboutMe;
