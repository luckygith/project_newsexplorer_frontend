import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';

import Header from '../Header/Header';
import Main from '../Main/Main';
import Profile from '../Profile/Profile';
import SearchForm from '../SearchForm/SearchForm';
import About from '../About/About';
import Footer from '../Footer/Footer';
import ModalwithForm from '../ModalWithForm/ModalWithForm';
import LoginModal from '../LoginModal/LoginModal';
import RegisterModal from '../RegisterModal/RegisterModal';
import RegistrationConfirmedModal from '../RegistrationConfirmedModal/RegistrationConfirmedModal';
import NewsCard from '../NewsCard/NewsCard';
import Navigation from '../Navigation/Navigation';
import { fetchArticles, getUserInfo } from '../../utils/api';
import { authorize, register } from '../../utils/auth';
import { setToken, getToken } from '../../utils/token';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';


function App() {

  const [card, setCard] = useState({
    title: "",
    urlToImage: "",
    publishedAt: "",
    description: "",
    source: "",
  });
 
const [activeModal, setActiveModal] = useState("");
const [currentUser, setCurrentUser] = useState({});
const [isLoggedIn, setIsLoggedIn] = useState(false)

const [newsCards, setNewsCards] = useState([]);
 const [searchQuery, setSearchQuery] = useState("");
 const [preloader, setPreloader] = useState(false);

// HANDLERS

const handleSearchForm = (query) => {
  if (!query) {
    console.log("Please type to search articles")
    setNewsCards([]);
    return;
  } 
    setSearchQuery(query);
    setPreloader(true);
    fetchArticles(query)
      .then((res) => {
        if (res.articles.length === 0) {
          throw new Error("Nothing Found");
        }
      setNewsCards(res.articles);
      })
      .catch((error) => {
        console.error("Sorry, something went wrong during the request. Please try again later.")
      })
      .finally(()=> {
        setPreloader(false);
      })
};


const handleLogin = ({email, password}) => {
  console.log("setup LOGIN");
  setPreloader(true);
  if (!email || !password) {
    console.log("Login incomplete");
    return;
  }
  const token = getToken();
  authorize(email, password, token)
  .then((data) => {
    if (data.token) {
      setToken(data.token);
      setCurrentUser(email, )
      console.log(data);
      return getUserInfo(data.token);
    }
    throw new Error("token not received");
  })
  .then(({ username, email, _id }) => {
    setCurrentUser({ username, email, _id });
    setIsLoggedIn(true);
    console.log(currentUser.username);
    console.log("User data fetched:", { username, email, _id });
    handleCloseModal();
  })
  .catch((error) => {
    console.error("Error, login request unsuccessful", error);
  })
  .finally(() => setPreloader(false));
};


const handleRegistration = ({username, email, password}) => {
  setPreloader(true);
if (!email || !password || !username) {
  return;
}
  register(username, email, password)
  .then((data) => {
    if (data) {
      console.log(data);
      console.log(email);
      setIsLoggedIn(true);
    }
  })
  .then(() => {
    handleRegistrationConfirmedClick();
    console.log("registration api on the way!");
  })
  .catch((error) => {
    console.error("Error, registration request unsuccessful", error);
  })
  .finally(() => setPreloader(false));
}

// USE EFFECTS

useEffect(() => {
  const jwt = getToken();

  if (jwt) {
   
      getUserInfo(jwt)
      .then(({ name, email, _id }) => {
        setIsLoggedIn(true);
        setCurrentUser({ name, email, _id });
      })
      .catch(console.error);
  }
}, []);


// MODAL FUNCTIONS

const handleSaveCard = () => {
  console.log("save card function to set up")
}
const handleRegistrationConfirmedClick = () => {
  setActiveModal("registration-confirmed");}

const handleMenuIcon = () => {
  setActiveModal("navigation-menu");
}

const handleRegisterClick = () => {
  handleCloseModal(); 
  setActiveModal("registration");
}

const handleCloseModal = () => {
  setActiveModal("");
};

const handleLoginClick = () => {
  handleCloseModal(); 
  setActiveModal("login"); 
};

 return (
  <CurrentUserContext.Provider value={currentUser}>
  <div className="page">
    <div className="page__content">
   
        <Header handleLoginClick={handleLoginClick} handleMenuIcon={handleMenuIcon}
        />

      <Routes>
        <Route 
        path="/"
        element={
          <>
          <SearchForm handleSearchForm={handleSearchForm}/>
          <Main handleLoginClick={handleLoginClick} 
                handleSaveCard={handleSaveCard}
                newsCards={newsCards}
                preloader={preloader}
                isLoggedIn={isLoggedIn}
             />
          <About />
        </>
        }
        />
          <Route 
        path="/saved-news"
        element={
          
          <Profile 
          handleSaveCard={handleSaveCard} 
          handleMenuIcon={handleMenuIcon} 
          handleLoginClick={handleLoginClick}
          isLoggedIn={isLoggedIn}/>
        }
        />
        </Routes> 
        <Footer />
    </div>


{activeModal === "login" && (
  <LoginModal 
  isOpen={activeModal === "login"}
  handleCloseModal={handleCloseModal}
  handleLogin={handleLogin}
  handleRegistration={handleRegistration}
  handleRegisterClick={handleRegisterClick}
/>
)}

{activeModal === "registration" && (
  <RegisterModal 
  isOpen={activeModal === "registration"}
  handleCloseModal={handleCloseModal}
  handleRegistration={handleRegistration}
handleLoginClick={handleLoginClick}
  />
)}

{activeModal === "registration-confirmed" && (
  <RegistrationConfirmedModal 
  isOpen={activeModal === "registration-confirmed"}
  handleLoginClick={handleLoginClick}
  handleCloseModal={handleCloseModal}
   />
)}

{activeModal === "navigation-menu" && (
  <Navigation   

  isOpen={activeModal === "navigation-menu"}
  handleLoginClick={handleLoginClick}
  handleCloseModal={handleCloseModal}
  />
)}
  </div>
  </CurrentUserContext.Provider>
  );
}

export default App;
