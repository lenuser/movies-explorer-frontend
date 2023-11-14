import React, { useState, useEffect } from "react";
import "./SearchForm.css";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import { useLocation } from "react-router-dom";

function SearchForm({ setSearchQueryMovie, onFilterMovies, isShortMovies }) {
  const location = useLocation();
  const [query, setQuery] = useState("");
  const [isQueryError, setIsQueryError] = useState(false);

  function handleUpdateInfo(event) {
    event.preventDefault();
    if (query.trim().length === 0) {
      setIsQueryError(true);
    } else {
      setIsQueryError(false);
      setSearchQueryMovie(query);
    }
  }

  useEffect(() => {
    if (
      location.pathname === "/movies" &&
      localStorage.getItem("movieSearch")
    ) {
      const localQuery = localStorage.getItem("movieSearch");
      setQuery(localQuery);
    }
  }, [location]);

  function handleQueryInputChange(event) {
    setQuery(event.target.value);
  }

  return (
    <section className="search" aria-label="Поиск фильмов">
      <form className="search__form" id="form" onSubmit={handleUpdateInfo}>
        <div className="search__container">
          <input
            type="text"
            name="query"
            id="search-input"
            placeholder="Фильм"
            className="search__form-input"
            onChange={handleQueryInputChange}
            value={query || ""}
          />
          <button type="submit" className="search__form-button"></button>
        </div>

        <FilterCheckbox
          onFilterMovies={onFilterMovies}
          isShortMovies={isShortMovies}
        />
        {isQueryError && (
          <span className="search__form-error">
            Нужно ввести ключевое слово
          </span>
        )}
      </form>

      <div className="search__border-bottom"></div>
    </section>
  );
}

export default SearchForm;
