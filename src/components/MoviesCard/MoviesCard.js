import React from 'react';
import deleteButton from '../../images/icon-close.svg';
import img from '../../images/movie1.jpg';
import './MoviesCard.css';

const MoviesCard = () => {
  return (
    <>
      <li className='card'>
        <div className='card__wrapper'>
          <img
            className='card__image'
            alt='Тут в функциональности будет подтягиваться инд. alt'
            src={img}
          />

          <button type='button' className='card__like-button card__like-active'></button>

          <div className='card__title-block'>
            <h2 className='card__title'>33 слова о дизайне</h2>
            <span className='card__time'>1ч 20м</span>
          </div>
        </div>
      </li>

      <li className='card'>
        <div className='card__wrapper'>
          <img className='card__image' alt='фото карточек с фильмами' src={img} />

          <button className='card__like-delete' type='button'>
            <img className='card__delete-btn-img' src={deleteButton} alt='удалить' />
          </button>

          <div className='card__title-block'>
            <h2 className='card__title'>33 слова о дизайне</h2>
            <span className='card__time'>1ч 20м</span>
          </div>
        </div>
      </li>

      <li className='card'>
        <div className='card__wrapper'>
          <img className='card__image' alt='фото карточек с фильмами' src={img} />

          <button type='button' className='card__like-button card__like-active'></button>

          <div className='card__title-block'>
            <h2 className='card__title'>33 слова о дизайне</h2>
            <span className='card__time'>1ч 20м</span>
          </div>
        </div>
      </li>

      <li className='card'>
        <div className='card__wrapper'>
          <img
            className='card__image'
            alt='Тут в функциональности будет подтягиваться инд. alt'
            src={img}
          />

          <button type='button' className='card__like-button card__like-active'></button>

          <div className='card__title-block'>
            <h2 className='card__title'>33 слова о дизайне</h2>
            <span className='card__time'>1ч 20м</span>
          </div>
        </div>
      </li>

      <li className='card'>
        <div className='card__wrapper'>
          <img className='card__image' alt='фото карточек с фильмами' src={img} />

          <button className='card__like-delete' type='button'>
            <img className='card__delete-btn-img' src={deleteButton} alt='удалить' />
          </button>

          <div className='card__title-block'>
            <h2 className='card__title'>33 слова о дизайне</h2>
            <span className='card__time'>1ч 20м</span>
          </div>
        </div>
      </li>

      <li className='card'>
        <div className='card__wrapper'>
          <img className='card__image' alt='фото карточек с фильмами' src={img} />

          <button type='button' className='card__like-button card__like-active'></button>

          <div className='card__title-block'>
            <h2 className='card__title'>33 слова о дизайне</h2>
            <span className='card__time'>1ч 20м</span>
          </div>
        </div>
      </li>

      <li className='card'>
        <div className='card__wrapper'>
          <img
            className='card__image'
            alt='Тут в функциональности будет подтягиваться инд. alt'
            src={img}
          />

          <button type='button' className='card__like-button card__like-active'></button>

          <div className='card__title-block'>
            <h2 className='card__title'>33 слова о дизайне</h2>
            <span className='card__time'>1ч 20м</span>
          </div>
        </div>
      </li>
    </>
  );
};

export default MoviesCard;
