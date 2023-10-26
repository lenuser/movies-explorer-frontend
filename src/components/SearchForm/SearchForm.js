import React, { useState, useEffect } from "react";
import "./SearchForm.css";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

function SearchForm() {
  return (
    <section className="search">
      <form className="search__form" id="form">
        <input
          type="text"
          name="query"
          id="search-input"
          placeholder="Фильм"
          className="search__form-input"
          required
        />
        <button type="submit" className="search__form-button"></button>
      </form>

      <FilterCheckbox />

      <span className="search__form-error">Нужно ввести ключевое слово</span>

      <div className="search__border-bottom"></div>
    </section>
  );
}

export default SearchForm;
