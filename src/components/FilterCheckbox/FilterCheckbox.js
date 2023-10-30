import React from 'react';
import './FilterCheckbox.css';

function FilterCheckbox({ onfilteredFilmMovies, isShortFilm }) {
  return (
    <div className='filter-checkbox'>
      <div className='filter-checkbox__container'>
        <label className='filter-checkbox__label'>
          <input
            className='filter-checkbox__input'
            type='checkbox'
            id='short-movies'
            onChange={onfilteredFilmMovies}
            checked={isShortFilm}
          />
          <span className='filter-checkbox__slider filter-checkbox__round'></span>
        </label>
        <span className='filter-checkbox__text'>Короткометражки</span>
      </div>
    </div>
  );
}

export default FilterCheckbox;
