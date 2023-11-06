import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";
import SearchError from "../SearchError/SearchError";
import Preloader from "../Preloader/Preloader";

function MoviesCardList() {
  return (
    <section className="cards">
      <ul className="cards__list">
        {" "}
        <MoviesCard />
      </ul>
      <div className="cards__button-container">
        <button className="cards__button">Ещё</button>
      </div>
    </section>
  );
}

export default MoviesCardList;
