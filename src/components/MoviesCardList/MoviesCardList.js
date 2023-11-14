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
  NUMBER_MOVIES_DESKTOP_DISPLAY,
  NUMBER_MOVIES_TABLET_DISPLAY,
  NUMBER_MOVIE_XL,
  NUMBER_MOVIE_L,
  NUMBER_MOVIE_M
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
    if (display > NUMBER_MOVIES_DESKTOP_DISPLAY) {
      setShownMovies(NUMBER_MOVIE_XL);
    } else if (display > NUMBER_MOVIES_TABLET_DISPLAY) {
      setShownMovies(NUMBER_MOVIE_L);
    } else {
      setShownMovies(NUMBER_MOVIE_M);
    }
  }

  // Эффект для обновления состояния выдачи карточек
  useEffect(() => {
    handleShowMoviePlazma();
  }, [cards]);

  // Количество отображаемых карточек, при клике на Ещё
  function handleShownMoviesButtonMore() {
    const display = window.innerWidth;
    if (display > NUMBER_MOVIES_DESKTOP_DISPLAY) {
      setShownMovies(shownMovies + NUMBER_MOVIES_DESKTOP);
    } else if (display > NUMBER_MOVIES_TABLET_DISPLAY) {
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
    let resizeWidthTimeout

    function handleResize() {
      clearTimeout(resizeWidthTimeout)
      resizeWidthTimeout = setTimeout(() => {
        handleShowMoviePlazma()
      }, 500)
    }
    // Вызов при монтировании компонента
    handleShowMoviePlazma()

    window.addEventListener("resize", handleResize)

    return () => {
      clearTimeout(resizeWidthTimeout)
      window.removeEventListener("resize", handleResize)
    }
  }, [])

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
