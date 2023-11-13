import React, { useState, useEffect } from "react";
import Header from "../Header/Header";
import Main from "../Main/Main";
import {
  Route,
  Routes,
  useNavigate,
  useLocation,
  Navigate,
} from "react-router-dom";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import Footer from "../Footer/Footer";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import Register from "../Register/Register";
import Login from "../Login/Login";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import PageNotFound from "../PageNotFound/PageNotFound";
import "./App.css";
import * as api from "../../utils/MainApi";
import Profile from "../Profile/Profile";
import InfoTooltip from "../InfoTooltip/InfoTooltip";
import InfoTooltipEditProfile from "../InfoTooltipEditProfile/InfoTooltipEditProfile";

function App() {
  const [currentUser, setCurrentUser] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [savedMovies, setSavedMovies] = useState([]);
  const [isInfoToolTipPopupOpen, setInfoToolTipPopupOpen] = useState(false);
  const [
    isInfoTooltipEditProfilePopupOpen,
    setInfoTooltipEditProfilePopupOpen,
  ] = useState(false);
  const [isUpdate, setIsUpdate] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const path = location.pathname;

  useEffect(() => {
    const jwt = localStorage.getItem("jwt");
    if (jwt) {
      api
        .getContent(jwt)
        .then((res) => {
          if (res) {
            setIsLoggedIn(true);
            localStorage.removeItem("allMovies");
          }
          navigate(path);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, []);

  useEffect(() => {
    if (isLoggedIn) {
      api
        .getUserInfo()
        .then((profileInfo) => {
          setCurrentUser(profileInfo);
        })
        .catch((error) => {
          console.log(error);
        });
      api
        .getMovies()
        .then((cardsSavedFilms) => {
          setSavedMovies(cardsSavedFilms.reverse());
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [isLoggedIn]);

  // Регистр
  function handleRegisterUser({ name, email, password }) {
    api
      .register(name, email, password)
      .then(() => {
        handleLoginUser({ email, password });
        setInfoToolTipPopupOpen(true);
        setIsSuccess(true);
      })
      .catch((error) => {
        setInfoToolTipPopupOpen(true);
        setIsSuccess(false);
        console.log(error);
      });
  }

  // Логин
  function handleLoginUser({ email, password }) {
    setIsLoading(true);
    api
      .authorize(email, password)
      .then((res) => {
        if (res) {
          setIsSuccess(true);
          setInfoToolTipPopupOpen(true);
          localStorage.setItem("jwt", res.token);
          navigate("/movies", { replace: true });
          setIsLoggedIn(true);
        }
      })
      .catch((error) => {
        setInfoToolTipPopupOpen(true);
        setIsSuccess(false);
        console.log(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

 

  // лайк
  function handleLike(card) {
    api
      .postCard(card)
      .then((newMovieFilm) => {
        setSavedMovies([newMovieFilm, ...savedMovies]);
      })
      .catch((error) => {
        setIsSuccess(false);
        console.log(error);
        handleAuthorizedError(error);
      });
  }

  // cнять лайк
  function handleDeleteLike(card) {
    api
      .deleteCard(card._id)
      .then(() => {
        setSavedMovies((state) =>
          state.filter((item) => item._id !== card._id)
        );
      })
      .catch((error) => {
        setIsSuccess(false);
        console.log(error);
        handleAuthorizedError(error);
      });
  }

  // Редактирование профиля
  function handleEditProfileInfo(userInfo) {
    setIsLoading(true);
    api
      .setUserInfo(userInfo)
      .then((data) => {
        setInfoTooltipEditProfilePopupOpen(true);
        setIsUpdate(true);
        setCurrentUser(data);
      })
      .catch((error) => {
        setInfoTooltipEditProfilePopupOpen(true);
        setIsUpdate(false);
        console.log(error);
        handleAuthorizedError(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  //Обработка ошибки
  function handleAuthorizedError(error) {
    if (error === "Error: 401") {
      handleLogoutMovie();
    }
  }

  function closeAllPopups() {
    setInfoToolTipPopupOpen(false);
    setInfoTooltipEditProfilePopupOpen(false);
  }

  const isOpen = isInfoToolTipPopupOpen || isInfoTooltipEditProfilePopupOpen;

  useEffect(() => {
    function closeByEscape(evt) {
      if (evt.key === "Escape") {
        closeAllPopups();
      }
    }
    if (isOpen) {
      document.addEventListener("keydown", closeByEscape);
      return () => {
        document.removeEventListener("keydown", closeByEscape);
      };
    }
  }, [isOpen]);

  // Закрываю попапы по оверлею
  function closeByOverlay(event) {
    if (event.target === event.currentTarget) {
      closeAllPopups();
    }
  }

  // При выходе из приложения чищу локальное хранилище
  const handleLogoutMovie = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("jwt");
    localStorage.removeItem("movies");
    localStorage.removeItem("movieSearch");
    localStorage.removeItem("shortMovies");
    localStorage.removeItem("allMovies");
    localStorage.clear();
    navigate("/");
  };

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <div className="page__wrapper">
          <Routes>
            <Route
              path={"/"}
              element={
                <>
                  <Header loggedIn={isLoggedIn} />
                  <Main />
                  <Footer />
                </>
              }
            />
            <Route
              path={"/signin"}
              element={
                isLoggedIn ? (
                  <Navigate to="/movies" replace />
                ) : (
                  <Login isLoading={isLoading} onAuthorization={handleLoginUser} />
                )
              }
            />
            <Route
              path={"/signup"}
              element={
                isLoggedIn ? (
                  <Navigate to="/movies" replace />
                ) : (
                  <Register
                    isLoading={isLoading}
                    handleRegisterUser={handleRegisterUser}
                  />
                )
              }
            />
            <Route path={"*"} element={<PageNotFound />} />
            <Route
              path={"/movies"}
              element={
                <ProtectedRoute
                  path="/movies"
                  loggedIn={isLoggedIn}
                  component={Movies}
                  handleLike={handleLike}
                  onDeleteCard={handleDeleteLike}
                  savedMovies={savedMovies}
                />
              }
            />
            <Route
              path={"/saved-movies"}
              element={
                <ProtectedRoute
                  path="/saved-movies"
                  loggedIn={isLoggedIn}
                  component={SavedMovies}
                  savedMovies={savedMovies}
                  onDeleteCard={handleDeleteLike}
                />
              }
            />
            <Route
              path={"/profile"}
              element={
                <ProtectedRoute
                  path="/profile"
                  loggedIn={isLoggedIn}
                  component={Profile}
                  isLoading={isLoading}
                  onUpdateUser={handleEditProfileInfo}
                  signOut={handleLogoutMovie}
                />
              }
            />
          </Routes>
          <InfoTooltip
            isSuccess={isSuccess}
            isOpen={isInfoToolTipPopupOpen}
            onClose={closeAllPopups}
            onCloseOverlay={closeByOverlay}
          />
          <InfoTooltipEditProfile
            isUpdate={isUpdate}
            isOpen={isInfoTooltipEditProfilePopupOpen}
            onClose={closeAllPopups}
            onCloseOverlay={closeByOverlay}
          />
        </div>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
