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

//Экспорт констант в другие части приложения
export {
  MAX_SHORT_MOVIE_DURATION,
  NUMBER_MOVIES_DESKTOP,
  NUMBER_MOVIES_TABLET,
  NUMBER_MOVIES_MOBIL,
  PATTERN_REGEX_EMAIL,
}
