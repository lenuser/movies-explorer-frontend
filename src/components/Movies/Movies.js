import React, { useState, useEffect } from "react";
import Header from "../Header/Header";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import Footer from "../Footer/Footer";
import { filterMovies, filterDurationFilm } from "../../utils/filmHelpers";
import * as movies from "../../utils/MoviesApi";
import "./Movies.css";

function Movies({ loggedIn, savedMovies, handleLike, onDeleteCard }) {
  const [isLoading, setIsLoading] = useState(false);
  const [initialCardsMovies, setInitialCardsMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [isShortMovies, setisShortMovies] = useState(false);
  const [isReqError, setisReqError] = useState(false);
  const [isNotFound, setIsNotFound] = useState(false);

  // фильмы из локального хранилища
  useEffect(() => {
    if (localStorage.getItem("movies")) {
      const movies = JSON.parse(localStorage.getItem("movies"));
      setInitialCardsMovies(movies);
      if (localStorage.getItem("shortMovies") === "true") {
        setFilteredMovies(filterDurationFilm(movies));
      } else {
        setFilteredMovies(movies);
      }
    }
  }, []);

  useEffect(() => {
    if (localStorage.getItem("movieSearch")) {
      setIsNotFound(filteredMovies.length === 0);
    } else {
      setIsNotFound(false);
    }
  }, [filteredMovies]);

  // короткометражки
  useEffect(() => {
    setisShortMovies(localStorage.getItem("shortMovies") === "true");
  }, []);

  // фильтрация фильмов
  function handleFilterMovie(movies, query, short) {
    const moviesFilmList = filterMovies(movies, query, short);
    setInitialCardsMovies(moviesFilmList);
    setFilteredMovies(
      short ? filterDurationFilm(moviesFilmList) : moviesFilmList
    );
    localStorage.setItem("movies", JSON.stringify(moviesFilmList));
    localStorage.setItem("allMovies", JSON.stringify(movies));
  }

  // поиск фильмов
  function setSearchQueryMovie(query) {
    localStorage.setItem("movieSearch", query);
    localStorage.setItem("shortMovies", isShortMovies);
    if (localStorage.getItem("allMovies")) {
      const movies = JSON.parse(localStorage.getItem("allMovies"));
      handleFilterMovie(movies, query, isShortMovies);
    } else {
      setIsLoading(true);
      movies
        .getMovies()
        .then((cardsSavedFilms) => {
          handleFilterMovie(cardsSavedFilms, query, isShortMovies);
          setisReqError(false);
        })
        .catch((error) => {
          setisReqError(true);
          console.log(error);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  }

  function handleToggleShortMovie() {
    setisShortMovies(!isShortMovies);
    if (!isShortMovies) {
      const filteredCardsMovies = filterDurationFilm(initialCardsMovies);
      setFilteredMovies(filteredCardsMovies);
    } else {
      setFilteredMovies(initialCardsMovies);
    }
    localStorage.setItem("shortMovies", !isShortMovies);
  }

  return (
    <section className="movies">
      <Header loggedIn={loggedIn} />
      <SearchForm
        isShortMovies={isShortMovies}
        onFilterMovies={handleToggleShortMovie}
        setSearchQueryMovie={setSearchQueryMovie}
      />
      <MoviesCardList
        cards={filteredMovies}
        isLoading={isLoading}
        handleLike={handleLike}
        onDeleteCard={onDeleteCard}
        savedMovies={savedMovies}
        isSavedFilms={false}
        isReqError={isReqError}
        isNotFound={isNotFound}
      />
      <Footer />
    </section>
  );
}

export default Movies;
