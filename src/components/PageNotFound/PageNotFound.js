import React from "react";
import { useNavigate } from "react-router-dom";

import "./PageNotFound.css";

function PageNotFound() {
  const pathNav = useNavigate()

  function navigatePath() {
    pathNav(-3)
  }

  return (
    <main className="not-found">
      <span className="not-found__title">404</span>
      <p className="not-found__subtitle">Страница не найдена</p>
      <button className="button button_type_to-main" onClick={navigatePath}>
        Назад
      </button>
    </main>
  );
}

export default PageNotFound;
