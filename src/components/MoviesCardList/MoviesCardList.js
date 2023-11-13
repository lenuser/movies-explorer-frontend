import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";
import SearchError from "../SearchError/SearchError";
import Preloader from "../Preloader/Preloader";
import {
  NUMBER_MOVIES_DESKTOP,
  NUMBER_MOVIES_TABLET,
  NUMBER_MOVIES_MOBIL,
} from "../../utils/constants";

function MoviesCardList({
  cards,
  isLoading,
  isSavedFilms,
  savedMovies,
  isReqError,
  isNotFound,
  handleLike,
  onDeleteCard,
}) {
  const [shownMovies, setShownMovies] = useState(0);

  // Количество карточек с фильмами
  function handleShowMoviePlazma() {
    const display = window.innerWidth;
    if (display > 1180) {
      setShownMovies(12);
    } else if (display > 767) {
      setShownMovies(8);
    } else {
      setShownMovies(5);
    }
  }

  // Эффект для обновления состояния выдачи карточек
  useEffect(() => {
    handleShowMoviePlazma();
  }, [cards]);

  // Количество отображаемых карточек, при клике на Ещё
  function handleShownMoviesButtonMore() {
    const display = window.innerWidth;
    if (display > 1180) {
      setShownMovies(shownMovies + NUMBER_MOVIES_DESKTOP);
    } else if (display > 767) {
      setShownMovies(shownMovies + NUMBER_MOVIES_TABLET);
    } else {
      setShownMovies(shownMovies + NUMBER_MOVIES_MOBIL);
    }
  }

  // Сохраненная карточка фильма из массива
  function handleSaveMovieArrayList(savedMovies, card) {
    return savedMovies.find((savedMovie) => savedMovie.movieId === card.id);
  }

  useEffect(() => {
    setTimeout(() => {
      window.addEventListener("resize", handleShowMoviePlazma);
    }, 500);
  });

  const { pathname } = useLocation();

  return (
    <section className="cards">
      {isLoading && <Preloader />}
      {isNotFound && !isLoading && (
        <SearchError errorText={"Ничего не найдено"} />
      )}
      {isReqError && !isLoading && (
        <SearchError
          errorText={
            "Во время поискового запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз"
          }
        />
      )}
      {!isLoading && !isReqError && !isNotFound && (
        <>
          {pathname === "/saved-movies" ? (
            <>
              <ul className="cards__list">
                {cards.map((card) => (
                  <MoviesCard
                    key={isSavedFilms ? card._id : card.id}
                    card={card}
                    cards={cards}
                    handleLike={handleLike}
                    onDeleteCard={onDeleteCard}
                    saved={handleSaveMovieArrayList(savedMovies, card)}
                    savedMovies={savedMovies}
                    isSavedFilms={isSavedFilms}
                  />
                ))}
              </ul>
            </>
          ) : (
            <>
              <ul className="cards__list">
                {cards.slice(0, shownMovies).map((card) => (
                  <MoviesCard
                    key={isSavedFilms ? card._id : card.id}
                    saved={handleSaveMovieArrayList(savedMovies, card)}
                    cards={cards}
                    card={card}
                    isSavedFilms={isSavedFilms}
                    handleLike={handleLike}
                    onDeleteCard={onDeleteCard}
                    savedMovies={savedMovies}
                  />
                ))}
              </ul>
              <div className="cards__button-container">
                {cards.length > shownMovies ? (
                  <button
                    className="cards__button"
                    onClick={handleShownMoviesButtonMore}
                  >
                    Ещё
                  </button>
                ) : (
                  ""
                )}
              </div>
            </>
          )}
        </>
      )}
    </section>
  );
}

export default MoviesCardList;
