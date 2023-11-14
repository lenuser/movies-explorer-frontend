// Переменная определяет значение, которое используется
// в фильтре длительности фильмов по времени
const MAX_SHORT_MOVIE_DURATION = 40

// Константы для отображения фильмов на странице,
// по клику на кнопку 'еще', на различных разрешениях экрана
const NUMBER_MOVIES_DESKTOP = 3
const NUMBER_MOVIES_TABLET = 2
const NUMBER_MOVIES_MOBIL = 2

// Регулярное выражение для проверки email
const PATTERN_REGEX_EMAIL = "[a-zA-Z0-9_.]+@[a-zA-Z0-9_]+\\.[a-z]{2,}"

// Константы отображения размера экрана
const NUMBER_MOVIES_DESKTOP_DISPLAY = 1180
const NUMBER_MOVIES_TABLET_DISPLAY = 767

// Константы отображаемых фильмов
const NUMBER_MOVIE_XL = 12
const NUMBER_MOVIE_L = 8
const NUMBER_MOVIE_M = 5



//Экспорт констант в другие части приложения
export {
  MAX_SHORT_MOVIE_DURATION,
  NUMBER_MOVIES_DESKTOP,
  NUMBER_MOVIES_TABLET,
  NUMBER_MOVIES_MOBIL,
  PATTERN_REGEX_EMAIL,
  NUMBER_MOVIES_DESKTOP_DISPLAY,
  NUMBER_MOVIES_TABLET_DISPLAY,
  NUMBER_MOVIE_XL,
  NUMBER_MOVIE_L,
  NUMBER_MOVIE_M
}
