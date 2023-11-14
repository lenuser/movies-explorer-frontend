import React, { useState, useEffect } from "react";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { filterMovies, filterDurationFilm } from "../../utils/filmHelpers";
import "./SavedMovies.css";

function SavedMovies({ loggedIn, onDeleteCard, savedMovies }) {
  const [filteredMovies, setFilteredMovies] = useState(savedMovies);
  const [isShortMovies, setisShortMovies] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isNotFound, setIsNotFound] = useState(false);

  useEffect(() => {
    const moviesFilmList = filterMovies(savedMovies, searchQuery);
    setFilteredMovies(
      isShortMovies ? filterDurationFilm(moviesFilmList) : moviesFilmList
    );
  }, [savedMovies, isShortMovies, searchQuery]);

  useEffect(() => {
    if (filteredMovies.length === 0) {
      setIsNotFound(true);
    } else {
      setIsNotFound(false);
    }
  }, [filteredMovies]);

  function setSearchQueryMovie(query) {
    setSearchQuery(query);
  }

  function handleToggleShortMovie() {
    setisShortMovies(!isShortMovies);
  }

  return (
    <>
      <section className="saved-movies">
        <Header loggedIn={loggedIn} />
        <SearchForm
          setSearchQueryMovie={setSearchQueryMovie}
          onFilterMovies={handleToggleShortMovie}
        />
        <MoviesCardList
          cards={filteredMovies}
          savedMovies={savedMovies}
          onDeleteCard={onDeleteCard}
          isSavedFilms={true}
          isNotFound={isNotFound}
        />
        <Footer />
      </section>
    </>
  );
}

export default SavedMovies;
